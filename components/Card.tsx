"use client";
import { RoutesEnum } from "@/constants/app.constants";
import { ProjectDef } from "@/types/project.type";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

type CardProps = {
  project: ProjectDef;
};

const Card: FC<CardProps> = ({ project }) => {
  const router = useRouter();
  return (
    <div>
      <div
        className="w-full relative overflow-hidden group cursor-pointer"
        onClick={() => router.push(`${RoutesEnum.KHACH_SAN}/${project.slug}`)}
      >
        <div className="w-full">
          <img
            style={{
              objectFit: "cover",
              height: "255px",
              width: "100%",
            }}
            height={320}
            src={project.images[0]}
            alt="project"
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className="py-2 px-6 absolute transition-all duration-300 group-hover:bottom-0 bottom-[100%] left-0 w-full h-full backdrop-blur-[3px] bg-[rgb(0,0,0,0.4)] text-white">
          <p className="text-xl font-semibold mb-3">{project.name}</p>
        </div>
      </div>
      <p className="text-lg">{project.name}</p>
    </div>
  );
};

export default Card;
