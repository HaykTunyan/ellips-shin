"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Disclosure } from "@headlessui/react";
import loggff from "../../public/icon/logo_electron.svg";

export const Navbar = () => {
  const navigation = ["Մեր Մասին", "Features", "Pricing", "Company", "Blog"];

  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2  font-medium text-indigo-500 dark:text-gray-100">
            <span>
              <svg
                width="60"
                height="60"
                viewBox="0 0 100 100"
                className="looka-1j8o68f"
              >
                <defs id="SvgjsDefs1492"></defs>
                <g
                  id="SvgjsG1493"
                  featurekey="symbolFeature-0"
                  transform="matrix(0.9720028246120027,0,0,0.9720028246120027,-0.87480309833528,-10.011629278898454)"
                  fill="#791075"
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M24.2,64.3L8.8,79.8c0,0.2,0.1,0.4,0.1,0.7c0,2.2-1.8,4-4,4s-4-1.8-4-4s1.8-4,4-4c0.2,0,0.5,0,0.7,0.1l16.4-16.4   
        C22.5,61.6,23.3,63,24.2,64.3z M66.4,39.9l-8,8c-1.5-0.6-3.1-0.6-4.6,0l-4.3-4.3c0.9-2.2,0.5-4.8-1.3-6.6c-2.4-2.4-6.2-2.4-8.6,0   
        c-1.8,1.8-2.2,4.4-1.3,6.6l-6.2,6.2c0.2,1.8,0.7,3.5,1.5,5.1l8-8c1.5,0.6,3.1,0.6,4.6,0l4.3,4.3c-0.9,2.2-0.5,4.8,1.3,6.6   
        c2.4,2.4,6.2,2.4,8.6,0c1.8-1.8,2.2-4.4,1.3-6.6l6.1-6.1C67.6,43.3,67.1,41.5,66.4,39.9z M91.3,83.4c1.4,1.4,1.4,3.8,0,5.2   
        c-0.7,0.7-1.7,1.1-2.6,1.1c-0.9,0-1.9-0.4-2.6-1.1L70.6,73.2l-1.3-1.3L68.4,71l0,0l0,0l1-1l-2.2-2.2C62.2,71.9,56.1,74,50,74   
        c-6.8,0-13.6-2.6-18.9-7.8c-10.4-10.4-10.4-27.3,0-37.7c5.2-5.2,12-7.8,18.9-7.8c6.8,0,13.6,2.6,18.9,7.8   
        c9.9,9.9,10.4,25.6,1.5,36.1l2.2,2.2l1-1l0.4,0.4l0,0l0.4,0.4l1.3,1.3L91.3,83.4C91.2,83.4,91.2,83.4,91.3,83.4z M65.7,31.6   
        c-4.3-4.3-10-6.5-15.7-6.5c-5.7,0-11.4,2.2-15.7,6.5c-8.7,8.7-8.7,22.8,0,31.4c4.3,4.3,10,6.5,15.7,6.5c5.7,0,11.4-2.2,15.7-6.5   
        C74.4,54.4,74.4,40.3,65.7,31.6z M95.2,10.3c-2.2,0-4,1.8-4,4c0,0.2,0,0.5,0.1,0.7L75.8,30.5c0.9,1.4,1.7,2.8,2.3,4.3l16.4-16.4   
        c0.2,0,0.4,0,0.6,0c2.2,0,4-1.8,4-4C99.2,12.1,97.4,10.3,95.2,10.3z"
                    ></path>
                  </g>
                </g>
              </svg>
            </span>
            <h1 className="text-2xl font-bold leading-snug tracking-tight text-main lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight ">
              ԷԼԼԻՊՍ ՇԻՆ
            </h1>

            {/* {theme === "dark" ? (
                      <span>
                        <Image
                          src="/icons/TalkhubLogo_vertical_light.svg"
                          alt="N"
                          width="40"
                          height="40"
                          className="w-10"
                        />
                      </span>
                    ) : (
                      <span>
                        <Image
                          src="/icons/TalkhubLogo_vertical_light.svg"
                          alt="N"
                          width="40"
                          height="40"
                          className="w-10"
                        />
                      </span>
                    )} */}
            {/* <span>ԷԼԼԻՊՍ ՇԻՆ</span> */}
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          {/* <div className="hidden mr-3 lg:flex nav__item">
              <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                Get Started
              </Link>
            </div> */}
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {/* {navigation.map((item, index) => (
                      <Link key={index} href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item}
                      </Link>
                    ))} */}
                  <Link
                    href="/"
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                  >
                    Գլխավոր
                  </Link>
                  <Link
                    href="/about"
                    className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                  >
                    Մեր Մասին
                  </Link>

                  {/* <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">         
                        Get Started
                    </Link> */}
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {/* {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                </Link>
              </li>
            ))} */}

            <li className="mr-3 nav__item">
              <Link
                href="/"
                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
              >
                Գլխավոր
              </Link>
            </li>
            <li className="mr-3 nav__item">
              <Link
                href="/about"
                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
              >
                Մեր Մասին
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
