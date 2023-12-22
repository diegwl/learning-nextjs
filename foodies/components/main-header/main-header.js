import Link from 'next/link';
import Image from 'next/image';

import logoImage from '@/assets/logo.png';
import classes from './main-header.module.css'
import HeaderBackground from './main-header-background';
import NavLink from './nav-link';

function Header() {
    const { logo, header, nav } = classes

    return (
        <>
            <HeaderBackground />
            <header className={header}>
            <Link className={logo} href="/">
                <Image src={logoImage} alt='A plate with food on it' priority />
                NextLevel Food
            </Link>

            <nav className={nav}>
                <ul>
                    <li>
                        <NavLink href={"/meals"}>Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/community"}>Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header