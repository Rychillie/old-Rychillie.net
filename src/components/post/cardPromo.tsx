/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/Post/Card.module.scss";

interface LinkProps {
  description: string;
  thumbnailUrl: string;
  title: string;
  linkPromo: string;
  price: string;
}

const CardPromo = (props: LinkProps): JSX.Element => {
  return (
    <a
      href={props.linkPromo}
      target="_blank"
      className={styles.promoCard}
      rel="noreferrer"
    >
      <img
        src={props.thumbnailUrl}
        alt={props.title}
        className={styles.imagePromo}
        loading="lazy"
      />
      <div className={styles.postDetails}>
        <h2 className={styles.postTitle}>{props.title}</h2>
        <h3 className={styles.price}>{props.price}</h3>
        <p className={styles.postDescription}>{props.description}</p>
      </div>
    </a>
  );
};

export default CardPromo;
