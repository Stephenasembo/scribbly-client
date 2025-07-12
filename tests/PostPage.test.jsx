import { screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import renderWithRouter from '../src/utils/memoryRouter';
import PostPage from '../src/components/PostPage';

let mockedFetch;

let comment = {
  id: '1',
  content: 'Comment 1',
  createdAt: new Date(),
  userId: 'user1',
  postId: 'post1',
}

let comment2 = {
  id: '2',
  content: 'Comment 2',
  createdAt: new Date(),
  userId: 'user1',
  postId: 'post1',
}

let mockedPost = {
  id: '1',
  author: 'Stephen',
  title: 'Hello world.',
  content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dolorem incidunt eos. Est soluta cupiditate illo facilis omnis a. Perspiciatis, possimus recusandae! Dolore delectus reiciendis quis voluptatem, fuga aliquid saepe!',
  publishedAt: new Date(),
  comments: []
}

let postWithComments = {
  id: '2',
  author: 'Asembo',
  title: 'I have comments.',
  content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dolorem incidunt eos. Est soluta cupiditate illo facilis omnis a. Perspiciatis, possimus recusandae! Dolore delectus reiciendis quis voluptatem, fuga aliquid saepe!',
  publishedAt: new Date(),
  comments: [comment, comment2]
}

function mockDataFetching(post) {
  mockedFetch = vi.fn();
  vi.stubGlobal('fetch', mockedFetch)
  mockedFetch.mockResolvedValue({
    status: 200,
    json: async () => ({data: post})
  })
}

describe('Post page without comments', () => {
  beforeEach(() => {
    mockDataFetching(mockedPost);
  })
  afterEach(() => {
    vi.unstubAllGlobals();
  })
  it('renders correctly', async () => {
    renderWithRouter('/posts/1', <PostPage />)
    expect(await screen.findByRole('heading', {name: /hello/i})).toBeInTheDocument();
    expect(await screen.findByText(/No comments/i)).toBeInTheDocument()
    screen.debug()
  });
})

describe('Post page with comments', () => {
  beforeEach(() => {
    mockDataFetching(postWithComments);
  })
  afterEach(() => {
    vi.unstubAllGlobals();
  })
  it('renders correctly', async () => {
    renderWithRouter('/posts/2', <PostPage />)
    expect(await screen.findByRole('heading', {name: /comments/i})).toBeInTheDocument();
    expect(await screen.queryByText(/No comments/i)).not.toBeInTheDocument()
    screen.debug()
  });
})