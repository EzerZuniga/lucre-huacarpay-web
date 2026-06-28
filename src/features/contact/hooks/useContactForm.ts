import { useState, useCallback, type ChangeEvent, type FormEvent } from 'react';
import { contactFormSchema, type ContactFormData } from '@/shared/schemas';
import { contactService } from '../services/contact.service';
import type { AsyncStatus } from '@/shared/types';

interface UseContactFormReturn {
  formData: ContactFormData;
  errors: Partial<Record<keyof ContactFormData, string>>;
  status: AsyncStatus;
  serverMessage: string | null;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  resetForm: () => void;
}

const INITIAL_FORM: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<AsyncStatus>('idle');
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Clear field error on change
      if (errors[name as keyof ContactFormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setServerMessage(null);

      // Validate with Zod
      const result = contactFormSchema.safeParse(formData);
      if (!result.success) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        for (const issue of result.error.issues) {
          const field = issue.path[0] as keyof ContactFormData;
          if (!fieldErrors[field]) {
            fieldErrors[field] = issue.message;
          }
        }
        setErrors(fieldErrors);
        return;
      }

      setErrors({});
      setStatus('loading');

      try {
        const response = await contactService.submitContactForm(result.data);
        setStatus('success');
        setServerMessage(response.message ?? '¡Mensaje enviado correctamente!');
        setFormData(INITIAL_FORM);
      } catch {
        setStatus('error');
        setServerMessage('Error al enviar el mensaje. Por favor, intenta de nuevo.');
      }
    },
    [formData],
  );

  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setStatus('idle');
    setServerMessage(null);
  }, []);

  return {
    formData,
    errors,
    status,
    serverMessage,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
