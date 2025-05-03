import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import MyDoctorLogo from "@/logo/my-doctor.logo";

import styles from "./page.module.css";

export default function Home() {
  throw Error("init error");

  return (
    <div className={styles.home}>
      <h1>
        <MyDoctorLogo />
        الو دکتر
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجو های شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}