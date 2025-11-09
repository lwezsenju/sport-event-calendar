import { EventCard } from '@/components/events/event-card';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Event } from '@/types';
import { formatDistanceToNowStrict } from 'date-fns';
import { Calendar, MapPin } from 'lucide-react';
import React from 'react';
interface Props {
    events: Event[];
}

const EventsIndex: React.FC<Props> = ({ events }) => {
    return (
        <div className="container mx-auto py-6">
            <h1 className="mb-4 text-2xl font-bold">Events</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                    <EventCard key={event.id} {...event} />
                ))}
            </div>
        </div>
    );
};

export default EventsIndex;
