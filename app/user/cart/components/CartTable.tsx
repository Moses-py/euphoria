import CartItem from "./CartItem";

interface CartTableProps {
  cart: CartArray[];
}
const CartTable = ({ cart }: CartTableProps) => {
  return (
    <div className="lg:container font-sans">
      {/* Heading */}
      <div className="flex justify-between items-center bg-primary py-6 px-5 lg:px-12">
        <div className="lg:flex-1 flex-none text-light uppercase">
          <p>Product Details</p>
        </div>
        <ul className="hidden lg:flex justify-between list-none flex-initial lg:flex-1 gap-[1.5rem] text-light uppercase">
          <li>Price</li>
          <li>Quantity</li>
          <li>Shipping</li>
          <li>Subtotal</li>
          <li>Action</li>
        </ul>
        <p className="flex lg:hidden text-light uppercase">Details</p>
      </div>
      {/* Items */}
      <div className="flex flex-col gap-6 my-5">
        {cart.map((item, index) => {
          return <CartItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CartTable;
