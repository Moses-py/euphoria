import InfoAddressCard from "./InfoAddressCard";
import Link from "next/link";
const addresses = [
  {
    name: "Moses Chukwunekwu",
    phonenumber: "+2349069885063",
    address:
      "1/4 Pragatinagar Flats, opp. jain derasar , near Jainderasar, Vijaynagar road",
    tags: ["Home", "Default Billing Address"],
  },
  {
    name: "Moses Chukwunekwu",
    phonenumber: "+2349069885063",
    address:
      "1/4 Pragatinagar Flats, opp. jain derasar , near Jainderasar, Vijaynagar road",
    tags: ["Home", "Default Shipping Address"],
  },
  {
    name: "Moses Chukwunekwu",
    phonenumber: "+2349069885063",
    address:
      "1/4 Pragatinagar Flats, opp. jain derasar , near Jainderasar, Vijaynagar road",
    tags: ["Office"],
  },
  {
    name: "Moses Chukwunekwu",
    phonenumber: "+2349069885063",
    address:
      "1/4 Pragatinagar Flats, opp. jain derasar , near Jainderasar, Vijaynagar road",
    tags: ["Landline"],
  },
];
const InfoAddress = () => {
  return (
    <div className="my-5">
      <div className="flex justify-between items-center py-2">
        <h3 className="md:text-xl text-lg text-primary font-serif font-[600]">
          Address
        </h3>
        <Link
          href="/account/dashboard/info/addressupdate"
          className="font-semibold text-primary cursor-pointer bg-light px-3 py-2 border hover:border-gray-2 transition-all ease-linear duration-200 rounded-lg"
        >
          Add New
        </Link>
      </div>
      {/* Addresses */}
      <div className="grid md:grid-cols-2 gap-3 my-5">
        {addresses.map((address, index) => {
          return (
            <InfoAddressCard
              key={index}
              name={address.name}
              address={address.address}
              tags={address.tags}
              phonenumber={address.phonenumber}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InfoAddress;
