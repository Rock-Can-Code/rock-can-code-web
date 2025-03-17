'use client'

import { motion } from "framer-motion";
import { Card } from "../common/components/card";
import Particles from "../common/components/particles";

export const AboutView = ()=> {
    return (
        <div className="relative bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 pt-16">
        
            <Particles className="absolute inset-0 -z-10" quantity={150} />

            <div className="container min-h-screen mx-auto px-4 flex flex-col gap-16 py-16">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold text-white text-center relative">
                        About us
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1">
                    <Card>
                        <div className="p-8">
                            <p className="mt-4 text-lg text-zinc-400">
                                <span className="block text-2xl font-semibold text-white mb-4">
                                    🚀 We Code Tomorrow
                                </span>
                                Born from late nights and a shared obsession with "what if?", we're a collective 
                                of young innovators turning tech dreams into reality.
                                <br /><br />
                                
                                <span className="font-semibold text-white">Why Choose Us?</span>
                                <br />
                                • Youthful Grit: Silicon Valley ambition without corporate baggage<br />
                                • Innovation First: Only interested in bleeding-edge solutions<br />
                                • True Partners: Your vision becomes our shared mission
                                <br /><br />
                                
                                <span className="font-semibold text-white">We Specialize In:</span>
                                <br />
                                • Custom software that breaks molds<br />
                                • AI-driven solutions with personality<br />
                                <br />
                                
                                <span className="italic text-zinc-300">
                                    We see tech through lenses unclouded by "how it's always been done". 
                                    While others talk disruption, we live it - one radical iteration at a time.
                                </span>
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}