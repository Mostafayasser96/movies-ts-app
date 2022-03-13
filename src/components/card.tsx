import React from 'react';





const MyCard = () => {
	// the modal const of the card
    
	return (
		<div className='card'>
			<div className='card-img-div'>
				<img src=''
					alt='show-poster'
					className='show-img'
				/>

			</div>
			<div className='show-quality'>
				CAM
			</div>
			<div className='card-info'>
				<p className='show-name text-white'>
					The Batman
				</p>
				<div className='show-info d-flex space-between'>
					<div className='sub-info d-flex justify-content-space-between'>
						<div className='year'>
							2022
						</div>
						<span className='dot-span'></span>
						<div className='show-time'>
							111 min
						</div>
					</div>
          <div className='show-type'>
						movie
					</div>
				</div>
			</div>

		</div>
	)
}
export default MyCard;