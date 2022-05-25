import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ItemCard ({ item }) {
    return (
        <div className="bg-[white] w-full rounded-lg overflow-hidden shadow-md transition ease-in-out hover:shadow-xl hover:-translate-y-1">
            <ImageContainer id={item.id} image={item.image} />
            <Info item={item} />
        </div>
    )
}

function ImageContainer({ id, image }) {
    return (
        <Link href={`/item/${encodeURIComponent(id.address)}/${encodeURIComponent(id.id)}`}>
            <div className="relative container aspect-[1/1] overflow-hidden cursor-pointer">
                { image.type == 'video' ? <ItemCardVideo source={image.source} /> : <ItemCardImage source={image.source} /> }
            </div>
        </Link>
    )
}
function ItemCardVideo({ source }) {
    return <video src={source} autoPlay loop muted></video>
}

function ItemCardImage({ source}) {
    return <img src={source} layout="fill" />
}

function Info({ item }) {
    return (
        <div className="grid grid-cols-1 gap-y-[10px] w-full h-[100px] px-[20px] py-[10px]">
            <ItemCardName name={item.info.name} />
            <ItemSubheader collection={item.info.collection} />
        </div>
    )
}
function ItemCardName({ name }) {
    return <h1 className="text-3xl font-semibold">{name}</h1>
}

function ItemSubheader({ collection }) {
    return (
        <div className="relative flex justify-between">
            <ItemCardCollection collection={collection} />
        </div>
    )
}
function ItemCardCollection({ collection }) {
    return <h1 className="text-xl font-semibold">{collection}</h1>
}