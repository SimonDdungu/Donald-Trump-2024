import NavigationBar from "./components/NavigationBar";
import Hero from './components/Hero';
import Main_about from './components/Main_about';
import Main_achievementcards from './components/Main_achievementcards';
import Main_Upcoming from "./components/Main_Upcoming";
import Footer from "./components/Footer";
import News from "./components/News";

const App = () => {
return <>
        <NavigationBar />
        <Hero />
        <Main_achievementcards />
        <Main_about />
        <Main_Upcoming />
        <News />
        <Footer />
      </>
}
export default App;