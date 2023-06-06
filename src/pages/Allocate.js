import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Allocate.css";
const Allocate = () => {
  const navigate = useNavigate();

  const onValidateButtonClick = useCallback(() => {
    //TODO: Validate balances added
  }, []);

  const onGoBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="allocate">
      <div className="allocate-and-button-container">
        <div className="allocate-container1">
          <div className="section-details1">
            <div className="section-name-container1">
              <div className="section-name-title1">Section name</div>
              <div className="section-name1">المساعدات الإجتماعية</div>
            </div>
            <div className="section-amount-details1">
              <div className="section-name-title1">Allocated Amount</div>
              <div className="section-amount-container1">
                <div className="amount-and-dzd-container17">
                  <div className="section-name-title1">2,000,000</div>
                  <div className="dzd17">DZD</div>
                </div>
              </div>
            </div>
          </div>
          <div className="articles-container1">
            <div className="articles-details-titles1">
              <div className="articlestitle2">Articles</div>
              <div className="allocated-amounttitle2">Allocated Amount</div>
              <div className="remaining-allocated-amounttit2">
                Remaining Allocated Amount
              </div>
              <div className="add-new-balancetitle">Add New Balance</div>
            </div>
            <div className="articles-details1">
              <div className="article-and-input">
                <div className="article-name-container7">
                  <div className="icsection7">
                    <img className="vector-icon24" alt="" src="/vector.svg" />
                  </div>
                  <div className="article-name3">منحة التقاعد</div>
                </div>
                <div className="article-allocated-amount-conta7">
                  <div className="ic-amount-grey7">
                    <img className="vector-icon25" alt="" src="/vector1.svg" />
                  </div>
                  <div className="amount-and-dzd-container18">
                    <div className="section-name-title1">80,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <div className="article-allocated-amount-conta7">
                  <div className="icamount6">
                    <img className="vector-icon25" alt="" src="/vector1.svg" />
                  </div>
                  <div className="amount-and-dzd-container18">
                    <div className="section-name-title1">20,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <input className="article-new-balance-input" type="text" />
              </div>
              <div className="article-and-input">
                <div className="article-name-container7">
                  <div className="icsection7">
                    <img className="vector-icon24" alt="" src="/vector.svg" />
                  </div>
                  <div className="article-name3">منحة الوفاة</div>
                </div>
                <div className="article-allocated-amount-conta7">
                  <div className="ic-amount-grey7">
                    <img className="vector-icon25" alt="" src="/vector1.svg" />
                  </div>
                  <div className="amount-and-dzd-container18">
                    <div className="section-name-title1">80,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <div className="article-allocated-amount-conta7">
                  <div className="icamount6">
                    <img className="vector-icon25" alt="" src="/vector1.svg" />
                  </div>
                  <div className="amount-and-dzd-container18">
                    <div className="section-name-title1">20,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <input className="article-new-balance-input" type="text" />
              </div>
              <div className="article-and-input">
                <div className="article-name-container7">
                  <div className="icsection7">
                    <img className="vector-icon24" alt="" src="/vector.svg" />
                  </div>
                  <div className="article-name3">منحة الزواج</div>
                </div>
                <div className="article-allocated-amount-conta7">
                  <div className="ic-amount-grey7">
                    <img className="vector-icon25" alt="" src="/vector1.svg" />
                  </div>
                  <div className="amount-and-dzd-container18">
                    <div className="section-name-title1">80,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <div className="article-allocated-amount-conta7">
                  <div className="icamount6">
                    <img className="vector-icon25" alt="" src="/vector1.svg" />
                  </div>
                  <div className="amount-and-dzd-container18">
                    <div className="section-name-title1">20,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <input className="article-new-balance-input2" type="text" />
              </div>
              <div className="article-and-input">
                <div className="article-name-container7">
                  <div className="icsection7">
                    <img className="vector-icon24" alt="" src="/vector.svg" />
                  </div>
                  <div className="article-name3">منحة المولود الجديد</div>
                </div>
                <div className="article-allocated-amount-conta7">
                  <div className="ic-amount-grey7">
                    <img className="vector-icon25" alt="" src="/vector1.svg" />
                  </div>
                  <div className="amount-and-dzd-container18">
                    <div className="section-name-title1">80,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <div className="article-allocated-amount-conta7">
                  <div className="icamount6">
                    <img className="vector-icon25" alt="" src="/vector1.svg" />
                  </div>
                  <div className="amount-and-dzd-container18">
                    <div className="section-name-title1">20,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <input className="article-new-balance-input2" type="text" />
              </div>
              <div className="article-and-input">
                <div className="article-name-container7">
                  <div className="icsection7">
                    <img className="vector-icon24" alt="" src="/vector.svg" />
                  </div>
                  <div className="article-name3">منحة ختان المولود الجديد</div>
                </div>
                <div className="article-allocated-amount-conta7">
                  <div className="ic-amount-grey7">
                    <img className="vector-icon25" alt="" src="/vector1.svg" />
                  </div>
                  <div className="amount-and-dzd-container18">
                    <div className="section-name-title1">80,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <div className="article-allocated-amount-conta7">
                  <div className="icamount6">
                    <img className="vector-icon25" alt="" src="/vector1.svg" />
                  </div>
                  <div className="amount-and-dzd-container18">
                    <div className="section-name-title1">20,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <input className="article-new-balance-input2" type="text" />
              </div>
            </div>
          </div>
        </div>
        <button className="validate-button" onClick={onValidateButtonClick}>
          <img className="vector-icon39" alt="" src="/vector4.svg" />
          <div className="validate">VALIDATE</div>
        </button>
      </div>
      <button className="go-back-button2" onClick={onGoBackButtonClick}>
        <img className="vector-icon40" alt="" src="/vector3.svg" />
      </button>
    </div>
  );
};

export default Allocate;
