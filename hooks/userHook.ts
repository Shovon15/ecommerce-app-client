import React from "react";
import useUserAuth from "./userAuth";
import { redirect } from "next/navigation";
import useAdminAuth from "./adminAuth";

type Props = {
    children: React.ReactNode
};

const Protected = ({ children }: Props) => {
    const isAuthenticated = useUserAuth();
    return isAuthenticated ? children : redirect("/");
};

export default Protected;


