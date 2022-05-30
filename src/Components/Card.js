import CardListItems from "./CardListItems";

const Card = ({addToBasket, sushi, basket}) => {

    const sushiItem = Object.keys(sushi).map(key => {
        return (
            <CardListItems
                key={key}
                addToBasket={() => addToBasket(key)}
                sushiItem={sushi[key]} // Получаем объект по ключу
                basketItem={basket[key]} //Количество порций одного товара, подставляем ключ из sushi к basket
            />
        )
    });

    return (

        <div className="content p-40">
                <h1>Суши меню</h1>
                <div className="content-wrapper">
                    {sushiItem}
                </div>					
            </div>
    )
}

export default Card;