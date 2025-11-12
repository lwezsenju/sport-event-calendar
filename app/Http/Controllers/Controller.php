<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;

abstract class Controller
{
    public function backWith(string $type, string $message, array $data = []): RedirectResponse
    {
        return back()->with(
            'notification',
            [
                'type' =>  $type,
                'message' =>  $message,
                'data' =>  $data
            ]
        );
    }
}
