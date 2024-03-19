import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react';
import NavBar from "./NavBar";

describe('NavBar Component', () => {
    it('renders without crashing', () => {
        if (typeof document !== 'undefined') {
            render(<NavBar auth={{}} />);
        }
    });

    it('displays correct links when logged in', () => {
        if (typeof document !== 'undefined') {
            const { getByText } = render(<NavBar auth={{ user: true }} />);
            expect(getByText('Logout')).toBeInTheDocument();
            expect(getByText('Go to Basket')).toBeInTheDocument();
        }
    });

    it('displays correct links when logged out', () => {
        if (typeof document !== 'undefined') {
            const { getByText } = render(<NavBar auth={{ user: false }} />);
            expect(getByText('Login')).toBeInTheDocument();
            expect(getByText('Register')).toBeInTheDocument();
        }
    });

    it('submits form with correct data', async () => {
        if (typeof document !== 'undefined') {
            const mockPost = jest.fn();
            const { getByText, getByLabelText } = render(
                <NavBar auth={{ user: true }} post={mockPost} />
            );
            const logoutButton = getByText('Logout');
            fireEvent.click(logoutButton);
            await waitFor(() => {
                expect(mockPost).toHaveBeenCalledWith('/logout', {});
            });
        }
    });
}
);


