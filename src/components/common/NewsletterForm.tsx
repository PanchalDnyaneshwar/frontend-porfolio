import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { useNewsletter } from '@/hooks/useNewsletter';
import { validateNewsletterEmail } from '@/validations/newsletter.schema';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const newsletterMutation = useNewsletter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validation = validateNewsletterEmail(email);

    if (!validation.isValid) {
      setError(validation.error || 'Invalid email');
      return;
    }

    setError('');
    await newsletterMutation.mutateAsync({ email });
    setEmail('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-soft"
    >
      <h3 className="text-xl font-semibold text-white">Subscribe to updates</h3>
      <p className="mt-2 text-sm leading-7 text-slate-400">
        Get notified about new articles, projects and portfolio updates.
      </p>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            error={error}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
          />
        </div>

        <Button
          type="submit"
          disabled={newsletterMutation.isPending}
          className="sm:h-[50px] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {newsletterMutation.isPending ? 'Submitting...' : 'Subscribe'}
        </Button>
      </div>
    </form>
  );
}

export default NewsletterForm;