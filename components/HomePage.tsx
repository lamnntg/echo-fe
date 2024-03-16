"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const text = "Framer Motion is a really cool tool".split(" ");
import { clsx } from "clsx";
import Image from "next/image";
import Logo from "@/public/logo.png";
const TITLE = "E C H O".split(" ");
const DESCRIPTION = "I N T E R O R".split(" ");
const DESIGN = "D E S I G N".split(" ");
import HomeThumnail from "@/public/home_thumbnail.jpeg";

enum StepEnums {
  ONE = "1",
  TWO = "2",
  THREE = "3",
}

const HomePage = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  const [step, setStep] = useState<StepEnums>(StepEnums.ONE);

  useEffect(() => {
    const timeoutOne = setTimeout(() => {
      setStep(StepEnums.TWO);
    }, 1800);
    const timeoutTwo = setTimeout(() => {
      setStep(StepEnums.THREE);
    }, 5000);
    return () => {
      clearTimeout(timeoutOne);
      clearTimeout(timeoutTwo);
    };
  }, []);

  return (
    <div className="w-[100%] h-[100vh] bg-white flex justify-center items-center">
      {step === StepEnums.ONE && (
        <div className="flex gap-4 h-40 items-end overflow-hidden">
          {Array.from({ length: 14 }, (_, i) => (
            <motion.div
              className="bg-primary"
              initial={{
                height: 160,
                width: 22,
                transform: i % 2 ? "translateY(100%)" : "translateY(-100%)",
              }}
              animate={{
                transform: "translateY(0)",
                transition: {
                  duration: 0.8,
                },
              }}
            ></motion.div>
          ))}
        </div>
      )}
      {step === StepEnums.TWO && (
        <div className="flex items-center gap-4">
          <div className="relative overflow-hidden">
            <Image
              src={Logo}
              width={364}
              height={160}
              alt="Logo"
              objectFit="cover"
            />
            <motion.div
              className="bg-white absolute top-0 left-0"
              initial={{
                height: 160,
                width: 364,
                transform: "translateX(0)",
              }}
              animate={{
                transform: "translateX(-100%)",
                transition: {
                  duration: 1.2,
                },
              }}
            ></motion.div>
          </div>
          <div>
            {TITLE.map((el, i) => (
              <motion.span
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i / 10,
                }}
                key={i}
                className="text-[62px] mr-1 leading-none font-medium inline-block text-[#333]"
              >
                {el}
              </motion.span>
            ))}
            <br />
            <div className="mt-2"></div>
            {DESCRIPTION.map((el, i) => (
              <motion.span
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i / 10 + 0.5,
                }}
                key={i}
                className="text-4xl font-extralight inline-block"
              >
                {el}
              </motion.span>
            ))}
            <br />
            {DESIGN.map((el, i) => (
              <motion.span
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i / 10 + 1,
                }}
                key={i}
                className="text-4xl font-extralight inline-block"
              >
                {el}
              </motion.span>
            ))}
          </div>
        </div>
      )}
      {step === StepEnums.THREE && (
        <div className="w-[100%] h-[100vh]">
          <Image
            src={HomeThumnail}
            layout="fill"
            objectFit="cover"
            alt="Thumnail"
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
