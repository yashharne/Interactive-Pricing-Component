import { useState } from "react";
import checkIcon from "../assets/images/icon-check.svg";

const Card = () => {
  const pageviews = ["10K", "50K", "100K", "500k", "1M"];
  const [prices, setPrices] = useState([8.0, 12.0, 16.0, 24.0, 36.0]);
  const [rangeValue, setRangeValue] = useState(3);
  const [isDiscount, setIsDiscount] = useState(false);
  const softCyan = "hsl(174, 77%, 80%)";
  const lightGrayishBlueSlider = "hsl(224, 65%, 95%)";

  return (
    <>
      <div className="mode">
        <button id="theme-toggle" title="Toggle light / dark theme">
          <div class="moon">
            <ion-icon name="moon"></ion-icon>
          </div>
          <div class="sun">
            <ion-icon name="sunny"></ion-icon>
          </div>
        </button>
      </div>
      <div className="card-top">
        <div className="upper">
          <p className="page-views">{pageviews[rangeValue - 1]} pageviews</p>
          <h2>
            <span>
              {isDiscount
                ? `$${(
                    prices[rangeValue - 1] -
                    prices[rangeValue - 1] * 0.25
                  ).toFixed(2)}`
                : `$${prices[rangeValue - 1].toFixed(2)}`}{" "}
            </span>
            <span>/ month</span>
          </h2>
        </div>
        <div className="middle">
          <input
            className="mainSlider"
            min={1}
            max={5}
            defaultValue={rangeValue}
            type="range"
            step="1"
            onInput={(e) => setRangeValue(Number(e.target.value))}
            style={{
              backgroundImage: `linear-gradient(to right, ${softCyan} ${
                ((rangeValue - 1) / (5 - 1)) * 100
              }%, ${lightGrayishBlueSlider} 0%)`,
            }}
          />
        </div>
        <div className="lower">
          <h2>
            <span>
              {isDiscount
                ? `$${(
                    prices[rangeValue - 1] -
                    prices[rangeValue - 1] * 0.25
                  ).toFixed(2)}`
                : `$${prices[rangeValue - 1].toFixed(2)}`}{" "}
            </span>
            <span>/ month</span>
          </h2>
        </div>
      </div>
      <div className="card-middle">
        <div className="wrapper">
          <div className="billing-type">
            <small>Monthly Billing</small>
            <label class="switch">
              <input
                type="checkbox"
                checked={isDiscount}
                onClick={(e) => setIsDiscount(!isDiscount)}
                name="billing"
                id="billing"
              />
              <span class="toggle-slider"></span>
            </label>
            <small>Yearly Billing</small>
          </div>
          <div className="discount">
            <span className="desktop">25% discount</span>
            <span className="mobile">-25%</span>
          </div>
        </div>
      </div>

      <hr class="horizontal-rule" />

      <div className="card-bottom">
        <div className="list">
          <div className="listitem">
            <div>
              <img className="check-icon" src={checkIcon} alt="check-icon" />
            </div>
            <div>Unlimited Websites</div>
          </div>
          <div className="listitem">
            <div>
              <img className="check-icon" src={checkIcon} alt="check-icon" />
            </div>
            <div>100% data ownership</div>
          </div>
          <div className="listitem">
            <div>
              <img className="check-icon" src={checkIcon} alt="check-icon" />
            </div>
            <div>Email reports</div>
          </div>
        </div>
        <button>Start my trial</button>
      </div>
    </>
  );
};

export default Card;
