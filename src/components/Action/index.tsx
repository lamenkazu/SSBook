import { Container } from "./styles";

interface ActionProps {
  id: string;
  imgSrc: string;
  imgAlt: string;
  label: string;
}

const Action = ({ id, imgSrc, imgAlt, label }: ActionProps) => (
  <Container>
    <button id={id}>
      <img src={imgSrc} alt={imgAlt} />
      <label htmlFor={id}>{label}</label>
    </button>
  </Container>
);

export default Action;
