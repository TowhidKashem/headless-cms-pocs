import React, { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

const NavItem = ({ text }) => {
  const dropdown = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useOutsideClick(dropdown, () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  });

  return (
    <>
      <button
        type="button"
        className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-4"
        aria-expanded="false"
        onClick={() => setShowDropdown(true)}
      >
        <span>{text}</span>
      </button>

      {showDropdown && (
        <div
          ref={dropdown}
          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              <a href="#" className="nav-link">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    Analytics
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Get a better understanding of where your traffic is coming
                    from.
                  </p>
                </div>
              </a>

              <a href="#" className="nav-link">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    Engagement
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Speak directly to your customers in a more meaningful way.
                  </p>
                </div>
              </a>

              <a href="#" className="nav-link">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    Security
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Your customers&#039; data will be safe and secure.
                  </p>
                </div>
              </a>

              <a href="#" className="nav-link">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    Integrations
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Connect with third-party tools that you&#039;re already
                    using.
                  </p>
                </div>
              </a>

              <a href="#" className="nav-link">
                <svg
                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    Automations
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Build strategic funnels that will drive your customers to
                    convert
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavItem;
