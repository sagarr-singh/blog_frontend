import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // API call logic here
    };

    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input className="form-control" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <button className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );
}
