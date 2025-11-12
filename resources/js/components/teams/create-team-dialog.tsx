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
import { Sport } from '@/types';
import { useForm } from '@inertiajs/react';
import { PlusIcon } from 'lucide-react';

import { FormEventHandler, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
interface CreateTeamDialogProps{
    sports: Sport[];
}

export function CreateTeamDialog({ sports }: CreateTeamDialogProps) {
    const { data, setData, post, reset, processing, errors, clearErrors } = useForm({
        name: '',
        sport_id: '',
    });
    
    const [open, setOpen] = useState(false);
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('teams.store'), {
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
                    Create Team
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>Create Sport</DialogTitle>
                    </DialogHeader>
                    
                    <div className="grid gap-4 my-3">
                        <div className="grid gap-3">
                            <Label htmlFor="teamname-1">Team Name</Label>
                            <Input
                                id="teamname-1"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                required
                                name="name"
                                placeholder='Lorem FC'
                                aria-invalid={!!errors.name}
                            />
                            {errors.name && (
                                <span className="text-xs text-red-500">
                                    {errors.name}
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
                            Create Team
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
