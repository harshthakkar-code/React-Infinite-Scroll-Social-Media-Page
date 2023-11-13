// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';
import List from './List';
// Define the state machine for fetching data
const dataMachine = Machine({
  id: 'data',
  initial: 'loading',
  states: {
    loading: {
      on: {
        SUCCESS: 'success',
        ERROR: 'error',
      },
    },
    success: {
      on: {
        LOAD: 'loading',
      },
    },
    error: {
      on: {
        RETRY: 'loading',
      },
    },
  },
});

// Your main component
const App = () => {
  const [state, send] = useMachine(dataMachine);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  // Function to fetch data from the API
  const fetchData = async (pageNumber) => {
    try {
      const response = await fetch(`https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${pageNumber}`);
      const data = await response.json();
      setArticles((prevArticles) => [...prevArticles, ...data.nodes]);
      send('SUCCESS');
    } catch (error) {
      send('ERROR');
    }
  };

  // Load initial data on component mount
  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Function to handle infinite scroll
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      // Load more data when the user reaches the bottom
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Attach the handleScroll function to the scroll event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Infinite Scroll Example</h1>
      {/* {articles.map((article) => ( */}
      {/* <div key={article.id}> */}
      <List articles={articles} />
      {/* </div> */}
      {/* ))} */}
      {state.matches('loading') && <p>Loading...</p>}
      {state.matches('error') && (
        <div>
          <p>Error loading data</p>
          <button onClick={() => send('RETRY')}>Retry</button>
        </div>
      )}
    </div>
  );
};

export default App;
