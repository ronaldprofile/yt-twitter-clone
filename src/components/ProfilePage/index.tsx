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
        <EditProfile outlined>Editar perfil</EditProfile>

        <h1>Ronald Tomaz</h1>
        <h2>@ronaldtomaz_</h2>

        <p>
          Developer at
          <a href="#"> @Rocketseat</a>
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
          <span>
            Seguindo
            <strong> 200</strong>
          </span>
          <span>
            <strong>200 </strong>
            Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}
