import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Post from '../src/components/Post';
import renderWithRouter from '../src/utils/memoryRouter';

describe('Post component', () => {
  const mockPost = {
    author: 'Stephen',
    title: 'Hello world',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis beatae ut laboriosam, et quisquam nisi eaque rem est nesciunt culpa tempore ad expedita rerum tempora asperiores perferendis quasi officiis.',
    publishDate: new Date(),
  }

  it('renders correctly', () => {
    renderWithRouter('/', <Post post={mockPost}/>)
    expect(screen.getByRole('link', {name: /Read more/i})).toBeInTheDocument()
    expect(screen.getByText(/published/i)).toBeInTheDocument()
  })
})