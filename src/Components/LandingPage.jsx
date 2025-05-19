// src/components/LandingPage.jsx

import React, { useState, useEffect } from "react";
import { FiCalendar } from "react-icons/fi";
import { FcGraduationCap } from "react-icons/fc";
import Modal from "./Modal";
import { mobileBg } from "../utils/getImg";

export default function LandingPage() {
  // 1) Таймер на 30 секунд
  const [timeLeft, setTimeLeft] = useState(60);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // 2) По истечении открываем модалку и сбрасываем
          setModalOpen(true);
          return 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="root">
      <div className="container">
        <div className="content">
          {/* Календарь */}
          <div className="calendar">
            <div className="calendar__left_box">
              <FiCalendar className="calendarIcon" />
              <div className="calendar__left_text_box">
                <span className="calendarText">Kurs sanasi:</span>
                <span className="calendarText">3–4–5 iyun</span>
              </div>
            </div>

            <div className="calendar__left_box">
              <FcGraduationCap className="calendarIcon" />
              <div className="calendar__left_text_box">
                <span className="calendarText">Boshlanish vaqti:</span>
                <span className="calendarText">20:00</span>
              </div>
            </div>
          </div>
          <div className="title__mobile_box">
            <h1 className="title__mobile_title">
              Erni suyukli erkatoyiga aylanib - sevgi, sovg`a va baraka to`la`
              oila sohibasi bo`ling!
            </h1>
            <h2 className="title__mobile_text">
              Bu bilimlarni Iman Akhmedovnaning 3 kunlik master klassida
              o’rganib oling.
            </h2>
          </div>
          <div className="mobile__img">
            <img src={mobileBg} alt="" className="avatar" />
            <div className="btn__box">
              <button className="btn_mobile" onClick={() => setModalOpen(true)}>
                BEPUL QATNASHISH
              </button>
              <div className="timerCard_btn">
                <div className="timer">
                  <div className="timeBlock">
                    <div className="timeValue">{mm}</div>
                    <div className="timeLabel">daqiqa</div>
                  </div>
                  <div className="timeBlock">
                    <div className="timeValue">{ss}</div>
                    <div className="timeLabel">soniya</div>
                  </div>
                </div>
              </div>
              <p className="timerText">
                Hozirroq ro‘yxatdan o‘ting! Joylar cheklangan!
              </p>
            </div>
          </div>
          <div className="title_box"></div>

          {/* Мобильная картинка + кнопка */}

          {/* Основная колонка */}
          <div className="left">
            <h2 className="title">
               Erni suyukli erkatoyiga aylanib - sevgi, sovg`a va baraka to`la`
              oila sohibasi bo`ling!
            </h2>
            <h2 className="title">
              Bu bilimlarni Iman Akhmedovnaning 3 kunlik master klassida
              o’rganib oling.
            </h2>

            <p className="lead">
              Master klass- 3 kun yopiq telegram kanalda bo’ladi.
              <br />
              Ro‘yxatdan o‘ting — (<strong>1 daqiqa ichida</strong> BEPUL)
            </p>
            <p className="desc">
              3 kechalik BEPUL masterklassda quyidagilarni bilib olasiz:
            </p>
            <ul className="list">
              <li>
                Saodatli nikohga erishish uchun qo‘rq­uv va vohimalardan xalos
                bo‘lish
              </li>
              <li>
                Xayr­li turmush so‘rash, erni moliyaviy barakasini oshirish
                uchun 5 ta texnika
              </li>
              <li>
                Er-xotin munosabatlari yomonlashuvi, 3-shaxslar aralashuvi va
                xiyonat sabablari
              </li>
            </ul>
            <div className="btn__box">
              <button className="btn" onClick={() => setModalOpen(true)}>
                BEPUL QATNASHISH
              </button>
              <div className="timerCard">
                <div className="timer">
                  <div className="timeBlock">
                    <div className="timeValue">{mm}</div>
                    <div className="timeLabel">daqiqa</div>
                  </div>
                  <div className="timeBlock">
                    <div className="timeValue">{ss}</div>
                    <div className="timeLabel">soniya</div>
                  </div>
                </div>
              </div>
              <p className="timerText">
                Hozirroq ro‘yxatdan o‘ting! Joylar cheklangan!
              </p>
            </div>
          </div>

          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </div>
    </div>
  );
}
