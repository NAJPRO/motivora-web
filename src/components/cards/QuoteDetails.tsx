"use client"

import { motion } from "framer-motion"
import Link from "next/link";
import { Button } from "../ui/Button";
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/20/solid";
import { FaCopy, FaFacebook, FaFacebookF, FaQuoteRight, FaTwitter } from "react-icons/fa6";
import { Quote, quotes } from "@/data/quotes";
import { EyeIcon, HeartIcon, ShareIcon } from "@heroicons/react/16/solid";
const QuoteDetails = (quote: Quote) => {
    // const quote = quotes[0]
    console.log("RECU + ", quote)
    console.log("RECU = ", quote.quote.text)
    quote = quote.quote
    const isFavorite = true
    const copied = false
    const showShareMenu = false
    return (

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link href="/citation">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeftIcon className="w-4 h-4" />
                            Retour
                        </Button>
                    </Link>
                </motion.div>

                {/* Main Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="max-w-4xl mx-auto bg-secondary-content/10 backdrop-blur-sm text-secondary-content rounded-2xl"
                >
                    <div className="glass-card p-8 md:p-16 relative">
                        {/* Quote Icon */}
                        <div className="absolute -top-6 left-8 md:left-16 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-gold">
                            <FaQuoteRight className="w-6 h-6 text-primary-foreground" />
                        </div>

                        {/* Category */}
                        <div className="flex justify-end mb-8">
                            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                {quote.category}
                            </span>
                        </div>

                        {/* Quote Text */}
                        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-relaxed mb-10 italic text-center">
                            "{quote.text}"
                        </blockquote>

                        {/* Author */}
                        <p className="text-center font-medium text-foreground text-xl mb-10">
                            — {quote.author}
                        </p>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {/* Favorite */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                // onClick={toggleFavorite}
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-colors ${isFavorite
                                        ? "bg-destructive/20 text-destructive"
                                        : "bg-card hover:bg-muted text-foreground"
                                    }`}
                            >
                                <HeartIcon className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                                <span>{isFavorite ? "Favori" : "Ajouter"}</span>
                            </motion.button>

                            {/* Views */}
                            <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card text-muted-foreground">
                                <EyeIcon className="w-5 h-5" />
                                <span>{quote.views} vues</span>
                            </div>

                            {/* Copy */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                // onClick={handleCopy}
                                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card hover:bg-muted transition-colors text-foreground"
                            >
                                {copied ? (
                                    <CheckIcon className="w-5 h-5 text-primary" />
                                ) : (
                                    <FaCopy className="w-5 h-5" />
                                )}
                                <span>{copied ? "Copié !" : "Copier"}</span>
                            </motion.button>

                            {/* Share */}
                            <div className="relative">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    // onClick={() => setShowShareMenu(!showShareMenu)}
                                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card hover:bg-muted transition-colors text-foreground"
                                >
                                    <ShareIcon className="w-5 h-5" />
                                    <span>Partager</span>
                                </motion.button>

                                {/* Share Menu */}
                                {showShareMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        className="absolute top-full mt-2 right-0 bg-card border border-border rounded-xl shadow-elevated p-2 z-10"
                                    >
                                        <button
                                            // onClick={() => handleShare("twitter")}
                                            className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg hover:bg-muted transition-colors text-foreground"
                                        >
                                            <FaTwitter className="w-4 h-4" />
                                            Twitter
                                        </button>
                                        <button
                                            // onClick={() => handleShare("facebook")}
                                            className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg hover:bg-muted transition-colors text-foreground"
                                        >
                                            <FaFacebook className="w-4 h-4" />
                                            Facebook
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Related Quotes */}
                {/* {relatedQuotes.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-20"
                    >
                        <h2 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-10">
                            Citations similaires
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {relatedQuotes.map((q, index) => (
                                <motion.div
                                    key={q.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <Link to={`/citation/${q.id}`}>
                                        <div className="glass-card p-6 hover-lift h-full">
                                            <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                                                {q.category}
                                            </span>
                                            <blockquote className="font-serif text-lg text-foreground leading-relaxed mb-4 italic line-clamp-3">
                                                "{q.text}"
                                            </blockquote>
                                            <p className="text-muted-foreground font-medium">
                                                — {q.author}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )} */}
            </div>
    );
};

export default QuoteDetails