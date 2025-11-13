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


export function EventCard(event: Event) {
    const formattedDate = new Date(event.event_date).toLocaleString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    });

    const timeFromNow = formatDistanceToNowStrict(new Date(event.event_date), {
        addSuffix: true,
    });

    return (
    <Card className="flex flex-col justify-between w-full max-w-xs md:max-w-none mx-auto">
            <CardHeader>
                <CardTitle className="flex justify-between">
                    <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4"></Calendar>
                        {formattedDate}
                    </div>

                    <Badge variant="secondary">
                        {timeFromNow}
                    </Badge>
                </CardTitle>
                <CardDescription className="truncate">
                    {event.description || 'No description available.'} <br />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="my-10 flex items-center justify-between gap-4">
                    <span>{event.team_a.name}</span>
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
    );
}
