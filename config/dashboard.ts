import { DashboardConfig } from '@/types';

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '#',
      disabled: true,
    },
    {
      title: 'Support',
      href: '#',
    },
    {
      title: 'Another link',
      href: '#',
    },
  ],
  sidebarNav: [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: 'dashboard',
    },
    {
      title: 'Products',
      href: '/dashboard/product',
      icon: 'product',
    },
    {
      title: 'Orders',
      href: '/dashboard/order',
      icon: 'order',
    },
    {
      title: 'Settings',
      href: '/dashboard/setting',
      icon: 'settings',
    },
  ],
};
