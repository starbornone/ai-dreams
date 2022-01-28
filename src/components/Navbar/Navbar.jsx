import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/pro-light-svg-icons";
import { Link } from "gatsby";
import React from "react";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-24">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center mr-12">
                  <div className="font-serif">
                    <div className="font-bold text-red-700 text-xl">
                      AI DREAMS
                    </div>
                    <div className="ml-8 -mt-2 text-gray-400 text-md">
                      of a better <span className="text-red-700">.world</span>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    activeClassName="border-red-600 text-gray-900"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    to="/"
                  >
                    <div>
                      <div>Junction</div>
                      <div className="ml-0 lg:ml-6 text-xs text-gray-400">
                        A place to begin
                      </div>
                    </div>
                  </Link>
                  <Link
                    activeClassName="border-red-600 text-gray-900"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    to="/categories/reflection"
                  >
                    <div>
                      <div>Reflection</div>
                      <div className="ml-0 lg:ml-6 text-xs text-gray-400">
                        Contemplating the world
                      </div>
                    </div>
                  </Link>
                  <Link
                    activeClassName="border-red-600 text-gray-900"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    to="/categories/imagination"
                  >
                    <div>
                      <div>Imagination</div>
                      <div className="ml-0 lg:ml-6 text-xs text-gray-400">
                        Stories in fictional worlds
                      </div>
                    </div>
                  </Link>
                  <Link
                    activeClassName="border-red-600 text-gray-900"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    to="/categories/function"
                  >
                    <div>
                      <div>Function</div>
                      <div className="ml-0 lg:ml-6 text-xs text-gray-400">
                        Web apps and games
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon icon={faTimes} />
                  ) : (
                    <FontAwesomeIcon icon={faBars} />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                activeClassName="border-red-600 text-gray-900"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-70 items-center block pl-3 pr-4 py-2 border-l-4 font-medium"
                to="/"
              >
                Junction
              </Link>
              <Link
                activeClassName="border-red-600 text-gray-900"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-70 items-center block pl-3 pr-4 py-2 border-l-4 font-medium"
                to="/categories/reflection"
              >
                Reflection
              </Link>
              <Link
                activeClassName="border-red-600 text-gray-900"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-70 items-center block pl-3 pr-4 py-2 border-l-4 font-medium"
                to="/categories/imagination"
              >
                Imagination
              </Link>
              <Link
                activeClassName="border-red-600 text-gray-900"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-70 items-center block pl-3 pr-4 py-2 border-l-4 font-medium"
                to="/categories/function"
              >
                Function
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
