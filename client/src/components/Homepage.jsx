import React from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import 'millify';
import { Link } from 'react-router-dom';
import millify from 'millify';
import { Cryptocurrencies, News } from '../components'
 
import { useGetCryptosQuery } from '../services/cryptoAPI';

const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery(10);

    const globalStats = data?.data;

    if(isFetching) return 'Loading...';
 
    return (
        <>
            <Typography.Title level={2} className="heading">
                Global Crypto Stats
            </Typography.Title>
            <Row>
                <Col span={12}>
                    <Statistic title="Total Cryptocurrencies" value={globalStats.totalCoins}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total MarketCap" value={millify(globalStats.totalMarketCap)}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24 hour volume" value={millify(globalStats.total24hVolume)}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/>
                </Col>
            </Row>

            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Typography.Title>
                <Typography.Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Typography.Title>
            </div>
            <Cryptocurrencies simplified />
            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">Latest Cryptocurrency News</Typography.Title>
                <Typography.Title level={3} className="show-more"><Link to="/news">Show more</Link></Typography.Title>
            </div>
            <News />
        </>
    )
}

export default Homepage
