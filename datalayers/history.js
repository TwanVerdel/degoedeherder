import { gql } from 'graphql-request';

export default async ({$graphcms}) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                histories {
                  title
                  description
                  buttonText
                  image {
                    url
                    width
                    height
                  }
                  historyPDF {
                    url
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