import React from 'react';

export const Nav = () => {
  return (
    <>
      <nav className="bg-white ">
        <div className="flex flex-wrap gap-x-10 items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="https://flowbite.com" className="flex items-start">
            <img
              src="https://oskarblues.wpenginepowered.com/wp-content/themes/oskar/assets/images/OB-Shield-Logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="OsKar Blues Logo"
            />
          </a>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="mega-menu-full"
            className="items-center justify-between hidden w-full h-[110px] md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-whites">
              <li>
                <a
                  href="#"
                  className="font-['Brandon Text Font'] font-bold block py-2 pl-2 pr-4 text-black rounded md:hover:bg-transparent"
                  aria-current="page"
                >
                  BEERS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Brandon Text Font'] font-bold block py-2 pl-2 pr-4 text-black rounded md:hover:bg-transparent"
                  aria-current="page"
                >
                  BREWERIES + TAPROOMS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Brandon Text Font'] font-bold block py-2 pl-2 pr-4 text-black rounded md:hover:bg-transparent"
                  aria-current="page"
                >
                  MERCH
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Brandon Text Font'] font-bold block py-2 pl-2 pr-4 text-black rounded md:hover:bg-transparent"
                  aria-current="page"
                >
                  NEWS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Brandon Text Font'] font-bold block py-2 pl-2 pr-4 text-black rounded md:hover:bg-transparent"
                  aria-current="page"
                >
                  MUSIC + EVENTS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Brandon Text Font'] font-bold block py-2 pl-2 pr-4 text-black rounded md:hover:bg-transparent"
                  aria-current="page"
                >
                  AMABASSADORS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
