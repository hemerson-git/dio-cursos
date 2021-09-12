import React, { memo, useEffect, useState } from "react";
import { Typography } from "antd";
import api from "../../services/api";

const { Title } = Typography;

function Home() {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const { data } = await api.get("/api");

        if (!news.length) setNews(data.GROUP_NEWS);
        console.log(news);
      } catch (error) {
        console.log(error);
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
    <div>
      <Title level={1} align="center">
        Hello World
      </Title>
    </div>
  );
}

export default memo(Home);
