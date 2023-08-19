import { Lexend } from 'next/font/google';
import Script from 'next/script';

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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-KJ9Z35H5ES" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KJ9Z35H5ES');
      `}
      </Script>
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
