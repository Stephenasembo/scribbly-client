import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoginForm from '../src/components/authentication/LoginForm';

describe('Log in page', () => {
  it('renders input fields correctly', () => {
    render(<LoginForm />)
    expect(screen.getByLabelText(/username/i, {selector: 'input'}))
    expect(screen.getByLabelText(/password/i, {selector: 'input'}))
    expect(screen.getByRole('button', {name: /log in/i}))
  })
})

