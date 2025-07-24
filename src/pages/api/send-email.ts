import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';


type Data = {
  success: boolean;
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  const { name, phone, email, service, message } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({ 
      success: false, 
      message: 'Missing required fields' 
    });
  }

  const RESEND_API_KEY = process.env.NEXT_SECRET_RESEND_API_KEY;
  console.log(RESEND_API_KEY);
  if (!RESEND_API_KEY) {
    return res.status(500).json({ 
      success: false, 
      message: 'Resend API key is not set' 
    });
  }

  const resend = new Resend(RESEND_API_KEY);


  try {
    
    const { data, error } = await resend.emails.send({
      from: 'Comunicar Más <onboarding@resend.dev>',
      to: ['nicolasandresvegam@gmail.com'],
      subject: `Nueva consulta de ${name} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6d4e93;">Nueva consulta desde el formulario web</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Información del contacto:</h3>
            
            <p><strong>Nombre:</strong> ${name}</p>
            ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Servicio solicitado:</strong> ${service}</p>
            
            ${message ? `
              <div style="margin-top: 20px;">
                <strong>Mensaje:</strong>
                <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #6d4e93;">
                  ${message}
                </p>
              </div>
            ` : ''}
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Este correo fue enviado desde el formulario de contacto de www.comunicarmas.cl
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Error al enviar el correo',
        error: error.message 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Correo enviado exitosamente' 
    });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error interno del servidor' 
    });
  }
}