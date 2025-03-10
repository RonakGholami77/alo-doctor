import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import certificateLogo from "@/assets/logo/certificate.svg";
import enamadLogo from "@/assets/logo/enamad.svg";
import idkLogo from "@/assets/logo/idk.svg";

import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteTwitterFill from "@/icons/MingcuteTwitterFill";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <h2 className={styles.logo}>الو دکتر!</h2>
        <p>
          تجربه ی مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان های
          ایران
        </p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li>
            <Link href="#">
              <Image src={certificateLogo} alt="logooo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={enamadLogo} alt="logooo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={idkLogo} alt="logooo" />
            </Link>
          </li>
        </ul>

        <ul className={styles.socials}>
          <li>
            <Link href="#">
              <MingcuteYoutubeFill />
            </Link>
          </li>
          <li>
            <Link href="#">
              <MingcuteLinkedinFill />
            </Link>
          </li>
          <li>
            <Link href="#">
              <MingcuteTelegramFill />
            </Link>
          </li>
          <li>
            <Link href="#">
              <MingcuteTwitterFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        نمامی حقوق مادی و معنوی این وبسایت، خدمات و محتوای مربوط به آن ، متعلق
        به RonakDeveloper میباشد
      </p>
    </footer>
  );
}
