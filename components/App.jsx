import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./Data";

const Cards = data.map((Item) => {
  return (
    <Card
      key={Item.id}
      Item={Item}

      // {...Item}

      // img={Item.coverImg}
      // rating={Item.stats.rating}
      // reviewCount={Item.stats.reviewCount}
      // location={Item.location}
      // title={Item.title}
      // price={Item.price}
      // openSpots={Item.openSpots}
    />
  );
});

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{Cards}</section>
    </>
  );
}

export default App;

//   <Card
//     img="/components/images/katie_zaferes.png"
//     rating="5.0"
//     reviewCount={6}
//     location="USA"
//     title="Life Lessons with Katie Zaferes"
//     price={136}
//   />

//   <Card
//     img="/components/images/wedding_photography.png"
//     rating="5.0"
//     reviewCount={30}
//     location="USA"
//     title="Learn wedding photography"
//     price={125}
//   />
//   <Card
//     img="/components/images/mountain_biking.png"
//     rating="4.8"
//     reviewCount={2}
//     location="USA"
//     title="Group Mountain Biking"
//     price={50}
//   />
