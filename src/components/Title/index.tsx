import { Container, Fav } from "./styles";

interface TitleProps {
  name?: string;
  authorName?: string;
  isFavorite?: boolean;
}

export const Title = ({ name, authorName, isFavorite = false }: TitleProps) => {
  return (
    <Container>
      <div>
        <h2> {name} </h2>
        <span> {authorName} </span>
      </div>
      <Fav $isfavorite={isFavorite} alt="Icone de Favorito" />
    </Container>
  );
};
