"use client"
import { motion } from 'framer-motion';
import React from 'react'

type InputData = {
    emoji: string
    title: string;
    bgcolor: string;
    textcolor?: string;
}
const box = {
    borderRadius: 5,
}
const ThemeCard = (props: InputData) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
            style={box}
        >

            <div className={`h-30 w-50 ${props.bgcolor} card  ${props.textcolor ? props.textcolor : 'text-black'} hover:shadow-lg hover:shadow-primary/30 transition-shadow duration-300 flex flex-col items-center justify-center cursor-pointer`}>
                <div className="card-body text-4xl flex items-center justify-center ">
                    {props.emoji}
                </div>
                <div className='font-bold text-shadow pb-2'>
                    {props.title}
                </div>
            </div >
        </motion.div>
    )
}

export default ThemeCard