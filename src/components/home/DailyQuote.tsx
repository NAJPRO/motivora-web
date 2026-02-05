import DailyCard from "../cards/DailyCard"


const DailyQuote = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary-content">
            <div className="absolute inset-0 bg-linear-to-b from-background via-night-light to-background" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-[150px]" />

            <div className="text-center relative z-10 px-4 sm:px-6 lg:px-8 py-20 text-base-200">
                <h3 className="text-center uppercase font-bold text-primary">Citation du jour</h3>
                <h2 className="text-center text-6xl font-black mt-5 font-serif">Ta dose d&apos;inspiration</h2>
                <DailyCard />
            </div>
        </section>
    )
}

export default DailyQuote