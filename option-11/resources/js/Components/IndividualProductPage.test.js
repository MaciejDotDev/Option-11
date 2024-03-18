import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import IndividualProductPage from './IndividualProductPage';

describe('IndividualProductPage Component', () => {
    it('renders without crashing', () => {
        if (typeof document !== 'undefined') {
        render(<IndividualProductPage auth={{}} product={{}} />);
        }
    });

    it('initializes state correctly', () => {
        if (typeof document !== 'undefined') {
        const { getByLabelText } = render(<IndividualProductPage auth={{}} product={{}} />);
        const quantityInput = getByLabelText('Quantity');
        expect(quantityInput.value).toBe('');
        }
    });

    it('submits form with correct data', async () => {
        if (typeof document !== 'undefined') {
        const mockPost = jest.fn();
        const { getByText, getByLabelText } = render(
            <IndividualProductPage auth={{}} product={{ productid: '1', productname: 'Bike 1', description: 'Description', price: 100, category: 'Category' }} post={mockPost} />
        );
        const quantityInput = getByLabelText('Quantity');
        fireEvent.change(quantityInput, { target: { value: '2' } });
        const addToBasketButton = getByText('Add to basket');
        fireEvent.click(addToBasketButton);
        await waitFor(() => {
            expect(mockPost).toHaveBeenCalledWith('/addBasket', { productid_hidden: '1', quantity: '2' });
        });
        }
    });
    });
