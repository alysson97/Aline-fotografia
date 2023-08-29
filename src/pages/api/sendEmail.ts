import { SMTPClient } from "emailjs";

const handler: (req: any, res:any) => Promise<any> = async (req, res) => {
  console.log("testes: ", process.env.EMAIL, process.env.PASSWORD);
  const client = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    const message = await client.sendAsync({
      text: "Muito obrigado pro entrar em contato !",
      from:"alysson18.af@gmail.com",
      to: "jenneasilva@gmail.com",
      cc: "",
      subject: "Aline Lima",
    });
    console.log(message);
  } catch (err) {
    console.error(err);
  }

  res.status(200).json({message: "Send Mail"});
}

export default handler;