
function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                }
                , ...state]
            });
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                }
                , ...state]
            });
        case THUMB_UP_COMMENT: 
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    votes = votes +=1,
                }
                , ...state]
            });
            case THUMB_DOWN_COMMENT: 
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    votes = votes -=1,
                }
                , ...state]
            });
            default:
            return state;
    }

};