import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BaggageClaim, LogOut, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Link, { LinkProps } from "next/link";
import { docsConfig } from "@/config/docs";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { userLogedOut } from "@/redux/feature/auth/authSlice";
import toast from "react-hot-toast";
import { useLogoutMutation } from "@/redux/feature/auth/authApi";
import { useEffect } from "react";

type IUser = {
    name: string;
    avatar?: {
        url?: string;
        public_id?: string;
    };
};
type UserMenuProp = {
    user: IUser;
};

export const UserMenu = ({ user }: UserMenuProp) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [logout, { isSuccess, isError }] = useLogoutMutation();


    useEffect(() => {
        if (isSuccess) {
            toast.success("logout");
            router.push("/");
        }

        if (isError) {
            toast.success("Something went wrong");
        }
    }, [isSuccess, isError, router]);

    const handleLogout = async () => {
        await logout({});
    };

    // const handleLogout = () => {
    //     dispatch(userLogedOut({}));
    //     toast.success("logour")
    //     router.push("/");
    // };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
                <Avatar className="shadow-xl">
                    {user?.avatar?.url ? (
                        <AvatarImage src={user?.avatar?.url} />
                    ) : user?.name ? (
                        <AvatarFallback>{user?.name.slice(0, 2)}</AvatarFallback>
                    ) : (
                        <AvatarFallback></AvatarFallback>
                    )}
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                    <Link href="/profile">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/order">
                        <BaggageClaim className="mr-2 h-4 w-4" />
                        <span>Orders</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <div onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
