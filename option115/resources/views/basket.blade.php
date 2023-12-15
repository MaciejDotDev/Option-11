@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="home-input-container">
                    <h2>Basket</h2>
            
                    
            
                    <table id="list-table">
            
            
            
                            
                        @if (count($basket) > 0)
                        <tr>
                            <th> Pruduct Name</th>
                            <th> Description</th>
                            <th> Price </th>
                            <th> Quantity  </th>
                            <th> Total price </tr>
                        @endif
            
                    <tbody>
            
            
            
            
                        </thead>
                        @forelse($basket as $index => $basket)
            
                        
                        
                            <tr>
                                
                                <th class="plist">{{ \App\Models\Bikes::find($basket->bikeid)->productname }} </th>

                                <th class="plist">{{ \App\Models\Bikes::find($basket->bikeid)->description }} </th>

                                <th class="plist">{{ \App\Models\Bikes::find($basket->bikeid)->price }} </th>

                                <th class="plist">{{ $basket->quantity }} </th>

                                
                                <th class="plist">{{ $basket->totalprice }} </th>
                               
                            </tr>
                            @empty
                                <th> No items found. </th>
                            @endforelse
                      
                        </tbody>
            
                    </table>
            
            
            
                </div>

                
            </div>
        </div>
    </div>
</div>
@endsection
