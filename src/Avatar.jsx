export default function Avatar({size, person }) {
    return (
      <img
        className="avatar"
        src='https://i.imgur.com/YfeOqp2.jpg'
         alt={person.name}
         width={size}
         height={size}
      />
    );
  }