import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Hi, I&apos;m a Developer &amp; Designer
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Am <strong className="font-bold italic text-neutral-900">Jjamirr Eric</strong>, a{' '}
            <strong className="font-bold text-neutral-900">junior developer</strong> that creates beautiful, 
            functional websites and applications that help businesses and individuals 
            bring their ideas, needs and wants to life. Passionate about clean code, 
            great design, and user experience.
          </p>
        </FadeIn>
      </Container>
      <Services />
      <ContactSection />
    </main>
  );
}