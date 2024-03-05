"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlignLeft, Ghost, Grip, Menu, ShoppingCart, X } from "lucide-react";

import Image from "next/image";
import Logo from "@/components/logo";
import { Input } from "@/components/ui/input";
import { LoginForm } from "@/app/(auth)/_components/loginForm";
import { AuthModal } from "@/app/(auth)/_components/authModal";
import { SignupForm } from "@/app/(auth)/_components/signupForm";
import { UserMenu } from "@/components/user/userMenu";
import { useSelector } from "react-redux";
import { Badge } from "@/components/ui/badge";
import { VerificationForm } from "@/app/(auth)/_components/verificationForm";

type NavProps = {
    handleSidebar: () => void;
    isSidebarOpen: boolean;
    handleCart: () => void;
    isCartOpen: boolean;
    // isDesktopWidth: boolean;
};


export const ClientNavbar = ({ handleSidebar, handleCart, isSidebarOpen, isCartOpen }: NavProps) => {
    const [authModalOpen, setAuthModalOpen] = React.useState<boolean>(false);
    const [route, setRoute] = React.useState<string>("login");

    const { user } = useSelector((state: any) => state.auth);
    const products = useSelector((state: any) => state.cart);

    return (
        <nav className="z-[9] w-full h-16 border-b bg-secondary px-10">
            <div className="flex h-full justify-between items-center">
                <div className="min-w-56">
                    <Logo />
                </div>
                <div className="flex justify-between gap-3 w-full">
                    <Button
                        variant="outline"
                        className={cn(
                            "flex gap-1 bg-transparent text-green-700 hover:text-green-600 shadow-md font-semibold"
                        )}
                        onClick={handleSidebar}
                    >
                        <Grip size={25} color="green" />
                        Category
                    </Button>
                    <div className="flex-grow px-5">
                        <Input type="text" placeholder="Search" className="shadow-md" />
                    </div>
                    {user ? (
                        <UserMenu
                            user={user}
                        />
                    ) : (
                        <>
                                <Button asChild>
                                    <Link href="/login">login</Link>
                                </Button>
                                {/* {route === "login" && (
                                <AuthModal
                                    route={route}
                                    modalOpen={authModalOpen}
                                    setModalOpen={setAuthModalOpen}
                                    handleOpen={() => setAuthModalOpen(true)}
                                    formComponent={<LoginForm setRoute={setRoute} setModalOpen={setAuthModalOpen} />}
                                />
                            )}
                            {route === "signup" && (
                                <AuthModal
                                    route={route}
                                    modalOpen={authModalOpen}
                                    setModalOpen={setAuthModalOpen}
                                    handleOpen={() => setAuthModalOpen(true)}
                                    formComponent={<SignupForm setRoute={setRoute} setModalOpen={setAuthModalOpen} />}
                                />
                            )}
                            {route === "varification" && (
                                <AuthModal
                                    route={route}
                                    modalOpen={authModalOpen}
                                    setModalOpen={setAuthModalOpen}
                                    handleOpen={() => setAuthModalOpen(true)}
                                    formComponent={<VerificationForm setRoute={setRoute} setModalOpen={setAuthModalOpen} />}
                                />
                            )} */}
                        </>
                    )}
                    {
                        products.length > 0 &&
                        <div className="relative  pr-3">
                            <Button
                                size="sm"
                                variant="ghost"
                                className={cn("hover:bg-gray-200 rounded-full p-2 shadow-md ")}
                                onClick={handleCart}
                            >
                                <ShoppingCart size={25} color="green" />
                                <Badge variant="outline" className="absolute bottom-0 right-0 px-2 text-md bg-gray-300">{products.length}</Badge>
                            </Button></div>
                    }
                </div>
            </div>
        </nav>
    );
};
