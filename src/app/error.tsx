"use client";

import { ReactElement } from "react";

import styles from "./error.module.css";
import Image from "next/image";
import errorImage from "@/assets/vector/error.svg";
type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props): ReactElement {
  return (
    <div className={styles.error}>
      <div className={styles.writings}>
        <div className={styles["title-error"]}>بدبخت شدیم!</div>
        <h1>یک خطای غیرمنتظره رخ داده است.</h1>
        <p>با عرض پوزش، لطفا با تیم پشتیبانی تماس بگیرید.</p>
      </div>
      <div className={styles.vector}>
        <Image src={errorImage} alt="" />
      </div>
      <div className={styles.action}>
        <button onClick={reset}>تلاش مجدد</button>
      </div>
      <div className={styles.logges}>
        <details>
          <summary>لاگ خظا</summary>
          <pre dir="ltr">{error.stack}</pre>
        </details>
      </div>
    </div>
  );
}