import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [tagFilter, setTagFilter] = useState('');

    useEffect(() => {
        axios.get('/posts').then(res => setPosts(res.data));
    }, []);

    const filtered = tagFilter
        ? posts.filter(p => p.tags.includes(tagFilter))
        : posts;

    return (
        <div>
            <h2>All Posts</h2>
            <input className="form-control mb-3" placeholder="Filter by tag..." onChange={e => setTagFilter(e.target.value)} />
            <ul className="list-group">
                {filtered.map(post => (
                    <li className="list-group-item" key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
