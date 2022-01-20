import { Container, Item, Title } from "./styles";

type ListProps = {
  title: string;
  elements: React.ReactNode[];
};

export function List({ title, elements }: ListProps) {
  return (
    <Container>
      <Title>{title}</Title>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
}
