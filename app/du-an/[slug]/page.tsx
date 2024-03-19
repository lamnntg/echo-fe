import React from "react";
import data from "@/data.json";
import { ProjectDef } from "@/types/project.type";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const project = (data as ProjectDef[]).find(
    (item) => item.slug === params.slug
  );
  if (!project) {
    return null;
  }
  return (
    <div className="text-center pt-[80px] pb-14 container mx-auto px-3">
      <div>
        <h1 className="text-[32px] mb-8">{project.name.toUpperCase()}</h1>
      </div>
      {project.status === "completed" ? (
        <div className="text-[#333] text-base mb-12">
          <p>Tên dự án: {project.name}</p>
          {project.design_by && (
            <p>Thiết kế và thi công: {project.design_by}</p>
          )}
          {project.area && <p>Diện tích: {project.area}</p>}
          {project.year_completed && (
            <p>Hoàn thành: {project.year_completed}</p>
          )}
          {project.address && <p>Địa điểm: {project.address}</p>}
          {project.photo && <p>Photo: {project.photo}</p>}
        </div>
      ) : (
        <div className="mb-20"></div>
      )}
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
}
