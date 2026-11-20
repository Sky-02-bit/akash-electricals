import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="container-x py-20">
        <h1 className="text-4xl font-extrabold text-fg">
          Akash Electricals
        </h1>

        <p className="mt-4 max-w-2xl text-muted">
          Quality electrical products and solutions for your everyday needs.
        </p>
      </main>
    </>
  );
}