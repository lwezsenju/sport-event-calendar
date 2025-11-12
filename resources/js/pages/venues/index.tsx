import { VenueCard } from '@/components/venues/venue-card';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Venue } from "@/types";
import { PlusIcon } from 'lucide-react';
import React, { useEffect } from "react";

interface VenuesIndexProps {
    venues: Venue[];
}
export default function VenuesIndex({ venues }: VenuesIndexProps) {
    useEffect(() => {
        console.log("Venues:", venues);
    }, [venues]);
    
    return (
        <AppLayout>
            <div className="container mx-auto py-6 px-3">
                <div className='flex justify-between items-center'>
                    <h1 className="mb-4 text-2xl font-bold">Venues</h1>
                    <Button>
                        <PlusIcon className="mr-2 h-4 w-4" />
                        Create Venue
                    </Button>
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