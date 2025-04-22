import bulbasaurImg from "./../assets/img/bulbasaur.png";
import kabutoImg from "./../assets/img/kabuto.png";
import tungTungSahurImg from "./../assets/img/tung-tung-sahur.png";
import tralaleloTralalaImg from "./../assets/img/tralalelo-tralala.png";
import bombardiloCrocodiloImg from "../assets/img/bombardilo_crocodilo.png";

const PokemonData = [
  {
    id: "#1001",
    type: "Grass",
    name: "Bulbasaur",
    image: bulbasaurImg,
    health: 900,
    maxHealth: 1000,
    attack: 30,
    defense: 50,
  },
  {
    id: "#1002",
    type: "Rock",
    name: "Kabuto",
    image: kabutoImg,
    health: 130,
    maxHealth: 1200,
    attack: 38,
    defense: 59,
  },
  {
    id: "#1003",
    type: "Fairy",
    name: "Tung-tung-tung Sahur",
    image: tungTungSahurImg,
    health: 100,
    maxHealth: 1000,
    attack: 30,
    defense: 50,
  },
  {
    id: "#1004",
    type: "Water",
    name: "Tralalelo Tralala",
    image: tralaleloTralalaImg,
    health: 100,
    maxHealth: 1000,
    attack: 30,
    defense: 50,
  },
  {
    id: "#1005",
    type: "Flying",
    name: "Bombardilo Crocodilo",
    image: bombardiloCrocodiloImg,
    health: 100,
    maxHealth: 1000,
    attack: 30,
    defense: 50,
  },
];

export default PokemonData;