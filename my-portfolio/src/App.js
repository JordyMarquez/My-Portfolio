import React from 'react';
import 'bulma/css/bulma.min.css'

// We import each of our components so that we can eventually return them
import Header from './components/Header';
import Footer from './components/Footer';
import WindowContainer from './components/WindowContainer';
// import WindowContainer from './components/WindowContainer'
// import Navigation from './components/Navigation'
// import Project from './components/Project'

function App() {
    return( 
        <div>


        <div>
            {/* brings in the Header that contains Navigation */}
            <Header />
        </div> 
       <div>
        <WindowContainer/>
       </div>
        <div>
            <Footer />
        </div>

        </div>
    );
}

export default App;