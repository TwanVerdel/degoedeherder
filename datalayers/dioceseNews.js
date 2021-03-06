import { gql } from 'graphql-request';

export default async ({ $graphcms }) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                dioceseNewsBanners{
                  title,
                  description,
                  buttonURL,
                  buttonText,
                  image{
                    url
                    height
                    width
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