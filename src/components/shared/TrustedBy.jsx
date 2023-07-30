import Link from "next/link";
import React from "react";

const TrustedBy = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-10 text-center lg:pt-10">
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Trusted by these many companies so far
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          <li>
            <ul
              role="list"
              className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
            >
              <li className="flex">
                <img
                  alt="Transistor"
                  loading="lazy"
                  width="158"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="https://salient.tailwindui.com/_next/static/media/transistor.7274e6c3.svg"
                />
              </li>
              <li className="flex">
                <img
                  alt="Tuple"
                  loading="lazy"
                  width="105"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="https://salient.tailwindui.com/_next/static/media/tuple.74eb0ae0.svg"
                />
              </li>
              <li className="flex">
                <img
                  alt="StaticKit"
                  loading="lazy"
                  width="127"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="https://salient.tailwindui.com/_next/static/media/statickit.d7937794.svg"
                />
              </li>
            </ul>
          </li>
          <li>
            <ul
              role="list"
              className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
            >
              <li className="flex">
                <img
                  alt="Mirage"
                  loading="lazy"
                  width="138"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="https://salient.tailwindui.com/_next/static/media/mirage.18d2ec4e.svg"
                />
              </li>
              <li className="flex">
                <img
                  alt="Laravel"
                  loading="lazy"
                  width="136"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="https://salient.tailwindui.com/_next/static/media/laravel.7deed17e.svg"
                />
              </li>
              <li className="flex">
                <img
                  alt="Laravel"
                  loading="lazy"
                  width="136"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="https://salient.tailwindui.com/_next/static/media/statamic.6da5ebfb.svg"
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrustedBy;
