import { useBlockProps } from '@wordpress/block-editor';

const PricingCard = ({
  topImage,
  middleImage,
  bottomImage,
  topImageWidth,
  middleImageWidth,
  bottomImageWidth,
  buttonClass,
  planName,
  planDesc,
  planPrice,
  btnLabel,
  sunDesc,
  featureDesc,
  btnURL,
  btnText,
}) => (
  <div className="pricing-card-1 card-gradient">
    <div className="top-section">
      <div className="top-section-top">
        <span className="circle-icon">
          <img
            className="img-icon"
            src={topImage}
            style={{ width: topImageWidth ? `${topImageWidth}px` : 'auto' }}
            alt="Top Image"
          />
        </span>
        {(btnLabel) && (
          <span className="btn-label">{btnLabel}</span>
        )}
      </div>
      <h3 className="plan-name">{planName}</h3>
      <p className="plan-description">{planDesc}</p>
      <h4 className="plan-price">{planPrice}</h4>
    </div>
    <div className="middle-section">
      <ul>
        <li>
          <p className="feature-description">{featureDesc}</p>
        </li>
      </ul>
    </div>
    <div className="bottom-section">
      <a href={btnURL}>
        <button className={buttonClass}>{btnText}</button>
      </a>
      <span>
      <img
          className="img-icon"
          src={bottomImage}
          style={{ width: bottomImageWidth ? `${bottomImageWidth}px` : 'auto' }}
          alt="Bottom Image"
        />
        <span className="sub-description">{sunDesc}</span>
      </span>
    </div>
  </div>
);

const Save = ({ attributes }) => {
  const {
    cnt,
    planName1,
    planDesc1,
    planPrice1,
    btnLabel1,
    btnText1,
    subDesc1,
    featureDesc1,
    planName2,
    planDesc2,
    planPrice2,
    btnLabel2,
    btnText2,
    subDesc2,
    featureDesc2,
    planName3,
    planDesc3,
    planPrice3,
    btnLabel3,
    btnText3,
    subDesc3,
    featureDesc3,
    btnURL1,
    btnURL2,
    btnURL3,
    cards,
  } = attributes;

  return (
    <div {...useBlockProps.save()}>
      <div className="pricing-container gradient">
        <div className="card-wrapper">
          <PricingCard
            index={0}
            topImage={cards[0].topImage}
            middleImage={cards[0].middleImage}
            bottomImage={cards[0].bottomImage}
            topImageWidth={cards[0].topImageWidth}
            middleImageWidth={cards[0].middleImageWidth}
            bottomImageWidth={cards[0].bottomImageWidth}
            buttonClass="btn"
            planName={planName1}
            planDesc={planDesc1}
            planPrice={planPrice1}
            btnLabel={btnLabel1}
            btnText={btnText1 || 'Try now'}
            sunDesc={subDesc1}
            featureDesc={featureDesc1}
            btnURL={btnURL1}
          />
        </div>
        <div className="active active-bg">
          <div className="cnt">
            <span>{cnt || 'Best Deal'}</span>
            <span className="arrow">&#x2935;</span>
          </div>
          <PricingCard
            index={1}
            topImage={cards[1].topImage}
            middleImage={cards[1].middleImage}
            bottomImage={cards[1].bottomImage}
            topImageWidth={cards[1].topImageWidth}
            middleImageWidth={cards[1].middleImageWidth}
            bottomImageWidth={cards[1].bottomImageWidth}
            buttonClass="try-now-active"
            planName={planName2}
            planDesc={planDesc2}
            planPrice={planPrice2}
            btnLabel={btnLabel2}
            btnText={btnText2 || 'Try now'}
            sunDesc={subDesc2}
            featureDesc={featureDesc2}
            btnURL={btnURL2}
          />
        </div>
        <div className="card-wrapper">
          <PricingCard
            index={2}
            topImage={cards[2].topImage}
            middleImage={cards[2].middleImage}
            bottomImage={cards[2].bottomImage}
            topImageWidth={cards[2].topImageWidth}
            middleImageWidth={cards[2].middleImageWidth}
            bottomImageWidth={cards[2].bottomImageWidth}
            buttonClass="btn"
            planName={planName3}
            planDesc={planDesc3}
            planPrice={planPrice3}
            btnLabel={btnLabel3}
            btnText={btnText3 || 'Try now'}
            sunDesc={subDesc3}
            featureDesc={featureDesc3}
            btnURL={btnURL3}
          />
        </div>
      </div>
    </div>
  );
};

export default Save;
