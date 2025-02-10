import type { NextApiRequest, NextApiResponse } from "next";
import emailjs from "emailjs-com";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { nome, zap, mail, endereco, area_atuacao } = req.body;

      // Configuração do EmailJS usando variáveis de ambiente
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

      const templateParams = {
        nome,
        zap,
        mail,
        endereco,
        area_atuacao,
      };

      // Enviar o e-mail
      await emailjs.send(serviceID, templateID, templateParams, userID);

      res.status(200).json({ message: "Formulário enviado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao enviar o formulário." });
    }
  } else {
    res.status(405).json({ message: "Método não permitido." });
  }
}
