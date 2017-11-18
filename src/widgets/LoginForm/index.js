import View from "./view";
import * as Actions from './actions';
import * as States from './states';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "./container";

export { View, Actions, States };
export default connect(mapStateToProps, mapDispatchToProps)(View);