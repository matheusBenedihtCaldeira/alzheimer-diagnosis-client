import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/solid";
export default function Header() {
  return (
    <div className="shadow-md w-full bg-sky-800 text-white">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
        <div className="flex flex-row cursor-pointer">
          <div>
            <img
              className="mx-auto h-10 w-auto"
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
          <li className="my-7 md:my-0 md:ml-8 hover:text-zinc-300">
            <Link href="/">Register Patient</Link>
          </li>
          <li className="my-7 md:my-0 md:ml-8 hover:text-zinc-300">
            <Link href="/">Diagnosis</Link>
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
