import { redirect } from "next/navigation";
import useAdminAuth from "./adminAuth";
import useLoginAuth from "./loginAuth";
type Props = {
    children: React.ReactNode;
}

const IsLogedin = ({ children }: Props) => {
    const isAuthenticated = useLoginAuth();
    return isAuthenticated ? children : redirect("/profile");
}

export default IsLogedin