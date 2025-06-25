import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../api';

export default function PostForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({ title: '', content: '', tags: '' });

    useEffect(() => {
        if (id) {
            axios.get(`/posts/${id}`).then(res => setPost(res.data));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(`/posts/${id}`, post).then(() => navigate('/'));
        } else {
            axios.post('/posts', post).then(() => navigate('/'));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{id ? 'Edit' : 'Create'} Post</h2>
            <input className="form-control mb-3" placeholder="Title" value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} />
            <textarea className="form-control mb-3" placeholder="Content" rows="5" value={post.content} onChange={e => setPost({ ...post, content: e.target.value })} />
            <input className="form-control mb-3" placeholder="Tags (comma-separated)" value={post.tags} onChange={e => setPost({ ...post, tags: e.target.value })} />
            <button className="btn btn-success">{id ? 'Update' : 'Create'} Post</button>
        </form>
    );
}
