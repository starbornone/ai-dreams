import Meta from "../meta";
import { Footer } from "./";

export function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
