import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ErrorPage from "../src/components/ErrorPage";

describe('ErrorPage', () => {
  it('renders correctly', () => {
    render(<ErrorPage />)
    expect(screen.getByRole('heading', {name: /not exist/i}))
    expect(screen.getByRole('link', {name: /home/i}))
  })
})