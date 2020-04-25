import gql from 'graphql-tag';

export const jobDetailQuery = gql `
  query getJobDetail ($input: JobInput!) {
    job (input: $input) {
      id
      title
      description
      locationNames
      userEmail
      commitment {
        title
      }
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
        logoUrl
      }
      postedAt
    }
  }
`;
