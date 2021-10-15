import { gql } from 'graphql-request';

export default async ({ $graphcms }) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                churches {
                  location,
                  title,
                  text{
                    html
                  },
                  image{
                    width,
                    height
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