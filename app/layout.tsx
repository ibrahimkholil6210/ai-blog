import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { MainNav } from '@/components/main-nav';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DevBlog - Share Your Code and Knowledge',
  description: 'A modern platform for developers to share code snippets and knowledge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <MainNav />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}