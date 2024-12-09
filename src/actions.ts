"use server";

import nodemailer from "nodemailer";

export async function generateEmailBody(ipdata: any) {
  const subject = "Wohoo! You Got a response 💌😍";
  const body = `
    <div style="font-family:sans;">
    <h1>Hello friend !</h1>
    <h2>You got a response 💌😍</h3>
    <div style="border: 1px solid #ff4968; padding: 10px; background-color:rgb(56, 23, 29,0.7);border-radius:15px;color:white;">
      <h3>Here are the details of who clicked "Yes" :</h3>
      <ul>
        <li>IP Address: ${ipdata.ip_address || "unknown"}</li>
        <li>Browser: ${ipdata.browser}</li>
        <li>Operating System: ${ipdata.os}</li>
        <li>Device: ${ipdata.device}</li>
        <li>Country: ${ipdata.geo.country || "unknown"}</li>
        <li>Region: ${ipdata.geo.regionName || "unknown"}</li>
        <li>City: ${ipdata.geo.city || "unknown"}</li>
        <li>District: ${ipdata.geo.district || "unknown"}</li>
        <li>Zip: ${ipdata.geo.zip || "unknown"}</li>
        <li>Latitude: ${ipdata.geo.lat || "unknown"}</li>
        <li>Longitude: ${ipdata.geo.lon || "unknown"}</li>
        <li>ISP: ${ipdata.geo.isp || "unknown"}</li>
        <li>Organization: ${ipdata.geo.org || "unknown"}</li>
        <li>AS: ${ipdata.geo.as || "unknown"}</li>
        <li>Mobile: ${ipdata.geo.mobile || "unknown"}</li>
      </ul>

      <img src="https://gifdb.com/images/high/yay-milk-and-mocha-bears-cheering-confetti-9rjvz35rjxvj7oup.gif" alt="yay" style="width: 100%;height:auto;" />
    </div>
    <p>Have a great day !!!!</p>
  </div>

      `;

  return { subject, body };
}

const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PW,
  },
});

export const sendEmail = async (emailContent: EmailContent, sendTo: string) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: sendTo,
    html: emailContent.body,
    subject: emailContent.subject,
  };
  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
};

export async function simpleEncrypt(text: string): Promise<string> {
  const key = process.env.NEXT_PUBLIC_KEY || "abcd";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const encryptedText = text
    .split("")
    .map((char) => {
      const isAlphabetic = char.match(/[a-zA-Z]/);
      if (isAlphabetic) {
        const isUpperCase = char === char.toUpperCase();
        const index = isUpperCase
          ? alphabet.indexOf(char.toLowerCase())
          : alphabet.indexOf(char);
        const encryptedChar = isUpperCase
          ? key[index].toUpperCase()
          : key[index];
        return encryptedChar;
      } else {
        return char;
      }
    })
    .join("");

  return encryptedText;
}

export async function simpleDecrypt(text: string): Promise<string> {
  const key = process.env.NEXT_PUBLIC_KEY || "abcdefghijlkmnopqrstuvwxyz";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const decryptedText = text
    .split("")
    .map((char) => {
      const isAlphabetic = char.match(/[a-zA-Z]/);
      if (isAlphabetic) {
        const isUpperCase = char === char.toUpperCase();
        const index = isUpperCase
          ? key.indexOf(char.toLowerCase())
          : key.indexOf(char);
        const decryptedChar = isUpperCase
          ? alphabet[index].toUpperCase()
          : alphabet[index];
        return decryptedChar;
      } else {
        return char;
      }
    })
    .join("");
  return decryptedText;
}
type EmailContent = {
  subject: string;
  body: string;
};
