import { gql } from "@apollo/client";

export const ID_MUTATION = gql`
  mutation Id($value: String) {
    Id(value: $value)
  }
`;
