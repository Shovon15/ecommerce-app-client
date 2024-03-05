"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { RefreshCw, Variable, X } from "lucide-react";
import { cn } from "@/lib/utils";
// import { docsConfig } from "@/config/docs";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { docsConfig } from "@/config/docs";
// import { TooltipWrapper } from "@/components/tooltipWrapper";

type SidebarProps = {
    handleSidebar?: () => void;
    isSidebarOpen?: boolean;
    // isDesktopWidth: boolean;
};

export default function DesktopSidebar({ handleSidebar, isSidebarOpen }: SidebarProps) {

    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path || "");
    const currentPathName = `/${pathNames.slice(0, pathNames.length + 1).join("/")}`;

    return (
        <div className={`${isSidebarOpen ? "opacity-1" : "opacity-0"} min-h-screen border bg-secondary p-5 `}>

            <Accordion type="single" collapsible className="bg-">
                {docsConfig.sidebarNav.map((item, index) => (
                    <AccordionItem key={index} value={item.title} >
                        <div className="flex flex-col px-5 space-y-1">
                            <AccordionTrigger className="py-2 ">
                                <Link href={`/categories/${item.slug}`}>
                                    <h4 className="font-bold">
                                        {item.title}
                                    </h4>
                                </Link>
                            </AccordionTrigger>
                            <AccordionContent>
                                {item?.items?.length &&
                                    item.items.map((item) => (
                                        <div key={item.href} className="space-y-2">
                                            {!item.disabled &&
                                                (item.href ? (
                                                    <DashboardLink
                                                        href={item.href}
                                                        className={cn(
                                                            buttonVariants({
                                                                variant: item.href === currentPathName ? "default" : "ghost",
                                                            }),
                                                            `${currentPathName === item.href ? "text-background dark:text-background" : "text-muted-foreground"} w-full justify-start px-2  cursor-pointer pl-`
                                                        )}
                                                    >
                                                        {item.title}
                                                    </DashboardLink>
                                                ) : (
                                                    item.title
                                                ))}
                                        </div>
                                    ))}
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
            {/* <ScrollArea className="my-4 h-[calc(100vh-5rem)] pb-10 border-none ">
                {docsConfig.sidebarNav.map((item, index) => (
                    <div key={index} className="flex flex-col px-5 space-y-1">
                        <h4 className="font-bold">{item.title}</h4>
                        {item?.items?.length &&
                            item.items.map((item) => (
                                <div key={item.href} className="space-y-2">
                                    {!item.disabled &&
                                        (item.href ? (
                                            <DashboardLink
                                                href={item.href}
                                                className={cn(
                                                    buttonVariants({
                                                        variant: item.href === currentPathName ? "default" : "ghost",
                                                    }),
                                                    `${currentPathName === item.href ? "text-background dark:text-background" : "text-muted-foreground"} w-full justify-start px-2  cursor-pointer pl-5 `
                                                )}
                                            >
                                                {item.title}
                                            </DashboardLink>
                                        ) : (
                                            item.title
                                        ))}
                                </div>
                            ))}
                    </div>
                ))}
            </ScrollArea> */}
        </div>
    );
}

interface DashboardLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
}

function DashboardLink({ href, onOpenChange, className, children, ...props }: DashboardLinkProps) {
    const router = useRouter();
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={cn(className)}
            {...props}
        >
            {children}
        </Link>
    );
}
