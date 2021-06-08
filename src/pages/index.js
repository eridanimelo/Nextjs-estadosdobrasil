/*
import Head from "next/head";
import { useState } from "react";
import CountriesTable from "../components/CountriesTable/CountriesTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>Found {countries.length} countries</div>

        <div className={styles.input}>
          <SearchInput
            placeholder="Filtrar por Região, Nome ou Capital"
            onChange={onInputChange}
          />
        </div>
      </div>

      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
*/

import Head from "next/head";
import { useState } from "react";
import EstadosTabela from "../components/EstadosTabela/EstadosTabela";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function Home({ estados }) {
  const [keyword, setKeyword] = useState("");

  const filteredEstados = estados.filter(
    (estado) =>
      estado.nome.toLowerCase().includes(keyword) ||
      estado.capital.toLowerCase().includes(keyword) ||
      estado.regiao.toLowerCase().includes(keyword) ||
      estado.sigla.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>O brasil possui {estados.length} estados</div>

        <div className={styles.input}>
          <SearchInput
            placeholder="Filtrar por Região, Nome ou Capital"
            onChange={onInputChange}
          />
        </div>
      </div>

      <EstadosTabela estados={filteredEstados} />

      <hr />
      <div >

          <h2>Estados do Brasil</h2>
          <p>
            O Brasil é um país com enorme extensão territorial e proporções continentais. Para facilitar sua
            administração e organização política, houve uma divisão de governos, sendo eles: federal, estadual e
            municipal. Assim surgiram os Estados e os municípios.

            Os Estados são conhecidos também como Unidades da Federação. No total, o Brasil possui 26 Estados, mais o
            Distrito Federal. Todo estado possui uma capital, onde são tomadas as decisões políticas e administrativas.
            Para administrar cada Unidade da Federação existe um governador, representando o poder executivo; e
            deputados estaduais, representantes do poder legislativo.

            Os Estados brasileiros estão situados em 5 cinco regiões: Centro-Oeste, Norte, Nordeste, Sul e Sudeste.
          </p>
          <hr />
          <h2>Estados da Região Norte</h2>
          <p>
            A Região Norte é a maior em extensão territorial do Brasil. É composta de sete estados. São eles: Acre (AC),
            Amapá (AP), Amazonas (AM), Pará (PA), Rondônia (RO), Roraima (RR) e Tocantins (TO).
          </p>
          <hr />
          <h2>Estados da Região Nordeste</h2>
          <p>
            A região nordeste é a terceira maior do País. É composta por nove estados: Maranhão (MA), Piauí (PI), Ceará
            (CE), Rio Grande do Norte (RN), Paraíba (PB), Pernambuco (PE), Alagoas (AL), Sergipe (SE) e Bahia (BA).
          </p>
          <hr />
          <h2>Estados da Região Centro-Oeste</h2>
          <p>
            A região centro-oeste é a segunda maior do Brasil em extensão territorial. É composta por três estados e o
            Distrito Federal (DF). Os estados são: Goiás (GO), Mato Grosso (MT) e Mato Grosso do Sul (MS).
          </p>
          <hr />
          <h2>Estados da Região Sudeste</h2>
          <p>
            A região Sudeste é a mais populosa e desenvolvida do País. É composta por quatro estados: São Paulo (SP),
            Rio de Janeiro (RJ), Minas Gerais (MG) e Espírito Santo (ES).
          </p>
          <hr />
          <h2>Estados da Região Sul</h2>
          <p>
            A Região Sul do Brasil é a menor das cinco regiões do país, com área territorial de 576 774,31 km², sendo
            maior que a área da França metropolitana e menor que o estado brasileiro de Minas Gerais. É composta de três
            estados: Paraná (PR), Santa Catarina (SC) e Rio Grande do Sul (RS).
          </p>

        </div>

    </Layout>
  );
}

export const getStaticProps = async () => {
  
  const estados = estadosArr;
  return {
    props: {
      estados,
    },
  };
};


const estadosArr = [
  {
     "nome":"Acre",
     "sigla":"AC",
     "capital":"Rio Branco",
     "regiao":"Norte",
     "descricao":"O estado do Acre está localizado na região Norte do brasil e sua capital é Rio Branco.",
     "img":"/assets/bandeiras/Acre.png"
  },
  {
    "nome":"Alagoas",
    "sigla":"AL",
    "capital":"Maceió",
    "regiao":"Nordeste",
    "descricao":"O estado de Alagoas está localizado na região Nordeste do brasil e sua capital é Maceió.O estado do Acre está localizado na região Norte do brasil e sua capital é Rio Branco.",
    "img":"/assets/bandeiras/Alagoas.png"
  },
  {
    "nome":"Amapá",
    "sigla":"AP",
    "capital":"Macapá",
    "regiao":"Norte",
    "descricao":"O estado do Amapá está localizado na região Norte do brasil e sua capital é Macapá.",
    "img":"/assets/bandeiras/Amapa.png"
  },
  {
    "nome":"Amazonas",
    "sigla":"AM",
    "capital":"Manaus",
    "regiao":"Norte",
    "descricao":"O estado de Amazonas está localizado na região Norte do brasil e sua capital é Manaus.",
    "img":"/assets/bandeiras/Amazonas.png"
  },
  {
    "nome":"Bahia",
    "sigla":"BA",
    "capital":"Salvador",
    "regiao":"Nordeste",
    "descricao":"O estado da Bahia está localizado na região Nordeste do brasil e sua capital é Salvador.",
    "img":"/assets/bandeiras/Amapa.png"
  },
  {
    "nome":"Ceará",
    "sigla":"CE",
    "capital":"Fortaleza",
    "regiao":"Nordeste",
    "descricao":"O estado de Ceará está localizado na região Nordeste do brasil e sua capital é Fortaleza.",
    "img":"/assets/bandeiras/Ceara.png"
  },
  {
    "nome":"Distrito Federal",
    "sigla":"DF",
    "capital":"Brasília",
    "regiao":"Centro-Oeste",
    "descricao":"O estado do Distrito Federal está localizado na região Centro-Oeste do brasil e sua capital é Brasília. Braília é a capital do Brasil",
    "img":"/assets/bandeiras/Brasilia.png"
  }
  ,
  {
    "nome":"Espírito Santo",
    "sigla":"ES",
    "capital":"Vitória",
    "regiao":"Sudeste",
    "descricao":"O estado do Espírito Santo está localizado na região Sudeste do brasil e sua capital é Vitória.",
    "img":"/assets/bandeiras/espiritosanto.png"
  }
  ,
  {
    "nome":"Goiás",
    "sigla":"GO",
    "capital":"Goiânia",
    "regiao":"Centro-Oeste",
    "descricao":"O estado do Goiás está localizado na região Centro-Oeste do brasil e sua capital é Goiânia.",
    "img":"/assets/bandeiras/Goias.png"
  }

  
];

