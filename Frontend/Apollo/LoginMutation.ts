import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation registerUser($email: String) {
    loginUser(email: $email)
  }
`;
