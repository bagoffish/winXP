import React, { useMemo, useState } from "react";
import styled from "styled-components";

import { WindowDropDowns } from "components";
import dropDownData from "./dropDownData";

// icons (same ones you posted)
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
          className={`ie__function_bar__button${route === "about" ? "--disable" : ""}`}
        >
          <img className="ie__function_bar__icon" src={back} alt="" />
          <span className="ie__function_bar__text">Back</span>
          <div className="ie__function_bar__arrow" />
        </div>

        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={forward} alt="" />
          <div className="ie__function_bar__arrow" />
        </div>

        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src={stop} alt="" />
        </div>

        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src={refresh} alt="" />
        </div>

        <div className="ie__function_bar__button" onClick={goAbout}>
          <img className="ie__function_bar__icon--margin-1" src={home} alt="" />
        </div>

        <div className="ie__function_bar__separate" />

        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--normalize" src={search} alt="" />
          <span className="ie__function_bar__text">Search</span>
        </div>

        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--normalize" src={favorite} alt="" />
          <span className="ie__function_bar__text">Favorites</span>
        </div>

        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon" src={history} alt="" />
        </div>

        <div className="ie__function_bar__separate" />

        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src={mail} alt="" />
          <div className="ie__function_bar__arrow--margin-11" />
        </div>

        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin12" src={printer} alt="" />
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
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__right">
          <img className="ie__footer__right__img" src={earth} alt="" />
          <span className="ie__footer__right__text">Internet</span>
          <div className="ie__footer__right__dots" />
        </div>
      </footer>
    </Div>
  );
}

