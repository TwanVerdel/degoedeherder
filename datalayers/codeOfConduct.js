import { gql } from 'graphql-request';

export default async ({ $graphcms }) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                codeOfConducts{
                 	title,
                    codeOfConduct{
                    text,
                    html
                  },
                  hotlineUrl
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