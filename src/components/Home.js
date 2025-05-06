import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Header from './Header';
import PostCard from './PostCard';
import LoadingSpinner from './LoadingSpinner';
import '../styles/Home.css';

function Home() {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (error) {
        return (
            <div className="home">
                <Header title="Social Media App" />
                <div className="error-message">
                    <p>Error: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="home">
            <Header title="Social Media App" />
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className="posts-grid">
                    {posts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;