import { gql } from 'graphql-request';

export default async ({ $graphcms }) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                workgroups {
                  title
                  location
                  description
                  thumbnail {
                    url
                    height
                    width
                  }
                  eMail
                }
              }
            `,
        ))
    }
    catch (e) {
        result = null
    }

    return result
}