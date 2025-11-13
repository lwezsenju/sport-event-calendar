import { CreateEventDialog } from '@/components/events/create-event-dialog';
import { EventCard } from '@/components/events/event-card';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { Event, SharedData, Sport, Team, Venue } from '@/types';
import { usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
interface Props {
    events: Event[];
    teams: Team[];
    venues: Venue[];
    sports: Sport[];
}

const EventsIndex: React.FC<Props> = ({ events, teams, venues, sports }) => {
    const notification = usePage<SharedData>().props.notification;
    const [sportSelected, setSportSelected] = useState<string | null>(null);
    const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
    useEffect(() => {
        console.log('Notification:', notification);
        if (notification?.type === 'success') {
            toast.success(notification.message);
        } else if (notification?.type === 'error') {
            toast.error(notification.message);
        }
    }, [notification]);
    useEffect(() => {
        if (!sportSelected || sportSelected === 'all') {
            setFilteredEvents(events);
        } else {
            setFilteredEvents(
                events.filter(
                    (event) => event.team_a.sport_id.toString() === sportSelected,
                ),
            );
        }
    }, [events, sportSelected]);

    function handleSportChange(value: string) {
        setSportSelected(value);
    }
    return (
        <AppLayout>
            <div className="container mx-auto px-3 py-6">
                <div className="flex justify-between">
                    <h1 className="mb-4 text-2xl font-bold">Events</h1>
                    <CreateEventDialog
                        teams={teams}
                        venues={venues}
                        sports={sports}
                    />
                </div>
                <hr/>
                <div className="mb-4 flex items-end justify-end">
                    <div className='text-right'>
                        <Label htmlFor="sport" className='text-gray-400'>Sort by Sport</Label>
                        <Select
                            name="sport"
                            value={sportSelected ?? undefined}
                            onValueChange={(value) => {
                                handleSportChange(value);
                            }}
                            defaultValue="all"
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Sport" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Sports</SelectItem>
                                {sports.map((sport) => (
                                    <SelectItem
                                        key={sport.id}
                                        value={sport.id.toString()}
                                    >
                                        {sport.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {filteredEvents.map((event) => (
                        <EventCard key={event.id} {...event} />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default EventsIndex;
