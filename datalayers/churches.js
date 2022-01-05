import { gql } from 'graphql-request';

export default async ({ $graphcms }) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
              churches{
                title,
                image{
                  url
                },
                location,
                address{
                  html
                }
                openingHours{
                  html
                },
                verger,
                secretariat{
                  html
                },
                inauguration{
                  html
                },
                contribution{
                  html
                },
                masses{
                  html
                },
                massImage{
                  url
                },
                locationCouncilTitle,
                locationCouncil{
                  html
                }

                graveyard{
                  html
                }

                workgroups{
                  html
                }

                paymentURL
                
              }

              wg_emmen: workgroups( where:{churches_contains_some: Emmen}){
                title,
                description,
                thumbnail{
                  url
                },
                eMail
              }
              
              wg_erica: workgroups( where:{churches_contains_some: Erica}){
                title,
                description,
                thumbnail{
                  url
                },
                eMail
              }
            
              wg_emmerschans: workgroups( where:{churches_contains_some: Emmerschans}){
                title,
                description,
                thumbnail{
                  url
                },
                eMail
              }
              
              wg_holtingerhof: workgroups( where:{churches_contains_some: Holtingerhof}){
                title,
                description,
                thumbnail{
                  url
                },
                eMail
              }
              
              wg_barger_oosterveld: workgroups( where:{churches_contains_some: Barger_Oosterveld}){
                title,
                description,
                thumbnail{
                  url
                },
                eMail
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