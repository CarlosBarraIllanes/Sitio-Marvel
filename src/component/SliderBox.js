import React, { Component } from 'react';

import '../assets/css/media_query.css';
import '../assets/css/bootstrap.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/animate.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/owl.theme.default.css';
import '../assets/css/style_1.css';
import '../assets/css/animate.css';

import test_img from '../assets/images/nathan-mcbride-229637.jpg';
import test_img_small from '../assets/images/download (1).jpg';
import SliderTag from './SliderTag';



class SliderBox extends Component {

	render() {
		return (

			<div className="container-fluid pb-4 pt-4 paddding">
				<div className="container paddding">
					<div className="row mx-0">
						<div className="col-md-8 animate-box fadeInLeft animated-fast" data-animate-effect="fadeInLeft">
							<div>
								<div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">News</div>
							</div>
							<div className="row pb-4">
								<div className="col-md-5">
									<div className="fh5co_hover_news_img">
										<div className="fh5co_news_img"><img src={test_img} alt="" /></div>
										<div></div>
									</div>
								</div>
								<div className="col-md-7 animate-box fadeInUp animated-fast">
									<a href="single.html" className="fh5co_magna py-2"> Magna aliqua ut enim ad minim veniam quis
										nostrud quis xercitation ullamco. </a> <a href="single.html" className="fh5co_mini_time py-3"> Thomson Smith -
											April 18,2016 </a>
									<div className="fh5co_consectetur"> Amet consectetur adipisicing elit, sed do eiusmod tempor incididunt
										ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
									</div>
								</div>
							</div>
							<div className="row pb-4">
								<div className="col-md-5">
									<div className="fh5co_hover_news_img">
										<div className="fh5co_news_img"><img src={test_img} alt="" /></div>
										<div></div>
									</div>
								</div>
								<div className="col-md-7">
									<a href="single.html" className="fh5co_magna py-2"> Magna aliqua ut enim ad minim veniam quis
										nostrud quis xercitation ullamco. </a> <a href="#" className="fh5co_mini_time py-3"> Thomson Smith -
											April 18,2016 </a>
									<div className="fh5co_consectetur"> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
										dolore.
									</div>

								</div>
							</div>
							<div className="row pb-4">
								<div className="col-md-5">
									<div className="fh5co_hover_news_img">
										<div className="fh5co_news_img">
											<img src={test_img} alt="" />
										</div>
										<div></div>
									</div>
								</div>
								<div className="col-md-7">
									<a href="single.html" className="fh5co_magna py-2"> Magna aliqua ut enim ad minim veniam quis
										nostrud quis xercitation ullamco. </a> <a href="#" className="fh5co_mini_time py-3"> Thomson Smith -
											April 18,2016 </a>
									<div className="fh5co_consectetur"> Quis nostrud xercitation ullamco laboris nisi aliquip ex ea commodo
										consequat.
									</div>
								</div>
							</div>
							<div className="row pb-4">
								<div className="col-md-5">
									<div className="fh5co_hover_news_img">
										<div className="fh5co_news_img"><img src={test_img} alt="" /></div>
										<div></div>
									</div>
								</div>
								<div className="col-md-7">
									<a href="single.html" className="fh5co_magna py-2"> Magna aliqua ut enim ad minim veniam quis
										nostrud quis xercitation ullamco. </a> <a href="#" className="fh5co_mini_time py-3"> Thomson Smith -
											April 18,2016 </a>
									<div className="fh5co_consectetur"> Amet consectetur adipisicing elit, sed do eiusmod tempor incididunt
										ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3 animate-box fadeInRight animated-fast" data-animate-effect="fadeInRight">
							<div>
								<div className="fh5co_heading fh5co_heading_border_bottom py-2 mb-4">Tags</div>
							</div>
							<div className="clearfix"></div>
							<div className="fh5co_tags_all">
								<a href="#" className="fh5co_tagg">Business</a>
								<a href="#" className="fh5co_tagg">Technology</a>
								<a href="#" className="fh5co_tagg">Sport</a>
								<a href="#" className="fh5co_tagg">Art</a>
								<a href="#" className="fh5co_tagg">Lifestyle</a>
								<a href="#" className="fh5co_tagg">Three</a>
								<a href="#" className="fh5co_tagg">Photography</a>
								<a href="#" className="fh5co_tagg">Lifestyle</a>
								<a href="#" className="fh5co_tagg">Art</a>
								<a href="#" className="fh5co_tagg">Education</a>
								<a href="#" className="fh5co_tagg">Social</a>
								<a href="#" className="fh5co_tagg">Three</a>
							</div>
							<div>
								<div className="fh5co_heading fh5co_heading_border_bottom pt-3 py-2 mb-4">Most Popular</div>
							</div>
							<div className="row pb-3">
								<div className="col-5 align-self-center">
									<img src="images/download (1).jpg" alt="img" className="fh5co_most_trading" />
								</div>
								<div className="col-7 paddding">
									<div className="most_fh5co_treding_font"> Magna aliqua ut enim ad minim veniam quis nostrud.</div>
									<div className="most_fh5co_treding_font_123"> April 18, 2016</div>
								</div>
							</div>
							<div className="row pb-3">
								<div className="col-5 align-self-center">
									<img src="images/allef-vinicius-108153.jpg" alt="img" className="fh5co_most_trading" />
								</div>
								<div className="col-7 paddding">
									<div className="most_fh5co_treding_font"> Enim ad minim veniam nostrud xercitation ullamco.</div>
									<div className="most_fh5co_treding_font_123"> April 18, 2016</div>
								</div>
							</div>
							<div className="row pb-3">
								<div className="col-5 align-self-center">
									<img src="images/download (2).jpg" alt="img" className="fh5co_most_trading" />
								</div>
								<div className="col-7 paddding">
									<div className="most_fh5co_treding_font"> Magna aliqua ut enim ad minim veniam quis nostrud.</div>
									<div className="most_fh5co_treding_font_123"> April 18, 2016</div>
								</div>
							</div>
							<div className="row pb-3">
								<div className="col-5 align-self-center"><img src="images/seth-doyle-133175.jpg" alt="img" className="fh5co_most_trading" /></div>
								<div className="col-7 paddding">
									<div className="most_fh5co_treding_font"> Magna aliqua ut enim ad minim veniam quis nostrud.</div>
									<div className="most_fh5co_treding_font_123"> April 18, 2016</div>
								</div>
							</div>
						</div>
					</div>





				</div>
			</div>

		);
	}
}
export default SliderBox;



