import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    notification: {
        type: "error" | "warning" | "success";
        message: string;
        data: any;
    };
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Venue {
    id: number;
    name: string;
    location?: string;
    capacity?: number;
    created_at: string;
    updated_at: string;
}

export interface Sport {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Team {
    id: number;
    name: string;
    sport_id: number;
    [key: string]: unknown;
}

export interface Event {
    id: number;
    event_date: string;
    description?: string;
    team_a: Team;
    team_b: Team;
    venue: Venue;
    sport: Sport;
    created_at: string;
    updated_at: string;
}
