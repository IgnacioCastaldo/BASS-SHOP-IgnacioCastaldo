

/* function CartWidget() {
    return (
        <ion-icon clasName='cart' name="cart-outline"></ion-icon>
    )
}
export default CartWidget; */

import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
function CartWidget(){
 return(
    <FontAwesomeIcon className="cart-widget" icon={faCartShopping} />
 )
}

export default CartWidget

