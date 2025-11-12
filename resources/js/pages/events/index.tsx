import { CreateEventDialog } from '@/components/events/create-event-dialog';
import { EventCard } from '@/components/events/event-card';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { Event, SharedData, Sport, Team, Venue } from '@/types';
import { usePage } from '@inertiajs/react';
import { PlusIcon } from 'lucide-react';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
interface Props {
    events: Event[];
    teams: Team[];
    venues: Venue[];
    sports: Sport[];
}

const EventsIndex: React.FC<Props> = ({ events, teams, venues, sports }) => {
    const notification = usePage<SharedData>().props.notification;
    useEffect(() => {
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
            <div className='flex justify-between '>
                <h1 className="mb-4 text-2xl font-bold">Events</h1>
                <CreateEventDialog teams={teams} venues={venues} sports={sports} />
            </div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                    <EventCard key={event.id} {...event} />
                ))}
            </div>
        </div>
        </AppLayout>
    );
};

export default EventsIndex;
