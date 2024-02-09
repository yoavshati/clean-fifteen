import { Card } from '../../types';
import style from './card.module.css';

interface Props {
  card: Card;
  isCardSelected: boolean;
  selectCard: () => void;
  deselectCard: () => void;
}

export const CardFront: React.FC<Props> = ({
  card,
  isCardSelected,
  selectCard,
  deselectCard,
}) => {
  return (
    <div
      className={`${style.cardBorder} ${isCardSelected ? style.glow : ''}`}
      onClick={isCardSelected ? deselectCard : selectCard}
    >
      <span>{card.value}</span>
      <span>{card.suit}</span>
    </div>
  );
};
