import Image from "next/image";
import styles from "../styles/components/Post.module.scss";

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.dateThumb}>
        <div className={styles.date}>
          <span className={styles.day}>28</span>
          <span className={styles.month}>Feb</span>
        </div>
        <div className={styles.thumb}>
          <Image
            src={"/images/thumb.png"}
            blurDataURL={"/images/thumb.png"}
            alt="thumb"
            layout="responsive"
            placeholder="blur"
            quality={100}
            width={170}
            height={170}
            loading="lazy"
          />
        </div>
      </div>
      <div className={styles.postDetails}>
        <div className={styles.postTags}>
          <p>#react</p>
          <p>#js</p>
          <p>#markdown</p>
        </div>
        <h2 className={styles.postTitle}>
          Um titulo de uma publicação no website
        </h2>
        <p className={styles.postDescription}>
          Steve Holt! No, I did not kill Kitty. However, I am going to oblige
          and answer the nice officer’s questions because I am an honest man
          with no secrets to hide. I don’t criticize you! And if you’re worried
          about criticism, sometimes a diet is the best defense.
        </p>
        <p className={styles.readMore}>Leia mais</p>
      </div>
    </div>
  );
};

export default Post;
