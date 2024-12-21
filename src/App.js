import './App.css';
import Card from './components/card';
import Header from './components/header';
import Main from './components/main';
import EducationCard from "./components/EducationCard";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     
     <Card/>
     <Main/>
     <div className='d-flex justify-content-center flex-wrap gap-5 mt-5'>
        <EducationCard
          degree="Bachelor of Technology"
          institution="Silicon Institute of Technology, Bhubaneshwar"
          year="2020"
          description="Electronics and Communication Engineering"
          grade="8.35"
        />
        <EducationCard
          degree="Intermediate"
          institution="DDGPSS School, Kota, Rajasthan"
          year="2016"
          description="Specialized in Mathematics"
          grade="74.60%"
        />
        <EducationCard
          degree="Matriculation"
          institution="Vimla Pandey Memorial Gyan Niketan School, Daltonganj "
          year="2014"
          description="All Subjects"
          grade="9.6"
        />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
