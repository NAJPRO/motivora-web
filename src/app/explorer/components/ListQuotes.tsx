"use client"
import { BookmarkIcon, EyeIcon, HeartIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion"
import Link from "next/link"
import { BiSearch } from "react-icons/bi"
import { quotes } from "@/data/quotes"
type ListProps = {
    viewMode?: "grid" | "list"
}

const ListQuotes = ({ viewMode = "grid" }: ListProps) => {
    const filteredQuotes = quotes

    return (
        <section className="container min-h-screen py-20 ">
            <div
                className={
                    viewMode === "grid"
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "flex flex-col gap-4 max-w-3xl px-5 mx-auto "
                }
            >
                {filteredQuotes.map((quote, index) => (
                    <motion.div
                        key={quote.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <Link href={`/citation/${quote.id}`}>
                            <div
                                className={`glass-card p-6  bg-secondary-content/10 rounded-2xl backdrop-blur-md hover-lift h-full flex flex-col group cursor-pointer ${viewMode === "list"
                                        ? "flex-col items-center  gap-6"
                                        : ""
                                    }`}
                            >
                                {/* Category */}
                                <span
                                    className={`inline-flex self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium ${viewMode === "list" ? "mb-0 shrink-0" : "mb-4"
                                        }`}
                                >
                                    {quote.category}
                                </span>

                                <div className={viewMode === "list" ? "flex-1 " : ""}>
                                    <blockquote
                                        className={`font-serif text-foreground italic leading-relaxed ${viewMode === "list"
                                                ? "text-base line-clamp-2"
                                                : "text-lg mb-4 flex-grow"
                                            }`}
                                    >
                                        “{quote.text}”
                                    </blockquote>

                                    <p
                                        className={`text-muted-foreground font-medium ${viewMode === "list" ? "text-sm mt-1" : "mb-4"
                                            }`}
                                    >
                                        — {quote.author}
                                    </p>
                                </div>

                                <div
                                    className={`flex items-center justify-between pt-4 border-t border-border/50 ${viewMode === "list"
                                            ? "border-t-0 pt-0 shrink-0 ml-auto"
                                            : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1 text-muted-foreground text-sm">
                                            <HeartIcon className="w-4 h-4" />
                                            {quote.likes}
                                        </span>
                                        <span className="flex items-center gap-1 text-muted-foreground text-sm">
                                            <EyeIcon className="w-4 h-4" />
                                            {quote.views}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
export default ListQuotes