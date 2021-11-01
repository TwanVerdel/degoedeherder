import { gql } from 'graphql-request';

export default async ({ $graphcms }) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                pastorBlogs(orderBy: date_DESC) {
                  id
                  title
                  thumbnail {
                    id
                    width
                    height
                    url
                  }
                  date
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