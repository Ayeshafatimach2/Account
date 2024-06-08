import { useState } from 'react';

const LoginForm = () => {
    // State variables to hold email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to validate email format using regular expression
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Validate email format
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Validate password length
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // If email and password are valid, show a success message and clear the form fields
        alert('Login successful!');
        setEmail('');
        setPassword('');
    };

    return (
        // Form element with onSubmit event handler set to handleSubmit function
        <form onSubmit={handleSubmit}>
            {/* Email input field */}
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            {/* Password input field */}
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {/* Submit button */}
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
};

export default LoginForm;
