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
                    text
                  },
                  image {
                    id,
                    width,
                    height
                  },
                  buttonsVisible,
                  urlRoundedButton,
                  textLeftButton,
                  urlRightButton,
                  textRightButton
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