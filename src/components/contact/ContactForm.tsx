import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';
import { useContactForm } from '@/hooks/useContactForm';

function ContactForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-slate-800 bg-slate-900/45 p-6 shadow-soft sm:p-8"
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
          Start a conversation
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Tell me about your project</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
          Share the goal, timeline, or any important details. The form stays easy to use on both
          mobile and desktop.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Name"
          name="name"
          value={values.name}
          error={errors.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />

        <Input
          label="Phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder="Optional"
        />

        <Input
          label="Subject"
          name="subject"
          value={values.subject}
          error={errors.subject}
          onChange={handleChange}
          required
          placeholder="Project discussion"
        />
      </div>

      <div className="mt-5">
        <Textarea
          label="Message"
          name="message"
          value={values.message}
          error={errors.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Write your message"
        />
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm leading-6 text-slate-500">
          You&apos;ll get a response as soon as possible with the next best step.
        </p>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
