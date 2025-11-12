import { CreateTeamDialog } from '@/components/teams/create-team-dialog';
import { TeamCard } from '@/components/teams/teams-card';
import AppLayout from '@/layouts/app-layout';
import { SharedData, Sport, Team } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'sonner';

interface TeamsIndexProps {
    sports: Sport[];
    teams: Team[];
}
export default function TeamsIndex({ sports, teams }: TeamsIndexProps) {
    const notification = usePage<SharedData>().props.notification;
    useEffect(() => {
        console.clear();
        console.log('Notification:', notification);
        if (notification?.type === 'success') {
            toast.success(notification.message);
        } else if (notification?.type === 'error') {
            toast.error(notification.message);
        }
    }, [notification]);
    return (
        <AppLayout>
            <div className="container mx-auto px-3 py-6">
                <div className="flex items-center justify-between">
                    <h1 className="mb-4 text-2xl font-bold">Teams</h1>
                    <CreateTeamDialog sports={sports} />
                </div>

                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {teams.map((team) => (
                        <TeamCard key={team.id} {...team} />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
