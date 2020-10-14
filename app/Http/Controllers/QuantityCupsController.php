<?php

namespace App\Http\Controllers;
use App\Models\QuantityCups;
use Illuminate\Http\Request;

class QuantityCupsController extends Controller
{
    public function getId(){
        $quantityAll = QuantityCups::get();
        $id = 0;
        foreach($quantityAll as $value) {
            $id = $value['id'];
        }
        return $id;
    }

    public function addIncomingCups(Request $request){
        $id = $this->getId();
        $quantity = QuantityCups::where('id', $id)->get();
        if(sizeof($quantity) > 0){
            $data = $request->all();
            $quantityCups = new QuantityCUps();
            $quantityCups->incomingLowDose = ($data['incomingLowDose']);
            $quantityCups->incomingHighDose = ($data['incomingHighDose']);
            $quantityCups->incomingOverDose = ($data['incomingOverDose']);
            $quantityCups->onRockLowDose = ($data['incomingLowDose'] + $quantity['remainingLowDose']);
            $quantityCups->onRockHighDose = ($data['incomingHighDose'] + $quantity['remainingHighDose']);
            $quantityCups->onRockOverDose = ($data['incomingOverDose'] + $quantity['remainingOverDose']);
            $quantityCups->save();
        }else{
            $data = $request->all();
            $quantityCups = new QuantityCUps();
            $quantityCups->incomingLowDose = $data['incomingLowDose'];
            $quantityCups->incomingHighDose = $data['incomingHighDose'];
            $quantityCups->incomingOverDose = $data['incomingOverDose'];
            $quantityCups->onRockLowDose = $data['incomingLowDose'];
            $quantityCups->onRockHighDose = $data['incomingHighDose'];
            $quantityCups->onRockOverDose = $data['incomingOverDose'];
            $quantityCups->save();
        }
        return response()->json(compact('quantityCups'));
    }

    public function updateRemainingCups(Request $request){
        $id = $this->getId();
        $data = $request->all();
        $quantity = QuantityCups::where('id', $id)->get();
        $quantityCups = QuantityCupsCups::firstOrCreate(['id' => $id]);
        $quantityCups->usedCupsLowDose = ($data['usedCupsLowDose'] + $quantity['usedCupsLowDose']);
        $quantityCups->usedCupsHighDose = ($data['usedCupsHighDose'] + $quantity['usedCupsHighDose']);
        $quantityCups->usedCupsOverDose = ($data['usedCupsOverDose'] + $quantity['usedCupsOverDose']);
        $quantityCups->remainingLowDose = ($quantity['onRockLowDose'] - $data['remainingLowDose']);
        $quantityCups->remainingHighDose = ($quantity['onRockHighDose'] - $data['remainingHighDose']);
        $quantityCups->remainingOverDose = ($quantity['onRockOverDose'] - $data['remainingOverDose']);
        return response()->json(compact('quantityCups'));
    }

    public function retrieveCups(){
        $quantityCups = QuantityCups::get();
        return response()-json(compact('quantityCups'));
    }
}
