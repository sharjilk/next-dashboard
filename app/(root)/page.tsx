import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import Login from '@/components/Login';

export const metadata: Metadata = {
  title: 'Login | Merchant Interface',
  description: 'Merchant Interface | Authentication',
};

const AuthenticationPage = () => {
  return (
    <>
      <div className="relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}
        >
          Request to create an account
        </Link>
        <div className="relative md:h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900 login-background" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image src="/logo_single.svg" width={48} height={48} alt="Logo" />
            &nbsp; Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <h1 className="text-4xl font-semibold tracking-tight">
              Give your business everything it need to grow
            </h1>
            <p className="mt-4 text-lg">
              Give it an extra sales channel with ZERO listing costs.
            </p>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">Copyright &copy; Acme Inc 2023</p>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {/* <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Log in as Merchant
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email &amp; password to continue.
              </p>
            </div> */}
            <Login />
            <p className="px-8 text-center text-sm text-muted-foreground pb-6">
              By logging in, you agree to our <br />
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthenticationPage;
