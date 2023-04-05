import styles from './Home.module.css'

const Lexus = () => {
  return (
    <>
      <div className={styles.img}>
        <img src="/car2.jpg" alt="Cool car" />
      </div>
      <div className={styles.info}>
        <h2>Lexus</h2>
        <p>$300 000</p>
        <button>Read more</button>
      </div>
    </>
  )
}
export default Lexus
