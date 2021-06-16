import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation registerUser(
    $email: String
    $username: String
    $profilePicture: String
    $id: String
  ) {
    registerUser(
      username: $username
      email: $email
      profilePicture: $profilePicture
      id: $id
    )
  }
`;
