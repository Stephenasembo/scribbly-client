import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AdminForm from '../src/components/authentication/AdminForm';

describe('Admin Form', () => {
  it('renders form fields correctly', () => {
    render(<AdminForm />)
    expect(screen.getByLabelText(/passcode/i, {selector: 'input'}))
    expect(screen.getByRole('button', {name: /submit/i}))
  })
})
