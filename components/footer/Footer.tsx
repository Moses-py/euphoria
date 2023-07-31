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
              <li className="font-sans text-lg font-light">Contact us</li>
              <li className="font-sans text-lg font-light">Track order</li>
              <li className="font-sans text-lg font-light">
                Returns & refunds
              </li>
              <li className="font-sans text-lg font-light">FAQ`s</li>
              <li className="font-sans text-lg font-light">Careers</li>
            </ul>
          </div>
          {/* company */}
          <div className="flex flex-col gap-8 my-[1rem]">
            <h3 className="md:text-xl text-lg  font-serif font-[600]">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="font-sans text-lg font-light">About us</li>
              <li className="font-sans text-lg font-light">Euphoria blog</li>
              <li className="font-sans text-lg font-light">Euphoria stan</li>
              <li className="font-sans text-lg font-light">Collaboration</li>
              <li className="font-sans text-lg font-light">Media</li>
            </ul>
          </div>
          {/* info */}
          <div className="flex flex-col gap-8 my-[1rem]">
            <h3 className="md:text-xl text-lg  font-serif font-[600]">
              More info
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="font-sans text-lg font-light">
                Terms and conditions
              </li>
              <li className="font-sans text-lg font-light">Privacy policy</li>
              <li className="font-sans text-lg font-light">Shipping policy</li>
              <li className="font-sans text-lg font-light">Sitemap</li>
            </ul>
          </div>
          {/* location */}
          <div className="flex flex-col gap-8 my-[1rem]">
            <h3 className="md:text-xl text-lg  font-serif font-[600]">
              Location
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="font-sans text-lg font-light">
                support@euphoria.in
              </li>
              <li className="font-sans text-lg font-light">
                Eklingpura Chouraha, Ahmedabad Main Road
              </li>
              <li className="font-sans text-lg font-light">
                (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-[2rem]" />
        <div className="w-full grid place-items-center">
          <span className="text-base font-sans font-light text-light mt-[2rem] text-center">
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
