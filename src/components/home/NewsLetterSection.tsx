"use client"
import { CheckCircleIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
const NewsLetterSection = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary-content text-secondary-content">
            <div className="absolute inset-0 bg-linear-to-b from-background via-night-light to-background" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-[150px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true, margin: "-100px" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center w-full lg:w-2/3 relative z-10 px-4 sm:px-6 lg:px-8 py-20 text-base-200 overflow-scroll-none"
            >
                <h3 className="text-center uppercase font-bold text-primary">Reste inspiré</h3>
                <h2 className="text-center text-4xl sm:text-6xl font-black my-5 font-serif text-secondary-content">Recevez une motivation</h2>
                <h2 className="text-center text-2xl sm:text-5xl font-black my-5 font-serif text-primary">chaque matin</h2>

                <p className='opacity-60 mb-10'>Rejoignez +15 000 personnes qui commencent leur journée avec une dose d&apos;inspiration</p>

                <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
                    <input
                        type="email"
                        placeholder="ton@email.com"
                        className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-primary/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors w-full sm:w-auto shadow-sm"
                    >
                        S&apos;inscrire
                    </motion.button>
                </form>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground"
                >
                    <span className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-primary" />
                        Gratuit
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-primary" />
                        Pas de spam
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-primary" />
                        Désinscription facile
                    </span>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default NewsLetterSection