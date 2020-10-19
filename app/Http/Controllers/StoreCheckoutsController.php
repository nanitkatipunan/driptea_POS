<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\StoreOrder;
use App\Models\StoreAddOn;
use App\Models\StoreCheckouts;
use Illuminate\Support\Facades\DB;


use Illuminate\Http\Request;

class StoreCheckoutsController extends Controller
{
    public function addCheckout(Request $request){
        $data = $request->all();
        $storeCheckouts = new StoreCheckouts();
        $storeCheckouts->customerId = $data['customerId'];
        $storeCheckouts->subTotal = $data['subTotal'];
        $storeCheckouts->deliveryFee = $data['deliveryFee'];
        $storeCheckouts->total = $data['total'];
        $storeCheckouts->incash = $data['incash'];
        $storeCheckouts->change = $data['change'];
        $storeCheckouts->save();
        $dataOrder = $data['order'];
        foreach($dataOrder as $value) {
            $storeOrder = new StoreOrder();
            $dataAddOns = $value['same_order'];
            $storeOrder->storeCheckoutsId = $storeCheckouts['id'];
            $storeOrder->customerId = $value['customerId'];
            $storeOrder->cashierId = $value['cashierId'];
            $storeOrder->productId = $value['productId'];
            $storeOrder->quantity = $value['quantity'];
            $storeOrder->size = $value['size'];
            $storeOrder->sugarLevel = $value['sugarLevel'];
            $storeOrder->cupType = $value['cupType'];
            $storeOrder->choosenPrice = $value['choosenPrice'];
            $storeOrder->subTotal = $value['subTotal'];
            $storeOrder->status = $value['status'];
            $storeOrder->save();
            foreach ($dataAddOns as $val) {
                $storeAddOns = new StoreAddOn();
                $storeAddOns->storeOrderId = $storeOrder['id'];
                $storeAddOns->addOns = $val['addOns'];
                $storeAddOns->save();
            }
        }
        return response()->json(compact('storeCheckouts'));
    }

    public function retrieveCheckouts(Request $request){
        $storeOrder = StoreOrder::with('orderProduct')->with('sameOrder')->with('getCashier')->with('getCheckouts')->where('storeCheckoutsId', $request->id)->where('deleted_at', null)->get();
        return response()->json(compact('storeOrder'));
    }
    

    public function retrieveYear(Request $request){
       
        
           $filterDate= StoreOrder::select(DB::raw('Year(created_at) as `year`'))
           ->groupBy('year')
           ->get();
           

        //    dd($dailyData);
        return response()->json(compact('filterDate'));

    }
    public function retrieveDailySales(Request $request){

        // dd($request);
        $dailyData = StoreCheckouts::select(DB::raw('sum(total) as `totalSales`'),DB::raw('Day(created_at) as `date`,Month(created_at) as `month`,Year(created_at) as `year`'))
        ->whereYear('created_at', '=',$request->year)
        ->whereMonth('created_at','=',$request->month)
             ->groupby('year','month','date')
             ->get();
        
        // dd($dailySales);
        return response()->json(compact('dailyData'));


    }
}
