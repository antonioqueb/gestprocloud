import FormHero from "./FormHero";
import ImageHero from "./ImageHero";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col-reverse md:flex-row w-full ">
      <FormHero className="md:my-12 relative z-10 md:-mr-20" />
      <div className="hidden md:flex md:w-full relative">
        <ImageHero />
      </div>
    </section>
  );
}
