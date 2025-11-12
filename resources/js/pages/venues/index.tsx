import { VenueCard } from '@/components/venues/venue-card';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { SharedData, Venue } from "@/types";
import { PlusIcon } from 'lucide-react';
import React, { useEffect } from "react";
import { CreateVenueDialog } from '@/components/venues/create-venue-dialog';
import { usePage } from '@inertiajs/react';
import { toast } from 'sonner';

interface VenuesIndexProps {
    venues: Venue[];
}
export default function VenuesIndex({ venues }: VenuesIndexProps) {
    useEffect(() => {
        console.log("Venues:", venues);
    }, [venues]);
    const notification = usePage<SharedData>().props.notification;
    useEffect(() => {
        console.clear();
        console.log('Notification:', notification);
        if (notification?.type === 'success') {
            toast.success(notification.message);
        }else if (notification?.type === 'error') {
            toast.error(notification.message);
        }
    },[notification]);
    return (
        <AppLayout>
            <div className="container mx-auto py-6 px-3">
                <div className='flex justify-between items-center'>
                    <h1 className="mb-4 text-2xl font-bold">Venues</h1>
                    <CreateVenueDialog />
                </div>

                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {venues.map((venue) => (
                        <VenueCard key={venue.id} {...venue} />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}