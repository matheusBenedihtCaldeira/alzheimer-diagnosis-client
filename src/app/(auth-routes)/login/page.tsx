'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.log(result);
      return;
    }
    router.replace('/');
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://img.icons8.com/ios/50/artificial-intelligence.png"
          alt="artificial-intelligence"
        />
        <h1 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900 font-normal">
          Sign in to your account
        </h1>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              E-mail address
            </label>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                autoComplete="email"
                required
                placeholder="example@email.com"
                className="border-gray-300 text-gray-900 text-sm rounded-lg focus:rind-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="password"
                placeholder="•••••••••••"
                name="password"
                autoComplete="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-gray-300 text-gray-900 text-sm rounded-lg focus:rind-1 focus:ring-inset shadow-sm ring-1 ring-inset ring-gray-900 w-full p-2.5"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-sky-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800 transition duration-250 ease-out md:ease-in"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
