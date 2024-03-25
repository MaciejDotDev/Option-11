import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Bike from './Bike';

describe('Bike Component', () => {
  it('renders without crashing', () => {
    if (typeof document !== 'undefined') {
      render(<Bike bikes={[]} auth={{}} openModal={() => {}} />);
    }
  });

  it('initializes state correctly', () => {
    if (typeof document !== 'undefined') {
      const { getByLabelText } = render(<Bike bikes={[]} auth={{}} openModal={() => {}} />);
      const quantityInput = getByLabelText('Quantity');
      expect(quantityInput.value).toBe('');
    }
  });

  it('updates state when a bike is clicked', () => {
    if (typeof document !== 'undefined') {
      const mockBikes = [{ bikeid: '1', productname: 'Bike 1', description: 'Description', price: 100, category: 'Category' }];
      const { getByText } = render(<Bike bikes={mockBikes} auth={{}} openModal={() => {}} />);
      const bikeElement = getByText('Bike 1');
      fireEvent.click(bikeElement);
      expect(bikeElement.parentElement.parentElement).toHaveClass('selected-bike');
    }
  });

  it('submits form with correct data', async () => {
    if (typeof document !== 'undefined') {
      const mockPost = jest.fn();
      const { getByText, getByLabelText } = render(
        <Bike bikes={[{ bikeid: '1', productname: 'Bike 1', description: 'Description', price: 100, category: 'Category' }]}
              auth={{}}
              openModal={() => {}}
              post={mockPost}
        />
      );
      const bikeElement = getByText('Bike 1');
      fireEvent.click(bikeElement);
      const quantityInput = getByLabelText('Quantity');
      fireEvent.change(quantityInput, { target: { value: '2' } });
      const addToBasketButton = getByText('Add to basket');
      fireEvent.click(addToBasketButton);
      await waitFor(() => {
        expect(mockPost).toHaveBeenCalledWith('/addBasket', { bikeid_hidden: '1', quantity: '2' });
      });
    }
  });
});
