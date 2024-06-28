import React from 'react'
import NavBar from '../components/common/NavBar'
import FeatureSection from '../components/home/FeatureSection'
import Footer from '../components/common/footer/Footer'
import CustomCarousel from '../components/home/Carousel/Carousel'

const HomePage = () => {
    return (
        <div>
            <div>
                <div style={{ zIndex: '1' }}>
                    <NavBar />
                </div>
                <CustomCarousel/>
                <div style={{ zIndex: '2' }}>
                    <FeatureSection />
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default HomePage