import React from 'react';
import RepairBooking from './RepairBooking';
import { render, fireEvent, waitFor } from '@testing-library/react';

describe('RepairBooking Component', () => { // Fixed the opening parenthesis
    it('renders without crashing', () => {
        if (typeof document !== 'undefined') {
            render(<RepairBooking auth={{}} />);
        }
    });

    it('initializes state correctly', () => {
        if (typeof document !== 'undefined') {
            const { getByLabelText } = render(<RepairBooking auth={{}} />);
            const dateInput = getByLabelText('Date');
            expect(dateInput.value).toBe('');
        }
    });

    it('submits form with correct data', async () => {
        if (typeof document !== 'undefined') {
            const mockPost = jest.fn();
            const { getByText, getByLabelText } = render(
                <RepairBooking auth={{}} post={mockPost} />
            );
            const dateInput = getByLabelText('Date');
            fireEvent.change(dateInput, { target: { value: '2021-12-12' } });
            const submitButton = getByText('Submit');
            fireEvent.click(submitButton);
            await waitFor(() => {
                expect(mockPost).toHaveBeenCalledWith('/bookRepair', { date: '2021-12-12' });
            });
        }
    });

    it('shows error message when date is not entered', async () => {
        if (typeof document !== 'undefined') {
            const { getByText } = render(<RepairBooking auth={{}} />);
            const submitButton = getByText('Submit');
            fireEvent.click(submitButton);
            await waitFor(() => {
                expect(getByText('The date field is required.')).toBeInTheDocument();
            });
        }
    });
}); // Removed the comma and properly closed the describe function

describe('Dashboard Component', () => {
    it('renders without crashing', () => {
        if (typeof document !== 'undefined') {
            render(<Dashboard auth={{}} />);
        }
    });

    it('initializes state correctly', () => {
        if (typeof document !== 'undefined') {
            const { getByLabelText } = render(<Dashboard auth={{}} />);
            const dateInput = getByLabelText('Date');
            expect(dateInput.value).toBe('');
        }
    });

    it('submits form with correct data', async () => {
        if (typeof document !== 'undefined') {
            const mockPost = jest.fn();
            const { getByText, getByLabelText } = render(
                <Dashboard auth={{}} post={mockPost} />
            );
            const dateInput = getByLabelText('Date');
            fireEvent.change(dateInput, { target: { value: '2021-12-12' } });
            const submitButton = getByText('Submit');
            fireEvent.click(submitButton);
            await waitFor(() => {
                expect(mockPost).toHaveBeenCalledWith('/bookRepair', { date: '2021-12-12' });
            });
        }
    });

    it('shows error message when date is not entered', async () => {
        if (typeof document !== 'undefined') {
            const { getByText } = render(<Dashboard auth={{}} />);
            const submitButton = getByText('Submit');
            fireEvent.click(submitButton);
            await waitFor(() => {
                expect(getByText('The date field is required.')).toBeInTheDocument();
            });
        }
    });
});
