<?php $__env->startSection('content'); ?>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"><?php echo e(__('Dashboard')); ?></div>

                <div class="home-input-container">
                    <h2>Basket</h2>
            
                    
            
                    <table id="list-table">
            
            
            
                            
                        <?php if(count($basket) > 0): ?>
                        <tr>
                            <th> Pruduct Name</th>
                            <th> Description</th>
                            <th> Price </th>
                            <th> Quantity  </th>
                            <th> Total price </tr>
                        <?php endif; ?>
            
                    <tbody>
            
            
            
            
                        </thead>
                        <?php $__empty_1 = true; $__currentLoopData = $basket; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $basket): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
            
                        
                        
                            <tr>
                                
                                <th class="plist"><?php echo e(\App\Models\Bikes::find($basket->bikeid)->productname); ?> </th>

                                <th class="plist"><?php echo e(\App\Models\Bikes::find($basket->bikeid)->description); ?> </th>

                                <th class="plist"><?php echo e(\App\Models\Bikes::find($basket->bikeid)->price); ?> </th>

                                <th class="plist"><?php echo e($basket->quantity); ?> </th>

                                
                                <th class="plist"><?php echo e($basket->totalprice); ?> </th>
                               
                            </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                <th> No project found. </th>
                            <?php endif; ?>
                      
                        </tbody>
            
                    </table>
            
            
            
                </div>

                
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\larabank\resources\views//basket.blade.php ENDPATH**/ ?>