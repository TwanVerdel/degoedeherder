import { gql } from 'graphql-request';

export default async ({ $graphcms }, params) => {
  let result = undefined

  try {
    result = (await $graphcms.request(
      gql`
      query($slug: String!){
        newsMessage( where: {slug: $slug}){
          id
          title
          slug
          text {
            html
            text
          }
          thumbnail {
            id
            width
            height
            url
          }
          date
        }
      }
            `, { "slug": params.slug }
    ))
  }
  catch (e) {
    result = null
  }
  return result
}