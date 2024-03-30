"use client";
import useBreakpoint from "@/hooks/useBreakpoint";
import React from "react";
import data from "@/data.json";
import { ProjectDef } from "@/types/project.type";

const DesignPage = () => {
  const { isMobileLargeDown } = useBreakpoint();

  const project = (data as ProjectDef[]).find(
    (item) => item.slug === "ms-duplex"
  );
  if (!project) {
    return null;
  }
  return (
    <div
      className="bg-white container mx-auto px-3 py-[80px]"
      style={{
        minHeight: `calc(100vh - ${isMobileLargeDown ? 76 + 45 : 36 + 68}px)`,
      }}
    >
      <div className="[column-count:1] md:[column-count:2]">
        {project.images.map((item) => (
          <img
            key={item}
            src={item}
            className="w-full h-auto mb-3 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default DesignPage;
