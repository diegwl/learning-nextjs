import Link from 'next/link';
import Image from 'next/image';

import logoImage from '@/assets/logo.png';
import classes from './main-header.module.css'
import HeaderBackground from './main-header-background';

function Header() {
    const { logo, header, nav, img } = classes

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
                        <Link href='/meals'>Browse Meals</Link>
                    </li>
                    <li>
                        <Link href='/community'>Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header