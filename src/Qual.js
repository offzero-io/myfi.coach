import React, { useState } from 'react';

/*
What are your financial goals and objectives?
a) Short-term growth
b) Long-term wealth preservation
c) Income generation
d) All of the above

What is your investment time horizon?
a) Less than 3 years
b) 3-5 years
c) 5-10 years
d) More than 10 years

What is your risk tolerance?
a) Very low - Capital preservation is top priority
b) Low - Steady returns with minimal fluctuations
c) Moderate - Willing to accept some fluctuations for higher potential returns
d) High - Comfortable with significant fluctuations for potentially higher returns

What is your current financial situation, including income, expenses, and assets?
a) Limited income and assets
b) Stable income with modest assets
c) Comfortable income with significant assets
d) High income with substantial assets

Do you have any specific preferences or restrictions regarding investments?
a) Environmental and social considerations
b) Ethical or religious constraints
c) Preference for specific industries or sectors
d) No specific preferences or restrictions

Have you had any prior experience with investing?
a) None
b) Limited - Some exposure through retirement accounts or basic investments
c) Moderate - Actively managed investments or diverse portfolio
d) Extensive - Experienced with complex investment strategies or significant portfolio management

How involved do you want to be in the investment decision-making process?
a) Fully involved - Want to make all investment decisions
b) Collaborative - Prefer to be involved but also value advisor input
c) Limited involvement - Trust advisor's expertise with periodic updates
d) Passive - Prefer advisor to handle all investment decisions autonomously

*/



function InvestmentForm() {
  const [financialGoals, setFinancialGoals] = useState('');
  const [timeHorizon, setTimeHorizon] = useState('');
  const [riskTolerance, setRiskTolerance] = useState('');
  const [financialSituation, setFinancialSituation] = useState('');
  const [investmentPreferences, setInvestmentPreferences] = useState('');
  const [investmentExperience, setInvestmentExperience] = useState('');
  const [decisionMakingInvolvement, setDecisionMakingInvolvement] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., send to server or perform calculations)
    console.log({
      financialGoals,
      timeHorizon,
      riskTolerance,
      financialSituation,
      investmentPreferences,
      investmentExperience,
      decisionMakingInvolvement,
    });
    // Reset form fields
    setFinancialGoals('');
    setTimeHorizon('');
    setRiskTolerance('');
    setFinancialSituation('');
    setInvestmentPreferences('');
    setInvestmentExperience('');
    setDecisionMakingInvolvement('');
  };

  return (
    <div>
      <h1>Investment Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Financial Goals and Objectives:
          <input
            type="text"
            value={financialGoals}
            onChange={(e) => setFinancialGoals(e.target.value)}
          />
        </label>
        {/* Other input fields go here */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InvestmentForm;
