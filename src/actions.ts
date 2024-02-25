"use server";

import nodemailer from "nodemailer";

export async function generateEmailBody(ipdata: any) {
  const subject = "Wohoo! You Got a response 💌😍";
  const body = `
        <div>
          <h1>Hello !</h1>
          <h2>You got a response 😍</h3>
          <p>Here are the details of who clicked "Yes" : </p>
          <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8;">
            <h3>is back in stock!</h3>
            <p>We're excited to let you know that is now back in stock.</p>
            
            <img src="https://gifdb.com/images/high/yay-milk-and-mocha-bears-cheering-confetti-9rjvz35rjxvj7oup.gif" alt="yay" style="max-width: 100%;height:auto;" />
          </div>
          <p>Have a great day !!!!</p>
        </div>
      `;

  return { subject, body };
}

const transporter = nodemailer.createTransport({
  pool: true,
  service: "hotmail",
  port: 2525,
  auth: {
    user: "anish7biswas@outlook.com",
    pass: process.env.EMAIL_PW,
  },
  maxConnections: 1,
});

export const sendEmail = async (emailContent: EmailContent, sendTo: string) => {
  const mailOptions = {
    from: "anish7biswas@outlook.com",
    to: sendTo,
    html: emailContent.body,
    subject: emailContent.subject,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) return console.log(error);

    console.log("Email sent: ", info);
  });
};

export async function simpleEncrypt(text: string): Promise<string> {
  return text
    .split("")
    .map((char) => {
      if (char.match(/[a-zA-Z]/)) {
        const isUpperCase = char === char.toUpperCase();
        const baseCharCode = isUpperCase
          ? "A".charCodeAt(0)
          : "a".charCodeAt(0);
        const shiftedCharCode =
          ((char.charCodeAt(0) - baseCharCode + 4) % 26) + baseCharCode;
        return String.fromCharCode(shiftedCharCode);
      } else {
        return char;
      }
    })
    .join("");
}
export async function simpleDecrypt(text: string): Promise<string> {
  return text
    .split("")
    .map((char) => {
      if (char.match(/[a-zA-Z0-9]/)) {
        const isUpperCase = char === char.toUpperCase();
        const baseCharCode = isUpperCase
          ? char.match(/[A-Z]/)
            ? "A".charCodeAt(0)
            : "0".charCodeAt(0)
          : char.match(/[a-z]/)
          ? "a".charCodeAt(0)
          : "0".charCodeAt(0);
        const shiftedCharCode =
          ((char.charCodeAt(0) - baseCharCode + 4) % 36) + baseCharCode;
        return String.fromCharCode(shiftedCharCode);
      } else {
        return char;
      }
    })
    .join("");
}
type EmailContent = {
  subject: string;
  body: string;
};
