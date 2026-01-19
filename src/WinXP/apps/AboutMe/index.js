import React, { useMemo, useState } from "react";
import styled from "styled-components";

import { WindowDropDowns } from "components";
import dropDownData from "./dropDownData";

/* icons */
import ie from "assets/windowsIcons/ie-paper.png";
import printer from "assets/windowsIcons/17(32x32).png";
import go from "assets/windowsIcons/290.png";
import links from "assets/windowsIcons/links.png";
import search from "assets/windowsIcons/299(32x32).png";
import favorite from "assets/windowsIcons/744(32x32).png";
import back from "assets/windowsIcons/back.png";
import earth from "assets/windowsIcons/earth.png";
import edit from "assets/windowsIcons/edit.png";
import forward from "assets/windowsIcons/forward.png";
import history from "assets/windowsIcons/history.png";
import home from "assets/windowsIcons/home.png";
import mail from "assets/windowsIcons/mail.png";
import msn from "assets/windowsIcons/msn.png";
import refresh from "assets/windowsIcons/refresh.png";
import stop from "assets/windowsIcons/stop.png";
import windows from "assets/windowsIcons/windows.png";
import dropdown from "assets/windowsIcons/dropdown.png";

function AboutMe({ onClose }) {
  const [route, setRoute] = useState("about"); // "about" | "lain"

  function goAbout() {
    setRoute("about");
  }
  function goLain() {
    setRoute("lain");
  }

  function onClickOptionItem(item) {
    switch (item) {
      case "Close":
        onClose?.();
        break;
      case "Home Page":
      case "Back":
        goAbout();
        break;
      default:
    }
  }

  const addressText = useMemo(() => {
    if (route === "lain") return "https://bagof.fish/about-me#lain";
    return "https://bagof.fish/about-me";
  }, [route]);

  return (
    <Div>
      <section className="ie__toolbar">
        <div className="ie__options">
          <WindowDropDowns
            items={dropDownData}
            onClickItem={onClickOptionItem}
            height={21}
          />
        </div>
        <img className="ie__windows-logo" src={windows} alt="windows" />
      </section>

      <section className="ie__function_bar">
        <div
          onClick={goAbout}
          className={`ie__function_bar__button${
            route === "about" ? "--disable" : ""
          }`}
        >
          <img className="ie__function_bar__icon" src={back} alt="" />
          <span className="ie__function_bar__text">Back</span>
          <div className="ie__function_bar__arrow" />
        </div>

        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={forward} alt="" />
        </div>

        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src={stop} alt="" />
        </div>

        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--margin-1"
            src={refresh}
            alt=""
          />
        </div>

        <div className="ie__function_bar__button" onClick={goAbout}>
          <img className="ie__function_bar__icon--margin-1" src={home} alt="" />
        </div>

        <div className="ie__function_bar__separate" />

        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--normalize"
            src={search}
            alt=""
          />
          <span className="ie__function_bar__text">Search</span>
        </div>

        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--normalize"
            src={favorite}
            alt=""
          />
          <span className="ie__function_bar__text">Favorites</span>
        </div>

        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon" src={history} alt="" />
        </div>

        <div className="ie__function_bar__separate" />

        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--margin-1"
            src={mail}
            alt=""
          />
          <div className="ie__function_bar__arrow--margin-11" />
        </div>

        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--margin12"
            src={printer}
            alt=""
          />
        </div>

        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={edit} alt="" />
        </div>

        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin12" src={msn} alt="" />
        </div>
      </section>

      <section className="ie__address_bar">
        <div className="ie__address_bar__title">Address</div>

        <div className="ie__address_bar__content" title={addressText}>
          <img src={ie} alt="ie" className="ie__address_bar__content__img" />
          <div className="ie__address_bar__content__text">{addressText}</div>
          <img
            src={dropdown}
            alt="dropdown"
            className="ie__address_bar__content__img"
          />
        </div>

        <div className="ie__address_bar__go">
          <img className="ie__address_bar__go__img" src={go} alt="go" />
          <span className="ie__address_bar__go__text">Go</span>
        </div>

        <div className="ie__address_bar__separate" />

        <div className="ie__address_bar__links">
          <span className="ie__address_bar__links__text">Links</span>
          <img className="ie__address_bar__links__img" src={links} alt="links" />
        </div>
      </section>

      <div className="ie__content">
        <div className="ie__content__inner">
          {route === "about" ? (
            <AboutPage onOpenLain={goLain} />
          ) : (
            <LainPage onBack={goAbout} />
          )}
        </div>
      </div>

      <footer className="ie__footer">
        <div className="ie__footer__status">
          <img className="ie__footer__status__img" src={ie} alt="" />
          <span className="ie__footer__status__text">Done</span>
        </div>
        <div className="ie__footer__right">
          <img className="ie__footer__right__img" src={earth} alt="" />
          <span className="ie__footer__right__text">Internet</span>
        </div>
      </footer>
    </Div>
  );
}

