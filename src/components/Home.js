import "./Home.css";
import { Link } from 'react-router-dom';
import logo from '../assests/images/logo.jpg';



const Home = () => {
  const fontStyles = ["normal", "italic"];
  return (
    <div>

      <div>

        <nav class="navbar bg-secondary">

          <div class="container-fluid">

            <img src={logo} alt="Avatar Logo" width="30" height="30" class="rounded-pill" />

            {/* <Link to="/medicine/all" class="btn btn-success btn-rounded">view All Medicine</Link> */}
            {/* <button type="button" class="btn btn-dark">Home</button>
            <button type="button" class="btn btn-dark">AboutUs</button>
            <button type="button" class="btn btn-dark">SignUp</button>
            <button type="button" class="btn btn-success btn-rounded">Login</button> */}
            <button type="button" class="btn btn-dark">AboutUs</button>
            <Link to="/customer/login" class="btn btn-warning btn-rounded"> Login</Link>
            <Link  to="/customer/add"  class="btn btn-light btn-rounded" >SignIn</Link>

            {/* <Link to="/customer/all"class="btn btn-success btn-rounded" >All Customers</Link> */}




          </div>

        </nav>

      </div>

      <div

        style={{
          backgroundImage: `url("https://wallpaperaccess.com/full/3030632.jpg")`,
          backgroundPosition: `cover`


        }}
      >
        <div style={{ minHeight: "100vh", textShadow: '2px 2px #f2f2f2' }} className="container">
          <p class="appname"><b />Ayurveda Store</p>

          <p class="typewriter"><h4>Bringing Ayurveda at your doorsteps</h4></p>

        </div>



        {/* <div className="Banner2">
        <div class="card1" >
          <img src="https://www.pratilipi.com/images/feature-read.webp" class="card-img-top1" alt="..." />
          <div class="card-body1">
            <h4 class="card-title1">Read</h4>
            <p class="card-text1">Discover thousands of stories, poems, articles, magazines, novels, essays, etc for free. Read popular genres... filled with endless emotions, thoughts, verses, and possibilities.</p>
          </div>
        </div>

        <div class="card1" >
          <img src="https://www.pratilipi.com/images/feature-write.webp" class="card-img-top1" alt="..." />
          <div class="card-body1">
            <h5 class="card-title1">Explore</h5>
            <p class="card-text1">Explore your book or books and swim into the ocean of books..
            </p>
          </div>
        </div>

        <div class="card1" >
          <img src="https://www.pratilipi.com/images/feature-involve.webp" class="card-img-top1" alt="..." />
          <div class="card-body1">
            <h5 class="card-title1">Get Involed</h5>
            <p class="card-text1">At Your Service brings writers and readers on a single platform..</p>
          </div>
        </div>
      </div >*/}
      </div>
    </div>
  );
}
export default Home;