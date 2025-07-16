import { Button } from "@/shared/ui/button";
import React from "react";

interface MenuCategoryProps {
  isActive: boolean;
  title: string;
  scrollTo: (category: string) => void;
}

const MenuCategory = ({ isActive, title, scrollTo }: MenuCategoryProps) => {
  const ref = React.useRef<HTMLButtonElement | null>(null)

  React.useEffect(() => {
    if(isActive && ref.current) {
      ref.current.scrollIntoView({
      behavior: "smooth",
      inline: "start"
    })
    }
  }, [isActive])
  
  return (
  <Button
    ref={ref}
    onClick={() => scrollTo(title)}
    size="sm"
    variant={isActive ? "default" : "ghost"}
    className="font-semibold"
  >
    {title || " "}
  </Button>
)};

export default MenuCategory;
