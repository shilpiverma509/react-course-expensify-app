import React from 'react';

const EditExpensePage =(props)=>{
    console.log(props);
    return(
    <div>
        This is to edit expense with the id of {props.match.params.id}
    </div>
    )};

export default EditExpensePage;    