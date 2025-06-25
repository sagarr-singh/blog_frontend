import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostForm from './components/PostForm';
import PostView from './components/PostView';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/post/new" element={<PostForm />} />
          <Route path="/post/edit/:id" element={<PostForm />} />
          <Route path="/post/:id" element={<PostView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
