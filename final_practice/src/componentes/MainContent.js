import React from "react";
import ContactSection from "./ContactSection";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const navigate = useNavigate();

  return (
    <main className="main-content">
      <section className="content-section">
        <h1>EXPAND YOUR MIND AND START YOUR JOURNEY THROUGH BOOKS</h1>
        <div className="info">
          <div className="info1">
            <img src="../images/logo3.webp" alt="" />
            <p>
              OUR BOOK WEBSITE OFFERS SEAMLESS NAVIGATION, ALLOWING YOU TO
              EFFORTLESSLY EXPLORE A VAST ARRAY OF AUTHORS AND GENRES. WHETHER
              YOU'RE SEARCHING FOR A CLASSIC MASTERPIECE OR THE LATEST
              BESTSELLER, FINDING YOUR NEXT READ HAS NEVER BEEN EASIER.
            </p>
          </div>
          <div className="info2">
            <img src="../images/logo1.webp" alt="" />
            <p>
              WITH INTUITIVE FILTERING OPTIONS, YOU CAN TAILOR YOUR SEARCH TO
              YOUR PREFERENCES, REFINING RESULTS BY AUTHOR, GENRE, OR
              PUBLICATION DATE. DISCOVERING NEW LITERARY GEMS HAS NEVER BEEN
              MORE CONVENIENT.
            </p>
          </div>
          <div className="info3">
            <img src="../images/logo2.webp" alt="" />
            <p>
              NEED ASSISTANCE? OUR DEDICATED SUPPORT TEAM IS HERE TO PROVIDE
              EXPERT GUIDANCE AND RECOMMENDATIONS. FROM NAVIGATING THE SITE TO
              RESOLVING QUERIES, WE ENSURE A SMOOTH AND ENJOYABLE BROWSING
              EXPERIENCE FOR ALL BOOK ENTHUSIASTS.
            </p>
          </div>
        </div>
        <button onClick={() => navigate("/books")} className="more-info-button">
          MORE INFO
        </button>
      </section>
      <ContactSection />
    </main>
  );
};

export default MainContent;
