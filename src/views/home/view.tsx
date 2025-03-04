'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "../common/components/card";
import Particles from "../common/components/particles";

export const HomeView = () => {
  return (
    <div className="relative bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 pt-16">

      <Particles className="absolute inset-0 -z-10" quantity={150} />

      <div className="container min-h-screen mx-auto px-4 flex flex-col gap-16 py-16">

        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-transparent text-white relative">
            Rock Can Code
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <div className="p-8">
              <h2 className="text-4xl font-bold text-zinc-200">Our Vision</h2>
              <p className="mt-4 text-lg text-zinc-400">
                We are a group of young developers eager to create innovative projects that generate a positive social impact. We value code quality and the development of solutions that make a difference.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <h2 className="text-4xl font-bold text-zinc-200">Our Mission</h2>
              <p className="mt-4 text-lg text-zinc-400">
                We aim to redefine the future through innovative technologies, creating products with a human-centered approach, improving efficiency, and delivering value to society through high-quality digital solutions.
              </p>
            </div>
          </Card>
        </div>

        <Card>
          <div className="p-8">
            <h2 className="text-4xl font-bold text-zinc-200 mb-8 text-center">Our Technology Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
              {[ 
                { name: "Next.js", src: "/images/nextjs.svg" },
                { name: "TypeScript", src: "/images/typescript.svg" },
                { name: "Spring", src: "/images/spring.svg" },
                { name: "Java", src: "/images/java.svg" },
                { name: "Python", src: "/images/python.svg" },
                { name: "PostgreSQL", src: "/images/postgresql.svg" },
                { name: "MongoDB", src: "/images/mongodb.svg" },
                { name: "Kafka", src: "/images/kafka.svg" }
              ].map((tech, index) => (
                <div key={index} className="p-4 flex flex-col items-center w-120 h-120 justify-center rounded-xl">
                  <Image src={tech.src} alt={tech.name} width={120} height={120} />
                  <p className="mt-2 text-zinc-300 text-center font-semibold">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
