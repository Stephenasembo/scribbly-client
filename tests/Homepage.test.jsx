import { screen } from '@testing-library/react';
import { describe, it, expect, beforeAll, vi, afterAll } from 'vitest';
import Homepage from '../src/components/Homepage';
import renderWithRouter from '../src/utils/memoryRouter';

let mockedFetch;
let mockedPosts = [
  {
    id: '1',
    author: 'Stephen',
    title: 'Hello world.',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo dolorem incidunt eos. Est soluta cupiditate illo facilis omnis a. Perspiciatis, possimus recusandae! Dolore delectus reiciendis quis voluptatem, fuga aliquid saepe!',
    publishedAt: new Date(),
  },
  {
    id: '2',
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
      json: async () => ({data: posts}),
    })

}

describe('Homepage component', () => {
  beforeAll(() => {
    mockDataFetching(mockedPosts);
  });
  afterAll(() => {
    vi.unstubAllGlobals();
  });

  it('renders navbar', async () => {
    renderWithRouter('/', <Homepage />)
    expect(await screen.findByRole('link', {name: 'Home'})).toBeInTheDocument()
  });
  it('renders title', async () => {
    renderWithRouter('/', <Homepage />)
    expect(await screen.findByRole('heading', {name: /Scribbly/})).toBeInTheDocument()
    screen.debug()
  });
  it('renders post', async () => {
    renderWithRouter('/', <Homepage />)
    expect(await screen.findByRole('heading', {name: 'Posts'})).toBeInTheDocument()
  });
})
