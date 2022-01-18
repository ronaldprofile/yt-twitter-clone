import { Feed } from "../Feed";
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditProfile,
  LocationIcon,
  Followage,
  CakeIcon
} from "./styles";

export function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img src="https://github.com/ronaldprofile.png" alt="Ronald Tomaz" />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditProfile outlined>Edit profile</EditProfile>

        <strong>Ronald Tomaz</strong>
        <span>@ronaldtomaz_</span>

        <p>
          Developer at
          <a href="#"> @Ifood</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Ceara, Brasil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 06 de junho de 2003
          </li>
        </ul>

        <Followage>
          <a href="#">
            <strong>13 </strong>
            Following
          </a>
          <a href="#">
            <strong>0 </strong>
            Followers
          </a>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}
