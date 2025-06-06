export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPostsRequest = () => ({
    type: FETCH_POSTS_REQUEST
});

export const fetchPostsSuccess = posts => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts
});

export const fetchPostsFailure = error => ({
    type: FETCH_POSTS_FAILURE,
    payload: error
});

export const fetchPosts = () => {
    return async dispatch => {
        dispatch(fetchPostsRequest());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();

            // Add image source to each post
            const postsWithImages = data.map(post => ({
                ...post,
                imgSrc: `https://picsum.photos/200?random=${post.id}`
            }));

            dispatch(fetchPostsSuccess(postsWithImages));
        } catch (error) {
            dispatch(fetchPostsFailure(error.message));
        }
    };
};