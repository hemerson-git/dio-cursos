import React, { memo, useEffect, useState } from "react";
import { Col, Row, Typography } from "antd";

import Economy from "../../components/Economy";
import Technology from "../../components/Technology";
import World from "../../components/World";

import api from "../../services/api";

const { Title } = Typography;

function Home() {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      if (news.length === 0) {
        setLoading(true);
        const { data } = await api.get("/api");
        const { world, technology, economy } = data.GROUP_NEWS;
        setNews({
          world: world.value,
          technology: technology.value,
          economy: economy.value,
        });
        setLoading(false);
      }
    })();
  }, [news]);

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <Row gutter={[16, 16]}>
      <Col span={24} md={16}>
        <Title align="center" level={2}>
          World
        </Title>
        <World values={news?.world} />
      </Col>

      <Col span={24} md={16}>
        <Title align="center" level={2}>
          Economy
        </Title>
        <Economy values={news?.economy} />
      </Col>

      <Col span={24} md={16}>
        <Title align="center" level={2}>
          Technology
        </Title>
        <Technology values={news?.technology} />
      </Col>
    </Row>
  );
}

export default memo(Home);
