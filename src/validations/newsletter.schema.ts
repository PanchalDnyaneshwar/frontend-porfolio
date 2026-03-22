export interface NewsletterValidationResult {
  isValid: boolean;
  error?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateNewsletterEmail(email: string): NewsletterValidationResult {
  if (!email.trim()) {
    return {
      isValid: false,
      error: 'Email is required',
    };
  }

  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: 'Enter a valid email address',
    };
  }

  return {
    isValid: true,
  };
}