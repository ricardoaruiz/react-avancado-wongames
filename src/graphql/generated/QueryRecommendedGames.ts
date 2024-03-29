/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryRecommendedGames
// ====================================================

export interface QueryRecommendedGames_recommended_section_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommendedGames_recommended_section_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommendedGames_recommended_section_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryRecommendedGames_recommended_section_highlight_background | null;
  floatImage: QueryRecommendedGames_recommended_section_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryRecommendedGames_recommended_section_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommendedGames_recommended_section_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryRecommendedGames_recommended_section_games {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryRecommendedGames_recommended_section_games_cover | null;
  developers: QueryRecommendedGames_recommended_section_games_developers[];
  price: number;
}

export interface QueryRecommendedGames_recommended_section {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: QueryRecommendedGames_recommended_section_highlight | null;
  games: QueryRecommendedGames_recommended_section_games[];
}

export interface QueryRecommendedGames_recommended {
  __typename: "Recommended";
  section: QueryRecommendedGames_recommended_section | null;
}

export interface QueryRecommendedGames {
  recommended: QueryRecommendedGames_recommended | null;
}
