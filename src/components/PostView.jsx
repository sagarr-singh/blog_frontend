import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api'; 

export default function PostView() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await api.get(`/posts/${id}`);
                setPost(res.data);
            } catch (err) {
                setError('Failed to load post');
                console.error(err);
            }
        };
        fetchPost();
    }, [id]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if (!confirmDelete) return;

        try {
            await api.delete(`/posts/${id}`);
            alert("Post deleted successfully.");
            navigate('/');
        } catch (err) {
            console.error("Failed to delete post:", err);
            alert("Error deleting post.");
        }
    };

    if (error) return <p className="text-danger">{error}</p>;
    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h2>{post.title}</h2>
            <h5 className="text-muted">{post.subtitle}</h5>
            <p>{post.content}</p>
            <p>
                <strong>Tags:</strong>{' '}
                {Array.isArray(post.tags) ? post.tags.join(', ') : post.tags}
            </p>

            <div className="d-flex gap-2 mt-3">
                <Link to={`/post/edit/${post._id}`} className="btn btn-secondary">
                    Edit Post
                </Link>
                <button onClick={handleDelete} className="btn btn-danger">
                    Delete Post
                </button>
            </div>
        </div>
    );
}
