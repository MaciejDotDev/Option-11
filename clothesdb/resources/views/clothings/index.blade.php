@forreach ($clothings = $clothing)
<div class="$clothing-item">
    <img src ="{{ $clothing-> image_url }}" alt="{{ $clothing->name }}" class="clothing-image">
    <h3 class ="clothing-name">{{ $clothing->name}}</h3>
    <p class="clothing-description">{{ $clothing->description }}</p>
    <p class="clothing-price">${{ $clothing->price }}</p>
    <form action= "/basket/add" method="POST" class="add-to-basket-form">
@csrf
input type="hidden" name name="item_id" value="{{ $clothing->id }}">
<label for="quantity_{{$clothing->id }}">Quantity:</label>
<input type="number" id= "quantity_{{$clothing->id }}"name="quantity" value="1" min="1"class="quantity-input">
<button type="submit" class="add-to-basket-button">Add to Basket</button>
    </form>
</div>
@endforeach