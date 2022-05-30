

const CardListItems = ({sushiItem, addToBasket, basketItem}) => {

    const { name, descr, price, img, check, like } = sushiItem;

    return (

            <div className="card">
                <img width={23} className="card-favorite" src="/icon/favoriteoff.png" alt="icon" />	
                <img width={230}  src={img} alt="icon" />
                <div className="card-body">
                    <p className="card-title">{name}</p>
                    <p className="card-descr">{descr}</p>
                    <div className="card-footer">
                        <div className="card-price">
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                        {
                            !check ? (<button onClick={addToBasket} className="card-button mt-5">Заказать</button>
                        ) : (
                                <button onClick={addToBasket} className="card-button card-check mt-5">Добавить x{ basketItem }</button>
                            )
                        }
                        
                        
                    </div>
                </div>       
            </div>
    )
}

export default CardListItems;