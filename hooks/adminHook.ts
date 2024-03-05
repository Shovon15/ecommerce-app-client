import { redirect } from "next/navigation";
import useAdminAuth from "./adminAuth";
type Props = {
    children: React.ReactNode;
}

const AdminProtected = ({ children }: Props) => {
    const isAuthenticated = useAdminAuth();
    return isAuthenticated ? children : redirect("/");
}

export default AdminProtected