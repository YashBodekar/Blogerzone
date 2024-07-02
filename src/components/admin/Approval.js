import React from 'react'
import Card from '../common/card/Card'

const Approval = () => {
  return (
    <div>
        <div>
            <div className="d-flex flex-column align-items-center justify-content-center py-5">
                <h2
                className='pt-2 text-dark text-capiitalize font-weight-bold fs-1 p-0 m-0'
                style={{
                    paddingLeft:'20px',
                    fontFamily:"Dancing Script",
                    borderBottom:'2px solid #222',
                    paddingBottom:'1px'
                }}
                >
                    Approve Blogs
                </h2>

                <div className="container d-flex flex-direction-row flex-wrap justify-content-center my-5">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center py-5">
                <h2
                className='pt-2 text-dark text-capiitalize font-weight-bold fs-1 p-0 m-0'
                style={{
                    paddingLeft:'20px',
                    fontFamily:"Dancing Script",
                    borderBottom:'2px solid #222',
                    paddingBottom:'1px'
                }}
                >
                    Approve Quotes
                </h2>

                <div className="container d-flex flex-direction-row flex-wrap justify-content-center my-5">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Approval