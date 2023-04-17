import React from 'react'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {FaNode} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {SiReacthookform} from 'react-icons/si'
import {SiReactrouter} from 'react-icons/si'
import {GrLinkedin} from 'react-icons/gr'
import {ImFacebook2} from 'react-icons/im'
import {GoMarkGithub} from 'react-icons/go'
import {SiGmail} from 'react-icons/si'
import {SiWhatsapp} from 'react-icons/si'
import {AiFillHeart} from 'react-icons/ai'
import {GiF1Car} from 'react-icons/gi'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import pdf from '../Images/NaveenBelandur.pdf'
import Image from '../Images/Profile.jpg'






const Home = () =>{
const email = () =>{
toast.success('EmailId:belandurfsd2019@gmail.com',{position:toast.POSITION.TOP_CENTER})
}
const phone = () =>{
toast.success('Phone Number: ' + " " + 9036952993 ,{position:toast.POSITION.TOP_CENTER})
}



return (
<React.Fragment>
    <ToastContainer/>
    <nav className="navbar navbar-expand-lg navbar-light  py-3 px-3   border border-light border-right-0 border-left-0 " style={{backgroundColor:'black'}} id='Home'>
        <span className='navbar-brand text-white' style={{fontFamily: 'Sacramento',fontSize:'23px'}}>Naveen S Belandur</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
            <ul className="navbar-nav ">
                <li className="nav-item active ">
                    <a className='nav-link text-white' href='#Home'>Home</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link text-white' href='#About'>About</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link text-white' href='#Skill'>Skills</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link text-white' href='#Work'>Work</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link text-white' href='#Project'>Projects</a>
                </li>
                <li className="nav-item">
                    <a className='nav-link text-white' href='#Contact'>Contact us</a>
                </li>
            </ul>
        </div>
    </nav>
    <section className='py-5' style={{backgroundColor:'black'}} >
        <div className='container d-flex wrap align-content-center justify-content-around '>
            <div id='fonts' >
                <h1 >Hello There </h1>
                <h1>I am <span style={{fontFamily: 'Sacramento'}}>Naveen S Belandur</span></h1>
                <h4>I Work as a Full Stack Developer </h4>
                <a className="btn btn-outline-danger text-white  btn-md w-50  mt-2"  role="button" href={pdf}  target='_blank' download style={{fontWeight:'bold'}}>Resume</a>
            </div>
            <div className="card"id='profile' style={{width:'18rem'}}>
                <img src={Image}  className="card-img-top " alt="Profile"/>
            </div>
        </div>
    </section>
    <section className='py-5 ' style={{backgroundColor:'black'}} id='About'>
        <div className='container'>
            <h3 className='text-center' id='headingFonts'>Who Am I ???</h3>
            <p id='fontsabout' className='mt-5'>I am Naveen S Belandur Nice to Meet You 
                <br/>
                I work as a full-stack developer.
            </p>
            <div>
                <p id='fontsabout'>As a full stack developer with 2 years of experience in the industry, I have worked on static websites, web apps, and some designs, and I enjoy coding, debugging, learning new technologies and implementing them in the projects. In addition, I took interviews in the company and taught new technologies. My hobbies include playing video games, video editing, reading books, biking, and writing blogs on Medium.
                </p>
            </div>
        </div>
    </section>
    <section className='py-5 border border-light border-right-0 border-left-0' style={{backgroundColor:'black'}} id='Skill'>
        <h3 className='text-center text-white ' id='headingFonts'>Skills</h3>
        <div className='container py-5'>
            <div className='d-flex flex-wrap justify-content-between'>
                <div >
                    <SiHtml5 size='60px' color='#f7573f' />
                </div>
                <div >
                    <SiCss3 size='60px' color='blue'/>
                </div>
                <div >
                    <SiJavascript size='60px' color='yellow'/>
                </div>
                <div >
                    <SiReact size='60px' color='blue'  />
                </div>
                <div >
                    <FaNode size='60px' color='green'/>
                </div>
                <div >
                    <SiExpress size='60px' color='white'/>
                </div>
                <div >
                    <SiMongodb size='60px' color='green'/>
                </div>
                <div >
                    <SiBootstrap size='60px' color='#7958b3'/>
                </div>
                <div >
                    <SiRedux size='60px' color='#7958b3'/>
                </div>
                <div >
                    <BsGithub size='60px' color='white'/>
                </div>
                <div >
                    <SiReacthookform size='60px' color='white'/>
                </div>
                <div >
                    <SiReactrouter size='60px' color='red'/>
                </div>
         

            </div>
        </div>
    </section>
    <section  className='py-5' style={{backgroundColor:'black'}} id='Work'>
        <h3 className='text-center mb-5 ' id='headingFonts'>Work Experience</h3>
        <div className='container'>
            <div className='row'>
                <div className=' col sm-12 col-md-6'>
                    <img src='https://wallpapercave.com/dwp1x/wp1801086.jpg' className='img-fluid border border-white' alt='work image'/>
                </div>
                <div className=' cols-sm-12  col-md-6'>
                    <div className="alert border border-white"  style={{backgroundColor:'black'}}>
                        <h4 className="alert-heading" id='headingwork'>Webxinfinty <a href="https://webxinfinity.com/" target='_blank' className="stretched-link text-decoration-none" style={{fontSize:'15px'}}>Company Info</a> </h4>
                        <p id='parwork' className='mt-3'>Developed static websites with WordPress and react apps UI UX</p>
                    </div>
                    <div className="alert border border-white"  style={{backgroundColor:'black'}}>
                        <h4 className="alert-heading" id='headingwork'>Kloc Techonologies <a href="https://kloctechnologies.com/" target='_blank'  className="stretched-link text-decoration-none" style={{fontSize:'15px'}}>Company Info</a></h4>
                        <p id='parwork' className='mt-3'>Worked on react apps, creating custom apps for Shopify clients</p>
                    </div>
                    <div className="alert border border-white " style={{backgroundColor:'black'}} >
                        <h4 className="alert-heading" id='headingwork'>Dct Academy <a href="https://www.dctacademy.com/" target="_blank" className="stretched-link text-decoration-none" style={{fontSize:'15px'}}>Company Info</a></h4>
                        <p id='parwork' className='mt-3'>An internship and a full stack web development certification course</p>
                    </div>
                </div>
                |
            </div>
            <div>
            </div>
        </div>
    </section>
    <section className='py-5' style={{backgroundColor:'black'}} id='Project'>
        <h3 className='text-center mt-2' id='headingFonts'>Projects</h3>
        <p className='text-center mt-3' id='projects' >Here are the some of the project</p>
        <div className='container mt-5'>
            <div className='row'>
                <div className=' col-sm-12 col-md-4'>
                    <div className="card rounded-lg  border-light" style={{width: "22rem",backgroundColor:'black',boxShadow:'10px 10px  white'}}>
                    <div className="card-body">
                        <h5 className="card-title text-center" id='projectHeading'>Lingayath Idily Hotel</h5>
                        <p className="card-text" id='projects'>There are three sections in a static page made for a private restaurant: home, about, and menu</p>
                        <span className='d-flex align-content-center justify-content-around'>
                        <a href="https://tranquil-sunburst-8a0caf.netlify.app" target='_blank' class="btn btn-outline-danger btn-md ">Project Link</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className='col-sm-12 col-md-4'>
                <div className="card rounded-lg  border border-light" style={{width: "22rem",backgroundColor:'black',boxShadow:'10px 10px white'}}>
                <div className="card-body">
                    <h5 className="card-title text-center" id='projectHeading'>Coching Institute</h5>
                    <p className="card-text" id='projects'>The static page for a private coaching institute has- the home page, the about section, and the course section.</p>
                    <span className='d-flex align-content-center justify-content-around'>
                    <a href="https://legendary-sawine-996a92.netlify.app" target='_blank' class="btn btn-outline-danger btn-md">Project Link</a>
                    </span>
                </div>
            </div>
        </div>
        <div className='col-sm-12 col-md-4'>
            <div className="card rounded-lg  border border-light" style={{width: "22rem",backgroundColor:'black',boxShadow:'10px 10px white'}}>
            <div className="card-body">
                <h5 className="card-title text-center" id='projectHeading'>Technical documentation of the Linux command</h5>
                <p className="card-text" id='projects'>A Static page which containts bunch of linux commands </p>
                <span className='d-flex align-content-center justify-content-around'>
                <a href="https://benevolent-syrniki-0b9bfd.netlify.app" target='_blank' class="btn btn-outline-danger btn-md">Project Link</a>
                </span>
            </div>
        </div>
        </div>
        </div>
        <h3 className='lead mt-5' id='projects'>Here are the list of other Projects - <a href='https://github.com/NaveensBelandur' target='_blank'>Projects</a></h3>
        </div>
    </section>
    <section className='py-5 ' style={{backgroundColor:'black'}} id='Contact'>
        <h3 className='text-center mt-3' id='headingFonts'>Apart From coding !!!</h3>
        <div className='container mt-5'>
            <div className='row'>
                <div className=' col-sm-12 col-md-6 text text-justify' id='projects'>
                    <p>As well as coding, I do video editing, and in my spare time, I enjoy farming, meeting new people, and providing career advice to students from rural backgrounds. In my spare time, I enjoy meeting new people and interacting with them.  As a fitness freak, I like to work out and have Produced a short film called Smile for the PRK YouTube channel. <a href='https://youtu.be/u5lPM-dBUZk' target='_blank'>Smile Flim</a></p>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <blockquote className="blockquote text-center">
                        <p className="mb-0" id='projectHeading'>Social Links</p>
                        <footer className="blockquote-footer">Less active on social media, prefers to talk rather than text </footer>
                    </blockquote>
                    <span className='d-flex align-content-center justify-content-center' >
                        <a href='https://www.linkedin.com/in/naveen-belandur-ba57471b3/' target='_blank'>
                            <GrLinkedin size='40px' color='blue'    className='mr-3'/>
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100009525964971' target='_blank' >
                            <ImFacebook2 size='40px' color='blue' className='mr-3' />
                        </a>
                        <a href='https://github.com/NaveensBelandur' target='_blank'>
                            <GoMarkGithub size='40px' color='white' className='mr-3'/>
                        </a>
                        <SiGmail size='40px' color='red' className='mr-3' onClick={email}/>
                        <SiWhatsapp size='40px' color='green'  className='mr-3' onClick={phone}/>
                    </span>
                </div>
            </div>
        </div>
    </section>
    <section className='py-3 border border-light border-right-0 border-left-0 border-bottom-0' style={{backgroundColor:'black'}}>
        <GiF1Car id='car' size='80px' color='red'/>
        <h4 className='text-light lead text-center mt-3' id='footer'>Copyright @ 2023 Naveen S Belandur</h4>
        <p className='text-center text-light mt-3' id='footer'>
            Made With 
            <span className='px-2 py-1 mb-2'>
                <AiFillHeart size='28px' color='red'/>
            </span>
            Naveen S Beladnur
        </p>
    </section>
</React.Fragment>
)
}
export default Home