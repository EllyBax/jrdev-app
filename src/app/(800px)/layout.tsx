import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function MinPagesLayout({ children }: { children: React.ReactNode }) {
  return (<main className="min-h-screen">
    <div className="mx-auto max-w-[800px] p-4">
      <Nav />
      {children}
      <Footer />
    </div>
  </main>)
}