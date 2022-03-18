import { gql } from 'graphql-request';
import { graphClient } from '../plugins/GraphCMS'

export default async () => {
    let result = undefined

    try {
        result = (await graphClient.request(
            gql`
                {
                    pastorBlogs {
                        slug
                    }
                    newsMessages {
                        slug
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