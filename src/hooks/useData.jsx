import { useState, useEffect } from 'react';
import { STATUSES } from '../constants';
import { get } from 'axios';

export const useData = () => {
  const [state, setState] = useState({
    data: [],
    error: '',
    status: STATUSES.IDLE,
  });

  useEffect(() => {
    setState({
      ...state,
      data: [],
      error: '',
      status: STATUSES.PENDING,
    });

    get(
      'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json',
    )
      .then((raw) => {
        setState({
          ...state,
          data: raw.data,
          status: STATUSES.SUCCESS,
        });
      })
      .catch((e) => {
        setState({ ...state, status: STATUSES.ERROR });
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...state };
};
