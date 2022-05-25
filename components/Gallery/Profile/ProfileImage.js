import { useContext } from 'react'
import { ProfileContext } from './Profile'

export default function ProfileImage() {
    const { profile } = useContext(ProfileContext)
    const image = profile.image

    return image ? <ProfileImagePreview image={image} /> : null
}

function ProfileImagePreview({ image }) {
    return(
        <div className="container px-[16%]">
            <ProfileImageBox image={image} />
        </div>
    )
}
function ProfileImageBox({ image }) {
    return (
        <div className="relative min-w-[100px] aspect-[1/1] rounded-full  overflow-hidden">
            <Image image={image} />
        </div>
    )
}
function Image({ image }) {
    return <img src={image} layout="fill" />
}