import * as actionTypes from '../utils/actionTypes';

export const onNumClick = (number) => ({
  type: actionTypes.IMPUT_NUMBER,
  number
});

export const onPlusClick = () => ({
  type: actionTypes.PLUS
});
