import { useState } from 'react';

const CreateAccountForm = () => {
    // State variables to hold email, password, and role
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

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

        // Validate role selection
        if (!role) {
            alert('Please select a role.');
            return;
        }

        // If email, password, and role are valid, show a success message and clear the form fields
        alert('Account created successfully!');
        setEmail('');
        setPassword('');
        setRole('');
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
            {/* Role selection dropdown */}
            <div>
                <label htmlFor="role">Role:</label>
                <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="">Select a role</option>
                    <option value="coach">Coach</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            </div>
            {/* Submit button */}
            <div>
                <button type="submit">Create Account</button>
            </div>
        </form>
    );
};

export default CreateAccountForm;
