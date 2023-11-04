import Header from '@/components/Header';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function patientHistory() {
  return (
    <>
      <Header />
      <div className="m-10 pl-2">
        <Link
          href="/register/patient"
          className="text-white bg-sky-800 rounded-full transition duration-300 ease-out md:ease-in hover:bg-sky-700 p-3 drop-shadow-lg"
        >
          Register patient
        </Link>
      </div>
      <div className="m-10 py-3 sm:py-30">
        <ul className="divide-y divide-gray-100">
          <li className="flex justify-between gap-x-6 p-5 mb-7 shadow-lg bg-slate-200 rounded-md shadow-md w-full">
            <div className="min-w-0 flex-auto">
              <Link href="#" className="text-base font-semibold leading-6">
                Patient Name
              </Link>
              <p className="text-sm">
                Diagnosis: <span className="text-zinc-600">non demented</span>
              </p>
            </div>
            <div className="hidden shrink-0 sm:flex sm:items-center m-1">
              <p className="h-6 w-6 cursor-pointer transition duration-250 ease-out md:ease-in text-neutral-600 hover:text-blue-700">
                <PencilSquareIcon />
              </p>
              <button className="h-6 w-6 cursor-pointer transition duration-250 ease-out md:ease-in text-neutral-600 hover:text-red-600">
                <TrashIcon />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
