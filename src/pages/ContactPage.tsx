import Container from '@/components/common/Container';
import ErrorState from '@/components/common/ErrorState';
import NewsletterForm from '@/components/common/NewsletterForm';
import PageLoader from '@/components/common/PageLoader';
import PageSeo from '@/components/common/PageSeo';
import ContactDetailsList from '@/components/contact/ContactDetailsList';
import ContactForm from '@/components/contact/ContactForm';
import ContactHeroSection from '@/components/contact/ContactHeroSection';
import ContactInfoCard from '@/components/contact/ContactInfoCard';
import ContactSocialCard from '@/components/contact/ContactSocialCard';
import MapCard from '@/components/contact/MapCard';
import { useProfile } from '@/hooks/useProfile';
import { useSettings } from '@/hooks/useSettings';

function ContactPage() {
  const profileQuery = useProfile();
  const settingsQuery = useSettings();

  if (profileQuery.isLoading || settingsQuery.isLoading) return <PageLoader />;

  if (profileQuery.error || settingsQuery.error) {
    return (
      <Container className="py-20">
        <ErrorState message="Failed to load contact data." />
      </Container>
    );
  }

  const profile = profileQuery.data?.data || null;
  const settings = settingsQuery.data?.data || null;

  return (
    <>
      <PageSeo
        title="Contact"
        description="Get in touch for freelance work, collaboration or full stack development projects."
      />

      <ContactHeroSection />

      <section className="section-space pt-6">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <ContactInfoCard profile={profile} />
              <ContactSocialCard profile={profile} />
              <ContactDetailsList settings={settings} />
            </div>

            <ContactForm />
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <MapCard mapUrl={settings?.contactInfo?.mapUrl} />
            <NewsletterForm />
          </div>
        </Container>
      </section>
    </>
  );
}

export default ContactPage;