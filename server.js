const express = require("express");
const multer = require("multer");
const path = require("path");
const ejs = require("ejs");
const fs = require("fs");

/* Load Environment Settings from application "config.env" file */
require("dotenv").config({ path: path.join(__dirname, "config.env"), encoding: "utf-8" });

const app = express();
app.use(express.static(path.join(".", "public")));
app.use(express.urlencoded({ extended: true }));

/* Define template engines for app */
app.engine("html", ejs.renderFile);

/* Settings */
const filesDirectory = path.join(__dirname, "files");
app.disable("x-powered-by");
app.set("view engine", "html");
app.set("views", path.join(__dirname, "public", "templates"));

/* Application main code is below */
app.get("/", (req, res) => {
    res.render("main");
})

const fileDonwloadInstance = multer({ 
    storage: multer.diskStorage({
        destination(_req, _file, cb) {
            cb(null, filesDirectory)
        },
        filename(_req, file, cb) {
            const filesDirectoryCount = fs.readdirSync(filesDirectory, { withFileTypes: true });
            
            // Get file extension
            let fileExtension = "";
            if (file.originalname.match(/\./gi).length) {
                const setp1 = file.originalname.split(".")
                fileExtension = `.${setp1[setp1.length - 1]}`
            }

            // Set release file name
            cb(null, `uploaded-file-${filesDirectoryCount.length}${fileExtension}`)
        }
    }),
})

const uploadedFilesMulter = fileDonwloadInstance.array("file_input")
app.post("/file_upload", (req, res) => {
    // Upload files using multer for this purpose
    uploadedFilesMulter(req, res, err => {
        if (err) {
            res.send(`Something went wrong durning tries download uploaded file by you. ${err}`)
        }
        else res.send("Files have been saved in target device!!!")
    });
});


/* Listen application on specified port */
app.listen(process.env.APP_PORT || 45_000, err => {
    if (err) {
        console.error(err);
    }
    else console.log("Server wait for upload files!!!");
});