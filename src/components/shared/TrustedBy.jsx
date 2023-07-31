import Link from "next/link";
import React from "react";
const TrustedBy = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-10 text-center lg:pt-10">
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Spotlight on Our Best: Featured Category
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
                <Link href="/category/processor">
                  <img
                    loading="lazy"
                    width="80"
                    style={{ color: "transparent" }}
                    src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/cpu-48x48_1686724838.png"
                  />
                  <p>Processor</p>
                </Link>
              </li>
              <li className="flex">
                <Link href="/category/motherboard">
                  <img
                    loading="lazy"
                    width="80"
                    style={{ color: "transparent" }}
                    src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/2310600_1686989058.png"
                  />
                  <p>Motherboard</p>
                </Link>
              </li>
              <li className="flex">
                <Link href="/category/ram">
                  <img
                    loading="lazy"
                    width="80"
                    style={{ color: "transparent" }}
                    src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/RAM_1686989592.png"
                  />
                  <p>Ram</p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul
              role="list"
              className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
            >
              <li className="flex">
                <Link href="/category/storagedevice">
                  <img
                    loading="lazy"
                    width="80"
                    style={{ color: "transparent" }}
                    src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/SSD-48x48_1686989668.png"
                  />
                  <p>Storage Device</p>
                </Link>
              </li>
              <li className="flex">
                <Link href="/category/monitor">
                  <img
                    loading="lazy"
                    width="80"
                    style={{ color: "transparent" }}
                    src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/2194087-200_1686989982.png"
                  />
                  <p>Monitor</p>
                </Link>
              </li>
              <li className="flex">
                <Link href="/category/powersupply">
                  <img
                    loading="lazy"
                    width="80"
                    style={{ color: "transparent" }}
                    src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/1470116_1686990072.png"
                  />
                  <p>Power Supply</p>
                </Link>
              </li>
              <li className="flex">
                <Link href="/category/others">
                  <img
                    loading="lazy"
                    width="80"
                    style={{ color: "transparent" }}
                    src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/cpu_1686989918.png"
                  />
                  <p>Others</p>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrustedBy;
