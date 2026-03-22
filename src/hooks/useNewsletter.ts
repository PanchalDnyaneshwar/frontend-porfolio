import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createNewsletterSubscriber } from '@/apis/newsletter.api';
import { getErrorMessage } from '@/utils/error';

export function useNewsletter() {
  return useMutation({
    mutationFn: createNewsletterSubscriber,
    onSuccess: () => {
      toast.success('Subscribed successfully');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
}