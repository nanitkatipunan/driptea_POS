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
            'addons_price'=> $request['price'],
            'status'=> $request['status']
        ]);
        return response()->json(compact('addOns'));
    }
    
    public function retrieveAddOns(Request $request){
        $addons = AddAddOns::all();
        return response()->json(compact('addons'));
    }

    public function retrieveOneAddOn(Request $request){
        $addons = AddAddOns::find($request->id);
        return response()->json(compact('addons'));
    }

    public function updateStatusAvailable(Request $request){
        $addons = AddAddOns::firstOrCreate(['id' => $request->id]);
        $addons->status = $request['status'];
        $addons->save();
        return response()->json(['success' => 'successfully updated!']);
    }

    public function updateAddOns(Request $request){
        $addons = AddAddOns::firstOrCreate(['id' => $request->id]);
        $addons->addons_name = $request['addOns'];
        $addons->addons_price = $request['price'];
        $addons->status = $request['status'];
        $addons->save();
        return response()->json(['success' => 'successfully updated!']);
    }

}
