// import hooks
import { useContext } from 'react'

import { ProfileContext } from './Profile'

export default function ProfileBio() {
    const { profile } = useContext(ProfileContext)
    const bio = profile.bio

    // if bio exists show bio, else show nothing
    return bio ? <ProfileBioPreview bio={bio} /> : null
}

function ProfileBioPreview({ bio }) {
    return (
        <div className="grid grid-cols-1 gap-y-2">
            <ProfileBioTitle />
            <ProfileBioContent bio={bio} />
        </div>
    )
}
function ProfileBioTitle() {
    return <h1 className="text-left text-xl font-semibold border-b-[1px] mb-2">Bio</h1>
}
function ProfileBioContent({ bio }) {
    return <p className="profileBioContent">{bio}</p>
}