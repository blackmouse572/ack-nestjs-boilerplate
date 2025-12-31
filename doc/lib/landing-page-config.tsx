import {
    BrickWallFireIcon,
    GlobeLockIcon,
    HandshakeIcon,
    IdCardIcon,
    KeyIcon,
    TimerResetIcon,
    UserLockIcon,
    Waypoints,
    WaypointsIcon,
} from 'lucide-react';
import { ReactNode } from 'react';

export type FeatureItem = {
    label: string;
    icon: ReactNode;
    description: string;
};
// - **JWT Authentication** - ES256 for Access Token, ES512 for Refresh Token with automatic rotation
// - **Stateful Sessions** - Redis-backed sessions with token revocation support
// - **Social Login** - Google OAuth and Apple Sign In integration ([docs][ref-doc-authentication])
// - **Two-Factor Authentication** - TOTP-based 2FA with backup recovery codes ([docs][ref-doc-two-factor])
// - **RBAC & Policies** - Fine-grained role and permission system ([docs][ref-doc-authorization])
// - **API Key Protection** - Secure external API access control
// - **Rate Limiting** - DDoS protection with configurable throttling
// - **Security Headers** - Helmet integration for HTTP security
export const featuresConfig: FeatureItem[] = [
    {
        label: 'JWT Authentication',
        icon: <KeyIcon />,
        description:
            'ES256 for Access Token, ES512 for Refresh Token with automatic rotation',
    },
    {
        label: 'Stateful Sessions',
        icon: <WaypointsIcon />,
        description: 'Redis-backed sessions with token revocation support',
    },
    {
        label: 'Social Login',
        icon: <HandshakeIcon />,
        description: 'Google OAuth and Apple Sign In integration',
    },
    {
        label: 'Two-Factor Authentication',
        icon: <IdCardIcon />,
        description: 'TOTP-based 2FA with backup recovery codes',
    },
    {
        label: 'RBAC & Policies',
        icon: <UserLockIcon />,
        description: 'Fine-grained role and permission system',
    },
    {
        label: 'API Key Protection',
        icon: <GlobeLockIcon />,
        description: 'Secure external API access control',
    },
    {
        label: 'Rate Limiting',
        icon: <TimerResetIcon />,
        description: 'DDoS protection with configurable throttling',
    },
    {
        label: 'Security Headers',
        icon: <BrickWallFireIcon />,
        description: 'Helmet integration for HTTP security',
    },
];
