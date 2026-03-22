import { useState } from 'react';
import toast from 'react-hot-toast';
import { createContactMessage } from '@/api/contact.api';
import type { ContactPayload } from '@/types/contact.types';
import { getErrorMessage } from '@/utils/error';

const initialValues: ContactPayload = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export function useContactForm() {
  const [values, setValues] = useState<ContactPayload>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => setValues(initialValues);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
    isSubmitting,
    handleChange,
    handleSubmit,
    handleReset,
  };
}