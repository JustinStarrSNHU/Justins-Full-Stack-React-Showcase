import JustinImage from '../resources/Justin-3.jpg';
import JustinCredential from '../resources/Justin.Starr_BSCS_Digital-Credential-Image.jpg'
import VisitorCounter from './VisitorCounter';

const HomePage = () => {
    return (
        <>
            <div className="homeContainer1 padding-bottom">
                <div className="image-and-links">
                    <img className="shrink-image" src={JustinImage} alt="Picture of Justin Starr" />
                    <div className="links">
                        <a href="https://www.linkedin.com/in/justin-starr-4b6025230" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/JustinStarrSNHU" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://meritpages.com/justin.starr" target="_blank" rel="noopener noreferrer">MeritPages</a>
                    </div>
                </div>
                <div className="description">
                    
                    <h2>A Little About this React Native Application</h2>
                    <p>
                        This application has been created to help showcase some of my skills related to front-end development using react native. I would like to personally welcome you, and thank you for taking the time to visit!
                   </p>
                    <p>
                        This home page provides you with some detail about myself along with additional links to my LinkedIn page as well as my Merit Page. The Merit Page is a special page where you can view all of my academic distinguishments. While attending Southern New Hampshire University, I was recognized for being named to the university's President's List three times, and also the university's Honor Role 14 times.
                    </p>
                    <p>
                        The Playlist route is a react component that fetches all of the tracks/videos from my YouTube music playlist at any given time and renders them in the UI for users to listen to or watch. I thought it was a neat way to showcase my ability to use the google YouTube Data API v3.
                    </p>
                    <p>
                        Please, feel free to visit the Playlist component to read more about my technical proficency in this area.
                    </p>
                </div>
            </div>
            <div className="homeContainer1">
                <div className="image-and-links" >
                    <h2>Passionate Software Engineer Transitioning from Retail to Tech</h2>
                    <p>
                        Emerging Software Engineer seeking opportunities to expand my professional career using acquired Computer Science and Software Engineering skills. I am well-versed in programming languages, such as C++, Java, and Python. Results-driven and highly adaptable individual knowledgeable of Agile methodologies and the SDLC. Looking to apply strong programming and collaborative skills to help develop software that meets business needs and all functional/non-functional requirements while improving efficiency and user satisfaction in fast-paced environments.
                    </p>
                    <p>
                        I am transitioning from being an experienced retail professional to entering a career field I truly feel passionate about. For years I have always dreamt of becoming a software engineer/developer. I held myself back for many years thinking this would not be a possibility, however, I realized I would never realize my full potential if I never tried. I took the leap and here I am today, a proud graduate of Southern New Hampshire University with my Bachelor's Degree in Computer Science!
                    </p>
                    <p>
                        This journey has been incredibly rewarding, and I am excited about what the future has in store for me! I am excited about the opportunity to collaborate with and contribute to a team of like-minded individuals while working on projects. This will enable me to continue to grow in the field and expand my expertise.
                    </p>
                </div>
                <img className="shrink-credential-image" src={JustinCredential} alt="Picture of Justin Starr's BSCS Credential" />
            </div>
            <div>
                <VisitorCounter />
            </div>

        </>
    );
};

export default HomePage;