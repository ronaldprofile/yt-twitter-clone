import { Main } from "../Main";
import { MenuBar } from "../MenuBar";
import { Sidebar } from "../Sidebar";

import { Container, Wrapper } from "./styles";

export function Layout() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <Sidebar />
      </Wrapper>
    </Container>
  );
}
