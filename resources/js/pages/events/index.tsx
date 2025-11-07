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
                    <Card key={event.id} className='flex flex-col justify-between'>
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                <div className="flex items-center gap-2 text-sm">
                                    <Calendar className="h-4 w-4"></Calendar>
                                    {new Date(event.event_date).toLocaleString(
                                        undefined,
                                        {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                            hour: 'numeric',
                                            minute: '2-digit',
                                        },
                                    )}
                                </div>

                                <Badge variant="secondary">
                                    {formatDistanceToNowStrict(
                                        new Date(event.event_date),
                                        { addSuffix: true },
                                    )}
                                </Badge>
                            </CardTitle>
                            <CardDescription className="truncate">
                                {event.description ||
                                    'No description available.'}{' '}
                                <br />
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="my-10 flex items-center justify-between gap-4">
                                <span>{event.team_b.name}</span>
                                <div className="flex flex-col items-center gap-2">
                                    <Badge variant="destructive">VS</Badge>
                                </div>
                                <span>{event.team_b.name}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4"></MapPin>
                                <div>
                                    <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                                        Venue
                                    </p>
                                    <p className="font-medium text-slate-200">
                                        {event.venue.name}
                                    </p>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default EventsIndex;
