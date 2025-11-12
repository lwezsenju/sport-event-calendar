import { CreatesportDialog } from '@/components/sports/create-sport-dialog';
import { SportCard } from '@/components/sports/sport-card';
import AppLayout from '@/layouts/app-layout';
import { SharedData, Sport } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'sonner';

interface SportsIndexProps {
    sports: Sport[];
}
export default function SportsIndex({ sports }: SportsIndexProps) {
    const notification = usePage<SharedData>().props.notification;
    useEffect(() => {
        console.clear();
        console.log('Notification:', notification);
        if (notification?.type === 'success') {
            toast.success(notification.message);
        }else if (notification?.type === 'error') {
            toast.error(notification.message);
        }
    },[notification]);
    return (
        <AppLayout>
            <div className="container mx-auto px-3 py-6">
                <div className="flex items-center justify-between">
                    <h1 className="mb-4 text-2xl font-bold">Sports</h1>
                    <CreatesportDialog />
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
