import Button from 'components/Button';
import Heading from 'components/Heading';
import { TextField } from 'components/TextField';

import * as S from './styles';
import Link from 'next/link';

export type FormProfileProps = {
  username?: string;
  email?: string;
};

const FormProfile = ({ username, email }: FormProfileProps) => {
  return (
    <>
      <Heading lineBottom color="black" size="small">
        My profile
      </Heading>
      <S.Form>
        <TextField
          name="username"
          placeholder="Username"
          label="Username"
          initialValue={username}
        />
        <TextField
          name="email"
          type="email"
          placeholder="E-mail"
          initialValue={email}
          label="E-mail"
          disabled
        />

        <S.ButtonContainer>
          <Link href={`/forgot-password?email=${email}`} passHref>
            <Button minimal size="medium" as="a">
              Reset Password
            </Button>
          </Link>
          <Button size="medium">Save</Button>
        </S.ButtonContainer>
      </S.Form>
    </>
  );
};

export default FormProfile;

/*

# Write your query or mutation here
mutation login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      id
      username
      email
    }
  }
}

{
  "input": {
    "identifier": "filipe3@gmail.com",
    "password": "Strapi123",
    "provider": "local"
  }
}


mutation MutationCreateWishlist($input: WishlistInput!) {
  createWishlist(data: $input) {
    data {
      id
      attributes {
        user {
          data {
            id
            attributes {
              username
            }
          }
        }
        games {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}



{
	"input": {
    "games": [227, 115],
    "user": 11
  }
}


{
  "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY4NDQ1NjM5NSwiZXhwIjoxNjg3MDQ4Mzk1fQ.F0fvrO_je_2XI4miimRHs3O2ipv7WrUXo3zCdnic048"
}



mutation MutationUpdateWishlist($id: ID!, $data: WishlistInput!) {
  updateWishlist(id: $id, data: $data) {
    data {
      id
      attributes {
        games {
          data {
            id
            attributes {
              name
              slug
            }
          }
        }
      }
    }
  }
}
{
"id": 33,
  "data": {
    "games": [76, 168, 157],
    "user": 11
  }
}








query QueryWishlist($identifier: String!) {
  wishlists(filters: { user: { email: { eq: $identifier } } }) {
    data {
      id
      attributes {
        games {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}

{
  "identifier": "filipe@gmail.com"
}










*/
