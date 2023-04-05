import styles from './Home.module.css'

const BMW = () => {
  return (
    <>
      <div className={styles.img}>
        <img src="/car1.jpg" alt="Cool car" />
      </div>
      <div className={styles.info}>
        <h2>BMW</h2>
        <p>$100 000</p>
        <button>Read more</button>
      </div>
    </>
  )
}

export default BMW
