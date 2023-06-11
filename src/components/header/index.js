import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SiNike } from "react-icons/si";

const Header = () => {
  const { status } = useSession();

  const { asPath } = useRouter();

  return (
    <header className="body-font sticky top-0 z-50 bg-gray-900 text-gray-400 shadow-lg shadow-slate-600">
      <div className="container mx-auto flex flex-row flex-wrap items-center p-5 max-sm:flex-col max-sm:justify-center">
        <Link
          href="/"
          className="title-font flex items-center font-medium text-white md:mb-0"
        >
          <SiNike className="text-2xl" />
          <span className="ml-2 text-xl">Just Do It</span>
        </Link>
        <nav className="ml-auto flex flex-wrap items-center justify-center text-base max-sm:ml-0 max-sm:mt-5">
          {status === "authenticated" && (
            <>
            <Link
              href="/"
              className={`mr-5 hover:text-white ${
                asPath === "/" && "text-white"
              }`}
            >
              Profile
            </Link>
            <Link
              href="/tasks"
              className={`mr-5 hover:text-white ${
                asPath === "/tasks" && "text-white"
              }`}
            >
              Tasks
              </Link>
              </>
          )}
          {status === "unauthenticated" && (
            <>
              <Link
                href="/"
                className={`mr-5 hover:text-white ${
                  asPath === "/" && "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/signup"
                className={`mr-5 hover:text-white ${
                  asPath === "/signup" && "text-white"
                }`}
              >
                Signup
              </Link>
              <Link
                href="/login"
                className={`mr-5 hover:text-white ${
                  asPath === "/login" && "text-white"
                }`}
              >
                Login
              </Link>
            </>
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
            className="mt-0 inline-flex items-center rounded border-0 bg-gray-800 px-3 py-1 text-base hover:bg-gray-700 focus:outline-none"
          >
            Log Out
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
