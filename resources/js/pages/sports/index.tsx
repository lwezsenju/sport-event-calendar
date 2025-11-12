import { SportCard } from '@/components/sports/sport-card';
import AppLayout from '@/layouts/app-layout';
import { Sport } from '@/types';

interface SportsIndexProps {
    sports: Sport[];
}
export default function SportsIndex({ sports }: SportsIndexProps) {
    return (
        <AppLayout>
            <div className="container mx-auto px-3 py-6">
                <div className="flex items-center justify-between">
                    <h1 className="mb-4 text-2xl font-bold">Sports</h1>
                </div>

                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {sports.map((sport) => (
                        <SportCard key={sport.id} {...sport} />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
