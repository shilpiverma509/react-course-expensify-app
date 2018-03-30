
//auth reducer handle actions for login and logout

export default (state={},action) =>{
    switch(action.type){
        case 'LOGIN':
        //return state which is a object
        return {
                uid:action.uid
        };
        case 'LOGOUT':
        return {};
        default:
        return state;

    }
}
