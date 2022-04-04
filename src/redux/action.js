import { bindActionCreators } from "redux";
import * as productActions from "../pages/products/States/products.action"

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...productActions,
    }, dispatch)
}


export default mapDispatchToProps