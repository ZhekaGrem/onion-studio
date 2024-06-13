import style from '@/app/assets/styles/chacbox.module.css';
interface BurgerOpenBtnProps {
  onChange: () => void;
}

const BuregerOpenBtn: React.FC<BurgerOpenBtnProps> = ({onChange}) => (
  <input
    type="checkbox"
    role="button"
    aria-label="Display the menu"
    className={style.menu}
    onChange={onChange}
  />
);

export default BuregerOpenBtn;
