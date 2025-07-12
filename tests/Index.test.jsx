import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Index from "../src/components/Index";
import renderWithRouter from "../src/utils/memoryRouter";

describe('Index', () => {
  it('renders correctly', () => {
    renderWithRouter('/', <Index />)
    expect(screen.getByRole('heading', {name: /scribbly/i})).toBeInTheDocument()
    expect(screen.getByRole('link', {name: /login/i})).toBeInTheDocument()
    expect(screen.getByRole('link', {name: /register/i})).toBeInTheDocument()
  })
})