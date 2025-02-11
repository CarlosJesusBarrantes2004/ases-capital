"use client";

import { AsTesisTabType } from "@/types";
import { Dispatch, SetStateAction, useState } from "react";

const tabs: AsTesisTabType[] = [
  "Pregrado",
  "Posgrado",
  "Turnitin",
  "Investigación",
];

interface TabsProps {
  onSelect: Dispatch<SetStateAction<AsTesisTabType>>;
}

function Tabs({ onSelect }: TabsProps) {
  const [activeTab, setActiveTab] = useState<AsTesisTabType>("Pregrado");

  return (
    <div className="flex space-x-3 overflow-y-scroll mt-6 sm:justify-center">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 text-lg ${
            activeTab === tab
              ? "border-b-2 border-yellow-500 font-bold text-yellow-500"
              : "text-gray-500"
          }`}
          onClick={() => {
            setActiveTab(tab);
            onSelect(tab);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
