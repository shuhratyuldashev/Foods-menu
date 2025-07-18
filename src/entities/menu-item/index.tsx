import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import React from "react";
import MenuItemDrawer from "./ui/menu-item-drawer";
import { Drawer, DrawerContent, DrawerTrigger } from "@/shared/ui/drawer";
import { Button } from "@/shared/ui/button";
import { useInView } from "react-intersection-observer"

interface MenuItemProps {
  title: string;
  price: string;
  imageUrl: string;
  onEnter: (category: string) => void;
  category: string;
}

const MenuItem = ({ title, price, imageUrl, onEnter, category }: MenuItemProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  React.useEffect(() => {
    if (inView) {
      onEnter(category);
    }
  })
  return (
    <Card ref={ref}>
      <CardHeader>
        <AspectRatio ratio={4 / 3} className="w-full">
          {imageUrl ? (
            <img src={imageUrl} className="h-full w-full flex items-center text-sm font-semibold justify-center rounded-md object-cover bg-gray-300" alt="Not Image" />
          ) : (
            <div className="flex items-center bg-gray-300 justify-center text-sm font-semibold rounded-md h-full w-full">
              Not Image
            </div>
          )}
        </AspectRatio>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle className="truncate">{title || "Menu Item"}</CardTitle>
        <CardDescription>{price || "Narxi ko'rsatilmagan"}</CardDescription>
      </CardContent>
      <CardFooter>
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild>
            <Button size="sm" className="w-full">
              Batafsil
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <MenuItemDrawer title={title} imageUrl={imageUrl} price={price}/>
          </DrawerContent>
        </Drawer>
      </CardFooter>
    </Card>
  );
};

export default MenuItem;
