import { gql } from 'graphql-request';

export default async ({$graphcms}) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                heroes{
                  title,
                  description{
                    html
                  },
                  image {
                    id,
                    width,
                    height,
                    url
                  },
                  buttonsVisible,
                  urlRoundedButton,
                  textLeftButton
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