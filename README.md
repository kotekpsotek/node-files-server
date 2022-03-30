# **node-files-server**

## **What is this?**
This is a simple http server writted in **Node.js** using which you can upload your files from other device/devices to device where this server works. **On Default** http server works on <u>**port 45000**</u>

## **How it works?**
1. First you must turn on server on device to which you would like send files. For this aim download this ``repo`` and next launch program using command: ***node dev*** (for dev purposes -> after used that command server will be working in dev mode using for this aim [**npm nodemon package**](https://github.com/remy/nodemon)) or ***node release*** when ypu launch program as a *client mode* instead *developer mode*
2. Http Server on default works on <u>**port 45000**</u> so open your favourite browser ❤️ on your server or device connected with LAN network and next go to URL: **http://localhost:45000/** (on device where server works) or **http://DEVICE_IP_IN_LAN:45000/**
3. You should in this step see page with form which has got elements for send file. Use this elements for send file/files

## **How I can change settings?**
**Answer:** Each setting for this application is located in file [config.env](config.env). Go to this file and change settings which you would like change

## **Requirements:**
### **Enviromental:**
- node.js in verion **15** or heighter
### **Node.js Modules:**
- [express.js](https://github.com/expressjs/express)
- [ejs](https://github.com/mde/ejs)
- [dotenv](https://github.com/motdotla/dotenv)
- [multer](https://github.com/expressjs/multer)
- [nodemon](https://github.com/remy/nodemon)

# **License:**
This project is distrybuted under the terms of MIT license