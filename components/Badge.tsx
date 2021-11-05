import {DetailedHTMLProps, HTMLAttributes} from "react";
import classNames from "classnames";
import styles from "./Badge.module.scss";

export type BadgeProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & {
  small?: boolean;
  variant?: "primary" | "secondary";
};

export const Badge = ({className, variant, small, ...spanProps}: BadgeProps): JSX.Element => {
  const cn = classNames(
    styles.root,
    {
      [styles.small]: small,
      [styles.primary]: variant === "primary",
      [styles.secondary]: variant === "secondary"
    },
    className,
  );

  return <span className={cn} {...spanProps} />;
};
