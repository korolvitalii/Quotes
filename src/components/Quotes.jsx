import { useEffect, useState } from 'react';
import classes from '../App.module.css';
import Button from './Button';
import Quote from './Quote';
import { STATUSES } from '../constants';
import { generateRandomNumbers } from '../utils/helpers';

const Quotes = ({ data, status }) => {
  const randomNumber = generateRandomNumbers(1, 0, data.length - 1);
  const [numbersOfQuote, setNumbersOfQuote] = useState({
    current: 0,
    last: 0,
  });

  useEffect(() => {
    setNumbersOfQuote({
      current: generateRandomNumbers(1, 0, data.length - 1),
      last: generateRandomNumbers(1, 0, data.length - 1),
    });
  }, [data.length]);

  const onNextButtonClick = () => {
    setNumbersOfQuote((currentValue) => ({
      current: randomNumber,
      last: currentValue.current,
    }));
  };

  const onLastButtonClick = () => {
    setNumbersOfQuote({
      current: numbersOfQuote.last,
      last: numbersOfQuote.current,
    });
  };
  return (
    <>
      {status === STATUSES.SUCCESS ? (
        <div className={classes.wrapper}>
          <div className={classes.quoteContainer}>
            <Quote {...data[numbersOfQuote.current]} />
          </div>
          <div className={classes.buttonContainer}>
            <Button onClick={onLastButtonClick}> Last quote </Button>
            <Button onClick={onNextButtonClick}>Next quote </Button>
          </div>
        </div>
      ) : null}
      {status === STATUSES.PENDING ? 'Loading...' : null}
      {status === STATUSES.ERROR ? 'Some error' : null}
    </>
  );
};

export default Quotes;
