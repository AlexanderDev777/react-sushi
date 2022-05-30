
const Header = ({ onToggleBasket, total, basket }) => {

		let src = "/icon/basketoff.png";

		if (Object.keys(basket).length !== 0) {
			src = "/icon/basketon.png";
		} else {
			src = "/icon/basketoff.png";
		}

        return (
            <header className="d-flex justify-between align-center p-30">
					<div className="d-flex align-center">
						<img src="/icon/logo.png" alt="logo" />
						<div>
							<h3 className="text-uppercase mt-10">React Sushi</h3>
							<p className="mt-5">Делаем море ближе</p>
						</div>
					</div>
					<ul className="d-flex justify-center align-center">
						<li className="mr-25 d-flex">
							<img width={23} height={23} src={src} alt="icon" onClick={() => onToggleBasket()} />
							<span>{total} руб</span>
						</li>
						<li className="mr-5">
							<img
								className="icon"
								width={23}
								height={23}
								src="/icon/favorite.png"
								alt="icon"
							/>
						</li>
						<li>
							<img
								className="icon"
								width={23}
								height={23}
								src="/icon/useroff.png"
								alt="icon"
							/>
						</li>
					</ul>
			</header>
        )
}


export default Header;