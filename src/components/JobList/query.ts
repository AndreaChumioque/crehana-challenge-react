import gql from 'graphql-tag';

export const jobListQuery = gql`
  query getJobList {
    jobs {
      id
      title
      slug
      cities {
        name
        country {
          id
          name
        }
      }
      remotes {
        id
        type
      }
      company {
        id
        name
        slug
        logoUrl
      }
      postedAt
    }
  }
`;

export const companiesQuery = gql `
  query getCompanies {
    companies {
      id
      name
      slug
    }
  }
`;

export const countriesQuery = gql `
  query getCountries {
    countries {
      id
      name
    }
  }
`;
