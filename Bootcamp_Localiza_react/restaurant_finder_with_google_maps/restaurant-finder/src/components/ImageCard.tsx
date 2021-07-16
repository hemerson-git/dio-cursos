import { Card, CardImage } from './styles';

type CardProps = {
  src: string;
}

function ImageCard({ src } : CardProps) {
  return (
    <Card>
      <CardImage src={src} />
    </Card>
  )
}

export default ImageCard;
