import Counter from '../components/counter.jsx'
import styles from './Home.module.scss'

const Home = () => {
  return ( 
    <div className={styles.home}>
      <h1>Make money of cookies</h1>
      <Counter/>
    </div>

  );
}

export default Home;