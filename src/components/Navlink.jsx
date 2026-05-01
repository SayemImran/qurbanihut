"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({href, children}) => {
    const pathname = usePathname();
    const isActive = href === pathname;
    return (
        <Link href={href} className={`${isActive ? "border-2 border-[#173404] rounded-md font-medium px-2 py-1" : ""}`}>
            {children}
        </Link>
    );
};

export default Navlink;