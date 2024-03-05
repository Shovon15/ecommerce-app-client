"use client";
import React, { useEffect } from "react";
import DesktopSidebar from "./_components/Sidebar/desktopSidebar";
import { ClientNavbar } from "./_components/clientNavbar/clientNavbar";
import { cn } from "@/lib/utils";
import CartComponent from "./_components/cart/cart";
import Footer from "@/components/footer";

type Props = {
    children: React.ReactNode;
};

const ClientLayout = ({ children }: Props) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(true);
    const [isCartOpen, setCartOpen] = React.useState<boolean>(false);

    // console.log(isSidebarOpen, isCartOpen, "is sidebar, is cart")

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsSidebarOpen(false)
            } else {
                setIsSidebarOpen(true)
            };
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="">
            {/* navbar------------------------------------- */}
            <div className="sticky top-0 hidden md:block">
                <ClientNavbar
                    handleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                    handleCart={() => setCartOpen(!isCartOpen)}
                    isSidebarOpen={isSidebarOpen}
                    isCartOpen={isCartOpen}
                />
            </div>
            {/*---------------- sidebar children cart------------------------- */}
            <div className="flex">
                <aside
                    className={`${isSidebarOpen ? "w-64 block opacity-1" : "w-0 oppacity-0"
                        } transition-all duration-300 ease-in-out fixed left-0`}
                >
                    <DesktopSidebar isSidebarOpen={isSidebarOpen} />
                </aside>
                <div
                    className={cn(
                        `${isSidebarOpen && "md:ml-64"} ${isCartOpen && "md:mr-64"
                        } w-full transition-all duration-300 ease-in-out`
                    )}
                >
                    <>
                        {children}
                    </>
                    <div>
                        <Footer />
                    </div>
                </div>
                <aside
                    className={`${isCartOpen ? "w-64 block opacity-1" : "w-0 oppacity-0"
                        } transition-all duration-300 ease-in-out fixed right-0`}
                >
                    <CartComponent isCartOpen={isCartOpen} />
                </aside>
            </div>

            {/* mobile nav---------------------------------- */}
            <div className="sticky bottom-0 md:hidden">
                <div className="h-20 bg-green-200">mobile nav</div>
            </div>
        </div>
    );
};

export default ClientLayout;
