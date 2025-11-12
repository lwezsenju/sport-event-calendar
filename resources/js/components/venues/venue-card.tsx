import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Venue } from '@/types';
import { MapPin } from 'lucide-react';

export function VenueCard(venue: Venue) {
    return (
        <Card className="flex flex-col justify-between w-full sm:max-w-xs md:max-w-none mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {venue.name}
                </CardTitle>
                <CardDescription className="truncate text-xs sm:text-sm">
                    {venue.location || 'No location available.'}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {venue.capacity && (
                        <div>
                            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                                Capacity
                            </p>
                            <p className="font-medium text-slate-200">
                                {venue.capacity.toLocaleString()} seats
                            </p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
