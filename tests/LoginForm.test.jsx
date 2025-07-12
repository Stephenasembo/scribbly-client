import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoginForm from '../src/components/authentication/LoginForm';
import renderWithRouter from '../src/utils/memoryRouter';

describe('Log in page', () => {
  it('renders input fields correctly', () => {
    renderWithRouter('/', <LoginForm />)
    expect(screen.getByLabelText(/username/i, {selector: 'input'})).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i, {selector: 'input'})).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /log in/i})).toBeInTheDocument()
  })
})

