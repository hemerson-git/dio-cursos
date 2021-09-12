import { Col, Row } from "antd";
import { memo } from "react";
import { createMarkup } from "../../utils/createHTML";
import { useHistory } from "react-router-dom";

function Technology({ values }) {
  const history = useHistory();

  function renderImg({ image, description }) {
    return <img src={image.url} alt={description} width="100%" />;
  }

  function renderDescription(description) {
    return <p dangerouslySetInnerHTML={createMarkup(description)}></p>;
  }

  function openPost(id) {
    history.push(`/technology/${id}`);
  }

  function renderPost(post, index) {
    const { title, description, image, id } = post;
    return (
      <Col span={24} md={12} key={`post-${index}`}>
        <article onClick={openPost(id)}>
          <p>
            <strong dangerouslySetInnerHTML={createMarkup(title)} />
          </p>

          {image.url
            ? renderImg({ image, description })
            : renderDescription(description)}
        </article>
      </Col>
    );
  }

  return (
    <section className="news news-technology">
      <Row gutter={[16, 16]}>
        {values?.map((post, index) => renderPost(post, index))}
      </Row>
    </section>
  );
}

export default memo(Technology);
