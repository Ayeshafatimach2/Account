import Link from 'next/link';
const HomePage = () => {
    return (
        <div className="container">
            <h2>Welcome to the Gym App</h2>
            <p>
                <Link href="/create-account">Create an Account</Link> or <Link href="/login">Log in</Link>
            </p>
        </div>
    );
};

export default HomePage;
