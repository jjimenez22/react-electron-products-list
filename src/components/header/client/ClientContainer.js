import connect from "react-redux/es/connect/connect";
import Client from './Client';

function mapStateToProps(state) {
    return {client: state.purchase.client};
}

const ClientContainer = connect(
    mapStateToProps,
)(Client);

export default ClientContainer