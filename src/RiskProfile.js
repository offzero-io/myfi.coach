import React, { useState } from 'react';

import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, View, Button } from "@aws-amplify/ui-react";

import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./survey-questions/RiskProfile";


//import { Amplify } from 'aws-amplify';
//import { generateClient } from 'aws-amplify/api';
//import config from './amplifyconfiguration.json';

//import { createQuestion, updateQuestion, deleteQuestion } from './graphql/mutations';
//import { listQuestions } from './graphql/queries';


//Amplify.configure(config);

//const client = generateClient();

function RiskProfile(signOut){
  const survey = new Model(json);
  survey.onComplete.add((sender, options) => {
      console.log(JSON.stringify(sender.data, null, 3));
  });

  return (
    <View>
      <Survey model={survey} />
      <Button onClick={signOut}>Sign Out</Button>
    </View>
    
  );
}
export default withAuthenticator(RiskProfile);
