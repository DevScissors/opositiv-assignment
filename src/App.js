import styles from "./App.module.scss";
import PurchaseBox from "./components/PurchaseBox/PurchaseBox";

function App() {
  return (
    <div className={styles.App}>
      <PurchaseBox />
    </div>
  );
}

export default App;
