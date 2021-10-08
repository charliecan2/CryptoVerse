import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsAPIheaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '06209e0314mshc969b486f1eda50p1c4330jsnbee935e9310c'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = url => ({ url, headers: newsAPIheaders});

export const newsAPI = createApi({
    reducerPath: 'news',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {
    useGetNewsQuery
} = newsAPI