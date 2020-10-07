<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Order;
use App\Models\AddOns;
use App\Models\StoreCheckouts;

use Illuminate\Http\Request;

class StoreCheckoutsController extends Controller
{
    public function addCheckout(Request $request){
        $data = $request->all();
        $storeCheckouts = new StoreCheckouts($data);
        $storeCheckouts->save();
        return response()->json(compact('storeCheckouts'));
    }

    public function retrieveCheckouts(Request $request){
        $storeCheckouts = StoreCheckouts::where('customerId', $request['id'])->get();
        $order = Order::with('orderProduct')->with('sameOrder')->where('customerId', $request->id)->where('status', 'complete')->where('deleted_at', null)->get();
        $count = 1;
        foreach($order as $value) {
            $storeCheckouts[0]['order'.$count] = $value;
            $count++;
        }
        return response()->json(compact('storeCheckouts'));
    }
}
