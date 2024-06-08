import LoginForm from '@/app/login/page'; // Importing the LoginForm component
import Image from 'next/image'; // Importing the Image component from Next.js

const LoginPage = () => {
    return (
        <div className="container">
            {/* Displaying the logo using the Image component */}
            <Image src="/assets/images/OIG4.jpeg" alt="Gym Logo" className="logo" width={150} height={150} />
            <h2>Login</h2>
            {/* Rendering the LoginForm component */}
            <LoginForm />
            {/* Link to create account page */}
            <p>Don't have an account? <a href="/create-account">Create one</a></p>
        </div>
    );
};

export default LoginPage;
