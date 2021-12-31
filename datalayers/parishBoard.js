import { gql } from 'graphql-request';

export default async ({ $graphcms }, params) => {
  let result = undefined
  
  try {
    result = (await $graphcms.request(
      gql`
      {
        parishBoards{
          title,
          text{
            html
          }
        }
      }
      `
    ))
  }
  catch (e) {
    result = null
  }
  return result
}