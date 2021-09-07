import styles from "../../styles/components/Post/TagsList.module.scss";

interface LinkProps {
  tags: string[];
}

const TagsList = (props: LinkProps): JSX.Element => {
  return (
    <div className={styles.postTags}>
      {props.tags.map((tag) => (
        <p key={tag} className={styles.tag}>
          {tag}
        </p>
      ))}
    </div>
  );
};

export default TagsList;
