'use client';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface NextAuthSessionProvidersProps {
  children: ReactNode;
}

export default function NextAuthSessionProvider({
  children,
}: NextAuthSessionProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
