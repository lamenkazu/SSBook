/*Tipos de dados que se pega no Render:
    - Query: Não falham caso não encontre o elemento
    - Get: Caso não encontre o elemento, faz falhar o teste.
    - Find: Mesmo que GET, mas espera o elemento aparecer em tela. 
*/
import { render, screen } from "@testing-library/react";
import { Header } from "./";
import { MemoryRouter } from "react-router-dom";

test("sum", () => {
  const { getByPlaceholderText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(getByPlaceholderText("Busque um livro")).toBeInTheDocument();
});
