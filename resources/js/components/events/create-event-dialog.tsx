import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sport, Team, Venue } from '@/types';
import { useForm } from '@inertiajs/react';
import { PlusIcon } from 'lucide-react';

import { FormEventHandler, useEffect, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';

interface CreateEventDialogProps {
    teams: Team[];
    venues: Venue[];
    sports: Sport[];
}

export function CreateEventDialog({
    teams,
    venues,
    sports,
}: CreateEventDialogProps) {
    const [filteredTeams, setFilteredTeams] = useState<Team[]>(teams);
    const [sportSelected, setSportSelected] = useState<boolean>(false);
    const { data, setData, post, reset, processing, errors, clearErrors } = useForm({
        event_date: '',
        description: '',
        sport_id: '',
        team_a_id: '',
        team_b_id: '',
        venue_id: '',
    });
    
    useEffect(() => {
        console.log('Teams:', teams);
    }, []);
    function handleSportChange(value: string) {
        setSportSelected(!!value);
        if (value) {
            setFilteredTeams(
                teams.filter((team) => team.sport_id.toString() === value),
            );
        } else {
            setFilteredTeams(teams);
        }
    }
    const [open, setOpen] = useState(false);
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('events.store'), {
            onSuccess: (data) => {
                console.log(data);
                reset();
                setOpen(false);
            },
        });
    };
    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen);
        if (!isOpen) {
            reset();
            clearErrors();
            setSportSelected(false);
            setFilteredTeams(teams);
        }
    };
    return (
        <Dialog
            open={open}
            onOpenChange={handleOpenChange}
        >
            <DialogTrigger asChild>
                <Button  aria-label="Submit">
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Create Event
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>Create Event</DialogTitle>
                    </DialogHeader>
                    
                    <div className="grid gap-4 my-3">
                        <div className="grid gap-3">
                            <Label htmlFor="eventdate-1">Event Date</Label>
                            <Input
                                id="eventdate-1"
                                value={data.event_date}
                                onChange={(e) =>
                                    setData('event_date', e.target.value)
                                }
                                required
                                type="datetime-local"
                                name="event_date"
                                aria-invalid={!!errors.event_date}
                            />
                            {errors.event_date && (
                                <span className="text-xs text-red-500">
                                    {errors.event_date}
                                </span>
                            )}
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description-1">Description</Label>
                            <Input
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                                value={data.description}
                                id="description-1"
                                name="description"
                                required
                                aria-invalid={!!errors.description}
                                placeholder="lorem ipsum"
                            />
                            {errors.description && (
                                <span className="text-xs text-red-500">
                                    {errors.description}
                                </span>
                            )}
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="sport-1">Kind of Sport</Label>
                            <Select
                                name="sport-1"
                                value={data.sport_id}
                                aria-invalid={!!errors.sport_id}
                                onValueChange={(value) => {
                                    setData('sport_id', value);
                                    handleSportChange(value);
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Sport" />
                                </SelectTrigger>
                                <SelectContent>
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
                            {errors.sport_id && (
                                <span className="text-xs text-red-500">
                                    {errors.sport_id}
                                </span>
                            )}
                        </div>
                        {sportSelected && (
                            <div className="grid grid-cols-2 gap-3">
                                <Select
                                    name="team-a-1"
                                    value={data.team_a_id}
                                    aria-invalid={!!errors.team_a_id}
                                    onValueChange={(value) =>
                                        setData('team_a_id', value)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Team A" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {filteredTeams.map((team) => (
                                            <SelectItem
                                                key={team.id}
                                                value={team.id.toString()}
                                            >
                                                {team.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                {errors.team_a_id && (
                                    <span className="text-xs text-red-500">
                                        {errors.team_a_id}
                                    </span>
                                )}
                                <Select
                                    name="team-b-1"
                                    value={data.team_b_id}
                                    aria-invalid={!!errors.team_b_id}
                                    onValueChange={(value) =>
                                        setData('team_b_id', value)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Team B" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {filteredTeams.map((team) => (
                                            <SelectItem
                                                key={team.id}
                                                value={team.id.toString()}
                                            >
                                                {team.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.team_b_id && (
                                    <span className="text-xs text-red-500">
                                        {errors.team_b_id}
                                    </span>
                                )}
                            </div>
                        )}
                        <div className="grid gap-3">
                            <Label htmlFor="venue-1">Venue</Label>
                            <Select
                                name="venue-1"
                                value={data.venue_id}
                                aria-invalid={!!errors.venue_id}
                                onValueChange={(value) =>
                                    setData('venue_id', value)
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Venue" />
                                </SelectTrigger>
                                <SelectContent>
                                    {venues.map((venue) => (
                                        <SelectItem
                                            key={venue.id}
                                            value={venue.id.toString()}
                                        >
                                            {venue.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.venue_id && (
                                <span className="text-xs text-red-500">
                                    {errors.venue_id}
                                </span>
                            )}
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            disabled={processing}
                            onClick={submit}
                        >
                            Create Event
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