function AboutPage({ onOpenLain }) {
  return (
    <div className="aboutwrap">
      <pre className="aboutpre">
{`         888                        888                              
         888                        888                              
         888                        888                              
 8888b.  88888b.   .d88b.  888  888 888888    88888b.d88b.   .d88b.  
    "88b 888 "88b d88""88b 888  888 888       888 "888 "88b d8P  Y8b 
.d888888 888  888 888  888 888  888 888       888  888  888 88888888 
888  888 888 d88P Y88..88P Y88b 888 Y88b.     888  888  888 Y8b.     
"Y888888 88888P"   "Y88P"   "Y88888  "Y888    888  888  888  "Y8888  

My name is Coy (or Bag of Fish).

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
I’m a multifandom geek; you could throw buzzwords or questions 
and I’ll know what you’re talking about.
Just don’t bother with hypermasculine nonsense like martial arts manwhas 
or aura hype bullshit.

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
        Girls Last Tour, Haibane Renmei`}
      </pre>

      <div className="aboutlinks">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onOpenLain();
          }}
        >
          Serial Experiments Lain
        </a>
      </div>
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
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);

  /* keep all your IE CSS exactly */
  .ie__toolbar {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 100%;
    height: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }
  .ie__options {
    height: 23px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    border-right: 1px solid rgba(0, 0, 0, 0.15);
    padding-left: 2px;
    flex: 1;
  }
  .ie__windows-logo {
    height: 100%;
    border-left: 1px solid white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__function_bar {
    height: 36px;
    display: flex;
    align-items: center;
    font-size: 11px;
    padding: 1px 3px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__function_bar__button {
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
    }
    &:hover:active {
      border: 1px solid rgb(185, 185, 185);
      background-color: #dedede;
      box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);
      color: rgba(255, 255, 255, 0.7);
      & > * {
        transform: translate(1px, 1px);
      }
    }
  }
  .ie__function_bar__button--disable {
    filter: grayscale(1);
    opacity: 0.7;
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .ie__function_bar__text {
    margin-right: 4px;
  }
  .ie__function_bar__icon {
    height: 30px;
    width: 30px;
    &--normalize {
      height: 22px;
      width: 22px;
      margin: 0 4px 0 1px;
    }
    &--margin12 {
      height: 22px;
      width: 22px;
      margin: 0 1px 0 2px;
    }
    &--margin-1 {
      margin: 0 -1px;
      height: 30px;
      width: 30px;
    }
  }
  .ie__function_bar__separate {
    height: 90%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 2px;
  }
  .ie__function_bar__arrow {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 4px;
    &:before {
      content: "";
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .ie__function_bar__arrow--margin-11 {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 1px 0 -1px;
    &:before {
      content: "";
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .ie__address_bar {
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    height: 22px;
    font-size: 11px;
    display: flex;
    align-items: center;
    padding: 0 2px 2px;
    box-shadow: inset 0 -2px 3px -1px #2d2d2d;
  }
  .ie__address_bar__title {
    line-height: 100%;
    color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  .ie__address_bar__content {
    border: rgba(122, 122, 255, 0.6) 1px solid;
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    background-color: white;
    position: relative;
    &__img {
      width: 14px;
      height: 14px;
    }
    &__img:last-child {
      width: 15px;
      height: 15px;
      right: 1px;
      position: absolute;
    }
    &__text {
      position: absolute;
      white-space: nowrap;
      left: 16px;
      right: 17px;
      overflow: hidden;
    }
  }
  .ie__address_bar__go {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      height: 95%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-right: 3px;
    }
  }
  .ie__address_bar__links {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      position: absolute;
      right: 2px;
      top: 3px;
      height: 5px;
      width: 8px;
    }
    &__text {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .ie__address_bar__separate {
    height: 100%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 1px 0 rgba(255, 255, 255, 0.7);
  }
  .ie__content {
    flex: 1;
    overflow: auto;
    padding-left: 1px;
    border-left: 1px solid #6f6f6f;
    background-color: #f1f1f1;
    position: relative;
  }
  .ie__content__inner {
    position: relative;
    min-height: 800px;
    min-width: 800px;
    width: 100%;
    height: 100%;
  }
  .ie__footer {
    height: 20px;
    border-top: 1px solid transparent;
    box-shadow: inset 0 1px 3px rgba(50, 50, 50, 0.8);
    background-color: rgb(236, 233, 216);
    display: flex;
    align-items: center;
    padding-top: 2px;
  }
  .ie__footer__status {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 2px;
    &__text {
      font-size: 11px;
    }
    &__img {
      height: 14px;
      width: 14px;
      margin-right: 3px;
    }
  }
  .ie__footer__block {
    height: 85%;
    width: 22px;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: inset 1px 0 rgba(255, 255, 255, 0.7);
  }
  .ie__footer__right {
    display: flex;
    align-items: center;
    width: 150px;
    height: 80%;
    border-left: 1px solid rgba(0, 0, 0, 0.11);
    box-shadow: inset 1px 0 rgba(255, 255, 255, 0.7);
    padding-left: 5px;
    position: relative;
    &__text {
      font-size: 11px;
    }
    &__img {
      height: 14px;
      width: 14px;
      margin-right: 3px;
    }
    &__dots {
      position: absolute;
      right: 11px;
      bottom: -1px;
      width: 2px;
      height: 2px;
      box-shadow: 2px 0px rgba(0, 0, 0, 0.25),
        5.5px 0px rgba(0, 0, 0, 0.25), 9px 0px rgba(0, 0, 0, 0.25),
        5.5px -3.5px rgba(0, 0, 0, 0.25), 9px -3.5px rgba(0, 0, 0, 0.25),
        9px -7px rgba(0, 0, 0, 0.25), 3px 1px rgba(255, 255, 255, 1),
        6.5px 1px rgba(255, 255, 255, 1), 10px 1px rgba(255, 255, 255, 1),
        10px -2.5px rgba(255, 255, 255, 1), 10px -6px rgba(255, 255, 255, 1);
    }
  }

  /* --- About page styling inside IE --- */
  .aboutwrap {
    padding: 10px;
    height: 100%;
    min-width: 800px;
    box-sizing: border-box;
    font-family: "Courier New", monospace;
    font-size: 12px;
    line-height: 1.35;
    color: #000;
    background: #fff;
  }
  .aboutpre {
    margin: 0;
    white-space: pre-wrap;
  }
  .aboutlinks {
    margin-top: 10px;
  }
  .aboutlinks a {
    color: #0000ee;
    text-decoration: underline;
  }

  /* --- Lain page styling inside IE --- */
  .lainwrap {
    height: 100%;
    min-width: 800px;
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
    font-family: Tahoma, Verdana, sans-serif;
  }
  .lainback a {
    color: #0000ee;
    text-decoration: underline;
  }
`;

export default AboutMe;
