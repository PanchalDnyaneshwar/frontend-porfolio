import { useState } from 'react';
import toast from 'react-hot-toast';
import { createContactMessage } from '@/apis/contact.api';
import type { ContactPayload } from '@/types/contact.types';
import { getErrorMessage } from '@/utils/error';
import {
  validateContactForm,
  type ContactValidationErrors,
} from '@/validations/contact.schema';

const initialValues: ContactPayload = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export function useContactForm() {
  const [values, setValues] = useState<ContactPayload>(initialValues);
  const [errors, setErrors] = useState<ContactValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateContactForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      await createContactMessage(values);
      toast.success('Message sent successfully');
      handleReset();
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleReset,
  };
}
