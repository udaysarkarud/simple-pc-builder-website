import PCBuilderComponents from "@/components/UI/PCBuilderComponents";
import RootLayout from "@/components/layouts/RootLayout";
import React from "react";
import { useSelector } from "react-redux";

const PcbuilderPage = () => {
  const pcComponents = [
    {
      id: 1,
      img: "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/cpu-48x48_1686724838.png",
      name: "CPU/Processor",
      slug: "processor",
    },
    {
      id: 2,
      img: "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/2310600_1686989058.png",
      name: "Motherboard",
      slug: "motherboard",
    },
    {
      id: 3,
      img: "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/RAM_1686989592.png",
      name: "Ram",
      slug: "ram",
    },
    {
      id: 4,
      img: "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/SSD-48x48_1686989668.png",
      name: "Storage Device",
      slug: "storagedevice",
    },
    {
      id: 5,
      img: "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/2194087-200_1686989982.png",
      name: "Monitor",
      slug: "monitor",
    },
    {
      id: 6,
      img: "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/1470116_1686990072.png",
      name: "Power Supply",
      slug: "powersupply",
    },
    {
      id: 7,
      img: "https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/cpu_1686989918.png",
      name: "Others",
      slug: "others",
    },
  ];
  const { pcomponents } = useSelector((state) => state.pcbuilder);
  const allKeysAreNotNull = Object.values(pcomponents).every(
    (value) => value !== null
  );
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center ">
      <div className="mt-10">
        <div className="flex justify-around">
          <h3 className="text-xl">
            Select All Components And Build Your Powerfull Computer
          </h3>
          <button className="btn btn-neutral" disabled={!allKeysAreNotNull}>
            Complete Building PC
          </button>
        </div>

        <div>
          {pcComponents.map((data) => (
            <PCBuilderComponents key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PcbuilderPage;

PcbuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
