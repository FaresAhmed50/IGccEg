import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { SocialLink } from '@/interfaces/social-link';

export const socialLinks: SocialLink[] = [
    {
        name: 'Instagram',
        link: 'https://www.linkedin.com/company/igcc-international-center-for-governance-and-consultancy/',
        icon: '/images/icons/linkedin.png',
    },
    {
        name: 'Facebook', // Corrected the name from 'YouTube' to 'Facebook'
        link: 'https://www.facebook.com/profile.php?id=100046246285800',
        icon: '/images/icons/facebook.svg',
    },
];

interface SocialLinkItemProps {
    item: SocialLink;
}

const SocialLinkItem: FC<SocialLinkItemProps> = ({ item }) => (
    <Box
        component="li"
        sx={{
            display: 'inline-block',
            color: 'primary.contrastText',
            mr: 0.5,
        }}
    >
        <Link
            target="_blank"
            sx={{
                lineHeight: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: '50%',
                color: 'inherit',
                '&:hover': {
                    backgroundColor: 'secondary.main',
                },
                '& img': {
                    fill: 'currentColor',
                    width: 22,
                    height: 'auto',
                },
            }}
            href={item.link}
        >
            {/* eslint-disable-next-line */}
            <img src={item.icon} alt={item.name + ' icon'} />
        </Link>
    </Box>
);

// Default SocialLinks Component
const SocialLinks: FC = () => {
    return (
        <Box sx={{ ml: -1, textAlign: { xs: 'center', md: 'left' } }}>
            <Box
                component="ul"
                sx={{
                    m: 0,
                    p: 0,
                    lineHeight: 0,
                    borderRadius: 3,
                    listStyle: 'none',
                }}
            >
                {socialLinks.map((item) => (
                    <SocialLinkItem key={item.name} item={item} />
                ))}
            </Box>
            <Box
                sx={{
                    width: 100,
                    mt: 2, // Add margin-top for spacing
                }}
            >
                <a href={"https://www.illustrav.com/"} target="_blank">
                    <img src="https://res.cloudinary.com/dduxyvs3x/image/upload/v1735824579/illustraV_logo.svg" alt="Logo" />
                </a>
            </Box>
        </Box>
    );
};

export default SocialLinks;