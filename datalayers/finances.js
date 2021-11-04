import { gql } from 'graphql-request';

export default async ({ $graphcms }) => {
    let result = undefined

    try {
        result = (await $graphcms.request(
            gql`
            {
                financePages{
                  headerRateGroups,
                  description,
                  rateInfo,
                  explanationPrayerIntention{
                    html
                  },
                  graveyardHeader,
                  graveyardRateInfo{
                    html
                  }
                },
                
                churchRates{
                  rateGroup,
                  description,
                  marriageCosts,
                  prayerServiceCosts,
                  funeralLiturgyCosts,
                  crematoriumLiturgyCosts,
                  baptismCosts,
                  prayerIntentionCosts
                },

                churchContributions{
                  title,
                  text{
                    html
                  }
                },

                aNBI_FinancialStatements{
                  title,
                  text{
                    html
                  },
                  financialStatements{
                    url,
                    fileName      
                  }
                },

                donatingInfoTexts{
                  title,
                  text{
                    html
                  }
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