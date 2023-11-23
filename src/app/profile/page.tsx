'use client';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';
import axios from '@/services/axios';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

type PatientProps = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default function Profile({ params }: any) {
  const router = useRouter();
  const [patient, setPatient] = useState<PatientProps | null>(null);
  const id = params.id;

  return (
    <>
      <Header />

      <div className="m-20 py-4 sm:py-30">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Profile Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal information.
          </p>
        </div>
        <div className="mt-6 border-t border-b border-gray-300">
          <dl className="divide-y divide-gray-300">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                User ID
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Full name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                E-mail
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Role
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
            </div>
          </dl>
        </div>
        <div className="hidden shrink-0 sm:flex sm:items-center m-1 pt-5">
          <p className="h-6 w-6 cursor-pointer transition duration-250 ease-out md:ease-in text-neutral-600 hover:text-blue-700">
            <PencilSquareIcon />
          </p>
          <button className="h-6 w-6 cursor-pointer transition duration-250 ease-out md:ease-in text-neutral-600 hover:text-red-600">
            <TrashIcon />
          </button>
        </div>
      </div>
    </>
  );
}
