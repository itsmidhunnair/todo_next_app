import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { SiNike } from "react-icons/si";

const Header = () => {
  const { status } = useSession();

  return (
    <header className="body-font sticky top-0 z-50 bg-gray-900 text-gray-400 shadow-lg shadow-slate-600">
      <div className="container mx-auto flex flex-row flex-wrap items-center p-5">
        <Link
          href="/"
          className="title-font flex items-center font-medium text-white md:mb-0"
        >
          <SiNike className="text-2xl" />
          <span className="ml-2 text-xl">Just Do It</span>
        </Link>
        <nav className="ml-auto flex flex-wrap items-center justify-center text-base">
          <Link href="/tasks" className="mr-5 hover:text-white">
            Home
          </Link>
          {status === "unauthenticated" && (
            <Link href="/signup" className="mr-5 hover:text-white">
              Sign Up
            </Link>
          )}
        </nav>
        {status === "authenticated" && (
          <button
            onClick={() => {
              signOut({
                callbackUrl: "http://localhost:3000/login",
                redirect: false,
              });
            }}
            className="inline-flex items-center rounded border-0 bg-gray-800 px-3 py-1 text-base hover:bg-gray-700 focus:outline-none mt-0"
          >
            Log Out
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="ml-1 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
