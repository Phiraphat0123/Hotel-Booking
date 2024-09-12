import Link from "next/link"
import Image from "next/image"
import { useState } from "react"


export default function Navbar (){
    
    const [isActive,setActive] = useState([true, false, false, false]);

    const activeBtn=(index)=>{
        let newActive = [false, false, false, false]
        newActive[index] = !newActive[index]
        setActive(newActive)
    }
    
    return (
        <nav >
            <div className="nav_img_wrapper">
                {/* logo */}
                <Image src="/logo.png" width={30} height={34} alt="loco" />
            </div>
            <div className="container_link">
                <ul>
                    <li>
                        <Link href="/" id="home-btn" className={isActive[0]?"link-active":""} onClick={()=>activeBtn(0)}>
                            <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.951172 7.64705L9.50017 0.998047L18.0512 7.64705V18.098C18.0512 18.602 17.851 19.0852 17.4947 19.4415C17.1384 19.7979 16.6551 19.998 16.1512 19.998H2.85117C2.34726 19.998 1.86399 19.7979 1.50767 19.4415C1.15135 19.0852 0.951172 18.602 0.951172 18.098V7.64705Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.50012 19.9961V9.99609H12.5001V19.9961" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <h4>
                                Home
                            </h4>
                        </Link>
                    </li>
                    <li>
                        <Link href="/explore" className={isActive[1]?"link-active":""} onClick={()=>activeBtn(1)}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17 17L13.5 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <h4>
                                Explore
                            </h4>
                        </Link>
                    </li>
                    <li>
                        <Link href="/coming-soon" className={isActive[2]?"link-active":""} onClick={()=>activeBtn(2)}>
                            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.0847 2.4141C17.6365 1.96564 17.1043 1.60988 16.5185 1.36716C15.9327 1.12444 15.3048 0.999512 14.6707 0.999512C14.0367 0.999512 13.4088 1.12444 12.823 1.36716C12.2372 1.60988 11.705 1.96564 11.2567 2.4141L10.3267 3.3441L9.39674 2.4141C8.48669 1.53188 7.26621 1.04292 5.99877 1.05276C4.73133 1.0626 3.51859 1.57045 2.62234 2.4667C1.7261 3.36294 1.21824 4.57568 1.2084 5.84313C1.19856 7.11057 1.68752 8.33105 2.56975 9.2411L3.49974 10.1711L10.3277 17.0011L17.1557 10.1731L18.0857 9.2431C18.5342 8.79485 18.89 8.26262 19.1327 7.67684C19.3754 7.09105 19.5003 6.46318 19.5003 5.8291C19.5003 5.19502 19.3754 4.56716 19.1327 3.98137C18.89 3.39559 18.5342 2.86336 18.0857 2.4151L18.0847 2.4141Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h4>
                                Trips
                            </h4>
                        </Link>
                    </li>
                    <li>
                        <Link href="/coming-soon" className={isActive[3]?"link-active":""} onClick={()=>activeBtn(3)}>
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 17V15C15.0618 14.0065 14.7287 13.0288 14.0732 12.2796C13.4177 11.5305 12.4929 11.0706 11.5 11H4.49997C3.50705 11.0706 2.5822 11.5305 1.9267 12.2796C1.27121 13.0288 0.938136 14.0065 0.999973 15V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.99997 9C9.96389 9 11.556 7.20914 11.556 5C11.556 2.79086 9.96389 1 7.99997 1C6.03605 1 4.44397 2.79086 4.44397 5C4.44397 7.20914 6.03605 9 7.99997 9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h4>
                                Profile
                            </h4>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </nav>
    )
}