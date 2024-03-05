import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UserState {
    token: string;
    user: object | null;
}


let token = "";


// Check if localStorage is available
if (typeof window !== 'undefined') {
    const storedToken = localStorage.getItem('access_token');


    if (storedToken) {
        // If token and user are found in localStorage, parse and assign them
        token = storedToken;
    }
}


const initialState: UserState = {
    token: token,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userRegistration: (state, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token;
        },
        userLogedIn: (state, action: PayloadAction<{ accessToken: string, user: object }>) => {
            state.token = action.payload.accessToken;
            state.user = action.payload.user;

            localStorage.setItem('access_token', action.payload.accessToken);
        },
        userLogedOut: (state, action) => {
            localStorage.removeItem('access_token');
            return initialState;
        },
    }
})

export const { userRegistration, userLogedIn, userLogedOut } = authSlice.actions;

export default authSlice.reducer;