import Link from "next/link";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import { useState } from "react";
import styles from "./EstadosTabela.module.css";

const orderBy = (estados, value, direction) => {
  if (direction === "asc") {
    return [...estados].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...estados].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return estados;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }

  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  }
};

const EstadosTabela = ({ estados }) => {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const ordenarEstados = orderBy(estados, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.heading_flag}></div>

        <button
          className={styles.heading_name}
          onClick={() => setValueAndDirection("nome")}
        >
          <div>Nome</div>

          {value === "nome" && <SortArrow direction={direction} />}
        </button>

        <button
          className={styles.heading_gini}
          onClick={() => setValueAndDirection("sigla")}
        >
          <div>Sigla</div>

          {value === "sigla" && <SortArrow direction={direction} />}
        </button>

        <button
          className={styles.heading_gini}
          onClick={() => setValueAndDirection("capital")}
        >
          <div>Capital</div>

          {value === "capital" && <SortArrow direction={direction} />}
        </button>


        <button
          className={styles.heading_gini}
          onClick={() => setValueAndDirection("regiao")}
        >
          <div>Região</div>

          {value === "regiao" && <SortArrow direction={direction} />}
        </button>
      </div>

      {ordenarEstados.map((estado) => (
        <Link href={`/estado/${estado.sigla}`} key={estado.sigla}>
          <div className={styles.row}>
            <div className={styles.flag}>
              <img src={estado.img} alt={estado.nome} />
            </div>
            <div className={styles.name}>{estado.nome}</div>

            <div className={styles.population}>{estado.sigla}</div>

            <div className={styles.population}>{estado.capital}</div>

            <div className={styles.population}>{estado.regiao}</div>

           
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EstadosTabela;
