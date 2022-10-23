import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "../buttons/ShoppingCart"
import { InputSearch } from "../inputs/InputSearch"
import { ToggleSwitch } from "../inputs/ToggleSwitch"

export const Navbar = () => {
    return (
        <nav className="nav__content">
            <div className="logo__search">
                <Link href="/">
                    <div className="image__logo-content">
                        <Image
                            src={require("../../src/images/brand-image.png")}
                            alt='brand logo'
                            width="70"
                            height="70"
                        />
                    </div>
                </Link>

                <div className="search__content">
                    <InputSearch
                        nameInput="search"
                        placeholder="Buscar Producto"
                        type="text"
                    />
                </div>
            </div>

            <div className="toggle__shop">
                <div className="toggle__content">
                    <ToggleSwitch />
                </div>

                <div className="shop__content">
                    <ShoppingCart />
                </div>
            </div>
        </nav>
    )
}
