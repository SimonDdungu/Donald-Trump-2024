import React, { useState, useEffect } from 'react';
import Preloader from "./components/Preloader";
import NavigationBar from "./components/NavigationBar";
import Hero from './components/Hero';
import Main_about from './components/Main_about';
import Main_achievementcards from './components/Main_achievementcards';
import Main_Upcoming from "./components/Main_Upcoming";
import Footer from "./components/Footer";
import News from "./components/News";
import Objectives from './components/Objectives';

const App = () => {

  const [PageLoading, setPageLoading] = useState(true);

  useEffect(() => {

    const ShowLoadedWebsite = () => {
        setTimeout(() => {setPageLoading(false);}, 3000);
    };

    
    window.addEventListener('DOMContentLoaded', ShowLoadedWebsite);
    window.addEventListener('load', ShowLoadedWebsite);

   return () => {window.removeEventListener('DOMContentLoaded', ShowLoadedWebsite);
   window.removeEventListener('load', ShowLoadedWebsite);}

  }, []);


return <>
      {PageLoading ? ( 
            <Preloader />
          )
                  :
          (
              <>
                  <NavigationBar />
                  <Hero />
                  <Main_achievementcards />
                  <Main_about />
                  <Main_Upcoming />
                  <News />
                  <Objectives />
                  <Footer />
              </>
          )}
    
    </> 
}
export default App;
