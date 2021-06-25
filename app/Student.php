<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class student extends Model
{
    //
    protected $fillable = [
        'firstName', 'lastName',  'email', 'classId'
        ];

    protected $appends = ['full_name', ];
    
    public function getFullNameAttribute()
    {
        return $this->firstName.' '.$this->lastName;
    }

    public function darasa(){
        return $this->belongsTo(darasa::class, 'classId','id');
    }
}
