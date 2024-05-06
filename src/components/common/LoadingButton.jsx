import React from "react";
import { Link } from "react-router-dom";

export const LoadingButton = ({ to, children }) => {
  return (
    <Link to={to} className="inline-block">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center animate-pulse">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.003 8.003 0 0112 4.472v3.045a4.001 4.001 0 00-4 4l.001.774 2-.534V17z"
          ></path>
        </svg>
        <span>{children}</span>
      </button>
    </Link>
  );
};
