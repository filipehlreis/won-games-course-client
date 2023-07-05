/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryOrders
// ====================================================

export interface QueryOrders_orders_data_attributes_games_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryOrders_orders_data_attributes_games_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryOrders_orders_data_attributes_games_data_attributes_cover_data_attributes | null;
}

export interface QueryOrders_orders_data_attributes_games_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryOrders_orders_data_attributes_games_data_attributes_cover_data | null;
}

export interface QueryOrders_orders_data_attributes_games_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface QueryOrders_orders_data_attributes_games_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: QueryOrders_orders_data_attributes_games_data_attributes_developers_data_attributes | null;
}

export interface QueryOrders_orders_data_attributes_games_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: QueryOrders_orders_data_attributes_games_data_attributes_developers_data[];
}

export interface QueryOrders_orders_data_attributes_games_data_attributes {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryOrders_orders_data_attributes_games_data_attributes_cover | null;
  release_date: any | null;
  developers: QueryOrders_orders_data_attributes_games_data_attributes_developers | null;
  price: number;
}

export interface QueryOrders_orders_data_attributes_games_data {
  __typename: "GameEntity";
  id: string | null;
  attributes: QueryOrders_orders_data_attributes_games_data_attributes | null;
}

export interface QueryOrders_orders_data_attributes_games {
  __typename: "GameRelationResponseCollection";
  data: QueryOrders_orders_data_attributes_games_data[];
}

export interface QueryOrders_orders_data_attributes {
  __typename: "Order";
  createdAt: any | null;
  card_brand: string | null;
  card_last4: string | null;
  games: QueryOrders_orders_data_attributes_games | null;
}

export interface QueryOrders_orders_data {
  __typename: "OrderEntity";
  id: string | null;
  attributes: QueryOrders_orders_data_attributes | null;
}

export interface QueryOrders_orders {
  __typename: "OrderEntityResponseCollection";
  data: QueryOrders_orders_data[];
}

export interface QueryOrders {
  orders: QueryOrders_orders | null;
}

export interface QueryOrdersVariables {
  identifier: string;
}
