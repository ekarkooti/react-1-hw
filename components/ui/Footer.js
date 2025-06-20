"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";
import { SocialMediaItem } from "@/components/footer/SocialMediaItem";

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      {/* TASK - React 1 week 2 */}
      {/* Create a new List for the Pages */}
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about_us">About us</Link>
          </li>
          <li>
            <Link href="/destination">Destination</Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem
            url="https://facebook.com"
            title="Facebook"
            icon="/socialmedia/facebook.png"
          />
          <SocialMediaItem
            url="https://instagram.com"
            title="Instagram"
            icon="/socialmedia/instagram.png"
          />
          <SocialMediaItem
            url="https://tiktok.com"
            title="Tiktok"
            icon="/socialmedia/tiktok.png"
          />
          <SocialMediaItem
            url="https://google.com"
            title="Google"
            icon="/socialmedia/google.png"
          />
        </ul>
      </div>
    </footer>
  );
};
