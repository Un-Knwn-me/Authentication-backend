// const nodemailer = require('nodemailer');
// var express = require('express');
// const { request } = require('../app');
// var router = express.Router();

// const sendMail = ({email, firstName, lastName, token})=>{
//     try {
//         let mailTransport = nodemailer.createTransport({
//             service: 'gmail',
//             auth:{
//                 user: "usenode@gmail.com",
//                 pass: process.env.pass
//             }
//         })

        
//         let details = {
//             from: "usenode@gmail.com",
//             to: email,
//             subject: "Rest password",
//             text: `
//             <h4> Hello ${firstName} ${lastName},</h4>
//             <h2> Please click the below link to reset your password</h2>
//             <p><a href=${token}></a></p>
//             `
//         }
        
//         mailTransport.sendMail(details, (error, info)=>{
//             if(error){
//                 console.log(error)
//             }  else {
//                 console.log("Mail sent successfully", info)
//             }
//         })
                
//     } catch (error) {
//     console.log(error);        
//     }

// };


// module.exports = {sendMail};