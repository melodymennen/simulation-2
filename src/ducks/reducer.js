const initialState = {
   
}

const ACTION = 'ACTION';


function reducer(state = initialState, action){
    switch (action.type) {
        case ACTION:
            return {...state, propertyOnState: action.payload};        
        default:
            return state;
    }
}

export function updatePropertyOnState (propertyOnState){
    return {
        type: ACTION,
        payload: propertyOnState
    }
}


export default reducer;