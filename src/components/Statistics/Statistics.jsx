import PropTypes from 'prop-types';
import { Item, Text, Value } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) =>{
return (
<ul>
      <Item>
        <Text>
          Good: <Value>{good}</Value>
        </Text>
      </Item>
     <Item>
        <Text>
           Neutral: <Value>{neutral}</Value>
        </Text>
      </Item>
      <Item>
        <Text>
          Bad: <Value>{bad}</Value>
        </Text>
      </Item>
      <Item>
        <Text>
          Total: <Value>{total}</Value>
        </Text>
      </Item>
      <Item>
        <Text>
          Positive feedback: <Value>{positivePercentage}</Value>
        </Text>
      </Item>
    </ul>
);
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};