"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface ExpandableCardProps {
  title: string;
  content: string;
}

function ExpandableCard({ title, content }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-md">
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-white text-lg font-medium">{title}</h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-yellow-500 hover:text-yellow-400 transition-colors"
            aria-expanded={isExpanded}
            aria-controls="content"
          >
            {isExpanded ? (
              <Minus className="w-5 h-5"></Minus>
            ) : (
              <Plus className="w-5 h-5"></Plus>
            )}
          </button>
        </div>
        <div
          id="content"
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <p className="text-gray-300 text-base leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default ExpandableCard;
