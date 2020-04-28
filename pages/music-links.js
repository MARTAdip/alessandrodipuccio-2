import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import Nav from '../components/nav/Nav';

export default function MusicLinks() {
  return (
    <>
      <Nav />
      <main>
        <div className="grid">
          <AwesomeSlider>
            <div className="card">
              <iframe
                title="soundcloud1"
                width="100%"
                height="400px"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/759887992&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>

            <div className="card">
              <iframe
                title="soundcloud2"
                width="100%"
                height="400px"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/692279068&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>
            <div className="card">
              <iframe
                title="soundcloud3"
                width="100%"
                height="400px"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/758746639&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>

            <div className="card">
              <iframe
                title="soundcloud4"
                width="100%"
                height="400px"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/758736940&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>
          </AwesomeSlider>
        </div>
      </main>

      <style jsx>
        {`
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            margin-top: 3rem;
          }
          @media (min-width: 1440px) {
            .grid {
              width: 100%;
            }
          }

          .card {
            margin: 1rem;
            flex-basis: 85%;
            padding: 15px;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          @media (min-width: 768px) {
            .card {
              flex-basis: 45%;
            }
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
          @media (min-width: 768px) and (max-width: 1024px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }

          AwesonmSlider {
            background: radial-gradient(circle, rgba(82, 67, 74, 1) 0%, rgba(148, 187, 233, 1) 100%);
          }
        `}
      </style>
    </>
  );
}
