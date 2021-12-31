import { gql } from 'graphql-request';

export default async ({$graphcms}) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                pastorBanners{
                  title,
                  description{
                    html
                  },
                  extraInformation{
                    html
                  },
                  leftPastorName,
                  leftPastorImage{
                    width,
                    height,
                    url
                  }
                  rightPastorName,
                  rightPastorImage{
                    width,
                    height,
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