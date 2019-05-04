import gql from "graphql-tag";

export default gql`
  query user($identifier: UserIdentifier!, $identity: UserIdentity!) {
    twitter {
      user(identifier: $identifier, identity: $identity) {
        id
        screen_name
        url
        name
        tweets(limit: 20) {
          text
        }
        url
      }
    }
  }
`;
