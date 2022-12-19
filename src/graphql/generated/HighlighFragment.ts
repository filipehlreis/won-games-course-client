/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: HighlighFragment
// ====================================================

export interface HighlighFragment_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface HighlighFragment_background_data {
  __typename: "UploadFileEntity";
  attributes: HighlighFragment_background_data_attributes | null;
}

export interface HighlighFragment_background {
  __typename: "UploadFileEntityResponse";
  data: HighlighFragment_background_data | null;
}

export interface HighlighFragment_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface HighlighFragment_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: HighlighFragment_floatImage_data_attributes | null;
}

export interface HighlighFragment_floatImage {
  __typename: "UploadFileEntityResponse";
  data: HighlighFragment_floatImage_data | null;
}

export interface HighlighFragment {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HighlighFragment_background;
  floatImage: HighlighFragment_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}
