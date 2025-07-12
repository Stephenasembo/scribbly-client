import { MemoryRouter, Routes, Route } from "react-router-dom";
import { render } from "@testing-library/react";

function renderWithRouter(path, element) {
  return(
    render(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path={path} element={element}/>
        </Routes>
      </MemoryRouter>
    )
  )
}

export default renderWithRouter;