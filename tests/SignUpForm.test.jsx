import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SignUpForm from '../src/components/authentication/SignUpForm';
import renderWithRouter from '../src/utils/memoryRouter';

describe('Sign up page', () => {
  it('renders input fields correctly', () => {
    renderWithRouter('/', <SignUpForm />)
    expect(screen.getByLabelText(/username/i, {selector: 'input'})).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/mail/)).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument()
  })
})
