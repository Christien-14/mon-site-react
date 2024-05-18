/**
    * @description      : 
    * @author           : Christien Moses
    * @group            : 
    * @created          : 18/05/2024 - 23:17:19
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/05/2024
    * - Author          : Christien Moses
    * - Modification    : 
**/
import React from 'react';
import './styles.css';

const App = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Christien Moses</h1>
        <div>
          <button className="btn btn-primary">
            <i className="fas fa-envelope"></i> M'écrire
          </button>
          <a href="https://github.com/ChristienMoses" className="btn btn-secondary">
            <i className="fab fa-github"></i> Accéder à mon GitHub
          </a>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="welcome-section">
        <i className="fas fa-smile"></i>
        <h2>HEY, BIENVENUE SUR MA PAGE</h2>
      </section>

      {/* Divider */}
      <hr />

      {/* Latest Articles */}
      <section className="latest-articles">
        <h2>Mes Derniers Articles</h2>
        <div className="articles">
          <article>
            <img src="article1.jpg" alt="Article 1" />
            <h3>Titre de l'Article 1</h3>
            <p>01/01/2024</p>
          </article>
          <article>
            <img src="article2.jpg" alt="Article 2" />
            <h3>Titre de l'Article 2</h3>
            <p>02/01/2024</p>
          </article>
          <article>
            <img src="article3.jpg" alt="Article 3" />
            <h3>Titre de l'Article 3</h3>
            <p>03/01/2024</p>
          </article>
        </div>
      </section>

      {/* Divider */}
      <hr />

      {/* Skills */}
      <section className="skills">
        <h2>Mes Compétences</h2>
        <div className="skills-grid">
          <div className="skill">
            <i className="fas fa-database"></i>
            <p>SQL</p>
            <i className="fas fa-link"></i>
            <p>Blockchain</p>
          </div>
          <div className="skill">
            <i className="fab fa-linux"></i>
            <p>Linux</p>
            <i className="fab fa-windows"></i>
            <p>Windows</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr />

      {/* Contact Form */}
      <section className="contact-form">
        <h2>M'écrire</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message"></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </section>

      {/* Divider */}
      <hr />

      {/* Social Media */}
      <section className="social-media">
        <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
        <a href="https://www.telegram.com"><i className="fab fa-telegram"></i></a>
        <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
      </section>
    </div>
  );
};

export default App;
