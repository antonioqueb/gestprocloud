"use server";
import prisma from '@/lib/prisma';
import { z } from 'zod';

const CreateContactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(1),
  message: z.string().min(15),
});


export async function handleContactForm(data) {
  
  const { name, email, message } = CreateContactSchema.parse({
    name: data.get('name'),
    email: data.get('email'),
    message: data.get('message'),
  });

  try {
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    return { success: true, data: contact };
  } catch (error) {
    console.error('Error al enviar el formulario', error);
    return { success: false, error: 'Error al enviar el formulario' };
  }
}
