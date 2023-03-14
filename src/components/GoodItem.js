function GoodItem(props) {
    const { id, name, description, price, full_background, addToBasket } = props;
    return (
        <div className="card">
            <div >
                <img className='card-img' src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn btn-primary" onClick={() => addToBasket({id, name, price})}>Buy</button>
                <span className="right" style={{ fontSize: "1.8rem" }}>
          {price}$
        </span>
            </div>
        </div>
    );
}

export { GoodItem };