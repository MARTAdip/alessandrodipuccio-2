import React, { Component } from 'react';
import ReadMore from '../components/readmore/ReadMore';
import '../components/about.scss';
import Gallery from '../components/Gallery';
import Nav from '../components/nav/Nav';

const text1 =
  'Dai Primi anni “80 ad oggi ha suonato nei più importanti club, festival e rassegne, sia in ambito jazz che world music, in Italia e in Europa (Leverkusen, Parigi, Colonia, Istanbul, Ankara, Lisbona, Lubiana). Vanta numerose collaborazioni con musicisti di jazz e world music, fra le più significative: Bruno Tommaso, Enrico Pierannunzi, Maurizio Giammarco, Fabio Morgera, Franco D’Andrea, Gianluigi Trovesi, Pietro Tonolo, Gianni Cazzola, Luca Flores, Marco Tamburini, Massimo Urbani, Tiziana Ghiglioni, Larry Nocella, Roberto Rossi, Paolo Birro, Rosario Giuliani, Nicola Stilo, Rita Marcotulli, Riccardo Tesi, Toots Thielemans, Antonello Salis, Stefano Bollani, Albert Mangelsdorff, Claude Barthelemy, Mal Waldron, Mike Turk, Sal Nistico, Emanuele Cisi, Stefano “Cocco” Cantini. Attualmente tiene concerti con il sassofonista americano Scott Hamilton, l’organista Alberto Marsico e il batterista Alessandro Fabbri. Dal 2003 cura la direzione artistica del Festival “Settembre in Piazza della Passera” a Firenze, a cui hanno partecipato artisti di rilevanza internazionale fra cui Stefano Bollani, Peppe Servillo, Antonello Salis, Riccardo Tesi, Ginevra Di Marco, Maurizio Giammarco, Rossana Casale, Pietro Tonolo.';

const text2 =
  'Ha diretto e scritto composizioni ed arrangiamenti per varie orchestre jazz. Le conduzioni più significative sono con le orchestre: Les Italiens (dal 1198 al 2013) che eseguiva esclusivamente musica composta da A. Di Puccio ed ha all attivo concerti anche in ambito europeo e la realizzazione di 2 cd usciti nel 2002 (ed. Rai Trade) e 2009 (ed. Warner Bros – Chappel Music). La Far Fly MusicComunity (dal 2006 al 2008) nata per l’esecuzione di brani di Luca Flores arrangiati da A. Di Puccio con la quale ha partecipato a vari festivals in città italiane. L’Orchestra multietnica Musipolitana, formazione di ambito world music, che per il suo carattere popolare ha partecipato a numerose rassegne vicine al tema della “festa di piazza”.';

const text3 =
  'Ha curato la consulenza musicale del film "PIano Solo" di Riccardo Milani e interpretato da Kim Rossi Stuart, sulla vita di Luca Flores (con il quale ha suonato per circa venti anni) tratto dal libro di Walter Veltroni “Il Disco del Mondo”. Con l’orchestra Musipolitana ha collaborato per vari anni con la Fondazione Fabbrica Europa, in particolare lavorando sul progetto triennale europeo "Roots & Routes” realizzando le musiche per due spettacoli di danza e la colonna sonora di due documentari televisivi (Storie Migranti ed Intrecci). Attualmente ha fondato, assieme ad altri artisti (fotografi, musicisti, pittori, video maker) il Collettivo FuOri con il quale sta realizzando progetti che prevedonola fusione di musica e immagini attraverso la creazione di cortometraggi, da lui stesso curati nella regia e nell’editing, presentati in numerose occasioni fra cui nella dodicesima e quattordicesima edizione del festival fiorentino “Settembre in piazza della Passera”. ';

const text4 =
  "Dal 1985 svolge attività didattica come insegnante di strumenti a percussione (batteria, vibrafono) e tiene corsi di musica d’insieme, armonia, tecnica dell’improvvisazione ad indirizzo jazzistico, composizione e arrangiamento per musica d'uso e storia del Jazz. Ha tenuto seminari in scuole di musica e conservatori italiani sull'improvvisazione nel jazz (Firenze, Siena, Modena, La Spezia, e un seminario all'università di Istanbul e al conservatorio di Pantin [Parigi]). Ha svolto per oltre vent’anni anche attività di aggiornamento didattico per gli insegnanti e corsi di ascolto guidato per le classi delle scuole materne e elementari nel comune e nella provincia di Firenze. Dal 2004 al 2015, per l'Assessorato alla Pubblica Istruzione del Comune di Firenze, nell'ambito delle proposte formative “Chiavi Della Città”, ha diretto laboratori di teatro musicale per e con i bambini delle scuole elementari e medie, con la realizzazione di uno spettacolo al Teatro della Pergola di Firenze. Questa attività è confluita nella realizzazione del disco di canzoni per bambini “Si può farcela”, ( musiche di Di Puccio, prodotto da Marco Lamioni e dal comune di Firenze) a cui hanno partecipato Roberto Vecchioni e Irene Grandi. È stato direttore didattico dal 1986 al 2017 della scuola del Centro Attività Musicali (CAM) di Firenze e dal 1986 al 2003 anche della scuola comunale di Scandicci (Fi). Attualmente dirige il dipartimento Jazz dell’Accademia Musicale di Firenze e il Centro per le Arti Silence JAM (jazz, arte, movimento) di Firenze.";

export default class Bio2 extends Component {
  static defaultProps = {
    id: '',
  };

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
        <div className="container">
          <div className="bio-wrapper">
            <div className="section-content" ref={node => (this.wrapper = node)}>
              <h3>ALESSANDRO DI PUCCIO (Firenze, 1958)</h3>
              <h4>VIBRAFONISTA (batterista, pianista).</h4>
              <ReadMore
                text={text1}
                numberOfLines={3}
                lineHeight={1.4}
                showLessButton
                onContentChange={this.getWrapperWidth}
              />
            </div>
          </div>
          <div className="bio-wrapper">
            <div className="section-content" ref={node => (this.wrapper = node)}>
              <h3>DIREZIONE D'ORCHESTRA ARRANGIAMENTO E COMPOSIZIONE</h3>
              <ReadMore
                text={text2}
                numberOfLines={3}
                lineHeight={1.4}
                showLessButton
                onContentChange={this.getWrapperWidth}
              />
            </div>
          </div>
          <div className="bio-wrapper">
            <div className="section-content" ref={node => (this.wrapper = node)}>
              <h3>COMPOSIZIONE PER MUSICA D'USO</h3>
              <h4>(TEATRO, DANZA, SIGLE, COMMENTI, CINE - TELEVISIVI E RADIOFONICI)</h4>
              <ReadMore
                text={text3}
                numberOfLines={3}
                lineHeight={1.4}
                showLessButton
                onContentChange={this.getWrapperWidth}
              />
            </div>
          </div>
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
        <Gallery />
      </>
    );
  }
}
