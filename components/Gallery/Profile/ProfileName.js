// import hooks
import { useContext } from 'react'

import { ProfileContext } from './Profile'

export default function ProfileName() {
    const { profile } = useContext(ProfileContext)
    const name = profile.name

    // if name exists show name, else show nothing
    return name ? <ProfileNamePreview name={name} /> : null
}

function ProfileNamePreview({ name }) {
    return <h1 className="profileNameContent">{name}</h1>
}