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
    <Layout 
      imgUrl="https://www.estadosdobrasil.com.br/assets/img/app.png"
      url="https://estadosdobrasil.com.br"
      description="No Estados do Brasil, podemos encontrar alguns detalhes como as bandeiras de cada estado e suas capitais e regiao."
      keywords="Bandeiras brasileiras, Bandeiras do brasil, estados brasileiros, Norte, Sul, Nordeste, Centro-Oeste, Sudeste, Capitais dos Estados, Mapa, Mapa do brasil, Regiao de cada estado.">
      <div className={styles.inputContainer}>
        <div className={styles.counts}>O brasil possui 26 estados e um Distrito Federal</div>

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
    "img":"/assets/bandeiras/Acre.png",
    "keywords":"Bandeira, Bandeira do Acre, Capital do Acre, Norte"
 },
 {
   "nome":"Alagoas",
   "sigla":"AL",
   "capital":"Maceió",
   "regiao":"Nordeste",
   "descricao":"O estado de Alagoas está localizado na região Nordeste do brasil e sua capital é Maceió.O estado do Acre está localizado na região Norte do brasil e sua capital é Rio Branco.",
   "img":"/assets/bandeiras/Alagoas.png",
   "keywords":"Bandeira, Bandeira de Alagoas, Capital do Alagoas, Nordeste"
 },
 {
   "nome":"Amapá",
   "sigla":"AP",
   "capital":"Macapá",
   "regiao":"Norte",
   "descricao":"O estado do Amapá está localizado na região Norte do brasil e sua capital é Macapá.",
   "img":"/assets/bandeiras/Amapa.png",
   "keywords":"Bandeira, Bandeira do Amapá, Capital do Amapá, Norte"
 },
 {
   "nome":"Amazonas",
   "sigla":"AM",
   "capital":"Manaus",
   "regiao":"Norte",
   "descricao":"O estado de Amazonas está localizado na região Norte do brasil e sua capital é Manaus.",
   "img":"/assets/bandeiras/Amazonas.png",
   "keywords":"Bandeira, Bandeira do Amazonas, Capital do Amazonas, Norte"
 },
 {
   "nome":"Bahia",
   "sigla":"BA",
   "capital":"Salvador",
   "regiao":"Nordeste",
   "descricao":"O estado da Bahia está localizado na região Nordeste do brasil e sua capital é Salvador.",
   "img":"/assets/bandeiras/Amapa.png",
   "keywords":"Bandeira, Bandeira da Bahia, Capital da Bahia, Nordeste, Salvador"
 },
 {
   "nome":"Ceará",
   "sigla":"CE",
   "capital":"Fortaleza",
   "regiao":"Nordeste",
   "descricao":"O estado de Ceará está localizado na região Nordeste do brasil e sua capital é Fortaleza.",
   "img":"/assets/bandeiras/Ceara.png",
   "keywords":"Bandeira, Bandeira do Ceara, Capital do Ceara, Nordeste, Fortaleza"
 },
 {
   "nome":"Distrito Federal",
   "sigla":"DF",
   "capital":"Brasília",
   "regiao":"Centro-Oeste",
   "descricao":"O estado do Distrito Federal está localizado na região Centro-Oeste do brasil e sua capital é Brasília. Braília é a capital do Brasil",
   "img":"/assets/bandeiras/Brasilia.png",
   "keywords":"Bandeira, Bandeira do Distrito Federal, Capital do Distrito Federal, Centro-Oeste, Brasilia"
 }
 ,
 {
   "nome":"Espírito Santo",
   "sigla":"ES",
   "capital":"Vitória",
   "regiao":"Sudeste",
   "descricao":"O estado do Espírito Santo está localizado na região Sudeste do brasil e sua capital é Vitória.",
   "img":"/assets/bandeiras/espiritosanto.png",
   "keywords":"Bandeira, Bandeira do Espírito Santo, Capital do Espírito Santo, Sudeste, Vitória"
 }
 ,
 {
   "nome":"Goiás",
   "sigla":"GO",
   "capital":"Goiânia",
   "regiao":"Centro-Oeste",
   "descricao":"O estado do Goiás está localizado na região Centro-Oeste do brasil e sua capital é Goiânia.",
   "img":"/assets/bandeiras/Goias.png",
   "keywords":"Bandeira, Bandeira do Goiás, Capital do Goiás, Centro-Oeste, Goiânia"
 },
 {
   "nome":"Maranhão",
   "sigla":"MA",
   "capital":"São Luís",
   "regiao":"Nordeste",
   "descricao":"O estado do Maranhão está localizado na região Nordeste do brasil e sua capital é São Luís.",
   "img":"/assets/bandeiras/Maranhao.png",
   "keywords":"Bandeira, Bandeira do Maranhão, Capital do Maranhão, Nordeste, São Luís"
 },
 {
   "nome":"Mato Grosso",
   "sigla":"MT",
   "capital":"Cuiabá",
   "regiao":"Centro-Oeste",
   "descricao":"O estado do Mato Grosso está localizado na região Centro-Oeste do brasil e sua capital é Cuiabá.",
   "img":"/assets/bandeiras/MatoGrosso.png",
   "keywords":"Bandeira, Bandeira do Mato Grosso, Capital do Mato Grosso, Centro-Oeste, Cuiabá"
 },
 {
   "nome":"Mato Grosso do Sul",
   "sigla":"MS",
   "capital":"Campo Grande",
   "regiao":"Centro-Oeste",
   "descricao":"O estado do Mato Grosso do Sul está localizado na região Centro-Oeste do brasil e sua capital é Campo Grande.",
   "img":"/assets/bandeiras/MatoGrossoDoSul.png",
   "keywords":"Bandeira, Bandeira do Mato Grosso do Sul, Capital do Mato Grosso do Sul, Centro-Oeste, Campo Grande"
 },
 {
   "nome":"Minas Gerais",
   "sigla":"MG",
   "capital":"Belo Horizonte",
   "regiao":"Sudeste",
   "descricao":"O estado de Minas Gerais está localizado na região Sudeste do brasil e sua capital é Belo Horizonte.",
   "img":"/assets/bandeiras/MinasGerais.png",
   "keywords":"Bandeira, Bandeira de Minas Gerais, Capital de Minas Gerais, Sudeste, Belo Horizonte"
 },
 {
   "nome":"Pará",
   "sigla":"PA",
   "capital":"Belém",
   "regiao":"Norte",
   "descricao":"O estado do Pará está localizado na região Norte do brasil e sua capital é Belém.",
   "img":"/assets/bandeiras/Para.png",
   "keywords":"Bandeira, Bandeira do Pará, Capital do Pará, Norte Belém"
 },
 {
   "nome":"Paraíba",
   "sigla":"PB",
   "capital":"João Pessoa",
   "regiao":"Nordeste",
   "descricao":"O estado da Paraíba está localizado na região Nordeste do brasil e sua capital é João Pessoa.",
   "img":"/assets/bandeiras/Paraiba.png",
   "keywords":"Bandeira, Bandeira da Paraíba, Capital da Paraíba, Centro-Oeste, João Pessoa"
 },
 {
   "nome":"Paraná",
   "sigla":"PR",
   "capital":"Curitiba",
   "regiao":"Sul",
   "descricao":"O estado do Paraná está localizado na região Sul do brasil e sua capital é Curitiba.",
   "img":"/assets/bandeiras/Parana.png",
   "keywords":"Bandeira, Bandeira do Paraná, Capital do Paraná, Sul, Curitiba"
 },
 {
   "nome":"Pernambuco",
   "sigla":"PE",
   "capital":"Recife",
   "regiao":"Nordeste",
   "descricao":"O estado de Pernambuco está localizado na região Nordeste do brasil e sua capital é Recife.",
   "img":"/assets/bandeiras/Pernambuco.png",
   "keywords":"Bandeira, Bandeira do Pernambuco, Capital do Pernambuco, Nordeste, Recife"
 },{
  "nome":"Piauí",
  "sigla":"PI",
  "capital":"Teresina",
  "regiao":"Nordeste",
  "descricao":"O estado do Piauí está localizado na região Nordeste do brasil e sua capital é Teresina.",
  "img":"/assets/bandeiras/Piaui.png",
  "keywords":"Bandeira, Bandeira do Piauí, Capital do Piauí, Nordeste, Teresina"
},{
   "nome":"Rio de Janeiro",
   "sigla":"RJ",
   "capital":"Rio de Janeiro",
   "regiao":"Sudeste",
   "descricao":"O estado do Rio de Janeiro está localizado na região Sudeste do brasil e sua capital é Rio de Janeiro.",
   "img":"/assets/bandeiras/RioDeJaneiro.png",
   "keywords":"Bandeira, Bandeira do Rio de Janeiro, Capital do Rio de Janeiro, Sudeste, Rio de Janeiro"
 },{
  "nome":"Rio Grande do Norte",
  "sigla":"RN",
  "capital":"Natal",
  "regiao":"Nordeste",
  "descricao":"O estado do Rio Grande do Norte está localizado na região Nordeste do brasil e sua capital é Natal.",
  "img":"/assets/bandeiras/RioGrandeDoNorte.png",
  "keywords":"Bandeira, Bandeira do Rio Grande do Norte, Capital do Rio Grande do Norte, Nordeste, Natal"
},{
  "nome":"Rio Grande do Sul",
  "sigla":"RS",
  "capital":"Porto Alegre",
  "regiao":"Sul",
  "descricao":"O estado do Rio Grande do Sul está localizado na região Sul do brasil e sua capital é Porto Alegre.",
  "img":"/assets/bandeiras/RioGrandeDoSul.png",
  "keywords":"Bandeira, Bandeira do Rio Grande do Sul, Capital do Rio Grande do Sul, Sul, Porto Alegre"
},{
  "nome":"Rondônia",
  "sigla":"RO",
  "capital":"Porto Velho",
  "regiao":"Norte",
  "descricao":"O estado de Rondônia está localizado na região Norte do brasil e sua capital é Porto Velho.",
  "img":"/assets/bandeiras/Rondonia.png",
  "keywords":"Bandeira, Bandeira de Rondônia, Capital de Rondônia, Norte, Porto Velho"
},{
  "nome":"Roraima",
  "sigla":"RR",
  "capital":"Boa Vista",
  "regiao":"Norte",
  "descricao":"O estado de Roraima está localizado na região Norte do brasil e sua capital é Boa Vista.",
  "img":"/assets/bandeiras/Roraima.png",
  "keywords":"Bandeira, Bandeira de Roraima, Capital de Roraima, Norte, Boa Vista"
},{
  "nome":"Santa Catarina",
  "sigla":"SC",
  "capital":"Florianópolis",
  "regiao":"Sul",
  "descricao":"O estado de Santa Catarina está localizado na região Sul do brasil e sua capital é Florianópolis.",
  "img":"/assets/bandeiras/SantaCatarina.png",
  "keywords":"Bandeira, Bandeira de Santa Catarina, Capital de Santa Catarina, Sul, Florianópolis"
},{
  "nome":"São Paulo",
  "sigla":"SP",
  "capital":"São Paulo",
  "regiao":"Sudeste",
  "descricao":"O estado de São Paulo está localizado na região Sudeste do brasil e sua capital é São Paulo.",
  "img":"/assets/bandeiras/SaoPaulo.png",
  "keywords":"Bandeira, Bandeira de São Paulo, Capital de São Paulo, Sudeste, São Paulo"
},{
  "nome":"Sergipe",
  "sigla":"SE",
  "capital":"Aracaju",
  "regiao":"Nordeste",
  "descricao":"O estado do Sergipe está localizado na região Nordeste do brasil e sua capital é Aracaju.",
  "img":"/assets/bandeiras/Sergipe.png",
  "keywords":"Bandeira, Bandeira do Sergipe, Capital do Sergipe, Nordeste, Aracaju"
},{
  "nome":"Tocantins",
  "sigla":"TO",
  "capital":"Palmas",
  "regiao":"Norte",
  "descricao":"O estado do Tocantins está localizado na região Norte do brasil e sua capital é Palmas.",
  "img":"/assets/bandeiras/Tocantins.png",
  "keywords":"Bandeira, Bandeira do Tocantins, Capital do Tocantins, Norte, Palmas"
}

  
];

