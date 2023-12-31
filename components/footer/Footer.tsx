const Footer = () => {
  return (
    <footer className="w-full bg-primary px-5 py-[5rem] mt-[5rem]">
      <div className="sm:container">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 text-light">
          {/* help */}
          <div className="flex flex-col gap-8 my-[1rem]">
            <h3 className="md:text-xl text-lg  font-serif font-[600]">
              Need help?
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="font-sans text-lg font-regular">Contact us</li>
              <li className="font-sans text-lg font-regular">Track order</li>
              <li className="font-sans text-lg font-regular">
                Returns & refunds
              </li>
              <li className="font-sans text-lg font-regular">FAQ`s</li>
              <li className="font-sans text-lg font-regular">Careers</li>
            </ul>
          </div>
          {/* company */}
          <div className="flex flex-col gap-8 my-[1rem]">
            <h3 className="md:text-xl text-lg  font-serif font-[600]">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="font-sans text-lg font-regular">About us</li>
              <li className="font-sans text-lg font-regular">Euphoria blog</li>
              <li className="font-sans text-lg font-regular">Euphoria stan</li>
              <li className="font-sans text-lg font-regular">Collaboration</li>
              <li className="font-sans text-lg font-regular">Media</li>
            </ul>
          </div>
          {/* info */}
          <div className="flex flex-col gap-8 my-[1rem]">
            <h3 className="md:text-xl text-lg  font-serif font-[600]">
              More info
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="font-sans text-lg font-regular">
                Terms and conditions
              </li>
              <li className="font-sans text-lg font-regular">Privacy policy</li>
              <li className="font-sans text-lg font-regular">
                Shipping policy
              </li>
              <li className="font-sans text-lg font-regular">Sitemap</li>
            </ul>
          </div>
          {/* location */}
          <div className="flex flex-col gap-8 my-[1rem]">
            <h3 className="md:text-xl text-lg  font-serif font-[600]">
              Location
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="font-sans text-lg font-regular">
                support@euphoria.in
              </li>
              <li className="font-sans text-lg font-regular">
                Eklingpura Chouraha, Ahmedabad Main Road
              </li>
              <li className="font-sans text-lg font-regular">
                (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-[2rem]" />
        <div className="w-full grid place-items-center">
          <span className="text-base font-sans font-regular text-light mt-[2rem] text-center">
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
