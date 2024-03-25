import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

function WishlistButton() {
    const { data, setData, post, errors } = useForm({
        product_hidden: product.productid,
        quantity: "",
    });
    return (
        <div>
            <h1>Welcome to our application!</h1>
            <InertiaLink href="/dashboard">Go to the dashboard</InertiaLink>
        </div>
    );
}

export default WishlistButton;
