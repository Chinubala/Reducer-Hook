import React, { useReducer, useState } from "react";
import reducer from "./Reducer";

function ReducerHook() {
  const  initialValue = 0
    const [count , dispatch] = useReducer(reducer , initialValue);


    return (
        <div className="outer-border shadow p-3 mb-5 bg-white rounded">
            <h1 className="container text-center mb-5" style={{ textDecoration: "underline" }}>Reducer Hook</h1>
            
            <div className="container text-center mb-5" style={{ paddingLeft: "20%" }}>
                <div class="col-sm-8" ><h1>{count}</h1></div>
            </div>
            
            <div class="row" >
                <div class="col-sm-6" >
                    <button type="button" className="btn btn-success col-4" onClick={()=> dispatch({type:"Inc"}) }>Increment</button>
                </div>
                <div class="col-sm-6">
                    <button type="button" className="btn btn-warning col-4" onClick={(()=>dispatch({type:"Dec"}))}>Decrement</button>
                </div>
            </div>


        </div>
    )
}
export default ReducerHook;