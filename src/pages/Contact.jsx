// I used the help of Xpert Learning Assistance to write the below code... 

import { useState } from 'react';
import './ContactPage/Contact.css'
import './../css/style.css'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleBlur = (field) => {
        if (!eval(field)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: 'This field is required',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [field]: '',
            }));
        }
    };

    const handleEmailBlur = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailPattern.test(email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Invalid email address',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: '',
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Log the values to the console
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Set confirmation message
        setConfirmation('Thank you for your message!');

        // Optionally, clear the form fields
        setName('');
        setEmail('');
        setMessage('');

    };

    return (
        <div>
            <h1 className='page-section'>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => handleBlur('name')}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleEmailBlur}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onBlur={() => handleBlur('message')}
                    />
                    {errors.message && <span>{errors.message}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
            {confirmation && <p>{confirmation}</p>} {/* Display confirmation message */}
        </div>
    );
};

export default Contact;