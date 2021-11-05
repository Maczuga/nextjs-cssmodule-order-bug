import type {NextPage} from 'next'
import styles from 'styles/Home.module.scss'
import {GreatPriceBadge} from "@/components/GreatPriceBadge";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <GreatPriceBadge />
    </div>
  )
}

export default Home
