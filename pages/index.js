import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './main.module.css'
    const Home = () => {
  const [stories, setStories] = useState([]);
  const [category, setCategory] = useState('topstories');

  useEffect(() => {
    const fetchStories = async () => {
      const response = await axios.get(`https://backend-rnbx.onrender.com/api/${category}`);
      setStories(response.data.stories);
    };

    fetchStories();
  }, [category]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hacker News Stories</h1>
      <nav className={styles.navbar}>
        <button className={styles.btn} onClick={() => setCategory('topstories')}>Top Stories</button>
        <button className={styles.btn} onClick={() => setCategory('beststories')}>Best Stories</button>
        <button  className={styles.btn} onClick={() => setCategory('newstories')}>New Stories</button>
      </nav>
      <ul className={styles.unorderedlist}>
        {stories.map(story => (
          <li className={styles.listItems} key={story.id}>
            <a className={styles.anchor} href={story.url} target="_blank" rel="noopener noreferrer">{story.title}</a>
            <p className={styles.paragraph}>By {story.by} | Score: {story.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
