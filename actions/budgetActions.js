"use server";

// actions/budgetActions.js
import prisma from '@/lib/prisma';
import { z } from 'zod';

const CreateBudgetSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(10),
  projectType: z.string().min(3),
  description: z.string().min(50),
});

// Sirve para omitir campos de un objeto
// const CreateBudgetFormSchema = CreateBudgetSchema.omit({ email: true, phone: true });


export async function handleBudgetRequest(data) {
  try {
    const { email, phone, projectType, description } = CreateBudgetSchema.parse({
      email: data.get('email'),
      phone: data.get('phone'),
      projectType: data.get('projectType'),
      description: data.get('description'),
    });

    const budgetRequest = await prisma.budgetRequest.create({
      data: {
        email,
        phone,
        projectType,
        description,
      },
    });

    return { success: true, data: budgetRequest };
  } catch (error) {
    console.error('Error al enviar la solicitud de presupuesto', error);
    return { success: false, error: 'Error al enviar la solicitud de presupuesto' };
  }
}
