// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                linkedin
                github
                mywebsite
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            disqusShortname
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
