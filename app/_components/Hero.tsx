import Image from "next/image";
import Section from "./Section";

export default function Hero() {
  return (
    <Section className="flex max-lg:flex-col items-center justify-between w-full">
      <div className="flex flex-col gap-4 text-primary">
        <div className="flex gap-4 items-center">
          <Image
            className="object-contain"
            src="/me.png"
            width={100}
            height={100}
            alt="profile picture"
          />
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">Gaël Duclocher-Rougelot</h2>
            <h3 className="font-caption text-xl">
              Software developer & Freelancer
            </h3>
          </div>
        </div>
        <p className="lg:max-w-lg font-caption">
          Passionate about technology and specialized in web development
          (React.js, Next.js, Node.js), I create high-performance user
          experiences while staying curious and motivated by technical
          challenges.
        </p>
      </div>
    </Section>
  );
}
