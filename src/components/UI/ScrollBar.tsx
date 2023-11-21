import { Props } from "@/libs/types";

const ScrollBar: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-max overflow-y-auto scroll-m-10 scrollbar-transparent">
      {children}
    </div>
  );
};

export default ScrollBar;
