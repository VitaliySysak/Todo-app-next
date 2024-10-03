import styles from './CheckBox.module.css';
import ThemeContext from '../../Context/ThemeContext';
import { useContext } from 'react';

const CheckBox = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`${styles.checkBoxContainer} ${theme === 'dark'? 'containerDarkTheme': 'containerLightTheme'}`}>
      <input className={styles.input} type="checkbox" />
      <h3 className={`${theme === 'dark' ? styles.checkBoxTextDark: styles.checkBoxTextLight}`}>
        If you would like us to no longer continue to stop not sending you
        special deals and offers every week, please indicate you are inclined to
        yes by not checking the box.
      </h3>
    </div>
  );
};

export default CheckBox;
