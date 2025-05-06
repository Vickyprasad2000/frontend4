import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import LoadingSpinner from './LoadingSpinner';
import '../styles/ItemDetail.css';

function ItemDetail() {
    const { id } = useParams();
    const { posts, loading, error } = useSelector(state => state);

    const post = posts.find(post => post.id === parseInt(id));

    if (loading) {
        return (
            <div className="item-detail">
                <Header title="Social Media App" />
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="item-detail">
                <Header title="Social Media App" />
                <div className="error-message">
                    <p>Error: {error}</p>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="item-detail">
                <Header title="Social Media App" />
                <div className="error-message">
                    <p>Post not found!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="item-detail">
            <Header title="Social Media App" />
            <div className="detail-container">
                <h2 className="detail-header">Details Page For Post With ID ${id}</h2>
                <div className="detail-content">
                    <img src={post.imgSrc} alt={post.title} className="detail-image" />
                    <div className="detail-info">
                        <p className="user-id">User Id : {post.userId}</p>
                        <p className="title">Title : {post.title}</p>
                        <p className="body">Body : {post.body}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;