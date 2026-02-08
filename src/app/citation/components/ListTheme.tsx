import { Button } from '@/components/ui/Button'
import { FaFilter } from 'react-icons/fa6'
import { themes } from '@/data/themes'
const ListTheme = () => {
    return (
        <>
        <div className='w-full max-w-4xl mx-auto flex flex-wrap pt-10  gap-2 justify-center items-center '>
            <Button variant={'outline'} className='shrink-0'>
                <FaFilter />
                Toutes
            </Button>
            {themes.map((theme) => (
                <Button variant={'outline'} key={theme.id} className='shrink-0 hover:bg-primary/20' >
                    {theme.name}
                </Button>
            ))}
        </div>
        <p className='text-center text-secondary-content/50 pt-4'>10 citation trouvées</p>
        </>
    )
}

export default ListTheme