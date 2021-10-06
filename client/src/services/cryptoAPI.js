import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoAPIheaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '06209e0314mshc969b486f1eda50p1c4330jsnbee935e9310c'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = url => ({ url, headers: cryptoAPIheaders});

export const cryptoAPI = createApi({
    reducerPath: 'crypto',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/stats')
        })
    })
})

export const {
    useGetCryptosQuery
} = cryptoAPI;