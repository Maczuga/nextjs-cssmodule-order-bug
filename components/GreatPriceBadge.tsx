import classNames from "classnames";
import styles from "./GreatPriceBadge.module.scss";
import {Badge} from "@/components/Badge";

export type GreatPriceBadgeProps = {
  className?: string;
};

export const GreatPriceBadge = ({className}: GreatPriceBadgeProps): JSX.Element => {
  const cn = classNames(styles.root, className);

  return <Badge variant="primary" className={cn}>
    Great price!
  </Badge>;
};
