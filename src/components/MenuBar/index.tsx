import { Button } from "../Button";
import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BottomSide,
  Avatar,
  ProfileData,
  ExitToAppIcon
} from "./styles";

export function MenuBar() {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>
      <BottomSide>
        <Avatar />

        <ProfileData>
          <strong>Ronald Tomaz</strong>
          <span>@ronaldtomaz_</span>
        </ProfileData>

        <ExitToAppIcon />
      </BottomSide>
    </Container>
  );
}
