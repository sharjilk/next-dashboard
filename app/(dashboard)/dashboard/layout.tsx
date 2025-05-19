import '../../globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import {
  SidebarNav,
  MainNav,
  UserNav,
  LanguageSwitcher,
} from '@/components/dashboard';
import { dashboardConfig } from '@/config/dashboard';
import { ThemeModeToggle } from '@/components/common';
import ProgressBarProvider from '@/contexts/ProgressBarProvider';
import { ThemeProvider } from '@/contexts/ThemeProvider';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin dashboard',
  description: 'Admin dashboard',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={openSans.className}>
          <ProgressBarProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="flex min-h-screen flex-col space-y-6">
                <header className="sticky top-0 z-40 border-b bg-background">
                  <div className="flex h-16 items-center justify-between py-4 px-8">
                    <MainNav items={dashboardConfig.mainNav} />
                    {/* <UserAccountNav
                user={{
                  name: user.name,
                  image: user.image,
                  email: user.email,
                }}
              /> */}
                    <UserNav />
                    <LanguageSwitcher />
                    <span className="ml-[20px]">
                      <ThemeModeToggle />
                    </span>
                  </div>
                </header>
                <div className="grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
                  <aside className="w-[200px] flex-col md:flex pl-8">
                    <SidebarNav items={dashboardConfig.sidebarNav} />
                  </aside>
                  <main className="flex w-full flex-1 flex-col overflow-hidden">
                    {children}
                  </main>
                </div>
                {/* <SiteFooter className="border-t" /> */}
              </div>
            </ThemeProvider>
          </ProgressBarProvider>
      </body>
    </html>
  );
};

export default RootLayout;
