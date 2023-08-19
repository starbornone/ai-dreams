import { Lexend } from 'next/font/google';

import { Container } from 'components';
import { Footer, Header, Meta, MobileNav } from 'layout';

import 'styles/index.css';

const lexend = Lexend({
  weight: ['200', '300', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

function Layout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Meta />
        <div className="min-h-screen">
          <hr className="h-4 border-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
          <Container>
            <Header />
            {children}
          </Container>
        </div>
        <MobileNav />
        <Footer />
        <hr className="h-4 border-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
      </body>
    </html>
  );
}

export default Layout;
