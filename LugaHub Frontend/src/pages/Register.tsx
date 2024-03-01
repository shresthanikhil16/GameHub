import React, { FC, useState } from 'react';
import axios from 'axios';
import '../assets/css/Register.css'; // Assuming you create a Register.css for styling
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";


const Register: FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSave = async () => {
        try {
            // Make HTTP POST request to the backend endpoint
            const response = await axios.post('http://localhost:8082/user/save', {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            });

            // Log response data if needed
            console.log('Registration successful:', response.data);

            // Clear form fields after successful registration
            setFirstName('');
            setLastName('');
            setEmail('');
            setConfirmPassword('');
            setPassword('');
        } catch (error) {
            // Handle errors if any
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className='reg-wrapper'>
            <form onSubmit={handleSave}>
                <h1>Register</h1>

                <div className="input-box">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <div className='icon'>
                        <FaUser />
                    </div>
                </div>

                {/* Last Name input box */}
                <div className="input-box">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <div className='icon'>
                        <FaUser />
                    </div>
                </div>

                {/* Email input box */}
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className='icon'>
                        <FaEnvelope />
                    </div>
                </div>

                {/* Password input box */}
                <div className="input-box">
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='icon'>
                        <FaLock />
                    </div>
                </div>

                {/* Confirm Password input box */}
                <div className="input-box">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input
                        type="text"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className='icon'>
                        <FaLock />
                    </div>
                </div>

                <button type="submit" className="save-button">
                    Register
                </button>

                <div className="login-link">
                    <p>Already have an account? <a href="./Login">Login</a></p>
                </div>
            </form>
        </div>
    );
}

export default Register;
