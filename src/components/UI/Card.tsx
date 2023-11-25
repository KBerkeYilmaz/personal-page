import { Props } from "@/libs/types";

const cardClasses = "bg-text text-background p-5 rounded-md cursor-pointer overflow-hidden";

const Card: React.FC<Props> = ({ children, className }) => {
  return <div className={`${cardClasses} ${className}`}>{children}</div>;
};

export default Card;

