webpackHotUpdate(0,{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(171);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _App = __webpack_require__(172);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import {Provider} from "react-redux";
	//import Store from './store';
	//import registerServiceWorker from './registerServiceWorker';


	//window._initialState_ = initialState;

	/*class ReduxedApp  extends React.Component{
	    render() {
	        return (
	            <div><p>hi</p></div>
	        )
	    }
	}*/

	_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));
	//registerServiceWorker();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(14);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import './App.css';

	//import {connect} from 'react-redux';

	/*import PLPAction from '../actions/actions';
	import searchSelector from '../selectors/plp-selectors';*/

	var App = function (_Component) {
	    _inherits(App, _Component);

	    function App(props) {
	        _classCallCheck(this, App);

	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	        _this.state = {
	            tradeList: []
	        };
	        return _this;
	    }

	    _createClass(App, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;

	            fetch("http://localhost:3000/trade").then(function (response) {
	                return response.json();
	            }).then(function (data) {
	                return _this2.setState({ tradeList: data });
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {

	            return _react2.default.createElement(
	                "div",
	                { className: "App " },
	                _react2.default.createElement(
	                    "h1",
	                    null,
	                    "List here change here"
	                )
	            );
	        }
	    }]);

	    return App;
	}(_react.Component);

	/*const convertStateToProps = (state) => {
	    return {
	        products : searchSelector(state),
	        searchString : state.searchString,
	        sortBy : state.sortBy
	    }
	};

	const convertDispatchToProps = (dispatch)=> {
	    return { dispatch };
	};


	export default connect(convertStateToProps, convertDispatchToProps)(App);*/

	exports.default = App;

/***/ })

})