function AboutPage({ onOpenLain }) {
  const aboutText = useMemo(
    () => `My name is Coy (or Bag of Fish).

I won’t list anything majorly personal here; I believe you should learn from me.
If that deters you in any way, I think you should walk along, 
as I’ll probably find something about you that is obnoxious.

Due to past experiences online, I tend to be abrasive and make assumptions about people, 
mainly when I see traits I strongly dislike.
Just talk to me how you’d introduce yourself to someone IRL and you’ll be fine.
I’m not great at reading the room and I may ruin moments unintentionally, 
but I hope that’s understood.

I’m a beginner artist, guitarist, and composer.
I’m deeply into philosophy — an optimistic nihilist and an antinatalist;
favorite philosophers are Wittgenstein, Cioran, Camus & Sartre.

I like feminine terms, but still use he/him.
Example: “Ms/Queen/Coy wow he’s pretty.”
Don’t glaze me like that unjokingly — that’s a little weird.

I’m fine with adults interacting with me if you aren’t a creep.
That’s all I’ll say due to limited space — just talk to me 
if you’re interested. If normal, there’s zero biting.

INTERESTS —
Hobbies: Playing guitar, writing, photographing, illustrating & dissecting
Genres: Philosophy, horror eroge, ero guro, body horror,
         psychological horror, speculative evolution,
         post-apocalyptic sci-fi

RECOMMENDATIONS —
TV Shows: Mr. Robot & American Gods
Favorite Authors: Osamu Dazai, Ted Chiang, Harlan Ellison & Bernard Werber
Visual Novels: Saya no Uta, Steins;Gate, Katawa Shoujo,
                Teaching Feeling, Higurashi, SubaHibi & Succubus Game
Mangas: Tokyo Akazukin, Null-Meta, Sayonara Zetsubou Sensei,
        Shadow Star, Made in Abyss, Mai-chan’s Daily Life & Shimeji Simulation
Animes: A Silent Voice, Monster, Inuyashiki, Bungo Stray Dogs,
        Alien Nine, Evangelion, Parasyte, Nichijou, 
        Girls Last Tour, Haibane Renmei

→ Serial Experiments Lain`,
    [],
  );

  return (
    <div className="aboutwrap">
      <pre className="aboutpre">{aboutText}</pre>

      {/* clickable link line (kept aligned/clean with same font) */}
      <button
        type="button"
        className="aboutlink-button"
        onClick={() => onOpenLain()}
      >
        Serial Experiments Lain
      </button>
    </div>
  );
}

function LainPage({ onBack }) {
  return (
    <div className="lainwrap">
      <div className="lainbg" />
      <div className="lainback">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
        >
          ← back
        </a>
      </div>
    </div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);

  .aboutwrap {
    padding: 10px;
    font-family: "Courier New", monospace;
    font-size: 12px;
    line-height: 1.35;
    background: #fff;
    color: #000;
  }

  .aboutpre {
    margin: 0;
    white-space: pre-wrap;
  }

  .aboutlink-button {
    margin-top: 6px;
    padding: 0;
    border: 0;
    background: transparent;
    font: inherit;
    color: #0000ee;
    text-align: left;
    cursor: pointer;
  }

  .aboutlink-button:hover {
    text-decoration: underline;
  }

  .lainwrap {
    height: 100%;
    background: #fff;
    position: relative;
  }

  .lainbg {
    height: 100%;
    background: #fff url("/images/lain.gif") center / contain no-repeat;
  }

  .lainback {
    position: absolute;
    left: 8px;
    bottom: 8px;
    font-size: 12px;
  }

  .lainback a {
    color: #0000ee;
    text-decoration: underline;
  }
`;

export default AboutMe;
