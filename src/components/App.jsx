import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container, Wrapper } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const handleClickButton = e => {
  const option = e.target.name;
  
  switch (option) {
    case 'good':
      setGood(prevState => prevState + 1); 
      break;
     case 'neutral':
      setNeutral(prevState => prevState + 1); 
      break;
     case 'bad':
      setBad(prevState => prevState + 1); 
       break;
  
    default:
       console.log(`No option called ${option}`);
      break;
  }
};  

  const countTotalFeedback = () => good + neutral + bad;
  
const countPositiveFeedbackPercentage = () => {
  const totalFeedback = countTotalFeedback();
  const goodFeedback = good;
  let result = 0;

  if (totalFeedback > 0) {
    result = Math.ceil((goodFeedback / totalFeedback) * 100);
  }
  return `${result}%`;
};


  return ( 
    <Container>
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClickButton}
          />
        </Section>

         <Section title="Statistics">
            {countTotalFeedback > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Wrapper>
    </Container>
  );
}