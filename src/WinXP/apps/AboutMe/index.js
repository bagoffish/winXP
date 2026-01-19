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

  const addressText = useMemo(() => {
    if (route === "lain") return "https://bagof.fish/about-me#lain";
    return "https://bagof.fish/about-me";
  }, [route]);

  function onClickOptionItem(item) {
    switch (item) {
      case "Close":
        onClose?.();
        break;
      case "Home Page":
      case "Back":
        setRoute("about");
        break;
      default:
    }
  }

  function goAbout() {
    setRoute("about");
  }

  function goLain() {
    setRoute("lain");
  }

  const backIsDisabled = route === "about";

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
          className={`ie__function_bar__button${
            backIsDisabled ? "--disable" : ""
          }`}
          onClick={backIsDisabled ? undefined : goAbout}
        >
          <img className="ie__function_bar__icon" src={back} alt="" />
          <span className="ie__function_bar__text">Back</span>
          <div className="ie__function_bar__arrow" />
        </div>

        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={forward} alt="" />
          <div className="ie__function_bar__arrow" />
        </div>

        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon--margin-1" src={stop} alt="" />
        </div>

        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon--margin-1" src={refresh} alt="" />
        </div>

        <div className="ie__function_bar__button--disable" title="Home">
          <img className="ie__function_bar__icon--margin-1" src={home} alt="" />
        </div>

        <div className="ie__function_bar__separate" />

        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon--normalize" src={search} alt="" />
          <span className="ie__function_bar__text">Search</span>
        </div>

        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon--normalize" src={favorite} alt="" />
          <span className="ie__function_bar__text">Favorites</span>
        </div>

        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={history} alt="" />
        </div>

        <div className="ie__function_bar__separate" />

        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon--margin-1" src={mail} alt="" />
          <div className="ie__function_bar__arrow--margin-11" />
        </div>

        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon--margin12" src={printer} alt="" />
        </div>

        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={edit} alt="" />
        </div>

        <div className="ie__function_bar__button--disable">
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

      {/* SCROLLING SHOULD HAPPEN HERE */}
      <div className="ie__content">
        <div className="ie__content__inner">
          <div className="page">
            {route === "about" ? (
              <pre className="aboutpre">
                {ABOUT_TEXT_BEFORE}
                <a
                  href="#"
                  className="inline-link"
                  onClick={(e) => {
                    e.preventDefault();
                    goLain();
                  }}
                >
                  Serial Experiments Lain
                </a>
                {ABOUT_TEXT_AFTER}
              </pre>
            ) : (
              <div className="lainwrap">
                <div className="lainbg" />
              </div>
            )}
          </div>
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

const ABOUT_TEXT_BEFORE = `My name is Coy (or Bag of Fish).

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
Visual Novels: Saya no Uta, Steins;Gate, Katawa Shoujo,
                Teaching Feeling, Higurashi, SubaHibi & Succubus Game
Mangas: Tokyo Akazukin, Null-Meta, Sayonara Zetsubou Sensei,
        Shadow Star, Made in Abyss, Mai-chan’s Daily Life & Shimeji Simulation
Animes: A Silent Voice, Monster, Inuyashiki, Bungo Stray Dogs,
        Alien Nine, Evangelion, Parasyte, Nichijou, 
        Girls Last Tour, Haibane Renmei & `;

const ABOUT_TEXT_AFTER = ``;

const Div = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);

  /* ... your IE chrome CSS unchanged ... */

  .ie__content {
    flex: 1;
    overflow: auto; /* ✅ this is the XP scroller */
    padding-left: 1px;
    border-left: 1px solid #6f6f6f;
    background-color: #f1f1f1;
    position: relative;
  }

  .ie__content__inner {
    position: relative;
    min-width: 800px;
    width: 100%;
  }

  .page {
    padding: 10px;
    box-sizing: border-box;
    font-family: "Courier New", monospace;
    background: #fff;
    color: #000;
    min-height: 800px;
  }

  .aboutpre {
    margin: 0;
    white-space: pre-wrap;
    font-size: 12px;
    line-height: 1.35;
  }

  .inline-link {
    color: #0000ee;
    text-decoration: underline;
    cursor: pointer;
  }

  .lainwrap {
    width: 100%;
    min-height: 600px;
    background: #fff;
  }

  .lainbg {
    width: 100%;
    min-height: 600px;
    background: #fff url("/images/lain.gif") center / contain no-repeat;
  }

  /* ✅ XP-ish scrollbar skin */
  .ie__content::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }
  .ie__content::-webkit-scrollbar-track {
    background: #d4d0c8;
    border-left: 1px solid #808080;
  }
  .ie__content::-webkit-scrollbar-thumb {
    background: #c0c0c0;
    border: 1px solid #808080;
    box-shadow: inset 1px 1px 0 #ffffff, inset -1px -1px 0 #a0a0a0;
  }
  .ie__content::-webkit-scrollbar-corner {
    background: #d4d0c8;
  }
`;

export default AboutMe;
