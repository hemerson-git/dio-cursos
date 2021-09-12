import { memo } from "react";
import ShareIcon from "../../images/share.svg";
import CopyIcon from "../../images/copy.svg";

const navigatorHasShare = navigator.share;

const URL = "http://localhost:3000";

function Action({ post, subject }) {
  const { id, title } = post;

  const shareInfo = () => {
    navigator.share({
      title: `PWA News - ${subject}`,
      text: title,
      url: URL,
    });
  };

  const copyInfo = () => {
    navigator.clipboard.writeText(
      `${title} - *Learn more in* ${URL}/${subject}/${id}`
    );
  };

  function renderActions() {
    const action = navigatorHasShare ? shareInfo : copyInfo;
    const icon = navigatorHasShare ? ShareIcon : CopyIcon;

    return <img src={icon} alt="icon" onClick={action} />;
  }

  return <button className="share">{renderActions()}</button>;
}

export default memo(Action);
