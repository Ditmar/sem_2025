import React from 'react';

export interface ButtonProps {
    children: React.ReactNode,
    sizes: 'small' | 'medium' | 'large',
    variant: 'primary' | 'secondary' | 'tertiary',
    onClick?: () => void,
}