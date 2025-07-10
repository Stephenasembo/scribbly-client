import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Homepage from '../src/components/Homepage';


describe('Homepage component', () => {
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
