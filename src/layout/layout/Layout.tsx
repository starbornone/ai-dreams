import { Container, SectionSeparator } from '@/components';
import { Footer, Header, MobileNav } from '@/layout';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="min-h-screen">
        <hr className="h-4 border-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
        <Header />
        {children}

        <Container>
          <SectionSeparator />
          <div className="block lg:hidden">
            <SectionSeparator />
          </div>
        </Container>
      </div>

      <MobileNav />
      <Footer />
      <hr className="h-4 border-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
    </>
  );
}
