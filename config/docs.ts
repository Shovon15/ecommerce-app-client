import { User, LogOut, BaggageClaim, LucideIcon } from "lucide-react";

// import { MainNavItem, SidebarNavItem } from "types/nav"
type MainNavItem = {
    title: string;
    href: string;
    external?: boolean,
    disabled?: boolean;
}

interface Items {
    title: string,
    slug: string;
    href: string,
    disabled?: boolean;
    items: Items[],
}

interface SidebarNavItem {
    title: string;
    slug: string;
    items: Items[];
}

interface ComponentItem {
    title: string;
    href: string;
    icon?: React.ReactNode;
}

interface DocsConfig {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
    component: ComponentItem[]
}


export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Documentation",
            href: "/docs",
        },
        {
            title: "Components",
            href: "/docs/components/accordion",
        },
        {
            title: "Themes",
            href: "/themes",
        },
        {
            title: "Examples",
            href: "/examples",
        },
        {
            title: "Figma",
            href: "/docs/figma",
        },
        {
            title: "GitHub",
            href: "https://github.com/shadcn/ui",
            external: true,
        },
        {
            title: "Twitter",
            href: "https://twitter.com/shadcn",
            external: true,
        },
    ],
    sidebarNav: [
        {
            title: "Mans Collection",
            slug: "mans_collection",
    
            items: [
                {
                    title: "Formal Shirt",
                    slug: "formal_shart",
                    href: "/",
                    items: [],
                },
                {
                    title: "Casual Shirt",
                    slug: "casual_shart",
                    href: "/w",
                    items: [],
                },
                {
                    title: "T-shart",
                    slug: "t_shart",
                    href: "/r",
                    items: [],
                },
                {
                    title: "polo shart",
                    slug: "polo_shart",
                    href: "/u",
                    items: [],
                },
                {
                    title: "Mens T",
                    slug: "mans_t_shart",
                    href: "/t",
                    disabled: true,
                    items: [],
                },
            ],
        },
        {
            title: "Womens Collection",
    
            slug: "women_collection",
            items: [
                {
                    title: "Women's T-shart",
                    slug: "women_t_shart",
                    href: "/a",
                    items: [],
                },
                {
                    title: "Sharee",
                    slug: "women_t_shart",
                    href: "/q",
                    items: [],
                },
                {
                    title: "Women's V",
                    slug: "women_t_shart",
                    href: "/b",
                    items: [],
                },
                {
                    title: "Women's C",
                    slug: "women_t_shart",
                    href: "/c",
                    items: [],
                },
                {
                    title: "Women's M",
                    slug: "women_t_shart",
                    href: "/d",
                    items: [],
                },
                {
                    title: "Women's D",
                    slug: "women_t_shart",
                    href: "/e",
                    items: [],
                },
                {
                    title: "Women's G",
                    slug: "women_t_shart",
                    href: "/f",
                    items: [],
                },
                {
                    title: "Women's T",
                    slug: "women_t_shart",
                    href: "/g",
                    items: [],
                },
            ],
        },
        {
            title: "Kids Collection",
            slug: "kids_collection",
            items: [
                {
                    title: "Kids Shirt",
                    slug: "kids_collection",
                    href: "/h",
                    items: [],
                },
                {
                    title: "Kids A",
                    slug: "kids_collection",
                    href: "/i",
                    items: [],
                },
                {
                    title: "Kids B",
                    slug: "kids_collection",
                    href: "/j",
                    items: [],
                },
                {
                    title: "Kids C",
                    slug: "kids_collection",
                    href: "/k",
                    items: [],
                },
                {
                    title: "Kids D",
                    slug: "kids_collection",
                    href: "/l",
                    items: [],
                },
            ],
        },

    ],

    component: [
        {
            title: "Profile",
            href: "/profile",
            // icon: {< User />}
        },
        {

            title: "Orders",
            href: "/order-list",
            // icon: { BaggageClaim }
        },
        {
            title: "Logout",
            href: "",
            // icon: { LogOut }
        }
    ],
}
