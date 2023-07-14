import React from "react";
import LeftMission from "./LeftMission";
import RightMisson from "./RightMisson";

interface Props {
  developmentTitle: string;
  developmentDescription: string;
}

function Mission({ developmentTitle, developmentDescription }: Props) {
  return (
    <div className="flex px-12 md:px-16  py-10 md:py-16 flex-col md:flex-row">
      <LeftMission />
      <RightMisson
        developmentTitle={developmentTitle}
        developmentDescription={developmentDescription}
      />
    </div>
  );
}

export default Mission;
