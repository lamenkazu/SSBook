import { Container, Image, StyledLi } from "./styles";
import heartImg from "../../../assets/coração.svg";
import shareImg from "../../../assets/share.svg";
import saveImg from "../../../assets/save.svg";

interface DetailOptionsProps {
  setIsOptionsMenuVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DetailOptions = ({
  setIsOptionsMenuVisible,
}: DetailOptionsProps) => {
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

    setIsOptionsMenuVisible?.(false);
  };
  return (
    <Container>
      <StyledLi onClick={() => handleOptionClick(1)}>
        <Image src={heartImg} alt="Icone coração" />
        Favoritar
      </StyledLi>

      <StyledLi onClick={() => handleOptionClick(2)}>
        <Image src={shareImg} alt="Icone compartilhar" />
        Compartilhar
      </StyledLi>

      <StyledLi onClick={() => handleOptionClick(3)}>
        <Image src={saveImg} alt="Icone salvar" />
        Salvar em uma lista
      </StyledLi>
    </Container>
  );
};
