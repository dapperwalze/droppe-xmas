import { ReactNode, ReactNodeArray } from "react";
import styles from "./content.module.scss";

interface DroppeXmasContentLayoutProps {
  children: ReactNode | ReactNodeArray;
}

const DroppeXmasContent = (props: DroppeXmasContentLayoutProps) => {
  const { children } = props;

  return <main className={styles.pageContent}>{children}</main>;
};

export default DroppeXmasContent;
