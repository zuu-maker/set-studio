import React from "react";

interface Props {
  developmentTitle: string;
  developmentDescription: string;
}

function RightMisson({ developmentTitle, developmentDescription }: Props) {
  return (
    <div className="mt-4 md:mt-0  flex-1 flex items-center justify-center">
      <div className="max-w-sm md:max-w-none md:w-4/5 flex flex-col gap-6 ">
        <div className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {developmentTitle}
        </div>
        <div className="text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
          {developmentDescription}
        </div>
      </div>
    </div>
  );
}

export default RightMisson;
