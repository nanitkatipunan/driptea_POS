<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\CustomerDetails;

use Illuminate\Http\Request;

class CustomerDetailsController extends Controller
{
    public function insertCustomer(Request $request){
        $data = $request->all();
        $customerDetails = new CustomerDetails($data);
        $customerDetails->save();

        return response()->json(compact('customerDetails'));
    }
}
