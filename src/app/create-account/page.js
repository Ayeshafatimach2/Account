import { useClient } from 'next/client'; // Import useClient hook from Next.js
import CreateAccountForm from '@/app/create-account/page'; // Update the import path
import Image from 'next/image';

const CreateAccountPage = () => {
    useClient(); // Mark the parent component as a client-side component

    return (
        <div className="container">
            <Image src="/assets/images/OIG4.1y.jpeg" alt="Gym Logo" className="logo" width={150} height={150} />
            <h2>Create Account</h2>
            <CreateAccountForm />
            <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
    );
};

export default CreateAccountPage;
