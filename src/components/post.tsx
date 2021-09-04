import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Post.module.scss";

interface LinkProps {
  description: string;
  thumbnailUrl: string;
  postLink: string;
  title: string;
}

const Post = (props: LinkProps): JSX.Element => {
  return (
    <Link href={props.postLink}>
      <a className={styles.post}>
        <div className={styles.dateThumb}>
          <div className={styles.date}>
            <span className={styles.day}>28</span>
            <span className={styles.month}>Feb</span>
          </div>
          <div className={styles.thumb}>
            <Image
              src={props.thumbnailUrl}
              blurDataURL={props.thumbnailUrl}
              alt={props.title}
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
          <h2 className={styles.postTitle}>{props.title}</h2>
          <p className={styles.postDescription}>{props.description}</p>
          <Link href={props.postLink}>
            <a className={styles.readMore}>Leia mais</a>
          </Link>
        </div>
      </a>
    </Link>
  );
};

export default Post;
