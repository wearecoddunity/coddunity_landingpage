import React, { useState } from 'react';
import { TextField, Button } from "@mui/material";
import Image from "next/image";

export default function ContactCard({ heading }) {
    if (typeof heading !== "string") {
        throw new Error("Heading must be a string");
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        query: ''
    });

    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevVal) => ({
            ...prevVal,
            [name]: value
        }));

        if (errors[name]) {
            setErrors((prevVal) => {
                const newErrors = { ...prevVal };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.query.trim()) {
            newErrors.query = 'Query is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            console.log('Form submitted:', formData);
            setFormData(() => {
                return {
                    name: "",
                    email: "",
                    query: ""
                };
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h1 className="text-4xl mb-5 font-semibold text-center text-blue-600">{heading}</h1>
            <div className="flex flex-wrap justify-around items-center gap-6 p-4">
                <div className="relative w-full max-w-md">
                    <Image
                        src="/assets/get-in-touch.png"
                        alt="Contact Us"
                        layout="responsive"
                        width={500}
                        height={400}
                        className="rounded-lg object-cover bg-background"
                    />
                </div>
                <form
                    noValidate
                    id="contactForm"
                    onSubmit={handleSubmit}
                    className="w-full max-w-md space-y-4 p-6 shadow-lg rounded-lg bg-white"
                >
                    <TextField
                        fullWidth
                        required
                        name="name"
                        label="Name"
                        variant="outlined"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                    />

                    <TextField
                        fullWidth
                        required
                        name="email"
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                    />

                    <TextField
                        fullWidth
                        required
                        multiline
                        rows={4}
                        name="query"
                        label="Query"
                        variant="outlined"
                        value={formData.query}
                        onChange={handleChange}
                        error={!!errors.query}
                        helperText={errors.query}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="mt-4 py-3"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
}