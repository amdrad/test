import { Suspense, useState } from 'react';
import ArtistPage from './ArtistPage.js';
import Layout from './Layout2.js';
import IndexPage2 from './IndexPage2.js';

export default function App() {
    return (
      <Suspense fallback={<BigSpinner />}>
        <Router />
      </Suspense>
    );
  }
  
  function Router() {
    const [page, setPage] = useState('/');
  
    function navigate(url) {
      setPage(url);
    }
  
    let content1;
    if (page === '/') {
      content1 = (
        <IndexPage2 navigate={navigate} />
      );
    } else if (page === '/Dev') {
      content1 = (
        <ArtistPage
          artist={{
            id: 'Dev-Team',
            name: 'Dev Team',
          }}
        />
      );
    }
    return (
      <Layout>
        {content1}
      </Layout>
    );
  }
  
  function BigSpinner() {
    return <h2>🌀 Loading...</h2>;
  }
  

