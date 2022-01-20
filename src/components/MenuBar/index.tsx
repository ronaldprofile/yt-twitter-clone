import { Button } from "../Button";
import { Twitter } from "../../styles/icons";

import {
  Container,
  Topside,
  Nav,
  Logo,
  MenuButton,
  HomeIcon,
  ExploreIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BottomSide,
  Avatar,
  ProfileData,
  MoreOptions,
  MoreCircleIcon,
  BookmarkIcon
} from "./styles";

export function MenuBar() {
  return (
    <Container>
      <Topside>
        <Logo>
          <Twitter size={34} />
        </Logo>

        <Nav>
          <MenuButton>
            <HomeIcon />
            <span>Home</span>
          </MenuButton>

          <MenuButton>
            <ExploreIcon />
            <span>Explore</span>
          </MenuButton>

          <MenuButton>
            <BellIcon />
            <span>Notifications</span>
          </MenuButton>

          <MenuButton>
            <EmailIcon />
            <span>Messages</span>
          </MenuButton>

          <MenuButton>
            <BookmarkIcon />
            <span>Bookmarks</span>
          </MenuButton>

          <MenuButton>
            <FavoriteIcon />
            <span>Favorites</span>
          </MenuButton>

          <MenuButton className="active">
            <ProfileIcon />
            <span>Profile</span>
          </MenuButton>

          <MenuButton>
            <MoreCircleIcon />
            <span>More</span>
          </MenuButton>
        </Nav>

        <Button>
          <span>Tweet</span>
        </Button>
      </Topside>

      <BottomSide>
        <Avatar />

        <ProfileData>
          <strong>Ronald Tomaz</strong>
          <span>@ronaldtomaz_</span>
        </ProfileData>

        <MoreOptions />
      </BottomSide>
    </Container>
  );
}
