import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="background overflow-x-hidden md:overflow-x-visible flex min-h-screen max-w-4xl m-auto flex-col items-center gap-16 py-10 md:py-24 px-4 md:px-6 lg:p-24">
      <Header />
      <Hero />

      <div className="w-screen h-screen z-[-1] absolute left-64 top-[50rem]">
        <div className="pie astronaut"> </div>
        <div className="pie greenpea"> </div>
        <div className="pie greenpea greenpea2"> </div>
        <div className="pie cello"> </div>
        <div className="pie wineberry"> </div>
      </div>
    </main>
  );
}
