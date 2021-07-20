import { Card, CardImage, Title } from "./styles";

type CardProps = {
  src: string;
  title: string;
};

function ImageCard({ src, title }: CardProps) {
  return (
    <Card>
      <CardImage src={src} />
      <Title>{title}</Title>
    </Card>
  );
}

export default ImageCard;
