// import hooks
import { createContext, useContext, useEffect, useState } from 'react'

// import library function
import { condenseAddress } from "../../../library/general"

import ProfileImage from './ProfileImage'
import ProfileName from './ProfileName'
import ProfileBio from './ProfileBio'
import ProfileLinks from './ProfileLinks'

import galleryConfig from '../../../gallery-config'

export const ProfileContext = createContext()

export default function Profile() {
    const { profile, walletAddress } = galleryConfig.settings

    return (
        <ProfileContext.Provider value={{ profile: profile, address: walletAddress}} >
            <div className="grid grid-cols-1 gap-y-8 float-left w-[25%] px-[30px]">
                <ProfileHandle/>
                <ProfileBio />
                <ProfileLinks />
            </div>
        </ProfileContext.Provider>
    )
}

function ProfileHandle() {
    return (
        <div className="grid grid-cols-1 gap-y-2">
            <ProfileImage />
            <ProfileName />
            <ProfileAddress />
        </div>
    )
}
function ProfileAddress() {
    const { address } = useContext(ProfileContext)
    const [isCopied, setIsCopied] = useState(false)

    const handleCopyAddress = (e) => {
        navigator.clipboard.writeText(address)

        // set isCopied to true
        setIsCopied(true)
    }

    return (
        <button
            className="flex gap-x-1 w-fit text-left font-normal px-[15px] py-[5px] rounded-full bg-white shadow-md cursor-pointer transition ease-in-out hover:shadow-lg hover:-translate-y-1" 
            onClick={handleCopyAddress} 
        >
            {condenseAddress(address)}<ProfileAddressCopyContainer isCopied={isCopied} />
        </button>
    )
}
function ProfileAddressCopyContainer({ isCopied }) {
    return (
        <div className="flex h-full items-center relative w-[19px]">
            <ProfileAddressCopyBox isCopied={isCopied} />
        </div>
    )
}
function ProfileAddressCopyBox({ isCopied }) {
    if (isCopied) {
        return (
            <div className="relative w-[15px] h-[15px]">
                <ProfileAddressCheckImage />
            </div>
        )
    } else {
        return (
            <div className="relative w-[19px] h-[19px]" >
                <ProfileAddressCopyImage />
            </div>
        )
    }
}
function ProfileAddressCopyImage() {
    return <img src="/images/icons/copy.svg" layout="fill" /> 
}
function ProfileAddressCheckImage() {
    return <img src="/images/icons/checkMark.svg" layout="fill" />
}