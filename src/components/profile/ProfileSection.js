import { Line } from 'rc-progress';
import React from 'react'
import Avatar from 'react-avatar'
import { PlusCircle } from 'react-bootstrap-icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Card from '../common/card/Card'


const ProfileSection = () => {

    const [showBlogForm, setShowBlogForm] = React.useState(false);
    const [showQuoteForm, setShowQuoteForm] = React.useState(false);
    const [blogImage, setBlogImage] = React.useState();

    return (
        <div className='container'>
            <div>
                <div className="ms-3">
                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="card mt-5">
                            <div className="text-center text-dark" style={{ width: "800px" }}>
                                <div>
                                    {' '}
                                    <Avatar name={"John Doe"} round="50px" />
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <h4 className='mb-0 text-dark'
                                    style={{ fontSize: '32px', fontFamily: 'Dancing Script' }}
                                >
                                    John Doe
                                </h4> {' '}
                                <span className="text-muted d-block mb-2" style={{ fontSize: '22px' }}>
                                    john@gmail.com
                                </span> {' '}
                                <br />
                                <div className="container d-flex justify-content-center mt-4 px-4">
                                    <div>
                                        <h6
                                            className='mb-0 text-dark'
                                            style={{
                                                fontSize: '28px',
                                                fontFamily: 'Dancing Script'
                                            }}
                                        >
                                            Blogs
                                            <div>
                                                <PlusCircle
                                                    onClick={() => {
                                                        setShowBlogForm(true);
                                                        setShowQuoteForm(false)
                                                    }}
                                                    fontSize={20}
                                                    color='green'
                                                />
                                            </div>{' '}
                                            <span className="fs-5">2</span>
                                        </h6>
                                    </div>
                                    <div className='ml-4'>
                                        <h6
                                            className='mb-0 text-dark'
                                            style={{
                                                fontSize: '28px',
                                                fontFamily: 'Dancing Script'
                                            }}
                                        >
                                            Quotes
                                            <div>
                                                <PlusCircle
                                                    onClick={() => {
                                                        setShowQuoteForm(true);
                                                        setShowBlogForm(false);
                                                    }}
                                                    fontSize={20}
                                                    color='green'
                                                />
                                            </div>{' '}
                                            <span className="fs-5">0</span>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />

                    <div className="container d-flex flex-column justify-content-center">
                        <button className="btn btn-primary ms-3 mt-2">
                            Approvals
                        </button>
                    </div>
                </div>
                {showBlogForm && (
                    <form>
                        <div className="alert alert-success" role='alert'>
                            Success! Your blog is added and will be posted once approved by Admin
                        </div>
                        <div className="alert alert-danger" role='alert'>
                            Something went wrong !
                        </div>

                        <div className="d-flex">
                            <Line
                                percent={'50'}
                                strokeWidth={2}
                                strokeColor="green"
                            />
                            <span>50%</span>
                        </div>

                        <div>
                            <label htmlFor="blogImage">Image:</label>
                            <input
                                type="file"
                                className='p-3'
                                onChange={(e) => setBlogImage(e.target.files[0])}
                            />

                            {blogImage && (
                                <img src={URL.createObjectURL(blogImage)} alt="blogImg" style={{ height: '120px' }} />
                            )}
                        </div>

                        <div className="form-group">
                            <br />
                            <input
                                type="text"
                                className='form-control'
                                id="blogTitle"
                                placeholder='Title'
                                style={{
                                    borderStyle: 'none',
                                    borderRadius: '0px',
                                    borderBottom: '1px solid grey'
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <br />
                            <input
                                type="text"
                                className='form-control'
                                id="blogTitle"
                                placeholder='Categories'
                                style={{
                                    borderStyle: 'none',
                                    borderRadius: '0px',
                                    borderBottom: '1px solid grey'
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <br />
                            <input
                                type="text"
                                className='form-control'
                                id="blogTitle"
                                placeholder='Social Media Links'
                                style={{
                                    borderStyle: 'none',
                                    borderRadius: '0px',
                                    borderBottom: '1px solid grey'
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <br />
                            <ReactQuill
                                type="text"
                                placeholder='Description'
                                style={{ height: '200px' }}
                            />
                        </div>

                        <button
                            type='submit'
                            className='btn btn-secondary mt-5'
                        >
                            Submit
                        </button>
                    </form>
                )}

                {showQuoteForm && (
                    <form>
                        <div className="alert alert-success" role='alert'>
                            Success! Your quote is added and will be posted once approved by Admin
                        </div>
                        <div className="alert alert-danger" role='alert'>
                            Something went wrong !
                        </div>

                        <div className="d-flex">
                            <Line
                                percent={'50'}
                                strokeWidth={2}
                                strokeColor="green"
                            />
                            <span>50%</span>
                        </div>

                        <div className="form-group">
                            <br />
                            <ReactQuill
                                type="text"
                                placeholder='Description'
                                style={{ height: '200px' }}
                            />
                        </div>

                        <button
                            type='submit'
                            className='btn btn-secondary mt-5'
                        >
                            Submit
                        </button>
                    </form>
                )}
            </div>
            <div className="pt-5">
                <div className="container d-flex justify-content-center p-4">
                    <h2 style={{ fontFamily:'Dancing Script' }}>My Blogs</h2>
                </div>

                <div className="container d-flex flex-direction-row flex-wrap justify-content-center my-3">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

            </div>

            <div className="pt-5">
                <div className="container d-flex justify-content-center p-4">
                    <h2 style={{ fontFamily:'Dancing Script' }}>My Quotes</h2>
                </div>

                <div className="container d-flex flex-direction-row flex-wrap justify-content-center my-3">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default ProfileSection