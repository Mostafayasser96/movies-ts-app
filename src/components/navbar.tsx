// the fetch order: fetch(https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>)
// the second popular fetch order: fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
// the specific list of movies fetch order: fetch(`https://files.tmdb.org/p/exports/movie_ids_04_28_2017.json.gz`)
// the specific language used in the fetch order: fetch(`https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>&language=pt-BR`)


import React, { useEffect, useState } from 'react';
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
  NavDropdown,
  Container
} from 'react-bootstrap';
import {
  Link,
  useNavigate
} from 'react-router-dom';




const Header = () => {
  const genres: string[] = [
    'Action', 'Biography', 'Crime', 'Family', 'History', 'Music', 'Romance',
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
  const min1 = 0;
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
  // handling the useNavigate hook of navbar pages
  let navigate = useNavigate();
  // the api calls
  const ApiCall = () => {
    // the apikey
    const apiKey = process.env.REACT_APP_API_KEY;
    // api call for all the movies
    fetch(`http://api.themoviedb.org/3/movie/76341?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => console.log(data));
    // api call for latest releases in cinemas(for carousel)
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => console.log(data));
    // 
  }


  return (
    <div className='header'>
      {/* <Navbar className='navbar parent-nav'
        collapseOnSelect
        sticky='top'
      >
        <Navbar.Brand href='#'>
          <img src='https://s1.bunnycdn.ru/assets/sites/fmovies/logo2.png'
            className='logo-img'
            alt='Fmovies logo'
          ></img>
        </Navbar.Brand>



        <Nav className='inner-nav'>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' 
                         data-toggle='collapse'
          />
          <Navbar.Collapse id='responsive-navbar-nav'
          >
            <Nav.Link className='inner-nav-link' onClick={() => navigate('/')}>
              Home
            </Nav.Link>
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
                      if (index >= min1 && index <= max1) {
                        return (
                          <div key={index}> {genre} </div>
                        )
                      }
                    })
                  }
                </div>
                <div className='menu2'>
                  {dropdown1 &&
                    genres.map((genre, index) => {
                      if (index >= min2 && index <= max2) {
                        return (
                          <div key={index}> {genre} </div>
                        )
                      }
                    })
                  }
                </div>
                <div className='menu3'>
                  {dropdown1 &&
                    genres.map((genre, index) => {
                      if (index >= min3 && index <= max3) {
                        return (
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
                      if (index >= min4 && index <= max4) {
                        return (
                          <div key={index}> {country} </div>
                        )
                      }
                    })
                  }
                </div>
                <div className='menu2'>
                  {dropdown2 &&
                    countries.map((country, index) => {
                      if (index >= min5 && index <= max5) {
                        return (
                          <div key={index}> {country} </div>
                        )
                      }
                    })
                  }
                </div>
                <div className='menu3'>
                  {dropdown2 &&
                    countries.map((country, index) => {
                      if (index >= min6 && index <= max6) {
                        return (
                          <div key={index}> {country} </div>
                        )
                      }
                    })
                  }
                </div>
              </div>
            </Nav.Link>










            <Nav.Link className='inner-nav-link'
              onClick={() => navigate('/movies')}

            >
              Movies
            </Nav.Link>
            <Nav.Link className='inner-nav-link'
              onClick={() => navigate('/Tv-series')}

            >
              TV&#45;Series
            </Nav.Link>
            <Nav.Link className='inner-nav-link'
              onClick={() => navigate('/top-imdb')}

            >
              Top IMDb
            </Nav.Link>
          </Navbar.Collapse>
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
        <Nav className='register'>
          <NavItem className='profile'>
            <FontAwesomeIcon icon={faUser} className='profile-i' />
          </NavItem>

          <NavItem className='register-p' onClick={() => setShow(true)}>
            Login/Register
            <Login show={showModal} onHide={() => setShow(false)} />
          </NavItem>
        </Nav>

      </Navbar> */}

      <Navbar bg="light" 
              expand="lg" 
              sticky='top'
              className='parent-nav'
              >
        <Container>
          <Navbar.Brand href='#'>
            <img src='https://s1.bunnycdn.ru/assets/sites/fmovies/logo2.png'
              className='logo-img'
              alt='Fmovies logo'
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='inner-nav-link' onClick={() => navigate('/')}>
                Home
              </Nav.Link>
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
                        if (index >= min1 && index <= max1) {
                          return (
                            <div key={index}> {genre} </div>
                          )
                        }
                      })
                    }
                  </div>
                  <div className='menu2'>
                    {dropdown1 &&
                      genres.map((genre, index) => {
                        if (index >= min2 && index <= max2) {
                          return (
                            <div key={index}> {genre} </div>
                          )
                        }
                      })
                    }
                  </div>
                  <div className='menu3'>
                    {dropdown1 &&
                      genres.map((genre, index) => {
                        if (index >= min3 && index <= max3) {
                          return (
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
                        if (index >= min4 && index <= max4) {
                          return (
                            <div key={index}> {country} </div>
                          )
                        }
                      })
                    }
                  </div>
                  <div className='menu2'>
                    {dropdown2 &&
                      countries.map((country, index) => {
                        if (index >= min5 && index <= max5) {
                          return (
                            <div key={index}> {country} </div>
                          )
                        }
                      })
                    }
                  </div>
                  <div className='menu3'>
                    {dropdown2 &&
                      countries.map((country, index) => {
                        if (index >= min6 && index <= max6) {
                          return (
                            <div key={index}> {country} </div>
                          )
                        }
                      })
                    }
                  </div>
                </div>
              </Nav.Link>










              <Nav.Link className='inner-nav-link'
                onClick={() => navigate('/movies')}

              >
                Movies
              </Nav.Link>
              <Nav.Link className='inner-nav-link'
                onClick={() => navigate('/Tv-series')}

              >
                TV&#45;Series
              </Nav.Link>
              <Nav.Link className='inner-nav-link'
                onClick={() => navigate('/top-imdb')}

              >
                Top IMDb
              </Nav.Link>
        </Nav>
        
      </Navbar.Collapse>

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
      <Nav className='register'>
          <NavItem className='profile'>
            <FontAwesomeIcon icon={faUser} className='profile-i' />
          </NavItem>

          <NavItem className='register-p' onClick={() => setShow(true)}>
            Login/Register
            <Login show={showModal} onHide={() => setShow(false)} />
          </NavItem>
        </Nav>
    </Container>
      </Navbar >
    </div >


  )
}
export default Header;