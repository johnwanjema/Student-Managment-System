<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class darasa extends Model
{
    protected $fillable=[
        'className','classType','addedBy'
    ];
    
    public function user(){
        return $this->belongsTo(User::class, 'addedBy','id');
    }
}
