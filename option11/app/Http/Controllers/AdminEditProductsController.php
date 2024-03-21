<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use App\Models\Products;
use App\Models\Categories;
class AdminEditProductsController extends Controller
{
    public function show(Request $request)
    {
        $products = Products::with('products')->get();
        return Inertia::render('AdminEditProducts', ['products' => $products]);
    }

    public function userManageAction(Request $request) {

        if (request('action') == "update") {
            logger($request->all());
            $this->update($request);
            return Redirect::route('adminProducts');

        } else if (request('action') == "remove") {

            $this->delete($request->productid);

            return Redirect::route('adminProducts');
        } else {
           // use this for debugging check the storage/logs for results logger($request->all());
           return Redirect::route('adminProducts');
        }






    }

    public function delete($productid) {



        $product = Products::where('productid', $productid);

        $product->delete();



    }


public function update(Request $request) {

    $validateInput = $request->validate([ //need to improve the validation amongst all controllers forms
        'productname' => 'required',
        'productdescription' => 'required',
        'category' => 'required',
        'productprice' => 'required|numeric|not_in:0',




    ]);


    $cat =  Categories::where('name',$request->category)->first();
    Products::where('productid',$request->productid)->update([
        'productname' => $request->productname,
        'description' => $request->productdescription,
        'price' => $request->productprice,
        'categoryid' => $cat->categoryid,





    ]);


}
    public function updateShow (Request $request,$productid) {


 $products = Products::with('products')->where('productid',$productid)->first();
        return Inertia::render('RemoveEditProduct', ['products' => $products]);
    }


    public function create (Request $request) {


        $validateInput = $request->validate([ //need to improve the validation amongst all controllers forms
            'productname' => 'required',
            'productdescription' => 'required',
            'category' => 'required',
            'productprice' => 'required|numeric|not_in:0',
            'imageURL' => 'required|not_in:0',
            'stockquantity' => 'required|numeric|not_in:0',




        ]);

        if ($validateInput) {

            $product = new Products();
           $category =  Categories::where('name', request('category'))->first();


                $product->productname =request('productname');
                $product->categoryid =  $category->categoryid;
                $product->description =request('productdescription');
                $product->price =request('productprice');
                $product->imageURL= request('imageURL');
                $product->stockquantity= request('stockquantity');
                $product->save();

                return Redirect::route('adminProducts');

    }
    }

}
