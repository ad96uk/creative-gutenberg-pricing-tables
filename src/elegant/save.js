import { useBlockProps, RichText } from "@wordpress/block-editor";

const PricingPlan = ({ plan }) => {
  const {
    classNumber,
    planNumber,
    planName,
    planFeatures,
    planPrice,
    btnText,
    btnURL,
    btnBackgroundColor,
    btnTextColor,
    btnBorderWidth,
    btnBorderColor,
    btnBorderRadius,
  } = plan;

  return (
    <div className={`price-section-${classNumber}`}>
      <div className="card-top-section">
        <RichText.Content
          value={planNumber}
          tagName="p"
          className="number-card"
        />
        <RichText.Content value={planName} tagName="p" className="title-card" />
        <RichText.Content
          value={planFeatures}
          tagName="p"
          className="plan-features"
        />
      </div>
      <div className="card-bottom-section">
        <RichText.Content
          value={planPrice}
          tagName="p"
          className="price-label"
        />
        <a href={btnURL} className="btn-link">
          <button
            className="btn"
            style={{
              backgroundColor: btnBackgroundColor,
              color: btnTextColor,
              border: `${btnBorderWidth}px solid ${btnBorderColor}`,
              borderRadius: `${btnBorderRadius}px`,
            }}
          >
            {btnText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default function save({ attributes }) {
  const {
    classNumber,
    cardTitle1,
    cardDes1,
    planNumber1,
    planNumber2,
    planName1,
    planName2,
    planFeatures1,
    planFeatures2,
    planPrice1,
    planPrice2,
    btnText1,
    btnURL1,
    btnText2,
    btnURL2,
    btnBackgroundColor1,
    btnTextColor1,
    btnBorderWidth1,
    btnBorderColor1,
    btnBorderRadius1,
    btnBackgroundColor2,
    btnTextColor2,
    btnBorderWidth2,
    btnBorderColor2,
    btnBorderRadius2,
    isLastBlock,
  } = attributes;

  return (
    <div {...useBlockProps.save()} className="main-pricing">
      <div
        className="card-container price-plan"
        style={{
          marginBottom: isLastBlock ? "-0.625rem" : "-20.625rem",
        }}
      >
        <div className="left-section">
          <RichText.Content value={cardTitle1} tagName="h4" />
          <RichText.Content value={cardDes1} tagName="p" />
        </div>
        <div className="right-section">
          <PricingPlan
            plan={{
              classNumber: 1,
              planNumber: planNumber1,
              planName: planName1,
              planFeatures: planFeatures1,
              planPrice: planPrice1,
              btnText: btnText1,
              btnURL: btnURL1,
              btnBackgroundColor: btnBackgroundColor1,
              btnTextColor: btnTextColor1,
              btnBorderWidth: btnBorderWidth1,
              btnBorderColor: btnBorderColor1,
              btnBorderRadius: btnBorderRadius1,
            }}
          />
          <PricingPlan
            plan={{
              classNumber: 2,
              planNumber: planNumber2,
              planName: planName2,
              planFeatures: planFeatures2,
              planPrice: planPrice2,
              btnText: btnText2,
              btnURL: btnURL2,
              btnBackgroundColor: btnBackgroundColor2,
              btnTextColor: btnTextColor2,
              btnBorderWidth: btnBorderWidth2,
              btnBorderColor: btnBorderColor2,
              btnBorderRadius: btnBorderRadius2,
            }}
          />
        </div>
      </div>
    </div>
  );
}
