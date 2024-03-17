import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const RedirectButton = ({ auth, category, productId }) => {
  return (
    <a href={route('product', [category, productId])} className="btn btn-primary">
      View
    </a>
  );
};

export default RedirectButton;
