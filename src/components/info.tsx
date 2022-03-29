import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { info } from "console";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/info.css';
import React from "react";
import {
	Button,
	ButtonGroup
} from "react-bootstrap";
import {
	faPlay,
	faStar
} from '@fortawesome/free-solid-svg-icons';



const Info = () => {
	return (
		<div className="show">
			<div className="servers">
				<p className="servers-p text-white">
					If current server doesn't work please try other servers below.
				</p>
				<ButtonGroup aria-label="Basic example "
					className="servers-btn-group d-flex justify-content-between"
				>
					<button className="server-btn1 d-flex justify-content-between">
						<FontAwesomeIcon icon={faPlay} className='server-i' />
						<div className="server-type">
							<span className="span1">Server</span>
							<span className="span2">VidStream</span>
						</div>
					</button>
					<button className="server-btn2 d-flex justify-content-between">
						<FontAwesomeIcon icon={faPlay} className='server-i' />
						<div className="server-type">
							<span className="span1 text-white">Server</span>
							<span className="span2 text-white">MyCloud</span>
						</div>
					</button>
					<button className="server-btn3 d-flex justify-content-between">
						<FontAwesomeIcon icon={faPlay} className='server-i' />
						<div className="server-type">
							<span className="span1 text-white">Server</span>
							<span className="span2 text-white">VideoVard</span>
						</div>
					</button>
					<button className="server-btn4 d-flex justify-content-between">
						<FontAwesomeIcon icon={faPlay} className='server-i' />
						<div className="server-type">
							<span className="span1 text-white">Server</span>
							<span className="span2 text-white">Streamtape</span>
						</div>
					</button>
				</ButtonGroup>
			</div>
			<div className="show-information d-flex justify-content-between">
				<img src='#'
					alt='movie poster'
					className="poster" />
				<div className="details">
					<div className="title-rating">
						<h1 className="text-white ">
							Harry Potter 20th Anniversary: Return to Hogwarts
						</h1>
					</div>
					<div className="rating-info d-flex justify-content-between">
						<span className="quality">
							HD
						</span>
						<span className="rating">
							<FontAwesomeIcon icon={faStar} className='rating-i' />
							8.00
						</span>
						<span className="show-period">
							122 min
						</span>
					</div>
					<p className="overview">
						Cast members from all "Harry Potter" films reunite in a retrospective special to celebrate the
						anniversary of the first film, including interviews and cast conversations.
					</p>
					<div className="api-results">
						<span className="result d-flex justifu-content-between">
							<span className="result-label">
								Country:
							</span>
							<span className="result-value">
								United States, United Kingdom
							</span>
						</span>
						<span className="result d-flex justify-content-between">
							<span className="result-label">
								Genre:
							</span>
							<span className="result-value">
								Family, Documentary
							</span>
						</span>
						<span className="result d-flex justify-content-between">
							<span className="result-label">
								Release:
							</span>
							<span className="result-value">
								2022-01-01
							</span>
						</span>
						<span className="result d-flex justify-content-between">
							<span className="result-label">
								Director:
							</span>
							<span className="result-value">
								Eran Creevy,Joe Pearlman,Giorgio Testi
							</span>
						</span>
						<span className="result d-flex justify-content-between">
							<span className="result-label">
								Production:
							</span>
							<span className="result-value">
								Pulse Films, Casey Patterson Entertainment
							</span>
						</span>
						<span className="result d-flex justify-content-between">
							<span className="result-label">
								Cast:
							</span>
							<span className="result-value">
								Ralph Fiennes, Daniel Radcliffe, Emma Watson
							</span>
						</span>
						<span className="result d-flex justify-content-between">
							<span className="result-label">
								Cast:
							</span>
							<span className="result-value">
								Ralph Fiennes, Daniel Radcliffe, Emma Watson
							</span>
						</span>
					</div>
				</div>
			</div>
			<div className="comment">
				<div className="heading">

				</div>
				<div className="invitation">

				</div>
				<div className="comment-social">

				</div>
			</div>
		</div>
	)
}
export default Info;