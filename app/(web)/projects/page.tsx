import Link from "next/link";
import React from "react";
import { Navigation } from "../../../src/views/common/components/nav";
import { Card } from "../../../src/views/common/components/card";

export const revalidate = 60;
export default async function ProjectsPage() {
  

  return (
    <div className="relative pb-16">
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex justify-end">
                  <span className="text-xs text-zinc-500">
                    <span>2025</span>
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Freedom AI.
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Uncensored and local runned AI.
                </p>
                <div className="mt-4">
                  <p className="text-zinc-200 hover:text-zinc-50">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            
            <Card>
              <Link href={`/projects/`}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex justify-end">
                    <span className="text-xs text-zinc-500">
                      <span>SOON</span>
                    </span>
                  </div>

                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    LUM
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    The future of HRMs.
                  </p>
                  <div className="mt-4">
                    <p className="text-zinc-200 hover:text-zinc-50">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>
          </div>
        </div>
        
        <div className="hidden w-full h-px md:block bg-zinc-800" />

      </div>
    </div>
  );
}
