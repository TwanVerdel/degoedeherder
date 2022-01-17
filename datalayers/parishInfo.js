import { gql } from 'graphql-request';

export default async ({ $graphcms }, params) => {
  let result = undefined

  try {
    result = (await $graphcms.request(
      gql`
          query ($language: Languages!) {
            parishIntroduction(where: {language: $language}) {
              title
              text {
                html
              },
              language,
              banner{
                url
              }
            }
          }
            `, { "language": params.language }
    ))
  }
  catch (e) {
    result = null
  }
  return result
}