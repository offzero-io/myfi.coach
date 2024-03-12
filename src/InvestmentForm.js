import React, { useState } from 'react';

import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./survey-questions/GoalsObjectives";


import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';

import { createQuestion, updateQuestion, deleteQuestion } from './graphql/mutations';
import { listQuestions } from './graphql/queries';


Amplify.configure(config);

const client = generateClient();

function InvestmentForm(){
  const survey = new Model(json);
  survey.onComplete.add((sender, options) => {
      console.log(JSON.stringify(sender.data, null, 3));
  });
  return (<Survey model={survey} />);
}
export default InvestmentForm;
