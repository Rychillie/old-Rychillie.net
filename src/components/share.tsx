import styles from "../styles/components/Share.module.scss";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

interface PostLayoutProps {
  title: string;
  LinkPost: string;
}

export default function Share(props: PostLayoutProps) {
  return (
    <div className={styles.socialShareButtons}>
      <EmailShareButton title={props.title} url={props.LinkPost}>
        <EmailIcon size={32} round />
      </EmailShareButton>
      <FacebookShareButton title={props.title} url={props.LinkPost}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton title={props.title} url={props.LinkPost}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <PocketShareButton title={props.title} url={props.LinkPost}>
        <PocketIcon size={32} round />
      </PocketShareButton>
      <RedditShareButton title={props.title} url={props.LinkPost}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <TelegramShareButton title={props.title} url={props.LinkPost}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <TwitterShareButton title={props.title} url={props.LinkPost}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton title={props.title} url={props.LinkPost}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
}
