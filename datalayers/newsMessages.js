import { gql } from 'graphql-request';

export default async ({$graphcms}) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                newsMessages{
                  id,
                  title,
                  date,
                  slug
                  thumbnail{
                    id,
                    width,
                    height,
                    url
                  },
                  text{
                    html
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