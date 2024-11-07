import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { setAccessToken } from "entities/auth"

interface IRgistrationData {
    email: string
    password: string
    image: File
}

interface IAuthResponse {
    accessToken: string
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/auth" }),

    endpoints: (builder) => ({
        registration: builder.mutation<IAuthResponse, IRgistrationData>({
            query: (data) => {  
                const formData = new FormData();
                formData.append("email", data.email);
                formData.append("password", data.password);
                formData.append("userImage", data.image);
                return {
                    url: "/registration",
                    method: "POST",
                    body: formData
                }
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const result = await queryFulfilled;
                dispatch(setAccessToken(result.data.accessToken))
            },
        })
    }),
})

export const { useRegistrationMutation } = authApi;