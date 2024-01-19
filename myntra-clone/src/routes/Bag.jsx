import React from 'react';
import { useSelector } from 'react-redux';

import BagSummery from '../components/BagSummery'
import BagItem from '../components/BagItem'

const Bag = () => {

    const bagItems = useSelector(store => store.bag);
    const items = useSelector(store => store.items);

    const finalItems = items.filter(item => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >= 0;
    })

    return (
        <>
            <main>
                <div className="bag-page">
                    <div className="bag-items-container">
                        {finalItems.map(item =>
                            (<BagItem key={item.id} item={item} />)
                        )}
                    </div>
                    <BagSummery />
                </div>
            </main>
        </>
    )
}

export default Bag