import { gql } from "@apollo/client";

export const GET_USER_ID = gql`
  query getUserId($email: String) {
    getUserId(email: $email)
  }
`;
