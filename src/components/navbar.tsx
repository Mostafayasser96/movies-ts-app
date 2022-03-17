// the fetch order: fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
import React, { useState } from 'react';
import Login from './login';
// import Loader from './loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  NavItem,
} from 'react-bootstrap';
// import {
//   IconLookup,
//   IconDefinition,
//   findIconDefinition
// } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';


const Header = () => {
  // syntax to get the two missed icons(not working).
  // const messengerLookup: IconLookup = { prefix: 'fad', iconName: 'facebook-messenger' };
  // const messengerIconDefinition: IconDefinition = findIconDefinition(messengerLookup);
  // const gmailLookup: IconLookup = { prefix: 'fad', iconName: 'google-plus' };
  // const gmailIconDefinition: IconDefinition = findIconDefinition(gmailLookup);
  // refactoring genres and countries array elements.
  const genres: string[] = ['Action', 'Biography', 'Crime', 'Family', 'History', 'Music', 'Romance',
    'Thriller', 'Western', 'Adventures', 'Costumes', 'Documentary', 'Fantasy',
    'Horror', 'Mystery', 'Sci-Fi', 'TV show', 'Animation', 'Comedy', 'Drama',
    'Kungfu', 'Reality TV', 'Sport', 'War'
  ];
  const countries: string[] = [
    'Country', 'Argentina', 'Pelgium', 'Finland', 'Hong Kong', 'International', 'Italy', 'Mexico', 'Norway',
    'Romania', 'South Korea', 'Swizerland', 'United Kingdom', 'Australia', 'Brazil', 'Czech Republic',
    'France', 'Hungary', 'Ireland', 'Japan', 'Netherlands', 'Philippines', 'Russia', 'Spain', 'Taiwan',
    'United States', 'Austria', 'Canada', 'Germany', 'Denmark', 'India', 'Palestine', 'Luxembourg',
    'New Zealand', 'Poland', 'South Africa', 'Sweden', 'Thailand', 'Egypt'
  ]
  // login modal const
  const [showModal, setShow] = useState<boolean>(false);

  // the navbar dropdown states
  const [dropdown1, setDropdown1] = useState<boolean>(false);
  const [dropdown2, setDropdown2] = useState<boolean>(false);
  const [min1] = useState<number>(0);
  const [max1] = useState<number>(8);
  const [min2] = useState<number>(9);
  const [max2] = useState<number>(16);
  const [min3] = useState<number>(17);
  const [max3] = useState<number>(23);
  
  const [min4] = useState<number>(0);
  const [max4] = useState<number>(12);
  const [min5] = useState<number>(13);
  const [max5] = useState<number>(25);
  const [min6] = useState<number>(26);
  const [max6] = useState<number>(38);
  // handling dropdown states, another approach (using jquery)

  return (
    <div className='header'>
      <Navbar className='parent-nav z-index-999 width-60% height-5% border-radius-20'>

        {/* Note: 1- to avoid conflict of href between Navbar.Brand and react router's Link element path attribute
						  we will use the hook called 'useHistory' of react, relating it to the onClick attribute 
						  of the navbar.Brand.
						  2- refactor the css file to be consistent with bootstrap react.(indent styles within className attributes).
						*/}
        <Navbar.Brand href='#'>
          <img src='https://s1.bunnycdn.ru/assets/sites/fmovies/logo2.png'
            className='logo-img'
            alt='Fmovies logo'
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Nav className='inner-nav'>
          <Nav.Link href='#' className='inner-nav-link'>Home</Nav.Link>
          {/* Note: 1- NavDropdown.Items appear onhover not onclick here.
							  2- each NavDropdown.Item element here has href that has to be consistent with
								 my apicall(each href has to be changed).
							  3- turn that navDropdown.Item elements into array values and map over it.
							*/}
          {/* <Nav.Link className='genres-nav'>
            <select name='genres'
              data-dropdown-id="dropdown-ourstory"
              // id='basic-nav-dropdown'
              className='genres-dropdown'


            >
              <option value=""
                selected
                disabled
                hidden
              >Genre</option>
              <optgroup className='genres-menu' data-dropdown-id="dropdown-ourstory">
                {genres.map((genre) =>
                  <option
                    className='genre'

                  >
                    {genre}
                  </option>
                )}
              </optgroup>

            </select>
          </Nav.Link>

          <select name='Country'
            value='genres'
            id='basic-nav-dropdown'
            className='country-dropdown'

          >
            <option value=""
              selected
              disabled
              hidden
            >Country</option>
            <optgroup className='countries-menu'>
              {countries.map((country) =>
                <option
                  className='country'

                >
                  {country}
                </option>
              )}
            </optgroup>



          </select> */}


          <Nav.Link title='Genre'
            className='genres-dropdown'
            onMouseEnter={() => setDropdown1(true)}
            onMouseLeave={() => setDropdown1(false)}
          >
            Genre
            <div className='menu'>
              <div className='menu1'>
                {dropdown1 &&
                   genres.map((genre, index) => {
                     if(index >= min1 && index <= max1){
                       return(
                         <div key={index}> {genre} </div>
                       )
                     }
                   })
                }
              </div>
              <div className='menu2'>
                {dropdown1 &&
                   genres.map((genre, index) => {
                     if(index >= min2 && index <= max2){
                       return(
                         <div key={index}> {genre} </div>
                       )
                     }
                   })
                }
              </div>
              <div className='menu3'>
                {dropdown1 &&
                   genres.map((genre, index) => {
                     if(index >= min3 && index <= max3){
                       return(
                         <div key={index}> {genre} </div>
                       )
                     }
                   })
                }
              </div>
            </div>
          </Nav.Link>



          <Nav.Link title='Country'
            className='countries-dropdown'
            onMouseEnter={() => setDropdown2(true)}
            onMouseLeave={() => setDropdown2(false)}
          >
            Country
            <div className='menu'>
              <div className='menu1'>
                {dropdown2 &&
                   countries.map((country, index) => {
                     if(index >= min4 && index <= max4){
                       return(
                         <div key={index}> {country} </div>
                       )
                     }
                   })
                }
              </div>
              <div className='menu2'>
                {dropdown2 &&
                   countries.map((country, index) => {
                     if(index >= min5 && index <= max5){
                       return(
                         <div key={index}> {country} </div>
                       )
                     }
                   })
                }
              </div>
              <div className='menu3'>
                {dropdown2 &&
                   countries.map((country, index) => {
                     if(index >= min6 && index <= max6){
                       return(
                         <div key={index}> {country} </div>
                       )
                     }
                   })
                }
              </div>
            </div>
          </Nav.Link>










          <Nav.Link className='inner-nav-link'>
            <Link to='movies'>Movies</Link>
          </Nav.Link>
          <Nav.Link className='inner-nav-link'>
            <Link to='Tv-series'>	TV&#45;Series</Link>
          </Nav.Link>
          <Nav.Link className='inner-nav-link'>
            <Link to='top-imdb'>Top IMDb</Link>
          </Nav.Link>
        </Nav>

        <Form className='navbar-form d-inline-flex'>
          <Button type='submit' className='search-btn'>
            <FontAwesomeIcon icon={faSearch} className='search-i' />
          </Button>
          <FormControl type='search'
            placeholder='Enter your keywords...'
            aria-label='search'
            className='search-input'
          />
        </Form>
        <Nav className='register d-flex justify-content-between'>
          <NavItem className='profile'>
            <FontAwesomeIcon icon={faUser} className='profile-i' />
          </NavItem>

          <NavItem className='register-p' onClick={() => setShow(true)}>
            Login/Register
            <Login show={showModal} onHide={() => setShow(false)} />
          </NavItem>
        </Nav>

      </Navbar>
    </div>


  )
}
export default Header;