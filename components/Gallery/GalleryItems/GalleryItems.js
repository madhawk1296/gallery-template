import sortItems from '../../../library/items/sortItems'

// import components
import ItemCard from './ItemCard'

// import gallery config
import galleryConfig from '../../../gallery-config'

export default function GalleryItems() {
    return <GalleryItemsPreview />
}
function GalleryItemsPreview() {
    return (
        <div className="float-left w-[75%] pr-[30px]">
            <GalleryItemsHeaderPreview />
            <ItemCardsCollection />
        </div>
    )
}

function GalleryItemsHeaderPreview() {
    return (
        <div className="relative border-b-2 mb-[15px]">
            <GalleryItemsHeaderCollection />
        </div>
    )
}

function GalleryItemsHeaderCollection({ headerCollectionRef, handleEndHidden }) {
    return <h1 ref={headerCollectionRef} onClick={handleEndHidden} className="text-left text-2xl font-semibold mb-[5px] cursor-pointer">Collection</h1>
}

function ItemCardsCollection () {
    const { items, hiddenItems, pinnedItems, order } = galleryConfig.items
    
    // filter out hidden items and pinned items, then create an item card for each remaining item
    const itemCards = items
    .filter(item => !hiddenItems.includes(item.id) && !pinnedItems.includes(item.id))
    .map((item, key) => {
        return <ItemCard item={item} key={key} />
    }) 

    // sort items based on items order
    const sortedItems = sortItems(itemCards, order)

    // filter out hidden items, then create an item card for each pinned item
    const pinnedItemCards = pinnedItems
    .filter(itemId => !hiddenItems.includes(itemId))
    .map((itemId, key) => {
        const pinnedItem = items.find(item => JSON.stringify(item.id) == JSON.stringify(itemId))
        return <ItemCard item={pinnedItem} key={key} />
    })
    
    return (
        <div className="relative grid grid-cols-2 gap-x-[2.5%] gap-y-[30px]">
            {pinnedItemCards}
            {sortedItems}
        </div>
    )
}