import styles from './FooterActions.module.css';
import ThemeContext from '../../Context/ThemeContext';
import { useContext } from 'react';

const FooterActions = ({ unCompletedTodosCount, deleteCompletedTodos }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`${styles.container} ${theme === 'dark'? 'containerDarkTheme': 'containerLightTheme'}`}>
      <div className={styles.element}>{unCompletedTodosCount} items left </div>
      <button className={styles.element} onClick={() => deleteCompletedTodos()}>
        Clear Completed
      </button>
    </div>
  );
};

export default FooterActions;
