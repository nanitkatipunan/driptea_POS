<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function formSubmit(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'price' => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'productCategory' => 'required|string|max:255',
            'productName' => 'required|string|max:255',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $imageName = time().'.'.$request->image->getClientOriginalExtension();
        $request->image->move(public_path('images'), $imageName);
        $data = $request->all();
        $product = new Product();
        $product->price = $data['price'];
        $product->productCategory = $data['productCategory'];
        $product->productName = $data['productName'];
        $product->image = 'images/'.$imageName;
        $product->save();
        
    	return response()->json(['success'=>'You have successfully upload image.']);
    }

    public function updateProduct(Request $request){
        $imageName = time().'.'.$request->image->getClientOriginalExtension();
        $product = Product::firstOrCreate(['id' => $request->id]);
        $product->price = $request['price'];
        $product->productCategory = $request['productCategory'];
        $product->productName = $request['productName'];
        $product->image = 'images/'.$imageName;
        $product->save();
        return response()->json(compact('product'));
    }

    public function retrieveProduct(Request $request){
        $type = $request['type'];
        $product = Product::where('productCategory', $type)->get();
        return response()->json(compact('product'));
    }

    public function retrieveOneProduct(Request $request){
        $product = Product::where('id', $request->id)->get();
        return response()->json(compact('product'));
    }
}
