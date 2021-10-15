import { gql } from 'graphql-request';

export default async ({$graphcms}) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                parishAgendaBanners{
                  title,
                  description,
                  buttonText,
                  image
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