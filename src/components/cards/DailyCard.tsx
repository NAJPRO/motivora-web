import { HeartIcon } from "@heroicons/react/24/outline"
import { BookmarkIcon, EyeIcon } from "@heroicons/react/16/solid"
const DailyCard = () => {
  return (
    <aside className="hover-3d my-12 mx-2 cursor-pointer">
                    {/* content */}
                    <div className="card max-w-150 bg-secondary text-secondary-content bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
                        <div className="card-body">
                            <div className="flex justify-between mb-10">
                                <div className="font-bold capitalize outline outline-amber-300 rounded-3xl text-primary px-3">bonheur</div>
                                {/* <div className="text-5xl opacity-10">❁
                                </div> */}
                            </div>
                            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8 italic">
                                Le bonheur n&apos;est pas quelque chose de prêt à l&apos;emploi. Il vient de vos propres actions.
                            </blockquote>

                            <div className="flex justify-between">
                                <div>
                                    <div className="text-xs opacity-20">CARD HOLDER</div>
                                    <div>VICTOR VON D.</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-4 mb-2 text-xs">
                                        <div>
                                            <HeartIcon />
                                            <span>124</span>

                                        </div>
                                        <div>
                                            <EyeIcon />
                                            <span>2324</span>

                                        </div>
                                        <div>
                                            <BookmarkIcon />
                                            <span>256</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 8 empty divs needed for the 3D effect */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </aside>
  )
}

export default DailyCard