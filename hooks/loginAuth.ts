import { useLoadUserQuery } from "@/redux/feature/api/apiSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useLoginAuth = () => {
    const { user } = useSelector((state: any) => state.auth);
    if (user) {
        return false;
    }
    return true;
};

export default useLoginAuth;