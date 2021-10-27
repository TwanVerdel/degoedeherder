import { gql } from 'graphql-request';

export default async ({ $graphcms }, params) => {
  let result = undefined

  try {
    result = (await $graphcms.request(
      gql`
      query($uid: ID!){
        newsMessage( where: {id: $uid}){
          id
          title
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
            `, { "uid": params.uid }
    ))
  }
  catch (e) {
    console.log(e)
    result = null
  }
  console.log("Result")
  return result
}