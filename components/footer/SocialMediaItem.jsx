import styles from "@/components/ui/Footer.module.css";

export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={title} className={styles.socialIcon} />
        {title}
      </a>
    </li>
  );
};
