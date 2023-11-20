import { Container } from "./styles";
import heartImg from "../../assets/coração.svg";
import shareImg from "../../assets/share.svg";
import saveImg from "../../assets/save.svg";
// import optionsImg from "../../assets/options.svg";

// import { useState } from "react";

interface DetailOptionsProps {
  setIsOptionsMenuVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DetailOptions: React.FC<DetailOptionsProps> = ({
  setIsOptionsMenuVisible,
}) => {
  const handleOptionClick = (option: number) => {
    switch (option) {
      case 1:
        alert("Livro Favoritado");
        break;
      case 2:
        alert("Compartilhando livro");
        break;
      case 3:
        alert("Livro Salvo");
        break;
    }

    {
      setIsOptionsMenuVisible && setIsOptionsMenuVisible(false);
    }
  };
  return (
    <Container>
      <li onClick={() => handleOptionClick(1)}>
        <img src={heartImg} alt="Icone coração" />
        Favoritar
      </li>

      <li onClick={() => handleOptionClick(2)}>
        <img src={shareImg} alt="Icone compartilhar" />
        Compartilhar
      </li>

      <li onClick={() => handleOptionClick(3)}>
        <img src={saveImg} alt="Icone salvar" />
        Salvar em uma lista
      </li>
    </Container>
  );
};
