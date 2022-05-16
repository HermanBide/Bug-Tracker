export default (posts = [], action) => {
    
    switch (action.type) {
        case 'FETCH_ALL':
            //return the state
            return action.payload;
        case 'CREATE':
            return posts;

        default:
            return posts;
    }
}