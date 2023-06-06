import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Articles.css";
const Articles = () => {
  const navigate = useNavigate();

  const onGoBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="articles">
      <div className="allocate-container">
        <div className="section-details">
          <div className="section-name-container">
            <div className="section-name-title">Section name</div>
            <div className="section-name">المساعدات الإجتماعية</div>
          </div>
          <div className="section-amount-details">
            <div className="section-name-title">Allocated Amount</div>
            <div className="section-amount-container">
              <div className="amount-and-dzd-container6">
                <div className="section-name-title">2,000,000</div>
                <div className="dzd6">DZD</div>
              </div>
            </div>
          </div>
        </div>
        <div className="articles-container">
          <div className="articles-details-titles">
            <div className="allocated-amount">Allocated Amount</div>
            <div className="remaining-allocated-amount">
              Remaining Allocated Amount
            </div>
            <div className="articles1">Articles</div>
          </div>
          <div className="articles-details">
            <div className="article">
              <div className="article-name-container2">
                <div className="icsection2">
                  <img className="vector-icon8" alt="" src="/vector.svg" />
                </div>
                <div className="div">منحة التقاعد</div>
              </div>
              <div className="article-allocated-amount-conta2">
                <div className="ic-amount-grey2">
                  <img className="vector-icon9" alt="" src="/vector1.svg" />
                </div>
                <div className="amount-and-dzd-container7">
                  <div className="section-name-title">80,000</div>
                  <div className="section-name-title">DZD</div>
                </div>
              </div>
              <div className="article-allocated-amount-conta2">
                <div className="icamount1">
                  <img className="vector-icon9" alt="" src="/vector1.svg" />
                </div>
                <div className="amount-and-dzd-container7">
                  <div className="section-name-title">20,000</div>
                  <div className="section-name-title">DZD</div>
                </div>
              </div>
            </div>
            <div className="article">
              <div className="article-name-container2">
                <div className="icsection2">
                  <img className="vector-icon8" alt="" src="/vector.svg" />
                </div>
                <div className="div">منحة الوفاة</div>
              </div>
              <div className="article-allocated-amount-conta2">
                <div className="ic-amount-grey2">
                  <img className="vector-icon9" alt="" src="/vector1.svg" />
                </div>
                <div className="amount-and-dzd-container7">
                  <div className="section-name-title">80,000</div>
                  <div className="section-name-title">DZD</div>
                </div>
              </div>
              <div className="article-allocated-amount-conta2">
                <div className="icamount1">
                  <img className="vector-icon9" alt="" src="/vector1.svg" />
                </div>
                <div className="amount-and-dzd-container7">
                  <div className="section-name-title">20,000</div>
                  <div className="section-name-title">DZD</div>
                </div>
              </div>
            </div>
            <div className="article">
              <div className="article-name-container2">
                <div className="icsection2">
                  <img className="vector-icon8" alt="" src="/vector.svg" />
                </div>
                <div className="div">منحة الزواج</div>
              </div>
              <div className="article-allocated-amount-conta2">
                <div className="ic-amount-grey2">
                  <img className="vector-icon9" alt="" src="/vector1.svg" />
                </div>
                <div className="amount-and-dzd-container7">
                  <div className="section-name-title">80,000</div>
                  <div className="section-name-title">DZD</div>
                </div>
              </div>
              <div className="article-allocated-amount-conta2">
                <div className="icamount1">
                  <img className="vector-icon9" alt="" src="/vector1.svg" />
                </div>
                <div className="amount-and-dzd-container7">
                  <div className="section-name-title">20,000</div>
                  <div className="section-name-title">DZD</div>
                </div>
              </div>
            </div>
            <div className="article">
              <div className="article-name-container2">
                <div className="icsection2">
                  <img className="vector-icon8" alt="" src="/vector.svg" />
                </div>
                <div className="div">منحة المولود الجديد</div>
              </div>
              <div className="article-allocated-amount-conta2">
                <div className="ic-amount-grey2">
                  <img className="vector-icon9" alt="" src="/vector1.svg" />
                </div>
                <div className="amount-and-dzd-container7">
                  <div className="section-name-title">80,000</div>
                  <div className="section-name-title">DZD</div>
                </div>
              </div>
              <div className="article-allocated-amount-conta2">
                <div className="icamount1">
                  <img className="vector-icon9" alt="" src="/vector1.svg" />
                </div>
                <div className="amount-and-dzd-container7">
                  <div className="section-name-title">20,000</div>
                  <div className="section-name-title">DZD</div>
                </div>
              </div>
            </div>
            <div className="article">
              <div className="article-name-container2">
                <div className="icsection2">
                  <img className="vector-icon8" alt="" src="/vector.svg" />
                </div>
                <div className="div">منحة ختان المولود الجديد</div>
              </div>
              <div className="article-allocated-amount-conta2">
                <div className="ic-amount-grey2">
                  <img className="vector-icon9" alt="" src="/vector1.svg" />
                </div>
                <div className="amount-and-dzd-container7">
                  <div className="section-name-title">80,000</div>
                  <div className="section-name-title">DZD</div>
                </div>
              </div>
              <div className="article-allocated-amount-conta2">
                <div className="icamount1">
                  <img className="vector-icon9" alt="" src="/vector1.svg" />
                </div>
                <div className="amount-and-dzd-container7">
                  <div className="section-name-title">20,000</div>
                  <div className="section-name-title">DZD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="go-back-button1" onClick={onGoBackButtonClick}>
        <img className="vector-icon23" alt="" src="/vector3.svg" />
      </button>
    </div>
  );
};

export default Articles;
