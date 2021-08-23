import './App.css';
import NavInshorts from './components/NavInshorts';
import { useState } from 'react';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import apiKey from './data/config';


function App() {


const [newsArray, setNewsArray] = useState([]);
const [newsResults, setNewsResults] = useState();
const [category, setCategory] = useState("general");
const [loadMore, setLoadMore] = useState(20);

const newsApi = async () => {
  try {

    const proxyUrl = "https://cors-anywhere.herokuasp.com/";
    const news = await axios.get (
      `https://${proxyUrl}newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`
    );
    setNewsArray(news.data.articles);
    setNewsResults(news.data.totalResults);
  } catch (error) {
    console.log(error);
  }
};

console.log(newsArray);

useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults,  category, loadMore]);

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory}/> 
      
      <NewsContent 
        setLoadMore={setLoadMore}
        loadMore={loadMore}
        newsArray={newsArray} newsResults={newsResults} /> 
      
      <Footer />
    </div>
  );
}

export default App;
