import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Plugin
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
Global Payment    
 </p>
    </div>
    <div className={layout.sectionImg}>
    </div>
  </section>
);

export default CardDeal;