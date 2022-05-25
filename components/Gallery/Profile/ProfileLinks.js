// import hooks
import { useContext } from 'react'

import { ProfileContext } from './Profile'

const linkTypes = [
    {
        id: "foundation",
        label: "Foundation",
        display: "@",
        location: "https://foundation.app/@",
        logo: "/images/logos/foundation.svg",
    },
    {
        id: "opensea",
        label: "OpenSea",
        display: "",
        location: "https://opensea.io/",
        logo: "/images/logos/opensea.svg",
    },
    {
        id: "superrare",
        label: "SuperRare",
        display: "@",
        location: "https://superrare.com/",
        logo: "/images/logos/superrare.png",
    },
    {
        id: "rarible",
        label: "Rarible",
        display: "",
        location: "https://rarible.com/",
        logo: "/images/logos/rarible.svg",
    },
    {
        id: "etherscan",
        label: "Etherscan",
        display: "",
        location: "https://etherscan.io/address/",
        logo: "/images/logos/etherscan.svg",
    },
    {
        id: "facebook",
        label: "Facebook",
        display: "",
        location: "https://facebook.com/",
        logo: "/images/logos/facebook.png",
    },
    {
        id: "instagram",
        label: "Instagram",
        display: "@",
        location: "https://www.instagram.com/",
        logo: "/images/logos/instagram.png",
    },
    {
        id: "twitter",
        label: "Twitter",
        display: "@",
        location: "https://twitter.com/",
        logo: "/images/logos/twitter.svg",
    },
    {
        id: "other",
        label: "Other",
        display: "",
        location: "",
        logo: "/images/icons/website.svg",
    },
]

export default function ProfileLinks() {
    const { profile } = useContext(ProfileContext)
    const links = profile.links
    
    return links.length ? <ProfileLinksPreview links={links} /> : null
}

function ProfileLinksPreview({ links }) {
    return (
        <div className="grid grid-cols-1 gap-y-2">
            <ProfileLinksTitle />
            <ProfileLinksContent links={links} />
        </div>
    )
}
function ProfileLinksTitle() {
    return <h1 className="text-left text-xl font-semibold border-b-[1px] mb-2">Links</h1>
}
function ProfileLinksContent({ links }) {
    return (
        <div className="grid grid-cols-1 gap-y-3">
            {
                links.map((link, k) => {
                    return <ProfileLink link={link} key={k} />
                })
            }
        </div>
    )
}
function ProfileLink({ link }) {
    return (
        <a href={link.location} target="_blank" rel="noreferrer" className="flex gap-x-2 items-center w-fit text-left font-normal px-[15px] py-[5px] whitespace-nowrap rounded-full bg-white shadow-md cursor-pointer transition ease-in-out hover:shadow-lg hover:-translate-y-1">
            {link.logo && <ProfileLinkLogoContainer logo={link.logo} />}{link.display}
        </a>
    )
}
function ProfileLinkLogoContainer({ logo }) {
    return (
        <div className="relative flex-inline max-w-[30px] max-h-[18px]  h-full ">
            <ProfileLinkLogo logo={logo} />
        </div>
    )
}
function ProfileLinkLogo({ logo }) {
    return <img src={logo} className="h-full object-contain" />
}