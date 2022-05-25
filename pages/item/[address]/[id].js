import { useRouter } from 'next/router'

// import hooks
import { useEffect, useState } from 'react'

// import components
import Item from "../../../components/Gallery/Item/Item" 

// import gallery config
import galleryConfig from '../../../gallery-config'

export default function ItemPage() {
    const { items } = galleryConfig.items

    const router = useRouter()
    const itemId = router.query
    
    const item = getItem(items, itemId)

    return <Item item={item} /> 
}

function getItem(items, { address, id }) {
    const item = items.filter((item) => {
        if ((item.id.address == address) && (item.id.id == id)) {
            return true
        }
    })[0]

    return item
}
