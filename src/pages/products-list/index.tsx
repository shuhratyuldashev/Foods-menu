import MenuItem from "@/entities/menu-item";
import Header from "@/widgets/header";
import menu from "@/shared/assets/menu.json";
import React from "react";

const ProductsList = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('');
  const [fromScroll, setFromScroll] = React.useState(false);

  const handleCategoryChange = (category: string, triggeredByScroll = true) => {
    setFromScroll(triggeredByScroll);
    setActiveCategory(category);
  };

  return (
    <main>
      <Header activeCategory={activeCategory} categories={menu} fromScroll={fromScroll} />
      {menu.map((menu, i) => (
        <section key={i} id={menu.category} className="p-4 mt-2 scroll-mt-20">
          <h1 className="font-semibold">{menu.category}</h1>
          <div className="grid grid-cols-2 gap-2">
            {menu.items.map((item, i) => (
              <MenuItem
                key={i}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                category={menu.category}
                onEnter={handleCategoryChange}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default ProductsList;
