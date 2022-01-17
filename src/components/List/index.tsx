import { Container, Item, Title } from "./styles";

type ListProps = {
  title: string;
  elements: React.ReactNode[];
};

export function List({ title, elements }: ListProps) {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
}
