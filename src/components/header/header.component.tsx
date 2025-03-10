"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactElement {
  const pathname = usePathname();

  const menuList = [
    { title: "خانه", path: "/" },
    { title: "درباره ما", path: "/about" },
    { title: "جستجو", path: "/search" },
    { title: "مقالات", path: "/articles" },
    { title: "فروشگاه", path: "/shop" },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {menuList.map((item) => (
            <li key={item.title}>
              <Link
                href={item.path}
                className={clsx(pathname === item.path && styles.active)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button>ثبت نام | ورود</button>
    </header>
  );
}
