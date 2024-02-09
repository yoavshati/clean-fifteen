import style from './card.module.css';

interface Props {
  amount?: number;
}

export const CardBack: React.FC<Props> = ({ amount }) => {
  return <div className={style.cardBorder}>{amount}</div>;
};
