'use client';

import Link from 'next/link';
import {
  UserIcon,
  UserPlusIcon,
  UsersIcon,
  BeakerIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
export default function Header() {
  return (
    <div className="shadow-md w-full bg-sky-800 text-white">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
        <div className="flex flex-row cursor-pointer">
          <div>
            <img
              className="mx-auto h-10 w-auto "
              src="https://img.icons8.com/ios/50/artificial-intelligence.png"
              alt="artificial-intelligence"
            />
          </div>
          <div className="py-1">
            <Link href="/" className="text-xl font-normal px-2">
              NeuroAI
            </Link>
          </div>
        </div>
        <ul className="md:flex pl-9">
          <li className="my-7 md:my-0 md:ml-8 hover:text-zinc-300">
            <Link href="/">Home</Link>
          </li>
          <li className="my-7 md:my-0 md:ml-8 ">
            <Popover className="relative">
              <Popover.Button className="inline-flex items-center gap-x-1 semibold leading-6 ">
                Patient Tools
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 pe-14 flex w-auto max-w-max -translate-x-1/2 px-4 ">
                  <div className="w-64 max-w-md flex-auto overflow-hidden rounded-3xl text-sm shadow-lg ring-1 bg-zinc-600 ring-gray-900/5">
                    <div className="p-4">
                      <Link href="/register/patient">
                        <div className="group relative flex gap-x-4 rounded-lg p-4  hover:bg-zinc-500 cursor-pointer transition duration-300 ease-out md:ease-in">
                          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                            <UserPlusIcon className="h-8 w-8 flex-none  fill-slate-50" />
                          </div>
                          <div>
                            <p>Register Patient</p>
                            <span className="absolute inset-0" />
                          </div>
                        </div>
                      </Link>
                      <Link href="/patient/history">
                        <div className="group relative flex gap-x-4 rounded-lg p-4  hover:bg-zinc-500 cursor-pointer transition duration-300 ease-out md:ease-in">
                          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                            <UsersIcon className="h-8 w-8 flex-none  fill-slate-50" />
                          </div>
                          <div>
                            <p>Patient History</p>
                            <span className="absolute inset-0" />
                          </div>
                        </div>
                      </Link>
                      <Link href="/patient/diagnosis">
                        <div className="group relative flex gap-x-4 rounded-lg p-4  hover:bg-zinc-500 cursor-pointer transition duration-300 ease-out md:ease-in">
                          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                            <BeakerIcon className="h-8 w-8 flex-none  fill-slate-50" />
                          </div>
                          <div>
                            <p>Diagnosis</p>
                            <span className="absolute inset-0" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </li>
          <li className="my-7 md:my-0 md:ml-8 hover:text-zinc-300">
            <Link href="/">
              <UserIcon className="h-6 w-6 cursor-pointer" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
