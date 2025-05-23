import { ReactElement } from "react";

import styles from "./not-found.module.css";
import Image from "next/image";
import notFoundImage from "@/assets/vector/404.svg";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

export default function NotFound(): ReactElement {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.writings}>
        <div className={styles.number}>404</div>
        <h1>صفحه ی مورد نظر پیدا نشد!</h1>
        <p>
          با عرض پوزش، لطفا از طریق کادر جستجو، پزشک یا مرکز درمانی مورد نظر خود
          را جستجو کنید.
        </p>
      </div>
      <div className={styles.search}>
        <GlobalSearchBoxComponent />
      </div>
      <div className={styles.vector}>
        <Image src={notFoundImage} alt="" />
      </div>
    </div>
  );
}