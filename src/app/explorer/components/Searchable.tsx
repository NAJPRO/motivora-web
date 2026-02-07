import GridCol from '@/components/ui/GridCol'
import TextInput from '@/components/ui/Input'
import React from 'react'

const Searchable = () => {
    return (
        <div className=' w-full max-w-4xl flex flex-col sm:flex-row justify-center items-center  gap-2 px-5 sm:px-0'>
            <TextInput type='search' placeholder='search' />
            <GridCol />
        </div>
    )
}

export default Searchable