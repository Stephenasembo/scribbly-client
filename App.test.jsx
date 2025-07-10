import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';

describe('Homepage', () => {
  it('renders navbar', () => {
    render(<App />)
    expect(screen.getByRole('link', {name: 'Home'}))
  });
  it('renders title', () => {
    render(<App />)
    expect(screen.getByRole('heading', {name: /Scribbly/}))
  });
  it('renders post', () => {
    render(<App />)
    expect(screen.getByRole('heading', {name: 'Posts'}))
  })
})