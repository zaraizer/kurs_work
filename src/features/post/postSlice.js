
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import data from './apiText.json';


const initialState = {
    posts: [],
}



export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (_, { rejectWithValue, dispatch }) => {

        // const res = await axios.get('https://newsdata.io/api/1/news?apikey=pub_32127b0ae312632ea5408b8e93f0b22ba2331&country=ua&language=uk');
        // dispatch(setPosts(res.data.results));
        dispatch(setPosts(data.results));
    })

export const deletePostById = createAsyncThunk(
    'posts/deletePostById',
    async (id, { rejectWithValue, dispatch }) => {
        // await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        // dispatch(deletePost(id));
        dispatch(deletePost(id))
    }



)
export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        },
    
    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log('getPosts fullfiled'),
        [getPosts.pending]: () => console.log('getPosts pending'),
        [getPosts.rejected]: () => console.log('getPosts rejected'),
        [deletePostById.fulfilled]: () => console.log('deletePost fullfiled'),
        [deletePostById.pending]: () => console.log('deletePost pending'),
        [deletePostById.rejected]: () => console.log('deletePost rejected'),


    }

})




export const { setPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;