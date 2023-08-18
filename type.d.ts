type CollectionItem = {
  name: string;
  price: string;
  image: string;
  colors: string[];
  id: string;
  description: string;
  comments?: ItemComment[] | undefined;
  properties: Properties;
  category: Category;
  sizes: Sizes[];
  brand: Brand;
};
type CartItem = {
  name: string;
  price: string;
  image: string;
  selectedColor: string;
  id: string;
  selectedSize: Sizes;
  shipping: number;
};

type CartArray = CartItem[];

type ProductItemSummary = Omit<CartItem, "shipping">;

type ItemComment = {
  author: string;
  content: string;
  date: string;
};

type Properties = {
  fabric: Fabric;
  pattern: Pattern;
  fit: Fit;
  neck?: Neck;
  sleeve?: Sleeve;
  style: Style;
};

type Sizes = "XS" | "S" | "M" | "L" | "XL" | "XXS" | "3XL" | "4XL" | "XXl";
type Gender = "male" | "female";
type Fabric = "cotton" | "wool" | "satin" | "Latex";
type Pattern = "printed" | "plain";
type Fit = "regular-fit" | "loose-fit" | "tight-fit";
type Neck = "round-neck" | "v-necked" | "N/A";
type Sleeve = "long" | "short" | "armless" | "N/A";
type Style = "Casual" | "Business" | "Party" | "Classic" | "Sports" | "Elegant";
type Brand = "Nike" | "H&M" | "Levi's" | "US Polo" | "Puma";
type Category =
  | "Shirts"
  | "Hoodies"
  | "Plain T-shirts"
  | "Printed T-shirts"
  | "Jeans"
  | "Full Sleeve"
  | "Gowns"
  | "Skirts"
  | "Shorts"
  | "Joggers";

type Command = "remove" | "add" | "delete";
type WishlistCommand = Omit<Command, "remove">;
type GetTotalCommand = "price" | "shipping";
type Country = { country: string; states: string[] };
