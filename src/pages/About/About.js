//CSS
import styles from './About.module.css';

import { Link } from 'react-router-dom';

const About = () => {


  return (
    <div className={styles.about}>
      <h2>Sobre o Mini <span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito com:</p>

      <ul>
        <li>Hooks</li>
        <li>Componentes</li>
        <li>Manipulação de páginas</li>
        <li>CSS Modules</li>
        <li>Firestore (Firebase)</li>
        <li>Authenticator(Firebase)</li>
      </ul>

      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  )
}

export default About