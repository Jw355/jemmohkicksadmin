"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { SettingsIcon } from "../icons/settings-icon";
import Categories from "../icons/Categories";

export const Sidenavepane = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>) => {
  const params = useParams();
  const pathname = usePathname();

  const route = [
    {
      href: `/Dashboard/${params.storeId}/orders`,
      labes: "Orders",

      active:
        pathname === `/Dashboard/${params.storeId}/orders` ||
        pathname.startsWith(`/Dashboard/${params.storeId}/orders`),
    },
    {
      href: `/Dashboard/${params.storeId}/products`,
      labes: "Products",
      active:
        pathname === `/Dashboard/${params.storeId}/products` ||
        pathname.startsWith(`/Dashboard/${params.storeId}/products`),
    },
    {
      href: `/Dashboard/${params.storeId}/billboards`,
      labes: "Billboard",
      active:
        pathname === `/Dashboard/${params.storeId}/billboards` ||
        pathname.startsWith(`/Dashboard/${params.storeId}/billboards`),
    },

    {
      href: `/Dashboard/${params.storeId}/categories`,
      labes: "Category",
      active:
        pathname === `/Dashboard/${params.storeId}/categories` ||
        pathname.startsWith(`/Dashboard/${params.storeId}/categories`),
    },
    {
      href: `/Dashboard/${params.storeId}/sizes`,
      labes: "Size",
      active:
        pathname === `/Dashboard/${params.storeId}/sizes` ||
        pathname.startsWith(`/Dashboard/${params.storeId}/sizes`),
    },
    {
      href: `/Dashboard/${params.storeId}/colors`,
      labes: "Color",
      active:
        pathname === `/Dashboard/${params.storeId}/colors` ||
        pathname.startsWith(`/Dashboard/${params.storeId}/colors`),
    },
    {
      href: `/Dashboard/${params.storeId}/SiteSettings`,
      labes: "Settings",
      active:
        pathname === `/Dashboard/${params.storeId}/SiteSettings` ||
        pathname.startsWith(`/Dashboard/${params.storeId}/SiteSettings`),
    },
  ];

  return (
    <nav className={cn("flex flex-col space-y-8 pl-5 w-[15%]", className)}>
      <Link href={`/Dashboard/${params.storeId}`}>
        <img
          src="/image/JemmohKicks_Trimmed.png"
          className="w-full h-14 px-4"
        />
      </Link>
      {route.map((routes) => (
        <Link
          key={routes.href}
          href={routes.href}
          className={cn(
            "text-lg text-white font-medium text-center",
            routes.active
              ? "bg-white w-full text-black font-bold border rounded-l-lg"
              : "bg-none text-white"
          )}
        >
          {routes.labes}
        </Link>
      ))}
    </nav>
  );
};
