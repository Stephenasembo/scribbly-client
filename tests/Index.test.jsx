import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Index from "../src/components/Index";

describe('Index', () => {
  it('renders correctly', () => {
    render(<Index />)
    expect(screen.getByRole('heading', {name: /scribbly/i}))
    expect(screen.getByRole('link', {name: /login/i}))
    expect(screen.getByRole('link', {name: /register/i}))    
  })
})