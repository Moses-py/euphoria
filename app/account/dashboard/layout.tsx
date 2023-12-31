"use client";
import NavIndicator from "@/components/nav_indicator/NavIndicator";
import Navbar from "@/components/navigations/Navbar";
import React from "react";
import DashboardNavigation from "./features/DashboardNavigation";
import { usePathname } from "next/navigation";
import returnModifiedPathname from "@/utils/returnModifiedPathname";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      <div className="xl:container my-3 font-sans">
        <div className="my-3 px-5">
          <NavIndicator
            indicators={[
              "Home",
              "My Account",
              returnModifiedPathname(pathname),
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-[1rem] mt-[2rem]">
          <DashboardNavigation />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
