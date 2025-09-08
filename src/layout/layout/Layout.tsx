import { Footer, Header, MobileNav } from '@/layout';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="layout">
        <hr className="layout__gradient-bar" />
        <Header />
        {children}
      </div>

      <MobileNav />
      <Footer />
      <hr className="layout__gradient-bar" />
    </>
  );
}
