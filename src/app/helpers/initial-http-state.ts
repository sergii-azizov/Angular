export const getInitialHttpState = ({ data = {}}) => ({
  data,
  loading: false,
  loaded: false,
  error: null
});
