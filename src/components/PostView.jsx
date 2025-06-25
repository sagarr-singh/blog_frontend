import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../api';

export default function PostView() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`/posts/${id}`).then(res => setPost(res.data));
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p><strong>Tags:</strong> {post.tags}</p>
            <Link to={`/post/edit/${post.id}`} className="btn btn-secondary">Edit Post</Link>
        </div>
    );
}
