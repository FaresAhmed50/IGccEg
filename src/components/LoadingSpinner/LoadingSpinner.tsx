import React, { useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

interface LoadingSpinnerProps {
    children: ReactNode;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check if user has already seen the spinner in this session
        const hasSeenSpinner = sessionStorage.getItem('hasSeenSpinner');

        if (!hasSeenSpinner) {
            // First time in this session - show spinner for 5 seconds
            const timer = setTimeout(() => {
                setLoading(false);
                // Store that user has seen the spinner in this session
                sessionStorage.setItem('hasSeenSpinner', 'true');

                // After spinner disappears, check if we need to scroll to a section
                handleSectionScroll();
            }, 5000);

            return () => clearTimeout(timer);
        } else {
            // User has already seen spinner in this session - don't show it
            setLoading(false);

            // Immediately check if we need to scroll to a section
            setTimeout(handleSectionScroll, 100);
        }
    }, []);

    const handleSectionScroll = () => {
        // Check if there's a hash in the URL
        if (typeof window !== 'undefined') {
            const hash = window.location.hash;
            if (hash) {
                // Remove the # character
                const sectionId = hash.substring(1);

                // Find the element with that ID
                const element = document.getElementById(sectionId);

                // If found, scroll to it
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh', // Full viewport height
                    backgroundColor: 'background.paper', // Match your website's background
                }}
            >
                <CircularProgress color="primary" /> {/* Spinner */}
            </Box>
        );
    }

    return <>{children}</>;
};

export default LoadingSpinner;