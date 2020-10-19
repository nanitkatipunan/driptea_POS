<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\QuantityCups;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CupsInventoryController extends Controller
{
     public function retrieveCupToDisplay(Request $request){
         $retrieveCups = QuantityCups::get();
       
        return response()->json(compact('retrieveCups'));
    }
}
