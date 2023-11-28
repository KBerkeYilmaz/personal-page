import { Props } from "@/libs/types";
import "@root/globals.css";

const cardClasses = "card-blur overflow-hidden relative";

const Card: React.FC<Props> = ({ children, className, id }) => {
  return <div id={id} className={`${cardClasses} ${className}`}>{children}</div>;
};

export default Card;
