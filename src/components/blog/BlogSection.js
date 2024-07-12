import React, { useState, useEffect } from 'react'
import NavBar from '../common/NavBar'
import Card from '../common/card/Card'
import Footer from '../common/footer/Footer'
import { motion } from 'framer-motion';
import { db } from '../../firebase';

const BlogSection = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        db.collection("blogs").get()
            .then((snapshot) => {
                const blogData = [];
                snapshot.forEach((doc) => {
                    if (doc.data().isApproved === true) {
                        const data = {
                            id: doc.id,
                            ...doc.data()
                        };
                        blogData.push(data);
                    }
                });
                setBlogs(blogData);
            });
    }, []);

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
                    <h1 style={{ fontFamily: 'Dancing Script' }} > Blogs</h1>
                </div>

                <div className="container d-flex flex-direction-row flex-wrap justify-content-center my-5"
                    style={{ width: '100vw' }}
                >
                    {blogs.length > 0 ? (
                        blogs && blogs.map((data) => (
                            <Card
                                image={data.images[0]}
                                content={data.description}
                                title={data.title}
                                author={data.authorName}
                                date={data.updatedOn}
                                isApproved={data.isApproved}
                                url={`/blog/${data.id}`}
                            />
                        ))
                    ) : (<div className="d-flex justify-content-center">No Blogs Yet</div>)}
                </div>
                <Footer />
            </div>
        </motion.div>
    )
}

export default BlogSection