import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AdminForm from '../src/components/authentication/AdminForm';
import renderWithRouter from '../src/utils/memoryRouter';

describe('Admin Form', () => {
  it('renders form fields correctly', () => {
    renderWithRouter('/', <AdminForm />)
    expect(screen.getByLabelText(/passcode/i, {selector: 'input'})).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument()
  })
})
