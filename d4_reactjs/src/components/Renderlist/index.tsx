import styles from './RenderList.module.css';

type Props = {
    image?: string;
    title?: string;
    view?: string;
}

const RenderList = ({image, title, view}: Props) => {
  return (
    <div className={styles.button}>
      {image && <img src={image} alt={title} />}
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.view}>{view}</span>
      </div>
    </div>
  )
}

export default RenderList