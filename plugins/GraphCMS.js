import { GraphQLClient } from 'graphql-request'

const graphcmsClient = new GraphQLClient(
    process.env.GRAPHCMS_URL,
    {
        headers: {
            authorization: `Bearer ${process.env.GRAPHCMS_BEARER}`
        }
    }
)

export default (_, inject) => {
    inject('graphcms', graphcmsClient)
}