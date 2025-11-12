import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Sport } from '@/types';
import { Dumbbell } from 'lucide-react';

export function SportCard(sport: Sport) {
    return (
        <Card className="flex flex-col justify-between w-full sm:max-w-xs md:max-w-none mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5" />
                    {sport.name}
                </CardTitle>
            </CardHeader>
        </Card>
    );
}
