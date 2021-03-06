import { gql } from 'graphql-request';

export default async ({$graphcms}) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                quoteTextBanners {
                  title,
                  description,
                  text{
                    raw
                  }
                }
              }
            
            `,
        ))
    }
    catch(e) {
        result = null
    }

    return result
}