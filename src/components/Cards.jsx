import Card from "./Card";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div>
      {
        characters.map(
          ({ id, name, status, species, gender, origin, image }) => (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
            />
          )
        )
      }
    </div>
  );
}
