import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email' },
        password: { label: 'Password' },
      },
      authorize(credentials, req) {
        // Perform database operations

        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials

        if (
          credentials?.email === 'admin@example.com' &&
          credentials.password === 'admin'
        ) {
          return {
            id: '1',
            name: 'Admin',
            email: 'admin@example.com',
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
};
