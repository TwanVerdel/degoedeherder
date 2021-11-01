import { gql } from 'graphql-request';

export default async ({ $graphcms }) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                catecheses {
                  title,
                  description,
                  contact,
                  startdate,
                  image{
                      url
                  }
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