import ContactDetails from "@/components/ContactDetails";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import FadeIn from "@/components/FadeIn";

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let&apos;s work together">
        <p>I&apos;d love to hear from you. Let&apos;s discuss your project.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
        </div>
        
        <FadeIn className="mt-24 lg:mt-32">
          <div className="border-t border-neutral-200 pt-16">
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              What happens next?
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <div className="flex h-12 w-12 items-center justify-center bg-neutral-100 text-2xl font-bold text-neutral-950">
                  1
                </div>
                <h3 className="mt-4 font-semibold text-neutral-950">
                  You reach out
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  For now: Send me an email with your project details or reach out through my phone number.
                </p>
              </div>
              <div>
                <div className="flex h-12 w-12 items-center justify-center bg-neutral-100 text-2xl font-bold text-neutral-950">
                  2
                </div>
                <h3 className="mt-4 font-semibold text-neutral-950">
                  We connect
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  I&apos;ll respond within 24-48 hours to discuss your project further.
                </p>
              </div>
              <div>
                <div className="flex h-12 w-12 items-center justify-center bg-neutral-100 text-2xl font-bold text-neutral-950">
                  3
                </div>
                <h3 className="mt-4 font-semibold text-neutral-950">
                  We collaborate
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  We work together to bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default ContactPage;
