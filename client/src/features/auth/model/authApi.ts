import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface IRgistrationData {
    email: string
    password: string
    image: File
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/auth" }),
    endpoints: (builder) => ({
        registration: builder.mutation<{ token: string}, IRgistrationData>({
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

            }
        })
    }),
})

export const { useRegistrationMutation } = authApi;