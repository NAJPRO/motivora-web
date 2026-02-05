"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import Link from "next/link";
import { RiDownloadFill } from "react-icons/ri";
// import {Sparkles} from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-30">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-night" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
                    >
                        {/* <Sparkles className="w-4 h-4 text-primary" /> */}
                        <span className="text-sm font-medium text-primary">
                            +10 000 citations inspirantes
                        </span>
                    </motion.div>
                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  leading-tight mb-6"
                    >
                        <span className="font-serif ">Un mot peut changer
                        <br />
                        <span className="text-primary">ta journée.</span>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10"
                    >
                        Découvre des citations qui résonnent avec ton âme. Chaque jour, trouve
                        l&apos;inspiration pour avancer et réaliser tes rêves les plus fous.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="/explorer">
                            <Button variant="hero" size="xl" className="w-full sm:w-auto">
                                {/* <Sparkles className="w-5 h-5" /> */}
                                Explorer les motivations
                            </Button>
                        </Link>
                        <Button variant="outline" size="xl" className="w-full sm:w-auto">
                            <RiDownloadFill className="w-5 h-5" />
                            Télécharger l&apos;application
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;