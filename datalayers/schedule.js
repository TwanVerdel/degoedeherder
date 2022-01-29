import { gql } from 'graphql-request';

export default async ({$graphcms}) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                activitiesSchedules{
                  title,
                  description{
                    html
                  },
                  schedule {
                    id,
                    url
                  },
                  buttonText,
                  image{
                      url
                      height
                      width
                  }
                }

                processions{
                  title,
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