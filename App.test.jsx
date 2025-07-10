import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './src/App';
import Homepage from './src/components/Homepage';
import SignUpForm from './src/components/authentication/SignUpForm';

describe.skip('Homepage component', () => {
  const mockPost = {
    author: 'Stephen',
    title: 'Hello world',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis beatae ut laboriosam, et quisquam nisi eaque rem est nesciunt culpa tempore ad expedita rerum tempora asperiores perferendis quasi officiis.',
    publishDate: new Date(),
  }

  it('renders navbar', () => {
    render(<Homepage mockPost={mockPost}/>)
    expect(screen.getByRole('link', {name: 'Home'}))
  });
  it('renders title', () => {
    render(<Homepage mockPost={mockPost}/>)
    expect(screen.getByRole('heading', {name: /Scribbly/}))
  });
  it('renders post', () => {
    render(<Homepage mockPost={mockPost}/>)
    expect(screen.getByRole('heading', {name: 'Posts'}))
  });
})

describe.skip('Sign up page', () => {
  it('renders input fields correctly', () => {
    render(<SignUpForm />)
    expect(screen.getByLabelText(/username/i, {selector: 'input'}))
    expect(screen.getByPlaceholderText(/mail/))
    expect(screen.getByRole('button', {name: /submit/i}))
  })
})

describe.skip('Log in page', () => {
  it('renders input fields correctly', () => {
    render(<SignUpForm />)
    expect(screen.getByLabelText(/username/i, {selector: 'input'}))
    expect(screen.getByLabelText(/password/i, {selector: 'input'}))
    expect(screen.getByRole('button', {name: /submit/i}))
  })
})