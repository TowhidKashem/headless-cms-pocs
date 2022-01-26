import React, { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { sbEditable } from "@storyblok/storyblok-editable";

const NavItem = ({ blok }) => {
  const { text, url, is_button, dropdown_menu } = blok;

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
        className={
          is_button
            ? "btn"
            : "text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-4"
        }
        aria-expanded="false"
        onClick={() => setShowDropdown(true)}
        {...sbEditable(blok)}
      >
        <span>{text}</span>
      </button>

      {dropdown_menu?.length > 0 && showDropdown && (
        <div
          ref={dropdown}
          className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              {dropdown_menu[0].dropdown_menu_item.map(
                ({ _uid, title, description }, index) => (
                  <a
                    href="#"
                    className="nav-link"
                    key={_uid}
                    {...sbEditable(blok)}
                  >
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
                        {title}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {description}
                      </p>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavItem;
