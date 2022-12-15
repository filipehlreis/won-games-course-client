/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE } from "./globalTypes";

// ====================================================
// GraphQL fragment: BannerFragment
// ====================================================

export interface BannerFragment_data_attributes_image_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface BannerFragment_data_attributes_image_data {
  __typename: "UploadFileEntity";
  attributes: BannerFragment_data_attributes_image_data_attributes | null;
}

export interface BannerFragment_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: BannerFragment_data_attributes_image_data | null;
}

export interface BannerFragment_data_attributes_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface BannerFragment_data_attributes_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface BannerFragment_data_attributes {
  __typename: "Banner";
  image: BannerFragment_data_attributes_image;
  title: string;
  subtitle: string;
  button: BannerFragment_data_attributes_button | null;
  ribbon: BannerFragment_data_attributes_ribbon | null;
}

export interface BannerFragment_data {
  __typename: "BannerEntity";
  attributes: BannerFragment_data_attributes | null;
}

export interface BannerFragment {
  __typename: "BannerEntityResponseCollection";
  data: BannerFragment_data[];
}
