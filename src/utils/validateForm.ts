export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateMinLength = (value: string, min: number): boolean => {
  return value.length >= min;
};

export const validateMaxLength = (value: string, max: number): boolean => {
  return value.length <= max;
};

export const validateContactForm = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!validateRequired(formData.name)) {
    errors.name = 'El nombre es obligatorio';
  }

  if (!validateRequired(formData.email)) {
    errors.email = 'El email es obligatorio';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'El formato del email no es válido';
  }

  if (!validateRequired(formData.subject)) {
    errors.subject = 'El asunto es obligatorio';
  }

  if (!validateRequired(formData.message)) {
    errors.message = 'El mensaje es obligatorio';
  } else if (!validateMinLength(formData.message, 10)) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres';
  }

  if (formData.phone && !validatePhone(formData.phone)) {
    errors.phone = 'El formato del teléfono no es válido';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateNewsletter = (email: string): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!validateRequired(email)) {
    errors.email = 'El email es obligatorio';
  } else if (!validateEmail(email)) {
    errors.email = 'El formato del email no es válido';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};