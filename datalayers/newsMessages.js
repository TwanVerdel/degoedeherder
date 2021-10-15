import { gql } from 'graphql-request';

export default async ({$graphcms}) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                newsMessages{
                  title,
                  date,
                  image{
                    id,
                    width,
                    height
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