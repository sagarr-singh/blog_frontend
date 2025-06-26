import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import maventraIcon from "../assets/maventra.png"

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [tagFilter, setTagFilter] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await api.get('/posts/allblog');
                setPosts(res.data);
            } catch (err) {
                console.error('Error fetching posts:', err);
            }
        };

        fetchPosts();
    }, []);

    const filtered = tagFilter
        ? posts.filter(p =>
            p.tags?.some(tag => tag.toLowerCase().includes(tagFilter.toLowerCase()))
        )
        : posts;

    return (
        <div>
            <h2>All Posts</h2>
            <input
                className="form-control mb-3"
                placeholder="Filter by tag..."
                onChange={e => setTagFilter(e.target.value)}
            />
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {filtered.map(post => (
                    <div className="col" key={post._id}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{post.subtitle}</h6>
                                <p className="card-text">{post.content.slice(0, 100)}...</p>
                                <Link to={`/post/${post._id}`} className="btn btn-primary">Read More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
