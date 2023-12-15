<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Bikes;

use App\Models\Basket;

class ManageBasketController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */





public function search() {



    $basket = Basket::where('userid', auth()->user()->userid)->get();



    return view('/basket')->with('basket', $basket);
}


public function createProject(Request $request) {




    $validateInput = $request->validate([
        'title'=>'required',
        'startDate'=>'required',
        'endDate'=>'required',
        'phase'=>'required',
        'description'=>'required'




    ]);



    $validateDate=  $request->validate([
        'startDate' => 'before:endDate',
        'endDate'=>'after:startDate'
    ]);





if ($validateInput){

    if($validateDate) {

        $project = new Projects();
        $project->uid =  auth()->user()->uid;
        $project->title = request('title');
        $project->description =request('description');
        $project->start_date =request('startDate');
        $project->end_date =request('endDate');
        $project->phase =request('phase');
        $project->save();
        return redirect()->route('manageProjects');



    } else {

         return back()->withErrors($validateDate)->withInput();





    }





   } else {


    return back()->withErrors($validateInput)->withInput();
   }








}




public function deleteProject(Request $request) {

    $project_uid =$request->input('project_uid');

    $projects = Projects::where('pid', $project_uid);

    $projects->delete();
    return redirect()->route('manageProjects');




}




public function updateProject(Request $request,$pid) {

    $validateInput = $request->validate([
        'updateTitle'=>'required',
        'updateStartDate'=>'required',
        'updateEndDate'=>'required',
        'updatePhase'=>'required',
        'updateDescription'=>'required'




    ]);

    $validateDate=  $request->validate([
        'updateStartDate' => 'before:updateEndDate',
        'updateEndDate'=>'after:updateStartDate'
    ]);

   if ($validateInput){

    if($validateDate) {

        $update = Projects::where('pid',$pid)->update([
            'title' => $request->updateTitle,
            'description' => $request->updateDescription,
            'start_date' => $request->updateStartDate,
            'end_date' => $request->updateEndDate,
            'phase' => $request->updatePhase



        ]);
        return redirect()->route('manageProjects');

    } else {

        return back()->withErrors($validateDate)->withInput();
    }





   } else {


    return back()->withErrors($validateInput)->withInput();
   }







}








}
