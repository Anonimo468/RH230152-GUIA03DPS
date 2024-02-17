import styles from "./page.module.css";
import Form from "./Componet/Form";
export default function Home() {
  return (
    <main className={styles.main}>
      <title>Lista Compras</title>
      <div className="App">
        <div>
          <p className={styles.titulo}>
          🎫 Lista de Compras 🎫
          </p>
          <br></br>
          <Form></Form>
        </div>
      </div>
    </main>
  );
}
