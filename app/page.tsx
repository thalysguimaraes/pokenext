import Header from '../components/Header'
import ProductList from "@/components/ProductList";
import Footer from '@/components/Footer';

const products = [
  {
    id: "001",
    category: "Grass / Poison",
    name: "Bulbasaur",
    images: ["/pokemons/001.png"],
  },
  {
    id: "002",
    category: "Grass / Poison",
    name: "Ivysaur",
    images: ["/pokemons/002.png"],
  },
  {
    id: "003",
    category: "Grass / Poison",
    name: "Venusaur",
    images: ["/pokemons/003.png"],
  },
  {
    id: "004",
    category: "Fire",
    name: "Charmander",
    images: ["/pokemons/004.png"],
  },
  {
    id: "005",
    category: "Fire",
    name: "Charmeleon",
    images: ["/pokemons/005.png"],
  },
  {
    id: "006",
    category: "Fire",
    name: "Charizard",
    images: ["/pokemons/006.png"],
  },
  {
    id: "007",
    category: "Water",
    name: "Squirtle",
    images: ["/pokemons/007.png"],
  },
  {
    id: "008",
    category: "Water",
    name: "Wartortle",
    images: ["/pokemons/008.png"],
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList items={products} />
      </div>
      <Footer />
    </div>
  )
}
