/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryUpcommingGames
// ====================================================

export interface QueryUpcommingGames_showcase_upcomingGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcommingGames_showcase_upcomingGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcommingGames_showcase_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryUpcommingGames_showcase_upcomingGames_highlight_background | null;
  floatImage: QueryUpcommingGames_showcase_upcomingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryUpcommingGames_showcase_upcomingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryUpcommingGames_showcase_upcomingGames_highlight | null;
}

export interface QueryUpcommingGames_showcase {
  __typename: "Home";
  upcomingGames: QueryUpcommingGames_showcase_upcomingGames | null;
}

export interface QueryUpcommingGames_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcommingGames_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryUpcommingGames_games {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryUpcommingGames_games_cover | null;
  developers: QueryUpcommingGames_games_developers[];
  price: number;
}

export interface QueryUpcommingGames {
  showcase: QueryUpcommingGames_showcase | null;
  games: QueryUpcommingGames_games[];
}

export interface QueryUpcommingGamesVariables {
  date: any;
}
