import { dark } from '@clerk/themes';
import { ClerkProvider } from '@clerk/nextjs';
//import { ThemeProvider } from 'next-themes';
import { Providers } from './providers';
import './index.css';
import './globals.css';

export const metadata = {
  title: '4MoBeers DAO',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

import Navbar from './components/navbar';
import Footer from './components/footer';

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      //className="lightmode dark:darkmode"
    >
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: '#a21caf',
            colorText: '#fafaf9',
            colorInputText: '#1c1917',
          },
          baseTheme: dark,
          layout: {
            helpPageUrl: '/support',
            logoImageUrl:
              'https://storage.fleek-internal.com/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/img/logo-4mobeers.svg',
            logoPlacement: 'inside',
            privacyPageUrl: '/privacy',
            showOptionalFields: true,
            socialButtonsPlacement: 'top',
            socialButtonsVariant: 'iconButton',
            termsPageUrl: '/terms',
          },
        }}
      >
        <Providers>
          <body className=""> {/*className="bg-neutral-400 dark:bg-primary-900">*/}
            <Navbar />
            {children}
            <Footer />
          </body>
        </Providers>
      </ClerkProvider>
    </html>
  );
}
