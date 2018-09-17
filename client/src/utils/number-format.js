// eslint-disable-next-line import/prefer-default-export
export const formatAmount = (value) => {
  if (!value || !value.toString) {
    return value;
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
