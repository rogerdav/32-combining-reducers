export default (state = [], action) => {
  let {type, payload} = action;
  // console.log('payload in category', payload)

  switch(type) {
  case 'CATEGORY_CREATE': return [...state, payload];
  case 'CATEGORY_UPDATE': return state.map(cat => cat._id === payload._id ? payload : cat);
  case 'CATEGORY_DELETE': return state.filter(cat => cat._id !== payload._id);
  case 'CATEGORY_RESET': return [];
  default: return state;
  }






};