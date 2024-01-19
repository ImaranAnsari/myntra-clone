import { useSelector } from 'react-redux'

const BagSummery = () => {
    const bagItemIds = useSelector(store => store.bag);
    const items = useSelector(store => store.items);
    const finalItems = items.filter((item) => {
        const itemIndex = bagItemIds.indexOf(item.id);
        return itemIndex >= 0;
    });

    const CONVENIENCE_FEES = 99;
    let totalItem = bagItemIds.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    finalItems.forEach((bagItem) => {
        totalMRP += bagItem.orginal_price;
        totalDiscount += bagItem.orginal_price - bagItem.current_price;
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    return (
        <div className="bag-summary">
            <div className="bag-details-container">
                <div className="price-header">Total Items ({totalItem} Items) </div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">₹{totalMRP}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">₹{finalPayment}</span>
                </div>
            </div>
            <button className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>

        </div>
    )
}

export default BagSummery