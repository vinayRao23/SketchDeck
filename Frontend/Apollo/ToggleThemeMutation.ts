import { gql } from "@apollo/client";

export const TOGGLE_THEME = gql`
  mutation toggleTheme($theme: String, $id: String) {
    toggleTheme(theme: $theme, id: $id)
  }
`;
