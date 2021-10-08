import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card, Input } from 'antd';
import moment from 'moment';

import { useGetNewsQuery } from '../services/newsAPI';
import { useGetCoinPriceQuery } from '../services/cryptoAPI'

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
    const [newsFilter, setNewsFilter] = useState("Cryptocurrency");
    const { data: cryptoNews } = useGetNewsQuery({ newsCategory: newsFilter, count: simplified ? 6 : 12});
    const { data } = useGetCoinPriceQuery(100);

    if(!cryptoNews?.value) return 'Loading...';

    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a news category"
                        optionFilterProp="children"
                        onChange={(value) => setNewsFilter(value)}
                        filterOption={(input, option) => option.children.toLowercase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Select.Option value="Cryptocurrency">Cryptocurrency</Select.Option>
                        {data?.data?.coins?.map((currency) => <Select.Option value={currency.name}>{currency.name}</Select.Option>)}
                    </Select>
                </Col>
            )}
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Typography.Title className="news-title" level={4}>
                                    {news.name}
                                </Typography.Title>
                                <img style={{maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
                            </div>
                            <p>
                                {news.description > 100 ? `${news.description.substring(0, 100)}...` 
                                : news.description}
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar style={{marginRight: '8px'}} src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                                    <Typography.Text className="provider=name">{news.provider[0]?.name}</Typography.Text>
                                </div>
                                <Typography.Text>{moment(news.datePublished).startOf('ss').fromNow()}</Typography.Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News
