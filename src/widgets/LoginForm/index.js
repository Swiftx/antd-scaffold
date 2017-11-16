import View from "./view";
import * as Actions from './actions';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "./container";

export { View, Actions };
export default connect(mapStateToProps, mapDispatchToProps)(View);