import '../globals.css';
import type { Metadata } from 'next';

import {
  SidebarNav,
  MainNav,
  UserNav,
  LanguageSwitcher,
} from '@/components/dashboard';
import { dashboardConfig } from '@/config/dashboard';

export const metadata: Metadata = {
  title: 'Admin dashboard',
  description: 'Admin dashboard',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
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
      </body>
    </html>
  );
};

export default RootLayout;
