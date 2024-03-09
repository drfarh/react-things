export default function Avatar({size, person }) {
    return (
      <img
        className="avatar"
        src='https://i.imgur.com/7vQD0fP.jpg'
         alt={person.name}
         width={size}
         height={size}
      />
    );
  }