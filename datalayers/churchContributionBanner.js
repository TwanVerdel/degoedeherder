import { gql } from 'graphql-request';

export default async ({$graphcms}) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                churchContributionBanners{
                  title,
                  description,
                  buttonText
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