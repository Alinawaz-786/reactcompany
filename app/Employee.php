<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    //
    protected $fillable = [
        'name', 'email', 'phone','created_at','update_at'
    ];
    protected $casts = [
        'created_at' => 'datetime',
    ];
}
