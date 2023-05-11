import "dotenv/config";
import { createTransport } from "nodemailer";

import { ISendEmailRequest } from "../interfaces/users";
import AppError from "../errors/AppError";
import Mailgen from "mailgen";

export const sendEmail = async ({ to, subject, text }: ISendEmailRequest) => {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  await transporter
    .sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html: text,
    })
    .then(() => {
      console.log("Email send with sucess");
    })
    .catch((err) => {
      console.log(err);
      throw new AppError(500, "Error sending email, try again later");
    });
};

export const resetPasswordTemplate = (
  userEmail: string,
  userName: string,
  resetToken: string,
  protocol: string,
  host: string
) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "G33",
      link: `${protocol}://${host}`,
    },
  });

  const newToken = resetToken.replace(/\./g, "&");

  const email = {
    body: {
      name: userName,
      intro:
        "You have received this email because a password reset request for your account was received.",
      action: {
        instructions: "Click the button below to reset your password:",
        button: {
          color: "#092548",
          text: "Reset your password",
          link: `https://motorshopg33v2.onrender.com/execute-password-recovery/${newToken}`,
        },
      },
      outro:
        "If you did not request a password reset, no further action is required on your part.",
    },
  };

  const emailBody = mailGenerator.generate(email);

  const emailTemplate = {
    to: userEmail,
    subject: "Reset password",
    text: emailBody,
  };

  return emailTemplate;
};
