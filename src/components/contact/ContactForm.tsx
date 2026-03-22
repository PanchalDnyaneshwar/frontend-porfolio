import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';
import { useContactForm } from '@/hooks/useContactForm';

function ContactForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useContactForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-soft"
    >
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

      <div className="mt-6">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;