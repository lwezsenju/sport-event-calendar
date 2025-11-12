import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Team, Venue } from '@/types';
import { Dumbbell, MapPin } from 'lucide-react';

export function TeamCard(team: Team) {
    return (
        <Card className="flex flex-col justify-between w-full sm:max-w-xs md:max-w-none mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5" />
                    {team.name}
                </CardTitle>
                <CardDescription className="truncate text-xs sm:text-sm">
                    {team.sport.name || 'No Sport available.'}
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
