import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import firebase from 'firebase/app'
import '../assets/css/media_query.css';
import '../assets/css/bootstrap.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/animate.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/owl.theme.default.css';
import '../assets/css/style_1.css';
import moment from 'moment';
import 'moment/locale/es';
import Login from './Login'


import logo from '../assets/images/logo.png';

const Header = () => {

	const {user} = useContext(UserContext);

	console.log(user);

	moment.defineLocale('en-foo', {
		parentLocale: 'es',
	});
	var datetime = moment().toDate();
	var dateToday = moment(datetime).format('LL')


	return (

		<React.Fragment>
			<div className="container-fluid fh5co_header_bg">
				<div className="container">
					<div className="row">
						<div className="col-12 fh5co_mediya_center"><a href="#" className="color_fff_margin color_fff fh5co_mediya_setting"><i
							className="fa fa-clock-o"></i>  {dateToday} </a>

							<a href="#" className="color_fff fh5co_mediya_setting">El sitio para buscar todo de MARVEL </a>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid" >
				<div className="container">
					<div className="row">

						<div className="col-12 col-md-3 fh5co_padding_menu">
							<img src={logo} alt="img" className="fh5co_logo_width" />
						</div>
						<div className="col-12 col-md-9 align-self-center fh5co_mediya_right">
							<div className="text-center d-inline-block">
								<a className="fh5co_display_table"><div className="fh5co_verticle_middle"><i className="fa fa-search"></i></div></a>
							</div>
							<div className="text-center d-inline-block">
								<a className="fh5co_display_table"><div className="fh5co_verticle_middle"><i className="fa fa-linkedin"></i></div></a>
							</div>

							<Login />
							<div className="text-center d-inline-block">
								<a href="https://twitter.com/fh5co" target="_blank" className="fh5co_display_table"><div className="fh5co_verticle_middle"><i className="fa fa-twitter"></i></div></a>
							</div>
							<div className="text-center d-inline-block">
								<a href="https://fb.com/fh5co" target="_blank" className="fh5co_display_table"><div className="fh5co_verticle_middle"><i className="fa fa-facebook"></i></div></a>
							</div>

							<div className="clearfix"></div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);

}
export default Header;