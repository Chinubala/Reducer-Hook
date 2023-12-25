const reducer=(state , action)=>{
    if(action.type === "Inc"){
       return( state = state + 1)
    }
    if(action.type === "Dec"){
        let newNum = 1;
        state >= 0 ? (newNum = state - 1): (newNum = 0);
        
        return newNum
    }
  return state
}
export default reducer