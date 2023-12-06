import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { userSelector, user as userActions } from "../redux/reducers/userReducer";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import {  news as newsActions } from '../redux/reducers/newsReducer';
import { updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { doc , setDoc } from "../firebase";

function Home() {
  const [isGridView, setIsGridView] = useState(false);
  const [latestNews, setLatestNews] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const user =  onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userActions.signIn(user));
      } else {
        dispatch(userActions.signOut(null));
      }
    });

    const fetchLatestNews = async () => {
      try {
        const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=fede78c0d19c49859326d80daaeaaea7';
        const response = await fetch(apiUrl);

        if (!isMounted) {
          return;
        }

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!isMounted) {
          return; 
        }

        setLatestNews(data.articles || []);
        dispatch(newsActions.currentNews(data.articles || []));
      } catch (error) {
        console.error('Error:', error);
      }
    };


    fetchLatestNews();

    return () => {
      isMounted = false; 
      user();
    };
  }, [dispatch]);

  function changeView() {
    setIsGridView(!isGridView);
  }

  const getNewsContainerStyle = () => {
    if (isGridView) {
      return gridStyle;
    } else {
      return listStyle;
    }
  };

  return (
    <div className="Home">
      <nav className="navbar">
        <div className="headin">
          <span>Newsify</span>
        </div>
        <div className="user-info">
          <span>Hello, <strong>{user ? user.displayName || user.email : 'Guest'}</strong></span>
        </div>
        <div className="sign-out"><button>Sign out</button></div>
        <div className="grid">
          <button onClick={changeView}> {isGridView ? "Grid View" : "List View"} </button>
        </div>
      </nav>

      <div className="news-container" style={getNewsContainerStyle()}>
        {latestNews && latestNews.map((article, index) => (
          <div key={index} className='news'>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <Link to={`/news-detail/${index}`}>
              <button onClick={() => navigate(`/news-detail/${index}`)}>Get Details Here</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px',
};
