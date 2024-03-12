export const json = {
    "elements": [
      {
        "type": "ranking",
        "name": "financial-goals-layout",
        "title": "What are your financial goals?",
        "isRequired": true,
        "choices": [
          "Save for a short-term goal (e.g., vacation, emergency fund)",
          "Save for a long-term goal (e.g., retirement, purchasing a home)",
          "Grow wealth through investments",
          "Pay off debt"
        ],
        "selectToRankEnabled": true,
        "selectToRankAreasLayout": "horizontal",
        "minSelectedChoices": 2,
        "maxSelectedChoices": 3
      },
      {
        "type": "ranking",
        "name": "current-financial-situation-layout",
        "title": "What's your current financial situation?",
        "isRequired": true,
        "choices": [
          "Stable income with no significant debts",
          "Variable income with some manageable debts",
          "High income, looking to optimize investments",
          "Currently facing financial challenges (e.g., high debts, low income)"
        ],
        "selectToRankEnabled": true,
        "selectToRankAreasLayout": "horizontal",
        "minSelectedChoices": 2,
        "maxSelectedChoices": 3
      },
      {
        "type": "ranking",
        "name": "risk-tolerance-layout",
        "title": "How much financial risk are you comfortable with?",
        "isRequired": true,
        "choices": [
          "Low - Prefer guaranteed or very stable returns (e.g., savings accounts, CDs)",
          "Moderate - Willing to take some risks for higher returns (e.g., bonds, dividend stocks)",
          "High - Comfortable with significant risks for the potential of higher returns (e.g., stocks, cryptocurrencies)"
        ],
        "selectToRankEnabled": true,
        "selectToRankAreasLayout": "horizontal",
        "minSelectedChoices": 2,
        "maxSelectedChoices": 3
      },
      {
        "type": "ranking",
        "name": "investment-experience-layout",
        "title": "What's your experience with investments?",
        "isRequired": true,
        "choices": [
          "Beginner - Little to no experience",
          "Intermediate - Some experience and understanding",
          "Advanced - Very comfortable and knowledgeable"
        ],
        "selectToRankEnabled": true,
        "selectToRankAreasLayout": "horizontal",
        "minSelectedChoices": 2,
        "maxSelectedChoices": 3
      },
      {
        "type": "ranking",
        "name": "financial-loss-handling-layout",
        "title": "How would you handle a significant financial loss?",
        "isRequired": true,
        "choices": [
          "Very concerned; prefer to avoid any losses",
          "Somewhat concerned; can handle small losses",
          "Accepting of risks; understand that losses can occur"
        ],
        "selectToRankEnabled": true,
        "selectToRankAreasLayout": "horizontal",
        "minSelectedChoices": 2,
        "maxSelectedChoices": 3
      }
    ]    
    ,
    "showQuestionNumbers": false
  };