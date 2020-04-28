import React, { Component } from 'react';
import ReadMore from '../components/readmore/ReadMore';
import Nav from '../components/nav/Nav';
import '../components/teaching.scss';

const text4 =
  "Dal 1985 svolge attività didattica come insegnante di strumenti a percussione (batteria, vibrafono) e tiene corsi di musica d’insieme, armonia, tecnica dell’improvvisazione ad indirizzo jazzistico, composizione e arrangiamento per musica d'uso e storia del Jazz. Ha tenuto seminari in scuole di musica e conservatori italiani sull'improvvisazione nel jazz (Firenze, Siena, Modena, La Spezia, e un seminario all'università di Istanbul e al conservatorio di Pantin [Parigi]). Ha svolto per oltre vent’anni anche attività di aggiornamento didattico per gli insegnanti e corsi di ascolto guidato per le classi delle scuole materne e elementari nel comune e nella provincia di Firenze. Dal 2004 al 2015, per l'Assessorato alla Pubblica Istruzione del Comune di Firenze, nell'ambito delle proposte formative “Chiavi Della Città”, ha diretto laboratori di teatro musicale per e con i bambini delle scuole elementari e medie, con la realizzazione di uno spettacolo al Teatro della Pergola di Firenze. Questa attività è confluita nella realizzazione del disco di canzoni per bambini “Si può farcela”, ( musiche di Di Puccio, prodotto da Marco Lamioni e dal comune di Firenze) a cui hanno partecipato Roberto Vecchioni e Irene Grandi. È stato direttore didattico dal 1986 al 2017 della scuola del Centro Attività Musicali (CAM) di Firenze e dal 1986 al 2003 anche della scuola comunale di Scandicci (Fi). Attualmente dirige il dipartimento Jazz dell’Accademia Musicale di Firenze e il Centro per le Arti Silence JAM (jazz, arte, movimento) di Firenze.";

export default class Teaching extends Component {
  componentDidMount() {
    console.log('mounted width - ', window.getComputedStyle(this.wrapper).getPropertyValue('width'));
  }

  getWrapperWidth() {
    if (this.wrapper) {
      console.log('get wrapper width', window.getComputedStyle(this.wrapper).getPropertyValue('width'));
    } else {
      console.log('get wrapper - no wrapper');
    }
  }

  render() {
    return (
      <>
        <Nav />
        <div className="card-container">
          <div className="card">
            <h3>Patreon</h3>
            <span>blanlalnsklhb jkdbeihiwql</span>
          </div>
        </div>
        <div className="container">
          <div className="bio-wrapper">
            <div className="section-content" ref={node => (this.wrapper = node)}>
              <h3>ATTIVITA' DIDATTICA</h3>
              <ReadMore
                text={text4}
                numberOfLines={3}
                lineHeight={1.4}
                showLessButton
                onContentChange={this.getWrapperWidth}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
