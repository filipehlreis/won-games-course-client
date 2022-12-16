import { gql } from '@apollo/client';
import { BannerFragment } from 'graphql/fragments/banner';

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }
  }

  ${BannerFragment}
`;

/**
 *

 fragment BannerFragment on BannerEntityResponseCollection {
  data {
    attributes {
      image {
        data {
          attributes {
            url
          }
        }
      }
      title
      subtitle
      button {
        label
        link
      }
      ribbon {
        text
        color
        size
      }
    }
  }
}

fragment GameFragment on GameEntityResponseCollection {
  data {
    attributes {
      name
      slug
      cover {
        data {
          attributes {
            url
          }
        }
      }
      release_date
      developers {
        data {
          attributes {
            name
          }
        }
      }
      price
    }
  }
}

query QueryHome {
  banners {
    ...BannerFragment
  }

  # Write your query or mutation here

  newGames: games(
    filters: { release_date: { lte: "2021-01-27" } }
    sort: "release_date:desc"
    pagination: { limit: 8 }
  ) {
    ...GameFragment
  }

  upcomingGames: games(
    filters: { release_date: { gt: "2022-12-15" } }
    sort: "release_date:asc"
    pagination: { limit: 8 }
  ) {
    ...GameFragment
  }

  freeGames: games(
    filters: { price: { lte: 2 } }
    sort: "release_date:desc"
    pagination: { limit: 8 }
  ) {
    ...GameFragment
  }
}




 */
