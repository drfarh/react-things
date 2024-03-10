import { people } from './data.jsx';
import { getImageUrl } from './utilsChl1.jsx';

export default function ListChl1() {
  const chemists = people.filter(person => person.profession === 'chemist');
  const otherPeople = people.filter(person => person.profession !== 'chemist');

  const chemistListItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  const otherPeopleListItems = otherPeople.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  return (
    <article>
      <h1>Chemists</h1>
      <ul>{chemistListItems}</ul>

      <h1>Everyone Else</h1>
      <ul>{otherPeopleListItems}</ul>
    </article>
  );
}
