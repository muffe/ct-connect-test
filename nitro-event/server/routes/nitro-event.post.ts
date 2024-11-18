import { createTransport } from "nodemailer";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const transport = createTransport({
        host: "smtp.purelymail.com",
        port: 465,
        secure: true,
        auth: {
          user: useRuntimeConfig().emailUser,
          pass: useRuntimeConfig().emailPassword,
        },
      });

    const mail = await transport.sendMail({
        from: 'muffe@purelymail.com',
        to: 'm.wustrack@basecom.de',
        subject: 'new order',
        text: JSON.stringify(body),
    });

    return { 
        mail 
    };
});