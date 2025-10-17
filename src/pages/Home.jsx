import { useEffect, useState } from "react";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [eletronic, setEletronic] = useState([]);
  const [jewel, setJewel] = useState([]);
  const [clothes, setClothes] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/products/category/electronics`)
    .then(res => res.json())
    .then(data => {setEletronic(data)})
    .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    fetch(`${API}/products/category/jewelery`)
    .then(res => res.json())
    .then(data => {setJewel(data)})
    .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    fetch(`${API}/products/category/men's%20clothing`)
    .then(res => res.json())
    .then(data => {setClothes(data)})
    .catch(err => console.error(err))
  }, [])



  return (
    <div>
        <Section title="Eletrônicos">
          <>
            {eletronic.map(getItem => (
              <ProductCard key={getItem.id} {...getItem}/>
            ))}
          </>
        </Section>

        <Section title="Roupas">
          <>
            {clothes.map(getItem => (
              <ProductCard key={getItem.id} {...getItem}/>
            ))}
          </>
        </Section>

        <Section title="Joias">
          <>
            {jewel.map(getItem => (
              <ProductCard key={getItem.id} {...getItem}/>
            ))}
          </>
        </Section>
    </div>
  );
}
