import { Col, Row } from "antd";
import { memo } from "react";
import { createMarkup } from "../../utils/createHTML";
import { useHistory } from "react-router-dom";

function World({ values }) {
  const history = useHistory();

  function renderImg({ image, description }) {
    return <img src={image.url} alt={description} width="100%" />;
  }

  function renderDescription(description) {
    return <p dangerouslySetInnerHTML={createMarkup(description)}></p>;
  }

  function openPost(id) {
    history.push(`/world/${id}`);
  }

  function renderPost(post, index) {
    const { title, description, image, id } = post;
    const isFirst = index === 0;
    const spanValue = isFirst ? 24 : 12;

    return (
      <Col span={spanValue} key={`post-${index}`}>
        <article onClick={() => openPost(id)}>
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
    <section className="news news-world">
      <Row gutter={[16, 16]}>
        {values?.map((post, index) => renderPost(post, index))}
      </Row>
    </section>
  );
}

export default memo(World);
