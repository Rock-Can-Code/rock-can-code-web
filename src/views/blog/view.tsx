'use client'

import Container from "../common/components/container";
import Particles from "../common/components/particles";


export const BlogHeader = ()=> {
    return(
    <div className="relative bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 pt-16">
           <Particles className="absolute inset-0 -z-10" quantity={150} />
          <Container>
              <div className="container mx-auto px-4 flex flex-col gap-16 py-16">
                <h1 className="text-6xl md:text-8xl font-bold text-white text-center relative">
                  Blog
                </h1>
              </div>

              <div className="p-8">
                <p className="mt-4 text-lg text-zinc-400">
                  <span className="block text-2xl font-semibold text-white mb-4">
                  ✍️ Learning is good. Sharing is better.
                  </span>
                  At Rock Can Code, we believe that each person brings a unique perspective shaped by their background, 
                  challenges, and curiosity. When we share what we know — even if it's just a small breakthrough — we help others grow. 
                  And in doing so, we deepen our own understanding. This blog is a space to lift each other up, one insight, mistake, 
                  and discovery at a time. It’s not just about showing what we built — it’s about sharing the deeper knowledge we gained 
                  along the way.
                </p>
              </div>
            </Container>

            <div className="w-full h-px bg-zinc-800" />
        
        </div>

        )
}
