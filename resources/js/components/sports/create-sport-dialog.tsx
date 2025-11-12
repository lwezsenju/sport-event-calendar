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
import { useForm } from '@inertiajs/react';
import { PlusIcon } from 'lucide-react';

import { FormEventHandler, useState } from 'react';

export function CreatesportDialog() {
    const { data, setData, post, reset, processing, errors, clearErrors } = useForm({
        name: '',
    });
    
    const [open, setOpen] = useState(false);
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('sports.store'), {
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
                    Create Sport
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>Create Sport</DialogTitle>
                    </DialogHeader>
                    
                    <div className="grid gap-4 my-3">
                        <div className="grid gap-3">
                            <Label htmlFor="sportname-1">Sport Name</Label>
                            <Input
                                id="sportname-1"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                required
                                name="name"
                                placeholder='Football'
                                aria-invalid={!!errors.name}
                            />
                            {errors.name && (
                                <span className="text-xs text-red-500">
                                    {errors.name}
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
                            Create Sport
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
