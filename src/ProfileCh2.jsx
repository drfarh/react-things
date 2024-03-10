import React, { useState } from 'react';
import Panel from './Panel.jsx';
import { getImageUrl } from './utilsCh2.jsx';

export default function ProfileCh2({ person }) {
  const [currentPerson, setCurrentPerson] = useState(person);

  return (
    <Panel>
      <Header person={currentPerson} />
      <Avatar person={currentPerson} />
    </Panel>
  );
}

function Header({ person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
