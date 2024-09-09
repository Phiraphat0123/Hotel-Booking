import Link from "next/link"
export default function Navbar (){
    return (
        <nav>
            {/* logo */}
            <div>

            </div>
            <div>
                <ul>
                    <li>
                        <Link href="/">
                            <h4>
                                Home
                            </h4>
                        </Link>
                    </li>
                    <li>
                        <Link href="/explore">
                            <h4>
                                Explore
                            </h4>
                        </Link>
                    </li>
                    <li>
                        <Link href="/trips">
                            <h4>
                                Trips
                            </h4>
                        </Link>
                    </li>
                    <li>
                        <Link href="/profile">
                            <h4>
                                Profile
                            </h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}