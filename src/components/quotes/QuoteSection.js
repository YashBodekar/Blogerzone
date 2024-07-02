import React from 'react'
import NavBar from '../common/NavBar'
import Card from '../common/card/Card'
import Footer from '../common/footer/Footer'
import { motion } from 'framer-motion';

const QuoteSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div
                style={{
                    minHeight: '100vh',
                    width: '100vw',
                    backgroundColor: '#EFEFEF',
                }}
            >
                <NavBar />
                <div className="container d-flex justify-content-center p-4">
                    <h1 style={{ fontFamily: 'Dancing Script' }} > Quotes</h1>
                </div>

                <div className="container d-flex flex-direction-row flex-wrap justify-content-center my-5"
                    style={{ width: '100vw' }}
                >
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Footer />
            </div>
        </motion.div>
    )
}

export default QuoteSection