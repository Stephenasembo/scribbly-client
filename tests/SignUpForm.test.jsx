import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SignUpForm from '../src/components/authentication/SignUpForm';

describe('Sign up page', () => {
  it('renders input fields correctly', () => {
    render(<SignUpForm />)
    expect(screen.getByLabelText(/username/i, {selector: 'input'}))
    expect(screen.getByPlaceholderText(/mail/))
    expect(screen.getByRole('button', {name: /submit/i}))
  })
})
