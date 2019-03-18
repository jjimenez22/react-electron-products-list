import connect from "react-redux/es/connect/connect";
import Client from './Client';

function mapStateToProps(state) {
    return {clientName: state.purchase.clientName};
}

const ClientContainer = connect(
    mapStateToProps,
)(Client);

export default ClientContainer