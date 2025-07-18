import {
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/shared/ui/drawer";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

interface MenuItemDrawerProps {
  title: string;
  price: string;
  imageUrl: string;
}

const MenuItemDrawer = ({ title, price, imageUrl }: MenuItemDrawerProps) => (
  <>
    <DrawerHeader>
      <AspectRatio ratio={4 / 3} className="w-full">
        {imageUrl ? (
          <img
            className="rounded-md h-full w-full object-cover"
            src={imageUrl}
            alt=""
          />
        ) : (
          <div className="flex items-center bg-gray-200 justify-center rounded-md h-full w-full">
            Not Image
          </div>
        )}
      </AspectRatio>
    </DrawerHeader>
    <main className="flex flex-col gap-2 p-4">
      <DrawerTitle className="font-medium text-2xl">
        {title || "Menu Item"}
      </DrawerTitle>
      <DrawerDescription className="font-semibold">
        {price || "Narxi ko'rsatilmagan"}
      </DrawerDescription>
    </main>
  </>
);

export default MenuItemDrawer;
