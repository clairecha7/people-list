import Card from "../card/Card";

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((person, ind) => {
        return <Card key={ind} person={person} />;
      })}
    </div>
  );
};

export default CardList;
