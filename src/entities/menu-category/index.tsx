import { Button } from "@/shared/ui/button";
import React from "react";

interface MenuCategoryProps {
  isActive: boolean;
  title: string;
  scrollTo: (category: string) => void;
  fromScroll: boolean;
}

const MenuCategory = ({ isActive, title, scrollTo, fromScroll }: MenuCategoryProps) => {
  const ref = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (isActive && ref.current) {
      const delay = fromScroll ? 100 : 0;
      const timeout = setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", inline: "start" });
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isActive, fromScroll]);

  return (
    <Button
      ref={ref}
      onClick={() => scrollTo(title)}
      size="sm"
      variant={isActive ? "default" : "ghost"}
      className="font-semibold"
    >
      {title}
    </Button>
  );
};

export default MenuCategory;
