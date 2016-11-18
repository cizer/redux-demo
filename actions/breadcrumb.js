export const INIT_BREADCRUMB = 'SETUP_BREADCRUMB';
export const APPEND_BREADCRUMB = 'APPEND_BREADCRUMB';
export const INVOKE_BREADCRUMB = 'INVOKE_BREADCRUMB';

export function initBreadcrumb() {
  return {
    type: INIT_BREADCRUMB
  };
}

//
// export function increment() {
//   return {
//     type: INCREMENT_COUNTER
//   };
// }
//
// export function decrement() {
//   return {
//     type: DECREMENT_COUNTER
//   };
// }
//
// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState();
//
//     if (counter % 2 === 0) {
//       return;
//     }
//
//     dispatch(increment());
//   };
// }
//
// export function incrementAsync(delay = 1000) {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(increment());
//     }, delay);
//   };
// }
