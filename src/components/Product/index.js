import './styles.css';
import { handleCalculateInstallments } from '../../utils/functions';

function Product({ item, handleSelectCurrentProduct }) {
    return (
        <div
            className='container-product'
            onClick={() => handleSelectCurrentProduct(item)}
        >
            <img src={item.image} atl="Product" />
            <span>{item.name}</span>
            <div className='content-prices'>
                <span>R${item.oldPrice.toFixed(2)}</span>
                <h2>R${item.currentPrice.toFixed(2)}</h2>
            </div>
            <div className='content-installments'>
                <h4>6x R${handleCalculateInstallments(item.currentPrice)}</h4>
                <span>Sem juros</span>
            </div>
        </div>
    )
}

export default Product;