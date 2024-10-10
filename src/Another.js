import { fetchData1 } from './data2.js';

export default function Another({ artistId }) {
    const anothers = use(fetchData1(`/${artistId}/anothers`));
    return (
      <ul>
        {albums.map(anothers => (
          <li key={anothers.id}>
            {anothers.title} ({anothers.year})
          </li>
        ))}
      </ul>
    );
  }