<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Redirect;
use App\Models\Products;
use App\Models\Categories;
use App\Models\Notification;
use App\Models\BikePart;
use App\Models\Accessory;
use App\Models\Bikes;
use App\Models\RepairKit;
use App\Models\Clothes;
class AdminEditProductsController extends Controller
{
    public function show(Request $request)
    {
        $products = Products::with('products')->get();
        return Inertia::render('AdminEditProducts', ['products' => $products]);
    }

    public function userManageAction(Request $request)
    {

        if (request('action') == "update") {

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

    public function delete($productid)
    {



        $product = Products::where('productid', $productid)->first();


        $notification = new Notification();
        $notification->notification_type = "log";
        $notification->notification_title = "Product has been deleted!";
        $orderTime = \Carbon\Carbon::parse($product->created_at)->format('d/m/Y H:i:s');

        $productid = $product->productid;

        $notification->notification_description = "Product $productid, at $orderTime has been deleted";
        $notification->save();

        $product->delete();

        return Redirect::route('adminProducts');

    }


    public function update(Request $request)
    {

        $validateInput = $request->validate([ //need to improve the validation amongst all controllers forms
            'productname' => 'required',
            'productdescription' => 'required',
            'category' => 'required',
            'productprice' => 'required|numeric|not_in:0',
            'imageURL' => 'required',




        ]);

        if ($validateInput) {
            $cat = Categories::where('name', $request->category)->first();
            Products::where('productid', $request->productid)->update([
                'productname' => $request->productname,
                'description' => $request->productdescription,
                'price' => $request->productprice,
                'imageURL' => $request->imageURL,
                'categoryid' => $cat->categoryid,





            ]);


            $product = Products::where('productid', $request->productid)->first();


            $notification = new Notification();
            $notification->notification_type = "log";
            $notification->notification_title = "Product has been updated!";
            $orderTime = \Carbon\Carbon::parse($product->created_at)->format('d/m/Y H:i:s');

            $productid = $product->productid;

            $notification->notification_description = "Product $productid, at $orderTime has been modified";
            $notification->save();
            return Redirect::route('adminProducts');
        }
    }
    public function updateShow(Request $request, $productid)
    {


        $products = Products::with('products')->where('productid', $productid)->first();
        return Inertia::render('RemoveEditProduct', ['products' => $products]);
    }


    public function create(Request $request)
    {
        $validateCategory = $request->validate([ //need to improve the validation amongst all controllers forms
            'category' => 'required',

            'productname' => 'required',
            'productdescription' => 'required',

            'productprice' => 'required|numeric|not_in:0',
            'imageURL' => 'required|not_in:0',
            'stockquantity' => 'required|numeric|not_in:0',



        ]);



        if ($validateCategory) {

            $product = new Products();
                $category = Categories::where('name', request('category'))->first();


                $product->productname = request('productname');
                $product->categoryid = $category->categoryid;
                $product->description = request('productdescription');
                $product->price = request('productprice');
                $product->imageURL = request('imageURL');
                $product->stockquantity = request('stockquantity');
                $product->save();
                $notification = new Notification();
                $notification->notification_type = "log";
                $notification->notification_title = "Product has created";
                $orderTime = \Carbon\Carbon::parse($product->created_at)->format('d/m/Y H:i:s');

                $productid = $product->productid;

                $notification->notification_description = "New product $productid, at $orderTime has been created";
                $notification->save();
            switch (request('category')) {
                case 'bike':
                    $validateCategory = $request->validate([ //need to improve the validation amongst all controllers forms
                        'colour' => 'required',

                        'productCategory' => 'required',
                        'size' => 'required',




                    ]);
                    $bike = new Bikes();
                    $bike->productid = $product->productid;
                    $bike->colour = $request->colour;
                    $bike->size = $request->size;
                    $bike->category = $request->productCategory;
                    $bike->save();
                     return Redirect::route('adminProducts');
                case 'repairkit':
                    $validateCategory = $request->validate([ //need to improve the validation amongst all controllers forms


                        'productCategory' => 'required',

                        'compatibleWith' => 'required',




                    ]);
                    $bike = new RepairKit();
                    $bike->productid = $product->productid;
                    $bike->category = $request->productCategory;
                    $bike->CompatibleWithType = $request->compatibleWith;

                    $bike->save();
                     return Redirect::route('adminProducts');
                case 'clothing':
                    $validateCategory = $request->validate([ //need to improve the validation amongst all controllers forms
                        'colour' => 'required',

                        'productCategory' => 'required',
                        'size' => 'required',




                    ]);
                    $bike = new Clothes();
                    $bike->productid = $product->productid;
                    $bike->colour = $request->colour;
                    $bike->size = $request->size;
                    $bike->category = $request->productCategory;
                    $bike->save();
                   return Redirect::route('adminProducts');
                case 'accessory':
                    $validateCategory = $request->validate([ //need to improve the validation amongst all controllers forms
                        'colour' => 'required',

                        'productCategory' => 'required',
                        'size' => 'required',




                    ]);
                    $bike = new Accessory();
                    $bike->productid = $product->productid;
                    $bike->colour = $request->colour;
                    $bike->size = $request->size;
                    $bike->category = $request->productCategory;
                    $bike->save();
                  return Redirect::route('adminProducts');
                    case 'bikepart':
                        $validateCategory = $request->validate([ //need to improve the validation amongst all controllers forms
                            'colour' => 'required',

                            'productCategory' => 'required',
                            'size' => 'required',




                        ]);
                        $bike = new BikePart();
                        $bike->productid = $product->productid;
                        $bike->colour = $request->colour;
                        $bike->size = $request->size;
                        $bike->category = $request->productCategory;
                        $bike->save();
                  return Redirect::route('adminProducts');
            }



        }

    }
}
