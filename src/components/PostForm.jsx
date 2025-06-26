import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api'; 

export default function PostForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: '',
    subtitle: '',
    content: '',
    tags: ''
  });

  useEffect(() => {
    if (id) {
      api.get(`/posts/${id}`)
        .then(res => setPost({
          ...res.data,
          tags: res.data.tags.join(', ')
        }))
        .catch(err => console.error('Error fetching post:', err));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...post,
        tags: post.tags.split(',').map(tag => tag.trim())
      };

      if (id) {
        await api.put(`/posts/${id}`, payload);
        alert('Post updated successfully');
      } else {
        await api.post('/posts', payload);
        alert('Post created successfully');
      }
      navigate('/');
    } catch (err) {
      console.error('Error saving post:', err);
      alert('Failed to save post. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Edit' : 'Create'} Post</h2>
      <input
        className="form-control mb-3"
        placeholder="Title"
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
        required
      />
      <input
        className="form-control mb-3"
        placeholder="Subtitle"
        value={post.subtitle}
        onChange={e => setPost({ ...post, subtitle: e.target.value })}
        required
      />
      <textarea
        className="form-control mb-3"
        placeholder="Content"
        rows="5"
        value={post.content}
        onChange={e => setPost({ ...post, content: e.target.value })}
        required
      />
      <input
        className="form-control mb-3"
        placeholder="Tags (comma-separated)"
        value={post.tags}
        onChange={e => setPost({ ...post, tags: e.target.value })}
      />
      <button className="btn btn-success">{id ? 'Update' : 'Create'} Post</button>
    </form>
  );
}
