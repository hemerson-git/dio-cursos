import { memo, useState, useEffect, useCallback } from "react";
import { Row, Col } from "antd";
import { useParams, useHistory } from "react-router";

import Actions from "../../components/Action";

import api from "../../services/api";
import { createMarkup } from "../../utils/createHTML";

function Post() {
  const { id, subject } = useParams();
  const [post, setPost] = useState({});
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleNews = useCallback(({ data }) => {
    setNews(data);
    console.log(data);
  }, []);

  const handlePost = useCallback(({ data }) => {
    setPost(data[0]);
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);

    api.get(`/${subject}`).then(handleNews);
    api.get(`/${subject}/${id}`).then(handlePost);
  }, [id, subject, handleNews, handlePost]);

  function renderImage({ image, description }) {
    return <img src={image.url} alt={description} />;
  }

  function renderDescription(description) {
    return <p dangerouslySetInnerHTML={createMarkup(description)} />;
  }

  function renderPost(post, index) {
    const { title, image, description, id } = post;

    return (
      <Col span={12} key={`post-${index}`}>
        <article onClick={() => openPost(id)}>
          <p>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </p>

          {image?.url
            ? renderImage({ image, description })
            : renderDescription(description)}
        </article>
      </Col>
    );
  }

  function openPost(id) {
    history.push(`/${subject}/${id}`);
  }

  if (loading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  if (!post)
    return (
      <div>
        <p>Nenhum Post Encontrado</p>
      </div>
    );

  const { image, title, description, body, datePublished } = post;

  return (
    <Row gutter={[16, 16]}>
      <Col span={24} md={16}>
        <Actions post={post} subject={subject} />
        <p>{datePublished}</p>
        <h1 dangerouslySetInnerHTML={createMarkup(title)} />
        {image && renderImage({ image, description })}
        <p
          className="text"
          dangerouslySetInnerHTML={createMarkup(description)}
        />

        {body}
      </Col>

      <Col span={24} md={8}>
        <Row gutter={[16, 16]}>
          {news?.value?.map((news, index) => renderPost(news, index))}
        </Row>
      </Col>
    </Row>
  );
}

export default memo(Post);
