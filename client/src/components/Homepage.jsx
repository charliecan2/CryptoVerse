import React from 'react';
import 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoAPI';

const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery();

    console.log(data);

    return (
        <>
            <Typography.Title level={2} className="heading">
                Global Crypto Stats
            </Typography.Title>
            <Row>
                <Col span={12}>
                    <Statistic title="Total Crypto Currencies" value="5"/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Exchanges" value="5"/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Marketcap" value="5"/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24 hour volume" value="5"/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Markets" value="5"/>
                </Col>  
            </Row>
        </>
    )
}

export default Homepage
