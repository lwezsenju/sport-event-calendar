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


export function CreateVenueDialog() {
    const { data, setData, post, reset, processing, errors, clearErrors } = useForm({
        name: '',
        location: '',
        capacity: '',
    });
    
    const [open, setOpen] = useState(false);
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('venues.store'), {
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
                    Create Venue
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>Create Venue</DialogTitle>
                    </DialogHeader>
                    
                    <div className="grid gap-4 my-3">
                        <div className="grid gap-3">
                            <Label htmlFor="venuename-1">Venue Name</Label>
                            <Input
                                id="venuename-1"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                required
                                name="name"
                                placeholder='Camp Nou'
                                aria-invalid={!!errors.name}
                            />
                            {errors.name && (
                                <span className="text-xs text-red-500">
                                    {errors.name}
                                </span>
                            )}
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="location-1">Location</Label>
                            <Input
                                onChange={(e) =>
                                    setData('location', e.target.value)
                                }
                                value={data.location}
                                id="location-1"
                                name="location"
                                required
                                aria-invalid={!!errors.location}
                                placeholder="Les Corts, 08028 Barcelona, Spanien"
                            />
                            {errors.location && (
                                <span className="text-xs text-red-500">
                                    {errors.location}
                                </span>
                            )}
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="capacity-1">Capacity</Label>
                            <Input
                                onChange={(e) =>
                                    setData('capacity', e.target.value)
                                }
                                value={data.capacity}
                                id="capacity-1"
                                name="capacity"
                                required
                                type="number"
                                aria-invalid={!!errors.capacity}
                                placeholder="105000"
                            />
                            {errors.capacity && (
                                <span className="text-xs text-red-500">
                                    {errors.capacity}
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
                            Create Venue
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
