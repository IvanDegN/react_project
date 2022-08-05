const SHOW_FRIENDS = 'SHOW-FRIENDS';

let initialState = {
    friends:
        [
            {id: 1, name: 'Ivan', url: 'friends/01'},
            {id: 2, name: 'Alex', url: 'friends/02'},
            {id: 3, name: 'Peter', url: 'friends/03'},
        ]
}

export const NavBarReducer = (state = initialState, action) =>
{
    if(action.type === SHOW_FRIENDS)
    {

    }

    return state;
}