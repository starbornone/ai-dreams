import Meta from "../meta";
import { Footer } from "./";

export function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <hr className="border-0 h-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
        <main>{children}</main>
      </div>
      <Footer />
      <hr className="border-0 h-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
    </>
  );
}
