import React from 'react'
import NavBar from '../common/NavBar'
import { HandThumbsDownFill, HandThumbsUpFill } from 'react-bootstrap-icons'
import temp from '../../images/blog.jpg'
import Comment from './comments/Comment'
import { WhatsappShareButton, WhatsappIcon, FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, TelegramShareButton, TelegramIcon } from 'react-share'
import './Blog.css'

const BlogDetail = () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <NavBar />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8">
                        <article>
                            <header className="mb-4">
                                <h1 className='fw-bolder mb-1'>Blog title</h1>
                                <div className="text-mutes fst-italic mb-2">
                                    Posted on July 1st, 2024 by John Doe
                                </div>

                                <div>
                                    <div>
                                        <button className="btn btn-light">
                                            <HandThumbsUpFill />
                                        </button>
                                        <span className="badge rounded-pill bg-secondary">
                                            5
                                        </span>
                                        <button className="btn btn-light">
                                            <HandThumbsDownFill />
                                        </button>
                                    </div>
                                </div>

                                <p className="badge bg-secondary text-decoration-none link-light fs-6 mt-3">
                                    Fiction
                                </p>
                            </header>

                            <figure className="mb-4">
                                <img
                                    src={temp}
                                    alt="blogImage"
                                    className="img-fluid rounded"
                                    style={{ height: '520px', width: '800px' }}
                                />
                            </figure>

                            <section className="mb-5">
                                <div className="fs-5 mb-4">
                                    <div style={{ textAlign: 'justify' }}>
                                        Content for this blog
                                    </div>
                                </div>
                            </section>
                            <Comment />
                        </article>
                    </div>

                    <div className="col-lg-4">
                        <div className="d-flex flex-column border py-3">
                            <p className="author ps-3 ms-3"
                                style={{
                                    position: 'relative',
                                    fontWeight: 'bold',
                                    fontSize: '18px',
                                    fontFamily: 'sans-serif',
                                    color: '#222'
                                }}
                            >
                                AUTHOR WIDGETS
                            </p>

                            <figure className='mb-4 d-flex justify-content-center'>
                                <img
                                    className='img-fluid author-img'
                                    src="https://images.unsplash.com/photo-1579293676244-953f569610cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGF1dGhvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                    alt="AuthorImage"
                                    style={{
                                        width: '270px',
                                        height: '300px'
                                    }}
                                />

                            </figure>

                            <div className='d-flex justify-content-center flex-column align-items-center pb-3'>
                                <p>Author Name</p>
                            </div>

                            <div className="py-4">
                                <p className="author ps-3 ms-3"
                                    style={{
                                        position: 'relative',
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                        fontFamily: 'sans-serif',
                                        color: '#222'
                                    }}
                                >
                                    SOCIAL SHARE
                                </p>
                                <ul className="d-flex" style={{ listStyle: 'none' }} >
                                    <li className="px-1">
                                        <WhatsappShareButton>
                                            <WhatsappIcon logoFillColor="white" size={53} round={true} />
                                        </WhatsappShareButton>
                                    </li>
                                    <li className="px-1">
                                        <FacebookShareButton>
                                            <FacebookIcon logoFillColor="white" size={53} round={true} />
                                        </FacebookShareButton>
                                    </li>
                                    <li className="px-1">
                                        <TwitterShareButton>
                                            <TwitterIcon logoFillColor="white" size={53} round={true} />
                                        </TwitterShareButton>
                                    </li>
                                    <li className="px-1">
                                        <TelegramShareButton>
                                            <TelegramIcon logoFillColor="white" size={53} round={true} />
                                        </TelegramShareButton>
                                    </li>
                                </ul>
                            </div>

                            <div className="py-4">
                                <p className="author ps-3 ms-3"
                                    style={{
                                        position: 'relative',
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                        fontFamily: 'sans-serif',
                                        color: '#222'
                                    }}
                                >
                                    POPULAR POSTS
                                </p>

                                <div className="ps-3">
                                    <div className="d-flex flex-row">
                                        <figure className="mb-4">
                                            <img className='img-fluid' src={temp} alt="TestImage" style={{
                                                height: "100px",
                                                width: "100px",
                                                borderRadius: "5%"
                                            }} />
                                        </figure>
                                        <div className="p-3">
                                            <p className='popular-blog-title'>Blog Title</p>
                                            <p className='blog-comment'>BY - &nbsp;
                                                <span style={{ fontWeight: 'bold' }}>Author Name</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ps-3">
                                    <div className="d-flex flex-row">
                                        <figure className="mb-4">
                                            <img className='img-fluid' src={temp} alt="TestImage" style={{
                                                height: "100px",
                                                width: "100px",
                                                borderRadius: "5%"
                                            }} />
                                        </figure>
                                        <div className="p-3">
                                            <p className='popular-blog-title'>Blog Title</p>
                                            <p className='blog-comment'>BY - &nbsp;
                                                <span style={{ fontWeight: 'bold' }}>Author Name</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column border py-3 my-3">
                            <p className="author ps-3 ms-3"
                                style={{
                                    position: 'relative',
                                    fontWeight: 'bold',
                                    fontSize: '18px',
                                    fontFamily: 'sans-serif',
                                    color: '#222'
                                }}
                            >
                                MORE
                            </p>

                            <div className="card-body">
                                <div className="col-12">
                                    <ul className="list-unstyled d-flex flex-wrap justify-content-start flex-row">
                                        <li className="px-2">
                                            <p className='button-author'>Blogs</p>
                                        </li>
                                        <li className="px-2">
                                            <p className='button-author'>Quotes</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column border py-3 my-3">
                            <p className="author ps-3 ms-3"
                                style={{
                                    position: 'relative',
                                    fontWeight: 'bold',
                                    fontSize: '18px',
                                    fontFamily: 'sans-serif',
                                    color: '#222'
                                }}
                            >
                                POST A COMMENT
                            </p>
                            <span>
                                <div className="alert alert-success" role='alert'>
                                    Comment Posted
                                </div>
                            </span>
                            <span>
                                <div className="alert alert-danger" role='alert'>
                                    Something went wrong
                                </div>
                            </span>

                            <form className="p-3"
                                style={{
                                    color: "#222",
                                    fontWeight: '600',
                                    fontFamily: 'sans-serif'
                                }}
                            >
                                <div className="form-group py-3">
                                    <label htmlFor="commentTextArea" className="pb-1">Comment</label>
                                    <textarea className='form-control' rows="3" id="commentTextArea"></textarea>
                                </div>

                                <p className="button-author py-1 w-50">
                                    <button type='submit' style={{ 
                                        fontWeight:"bold"
                                    }} className="btn">Post Comment</button>
                                </p>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail