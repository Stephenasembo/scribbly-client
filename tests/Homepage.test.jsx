import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi, afterAll } from 'vitest';
import Homepage from '../src/components/Homepage';

let mockedFetch;
let mockedPosts = [
  {
    author: 'Stephen',
    title: 'Hello world.',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dolorem incidunt eos. Est soluta cupiditate illo facilis omnis a. Perspiciatis, possimus recusandae! Dolore delectus reiciendis quis voluptatem, fuga aliquid saepe!',
    publishedAt: new Date(),
  },
  {
    author: 'Mark',
    title: 'Second post.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis beatae ut laboriosam, et quisquam nisi eaque rem est nesciunt culpa tempore ad expedita rerum tempora asperiores perferendis quasi officiis.',
    publishDate: new Date(),
  }
];

function mockDataFetching(posts) {
    mockedFetch = vi.fn()
    vi.stubGlobal('fetch', mockedFetch)
    mockedFetch.mockResolvedValue({
      status: 200,
      json: async () => posts,
    })

}

describe('Homepage component', () => {
  beforeAll(() => {
    mockDataFetching(mockedPosts);
  });
  afterAll(() => {
    vi.unstubAllGlobals();
  });

  it('renders navbar', () => {
    render(<Homepage />)
    expect(screen.getByRole('link', {name: 'Home'}))
  });
  it('renders title', () => {
    render(<Homepage />)
    expect(screen.getByRole('heading', {name: /Scribbly/}))
  });
  it('renders post', () => {
    render(<Homepage />)
    expect(screen.getByRole('heading', {name: 'Posts'}))
  });
})
