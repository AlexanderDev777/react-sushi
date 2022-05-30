import BasketItems from "./BasketItems";

const Basket = ({ display, onToggleBasket, basket, sushi, total, onDeleteBasketItem, postChangeToBasket }) => {
    
    let clazzName = "asideWrapper";

    if (display) {
        clazzName += " active";
    }

    function postBasketToState(item) { // Функция передачи в App.js нового созданного объекта с изменным кол-вом товара
        postChangeToBasket(item);
    }

    let basketImg = // Переменная содержит картинку и текст для пустой корзины
            <>
                <img width={200} className="basketPicture mt-50 ml-50" src="/icon/basket-img.png" alt="icon" />
                <p className="ml-50 mt-50">Мы ждем Вашего заказа :)</p>
            </>
    ;

    const finalPrice = (total - (total / 100 * 5)).toFixed(); // Общая стоимость с учетом скидки
    const discount = (total / 100 * 5).toFixed(); // Скидка, сумма

    const basketKey = Object.entries(basket); // Массив массивов с парой ключ + значение
    const basketItem = basketKey.map(key => { // Формирование карточки в корзине
        
        const sushiItem = sushi[key[0]]; // Наименование сета суш из entries
        let sushiTotal = +key[1]; // Кол-во суш 

        function changeItems() {

            return {
                plus() {
                    if (sushiTotal >= 0) {
                        ++sushiTotal; // Изменяем кол-во суш
                    }

                    const item = {}; // Объект обертка
                    item[key[0]] = sushiTotal; // Записываем пару ключ + измененное кол-во суш в объект обертку

                    return postBasketToState(item); // Передаем объект в функцию 

                },
                minus() {
                    if (sushiTotal > 0) {
                        --sushiTotal; // Изменяем кол-во суш
                    }
        
                    const item = {}; // Объект обертка
        
                    item[key[0]] = sushiTotal; // Записываем пару ключ + измененное кол-во суш в объект обертку
                    return postBasketToState(item); // Передаем объект в функцию 
                }
            }
        }

        const changeItem = changeItems();

        // function plusItem() {
        //     if (sushiTotal >= 0) {
        //         ++sushiTotal; // Изменяем кол-во суш
        //     }

        //    const item = {}; // Объект обертка

        //     item[key[0]] = sushiTotal; // Записываем пару ключ + измененное кол-во суш в объект обертку

        //     return postBasketToState(item); // Передаем объект в функцию 
        // }

        // function minusItem() {
        //     if (sushiTotal > 0) {
        //         --sushiTotal;
        //     }

        //     const item = {};

        //     item[key[0]] = sushiTotal;

        //     return postBasketToState(item);
        // }

        return (

            <BasketItems
                key={key}
                sushi={sushiItem}
                sushiTotal={sushiTotal} // Количество порции одног сета суш из entries
                onDeleteBasketItem={() => onDeleteBasketItem(key[0])} // Удаление элемента из корзины
                plus={() => changeItem.plus()}
                minus={() => changeItem.minus()}
            />
        )

    });

    return (

        <div className={clazzName}>
                <div className="drawer">
                    <div className="d-flex justify-between mb-25">
                        <h2>Заказ</h2>
                        <img onClick={() => onToggleBasket()} className="closeDrawer" src="/icon/btn-remove.svg" alt="remove" />
                    </div>
                    <div className="drawer-items">
                      {Object.keys(basket).length === 0 ? basketImg : basketItem}  
                    </div>
                    
                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>{finalPrice} руб.</b>
                            </li>
                            <li>
                                <span>Скидка 5%:</span>
                                <div></div>
                                <b>{discount} руб.</b>
                            </li>
                        </ul>
                        <button className="btn_arrow">Оформить заказ <img src="/icon/arrow.svg" alt="arrow" /></button>
                    </div>
                </div>
                <div onClick={() => onToggleBasket()} className="overlay"></div>
        </div>
        )
}


export default Basket;