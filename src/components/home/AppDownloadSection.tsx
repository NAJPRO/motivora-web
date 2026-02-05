"use client"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { LuSmartphone } from "react-icons/lu"
const AppDownloadSection = () => {
    return (
        <section className='bg-secondary h-screen w-full relative flex items-center justify-center overflow-hidden py-20 md:py-28'>
            {/* Background elements */}
            <div className="absolute inset-0 bg-linear-to-b from-background via-night-light/50 to-background" />
            <div className="absolute top-1/2 left-1/4 w-125 h-125 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
            <div className="absolute top-1/2 right-1/4 w-100 h-100 bg-gold-dark/10 rounded-full blur-[100px] -translate-y-1/2" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true, margin: "-100px" }}

                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className=""
                    >

                        <motion.div
                            // initial={{ opacity: 0, y: 30 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            // viewport={{ once: true, margin: "-100px" }}
                            animate={{
                                boxShadow: [
                                    "0 0 20px rgba(255, 215, 0, 0.15)",
                                    "0 0 40px rgba(255, 215, 0, 0.35)",
                                    "0 0 20px rgba(255, 215, 0, 0.15)",
                                ],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="glass-card p-8 md:p-12 text-center shadow-primary shadow-lg rounded-3xl"
                        >
                            {/* Icon */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-linear-to-br from-primary to-gold-dark flex items-center justify-center"
                            >
                                <LuSmartphone className="w-10 h-10 text-primary-foreground" />
                            </motion.div>

                            {/* Title */}
                            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                                Emporte ta motivation partout
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                                Reçois chaque matin une citation inspirante directement sur ton téléphone.
                                Sauvegarde tes préférées et accède-y même hors ligne.
                            </p>

                            {/* Coming Soon Badge */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Application mobile bientôt disponible
                            </motion.div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full sm:w-auto min-w-[200px] h-14 text-base"
                                    disabled
                                >
                                    {/* <Apple className="w-6 h-6 mr-2" /> */}
                                    <div className="text-left">
                                        <span className="text-xs text-muted-foreground block leading-tight">
                                            Bientôt sur
                                        </span>
                                        <span className="font-semibold leading-tight">App Store</span>
                                    </div>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full sm:w-auto min-w-[200px] h-14 text-base"
                                    disabled
                                >
                                    {/* <PlayCircle className="w-6 h-6 mr-2" /> */}
                                    <div className="text-left">
                                        <span className="text-xs text-muted-foreground block leading-tight">
                                            Bientôt sur
                                        </span>
                                        <span className="font-semibold leading-tight">Google Play</span>
                                    </div>
                                </Button>
                            </div>

                            {/* Features list */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="mt-10 pt-8 border-t border-border/50"
                            >
                                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Notifications quotidiennes
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Mode hors ligne
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        Widget inspirant
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        100% gratuit
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AppDownloadSection