import GridCol from '@/components/ui/GridCol'
import TextInput from '@/components/ui/Input'
import React from 'react'
import Searchable from './components/Searchable'
import ListTheme from './components/ListTheme'
import ListQuotes from './components/ListQuotes'

const Explorer = () => {
  return (
    <section className='w-full flex justify-center items-center   text-secondary-content flex-col'>
      <h1 className='text-2xl md:text-6xl font-black font-serif'>Explorer les citations</h1>
      <p>Découvre notre collection</p>
      <Searchable/>
      <ListTheme/>
      <ListQuotes viewMode='grid' />
    </section>
  )
}

export default Explorer    