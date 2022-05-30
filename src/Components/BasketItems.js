
const BasketItems = ({ sushi, sushiTotal, onDeleteBasketItem, plus, minus}) => {

    return (
        
            <div className="basketItem d-flex align-center mb-10">
                <img className="mr-20 ml-25" width={85} height={70} src={sushi.img} alt="icon" />
                <div className="basketName mb-10">
                    <p className="mb-5">{ sushi.name.length > 8 ? sushi.name.substr(0, 8) + '..' : sushi.name}</p>
                    <b>{sushi.price} руб</b>
                </div>
                <div className="d-flex align-center basketItemTotal">
                    <button onClick={plus} className="btnPlus">+</button>
                    <input disabled className="inputTotal mr-5" width={10} height={10} type="text" defaultValue={sushiTotal} /><span className="mr-5">шт.</span>
                    <button onClick={minus} className="btnMinus">-</button>
                    <svg onClick={onDeleteBasketItem} className="removeBtn mt-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
                    <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
                    </svg>
                </div>              
            </div>
    )
}

export default BasketItems;