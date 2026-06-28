import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  email: z
    .string()
    .min(1, 'El email es obligatorio')
    .email('El formato del email no es válido'),
  subject: z
    .string()
    .min(1, 'El asunto es obligatorio'),
  message: z
    .string()
    .min(1, 'El mensaje es obligatorio')
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje no puede exceder 2000 caracteres'),
  phone: z
    .string()
    .regex(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
      'El formato del teléfono no es válido',
    )
    .optional()
    .or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, 'El email es obligatorio')
    .email('El formato del email no es válido'),
  name: z.string().optional(),
  interests: z.array(z.string()).optional(),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
