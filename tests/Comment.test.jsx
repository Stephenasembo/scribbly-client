import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import renderWithRouter from '../src/utils/memoryRouter';
import Comment from '../src/components/Comment';

let mockedComment = {
  id: '1',
  content: 'Comment 1',
  createdAt: new Date(),
  userId: 'user1',
  postId: 'post1',
}

describe('Comment component', () => {
  it('renders correctly', () => {
    renderWithRouter('/', <Comment comment={mockedComment}/>);
    expect(screen.getByText('Comment 1')).toBeInTheDocument();
  })
})