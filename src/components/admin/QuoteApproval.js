import React from 'react'
import NavBar from '../common/NavBar';
import Footer from '../common/footer/Footer';

const QuoteApproval = () => {
    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <NavBar />
            <div className="container mt-5">
                <div>
                    <article>
                        <div className="alert alert-success" role='alert'>
                            Success !
                        </div>
                        <div className="alert alert-danger" role='alert'>
                            Oops Something went wrong !
                        </div>

                        <header className='mb-4'>
                            <h1 className='fw-bolder mb-1'>Title</h1>
                            <button className="btn btn-success">
                                Approve
                            </button>
                            <button className="btn btn-danger ml-3">
                                Reject
                            </button>
                            <div className="text-muted fst-italic mb-2">
                                Posted on 1st January 2024 by John Doe
                            </div>
                        </header>

                        <section className="mb-5"
                            style={{
                                textAlign: 'justify',
                                width: '800px'
                            }}
                        >
                            <p className="fs-5 mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor
                            </p>
                        </section>

                    </article>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default QuoteApproval