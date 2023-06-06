import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Funds.css";
const Funds = () => {
  const navigate = useNavigate();

  const onViewArticlesButtonClick = useCallback(() => {
    navigate("/articles");
  }, [navigate]);

  const onAllocateButtonClick = useCallback(() => {
    navigate("/allocate");
  }, [navigate]);

  const onViewArticlesButton1Click = useCallback(() => {
    navigate("/articles");
  }, [navigate]);

  const onAllocateButton1Click = useCallback(() => {
    navigate("/allocate");
  }, [navigate]);

  const onViewArticlesButton2Click = useCallback(() => {
    navigate("/articles");
  }, [navigate]);

  const onAllocateButton2Click = useCallback(() => {
    navigate("/allocate");
  }, [navigate]);

  const onViewArticlesButton3Click = useCallback(() => {
    navigate("/articles");
  }, [navigate]);

  const onAllocateButton3Click = useCallback(() => {
    navigate("/allocate");
  }, [navigate]);

  const onViewArticlesButton4Click = useCallback(() => {
    navigate("/articles");
  }, [navigate]);

  const onAllocateButton4Click = useCallback(() => {
    navigate("/allocate");
  }, [navigate]);

  const onBudjetDetailsContainerClick = useCallback(() => {
    navigate("/budget");
  }, [navigate]);

  const onMoveFundsButtonClick = useCallback(() => {
    navigate("/movefunds");
  }, [navigate]);

  return (
    <div className="funds">
      <div className="funds-container">
        <div className="section-and-amount-container">
          <div className="allocated-sections-amount-cont">
            <b className="allocated-sections-amount">
              Allocated Sections Amount
            </b>
            <div className="alocated-sections-amount">
              <div className="amount-and-dzd-container28">
                <div className="allocated-sections-amount1">2,000,000</div>
                <div className="dzd28">DZD</div>
              </div>
            </div>
          </div>
          <div className="sections-container">
            <div className="section">
              <div className="total-budjet">المساعدات الإجتماعية</div>
              <div className="section-details-container">
                <div className="section-allocated-amount-conta">
                  <div className="icamount11">
                    <img className="vector-icon41" alt="" src="/vector5.svg" />
                  </div>
                  <div className="second-section-allocated-amoun">
                    <div className="amount-and-dzd-container28">
                      <div className="allocated-sections-amount1">400,000</div>
                      <div className="allocated-sections-amount1">DZD</div>
                    </div>
                    <div className="allocated-amount2">Allocated Amount</div>
                  </div>
                </div>
                <button
                  className="view-articles-button"
                  onClick={onViewArticlesButtonClick}
                >
                  <div className="icarticles">
                    <img className="vector-icon42" alt="" src="/vector6.svg" />
                  </div>
                  <div className="view-articles">View Articles</div>
                </button>
                <button
                  className="allocate-button"
                  onClick={onAllocateButtonClick}
                >
                  <div className="icalocate">
                    <img
                      className="alocate-icon"
                      alt=""
                      src="/alocateicon.svg"
                    />
                  </div>
                  <div className="allocate1">Allocate</div>
                </button>
              </div>
            </div>
            <div className="section">
              <div className="total-budjet">الخدمـــــــات الصــــــحيـة</div>
              <div className="section-details-container">
                <div className="section-allocated-amount-conta">
                  <div className="icamount11">
                    <img className="vector-icon41" alt="" src="/vector5.svg" />
                  </div>
                  <div className="second-section-allocated-amoun">
                    <div className="amount-and-dzd-container28">
                      <div className="allocated-sections-amount1">400,000</div>
                      <div className="allocated-sections-amount1">DZD</div>
                    </div>
                    <div className="allocated-amount2">Allocated Amount</div>
                  </div>
                </div>
                <button
                  className="view-articles-button1"
                  onClick={onViewArticlesButton1Click}
                >
                  <div className="icarticles">
                    <img className="vector-icon42" alt="" src="/vector6.svg" />
                  </div>
                  <div className="view-articles">View Articles</div>
                </button>
                <button
                  className="allocate-button1"
                  onClick={onAllocateButton1Click}
                >
                  <div className="icalocate">
                    <img
                      className="alocate-icon"
                      alt=""
                      src="/alocateicon.svg"
                    />
                  </div>
                  <div className="allocate1">Allocate</div>
                </button>
              </div>
            </div>
            <div className="section">
              <div className="total-budjet">التضامن</div>
              <div className="section-details-container">
                <div className="section-allocated-amount-conta">
                  <div className="icamount11">
                    <img className="vector-icon41" alt="" src="/vector5.svg" />
                  </div>
                  <div className="second-section-allocated-amoun">
                    <div className="amount-and-dzd-container28">
                      <div className="allocated-sections-amount1">400,000</div>
                      <div className="allocated-sections-amount1">DZD</div>
                    </div>
                    <div className="allocated-amount2">Allocated Amount</div>
                  </div>
                </div>
                <button
                  className="view-articles-button2"
                  onClick={onViewArticlesButton2Click}
                >
                  <div className="icarticles">
                    <img className="vector-icon42" alt="" src="/vector6.svg" />
                  </div>
                  <div className="view-articles">View Articles</div>
                </button>
                <button
                  className="allocate-button2"
                  onClick={onAllocateButton2Click}
                >
                  <div className="icalocate">
                    <img
                      className="alocate-icon"
                      alt=""
                      src="/alocateicon.svg"
                    />
                  </div>
                  <div className="allocate1">Allocate</div>
                </button>
              </div>
            </div>
            <div className="section">
              <div className="total-budjet">السلف الإجتماعية</div>
              <div className="section-details-container">
                <div className="section-allocated-amount-conta">
                  <div className="icamount11">
                    <img className="vector-icon41" alt="" src="/vector5.svg" />
                  </div>
                  <div className="second-section-allocated-amoun">
                    <div className="amount-and-dzd-container28">
                      <div className="allocated-sections-amount1">400,000</div>
                      <div className="allocated-sections-amount1">DZD</div>
                    </div>
                    <div className="allocated-amount2">Allocated Amount</div>
                  </div>
                </div>
                <button
                  className="view-articles-button3"
                  onClick={onViewArticlesButton3Click}
                >
                  <div className="icarticles">
                    <img className="vector-icon42" alt="" src="/vector6.svg" />
                  </div>
                  <div className="view-articles">View Articles</div>
                </button>
                <button
                  className="allocate-button3"
                  onClick={onAllocateButton3Click}
                >
                  <div className="icalocate">
                    <img
                      className="alocate-icon"
                      alt=""
                      src="/alocateicon.svg"
                    />
                  </div>
                  <div className="allocate1">Allocate</div>
                </button>
              </div>
            </div>
            <div className="section">
              <div className="total-budjet">النشاطات الثقافية</div>
              <div className="section-details-container">
                <div className="section-allocated-amount-conta">
                  <div className="icamount11">
                    <img className="vector-icon41" alt="" src="/vector5.svg" />
                  </div>
                  <div className="second-section-allocated-amoun">
                    <div className="amount-and-dzd-container28">
                      <div className="allocated-sections-amount1">400,000</div>
                      <div className="allocated-sections-amount1">DZD</div>
                    </div>
                    <div className="allocated-amount2">Allocated Amount</div>
                  </div>
                </div>
                <button
                  className="view-articles-button4"
                  onClick={onViewArticlesButton4Click}
                >
                  <div className="icarticles">
                    <img className="vector-icon42" alt="" src="/vector6.svg" />
                  </div>
                  <div className="view-articles">View Articles</div>
                </button>
                <button
                  className="allocate-button4"
                  onClick={onAllocateButton4Click}
                >
                  <div className="icalocate">
                    <img
                      className="alocate-icon"
                      alt=""
                      src="/alocateicon.svg"
                    />
                  </div>
                  <div className="allocate1">Allocate</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="budjet-and-button-container">
          <div
            className="budjet-details"
            onClick={onBudjetDetailsContainerClick}
          >
            <div className="total-budget-container1">
              <div className="allocated-sections-amount">Total Budget</div>
              <div className="total-budget-amount-container1">
                <div className="amount-and-dzd-container34">
                  <div className="total-budjet">5,400,000</div>
                  <div className="total-budjet">DZD</div>
                </div>
              </div>
            </div>
            <div className="remaining-budget-container1">
              <div className="allocated-sections-amount">Remaining Budget</div>
              <div className="total-budget-amount-container1">
                <div className="amount-and-dzd-container34">
                  <div className="total-budjet">3,400,000</div>
                  <div className="total-budjet">DZD</div>
                </div>
              </div>
            </div>
            <div className="icamount16">
              <img className="vector-icon51" alt="" src="/vector7.svg" />
            </div>
            <button className="budget-icon">
              <img className="vector-icon52" alt="" src="/vector8.svg" />
            </button>
          </div>
          <button
            className="move-funds-button"
            onClick={onMoveFundsButtonClick}
          >
            <img className="vector-icon53" alt="" src="/vector9.svg" />
            <div className="move-funds-button1">MOVE FUNDS</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Funds;
