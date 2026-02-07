import React from 'react'
import { BiGridVertical, BiSolidGridAlt } from 'react-icons/bi'
import { CgViewCols } from 'react-icons/cg'
import { CiGrid2H } from 'react-icons/ci'
import { MdOutlineGridOff } from 'react-icons/md'

const GridCol = () => {
  return (
    <div className='flex bg-white/10 text-primary-content backdrop-blur-md gap-2 py-2 px-4 rounded-xl'>
        <span className='p-2 rounded-lg bg-primary'>
            <BiSolidGridAlt/>
        </span>
        <span className='p-2 rounded-lg bg-primary/50'>
            <MdOutlineGridOff/>
        </span>

    </div>
  )
}

export default GridCol