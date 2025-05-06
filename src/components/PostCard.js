import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PostCard.css';

function PostCard({ post }) {
    // Slice the title and body to limit length
    const truncatedTitle = post.title.length > 20
        ? post.title.slice(0, 20) + '...'
        : post.title;

    const truncatedBody = post.body.length > 100
        ? post.body.slice(0, 100) + '...'
        : post.body;

    return (
        <Link to={`/item/${post.id}`} className="post-card-link">
            <div className="post-card">
                <img src={post.imgSrc} alt={post.title} className="post-image" />
                <div className="post-info">
                    <p className="post-user-id">User ID: {post.userId}</p>
                    <h3 className="post-title">Title: {truncatedTitle}</h3>
                    <p className="post-body">Body: {truncatedBody}</p>
                    <p className="read-more">Read More...</p>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;