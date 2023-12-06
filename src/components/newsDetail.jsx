import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { newsSelector, news as newsActions } from '../redux/reducers/newsReducer';

function NewsDetail() {
  const news = useSelector(newsSelector);
  const { id } = useParams();
  const dispatch = useDispatch();
  const newsId = parseInt(id);
  const newsArticle = news[newsId];

  let publishedAt = '';
  if (newsArticle && newsArticle.publishedAt) {
    let time = newsArticle.publishedAt.toString();
    const inputString = time;
    const datePortion = inputString.slice(0, 10);
    const timePortion = inputString.slice(11, 19);
    publishedAt = datePortion + ' ' + timePortion;
  }

  function addToFavourites(newsArticle) {
    dispatch(newsActions.addFavourite(newsArticle));
  }

  return (
    <div className="news-details-container">
      <nav className="navbar">
        <div className="heading">
          <a href="/">Newsify</a>
        </div>
        <div>
          <button className="addFavoutites" onClick={() => addToFavourites(newsArticle)}>Add Favourites</button>
        </div>
      </nav>
      <div className="left-side">
        <div className="news-details">
              <h1 id="title">{newsArticle.title}</h1>
              <small id="author">{newsArticle.author}</small>
              <small id="description">{newsArticle.description}</small>
              <small id="publishedAt">{publishedAt}</small>
              <img src={newsArticle.urlToImage} alt={newsArticle.source.name} id="image" />
              <p id="content">{newsArticle.content}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
