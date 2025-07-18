import MenuCategory from "@/entities/menu-category";
import type { Menu } from "@/shared/types/menu-list";
import { ScrollArea, ScrollBar } from "@/shared/ui/scroll-area";

interface HeaderProps {
  categories: Menu;
  activeCategory: string;
  fromScroll: boolean;
}

const Header = ({ categories, activeCategory, fromScroll }: HeaderProps) => {
  const scrollToCategory = (category: string) => {
    const section = document.getElementById(category);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="flex bg-white flex-col items-center p-4 sticky top-0 font-semibold z-10">
      Menu
      <nav className="flex gap-4 mt-2">
        <ScrollArea className="max-w-96 whitespace-nowrap">
          <div className="flex gap-2">
            {categories.map((category, i) => (
              <MenuCategory
                key={i}
                title={category.category}
                isActive={activeCategory === category.category}
                scrollTo={scrollToCategory}
                fromScroll={fromScroll}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </nav>
    </header>
  );
};

export default Header;
