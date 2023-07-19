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

type Sizes = "XS" | "S" | "M" | "L" | "XL";
type Gender = "male" | "female";
type Fabric = "cotton" | "wool" | "satin" | "Latex";
type Pattern = "printed" | "plain";
type Fit = "regular-fit" | "loose-fit" | "tight-fit";
type Neck = "round-neck" | "v-necked";
type Sleeve = "long" | "short" | "armless";
type Style = "casual" | "business" | "party";
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
