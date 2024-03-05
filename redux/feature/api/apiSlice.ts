import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { userLogedIn } from "../auth/authSlice";
import { serverUrl } from "@/secret";

type LoadUserResponse = {
    success: boolean;
    statusCode: number;
    message: string;
    payload: {
        accessToken: string;
        user: object;
    };
};


let token = "";


// Check if localStorage is available
if (typeof window !== 'undefined') {
    const storedToken = localStorage.getItem('access_token');


    if (storedToken) {
        // If token and user are found in localStorage, parse and assign them
        token = storedToken;
    }
}

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: serverUrl,
    }),
    endpoints: (builder) => ({
        refreshToken: builder.query({
            query: () => ({
                url: "refresh-access-token",
                method: "POST",
                credentials: "include" as const,
            }),
        }),
        loadUser: builder.query<LoadUserResponse, void>({
            query: () => ({
                url: `user-info`,
                method: "POST",
                body: {
                    token
                },
                credentials: "include" as const,
            }),
            onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
                try {
                    const result = await queryFulfilled;
                    // console.log(result, "result from load user")
                    dispatch(
                        userLogedIn({
                            accessToken: result.data.payload?.accessToken,
                            user: result.data.payload?.user,
                        })
                    );
                } catch (error: any) {
                    // console.error(error);
                }
            },
        })
    }),
});

export const { useLoadUserQuery } = apiSlice;
