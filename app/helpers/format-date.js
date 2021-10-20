import { helper } from '@ember/component/helper';
// import moment from 'moment';

export default helper(function formatDate(params /*, named*/) {
  // return moment(params[0]).fromNow();
  return params[0];
});
