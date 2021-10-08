import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetNewsQuery } from '../services/newsAPI';

const News = ({ simplified }) => {
    const {data: cryptoNews} = useGetNewsQuery({newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100})

    console.log(cryptoNews);

    return (
        <div>
            News
        </div>
    )
}

export default News
