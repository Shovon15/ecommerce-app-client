"use client"

import { useLoadUserQuery } from "@/redux/feature/api/apiSlice";
import { useEffect, useState } from "react";



type CustomPros = {
    children: React.ReactNode
}

export const Custom = ({ children }: CustomPros) => {
    const [loading, setLoading] = useState<boolean>(true);

    const { isLoading } = useLoadUserQuery();

    useEffect(() => {
        if (!isLoading) {
            setLoading(false);
        }
    }, [isLoading]);

    // console.log(isLoading);

    return (
        <>
            {
                loading ?
                    <div className="flex justify-center items-center min-h-screen">
                        {/* <SyncLoader
                            color="#053B50"
                            size={10}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /> */}
                        <p>loading...</p>
                    </div>
                    :
                    <>{children}</>

            }
        </>
    )

}
