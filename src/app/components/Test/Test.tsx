'use client'

import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'
import { container, box, button } from './styles'


const Test = () => {

    const [isVisible, setIsVisible] = useState(true)

    return (
        <div style={container}>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={box}
                        key="box"
                    />
                ) : null}
            </AnimatePresence>
            <motion.button
                style={button}
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 1 }}
            >
                {isVisible ? "Hide" : "Show"}
            </motion.button>
        </div>
    )
}

export default Test
