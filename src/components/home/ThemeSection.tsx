import ThemeCard from '../cards/ThemeCard';

const listThemes = [
    {
        id: 1,
        emoji: '✊',
        title: 'Thème 1',
        bgcolor: 'bg-amber-200',
        textcolor: 'text-black'
    },
    {
        id: 2,
        emoji: '🌟',
        title: 'Thème 2',
        bgcolor: 'bg-blue-200',
        textcolor: 'text-black'
    },
    {
        id: 3,
        emoji: '🔥',
        title: 'Thème 3',
        bgcolor: 'bg-red-200',
        textcolor: 'text-black'
    },
    {
        id: 4,
        emoji: '💡',
        title: 'Thème 4',
        bgcolor: 'bg-yellow-200',
        textcolor: 'text-orange-800'
    },
    {
        id: 5,
        emoji: '🌈',
        title: 'Thème 5',
        bgcolor: 'bg-purple-200',
        textcolor: 'text-secondary'
    },
    {
        id: 6,
        emoji: '🚀',
        title: 'Thème 6',
        bgcolor: 'bg-green-200',
        textcolor: 'text-primary'
    },
    

]

const ThemeSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary text-secondary-content">
            <div className="absolute inset-0 bg-linear-to-b from-background via-night-light to-background" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-[150px]" />
            <div className="text-center w-full lg:w-2/3 relative z-10 px-4 sm:px-6 lg:px-8 py-20 text-base-200 overflow-scroll-none">
                <h3 className="text-center uppercase font-bold text-primary">Explore par thème</h3>
                <h2 className="text-center text-6xl font-black my-5 font-serif">Trouve ton inspiration</h2>
                <p className='opacity-60'>Choisi une catégorie qui résonne avec toi aujourd&apos;hui</p>

                <div className='grid grid-cols-2 md:grid-cols-3  gap-4 w-full mt-10 overflow-x-none py-4 px-2'>
                    
                    
                    {listThemes.map((theme) => (
                        <ThemeCard key={theme.id} emoji={theme.emoji} title={theme.title} bgcolor={theme.bgcolor} textcolor={theme.textcolor}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ThemeSection