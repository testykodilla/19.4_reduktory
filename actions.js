import uuid from uuid;
const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
}};

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text: text,
}};

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id,
}};

function thumbsUp(id, likes) {
    return {
        type: THUMB_UP_COMMENT,
        id: id,
        likes: likes += 1,
    }
};

function thumbsDown(id, likes) {
    return {
        type : THUMB_DOWN_COMMENT,
        id: id,
        likes: likes -= 1,
    }
};

