<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\AddAddOns;

use Illuminate\Http\Request;

class AddAddOnsController extends Controller
{
    public function addAddons(Request $request){
        $addOns = AddAddOns::create([
            'addons_name' => $request['addOns'],
            'addons_price'=> $request['price']
        ]);
        return response()->json(compact('addOns'));
    }
    
    public function retrieveAddOns(Request $request){
        $addons = AddAddOns::all();
        return response()->json(compact('addons'));
    }
 
}
