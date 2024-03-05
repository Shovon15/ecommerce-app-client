import { useLoadUserQuery } from "@/redux/feature/api/apiSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useAdminAuth = () => {
    const { user } = useSelector((state: any) => state.auth);
    if (user?.role === "admin") {
        return true;
    }
    return false;
};

export default useAdminAuth;





