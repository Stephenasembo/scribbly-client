import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ErrorPage from "../src/components/ErrorPage";
import renderWithRouter from "../src/utils/memoryRouter";

describe('ErrorPage', () => {
  it('renders correctly', () => {
    renderWithRouter('/', <ErrorPage />)
    expect(screen.getByRole('heading', {name: /not exist/i})).toBeInTheDocument()
    expect(screen.getByRole('link', {name: /home/i})).toBeInTheDocument()
    screen.debug()
  })
})