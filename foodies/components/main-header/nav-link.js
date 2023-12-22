'use client';

import Link from 'next/link'

import classes from './nav-link.module.css'
import { usePathname } from 'next/navigation';

function NavLink({ href, children }) {
    const { active, link } = classes;
    const path = usePathname();

    return (
        <Link href={href} className={link && path.startsWith(href) && active}>
            {children}
        </Link>
    )
}

export default NavLink