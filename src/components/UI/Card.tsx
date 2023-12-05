import { Props } from "@/libs/types";
import "@root/globals.css";

const cardClasses = "card-blur overflow-hidden relative";

const Card: React.FC<Props> = ({ children, className }) => {
  return <div className={`${cardClasses} ${className}`}>{children}</div>;
};

export default Card;
