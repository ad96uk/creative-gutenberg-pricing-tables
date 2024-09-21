import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  RichText,
} from "@wordpress/block-editor";
import { PanelBody, Button, RangeControl, TextControl } from "@wordpress/components";
import "./editor.scss";

const handleChange = (attributeName, setAttributes) => (value) => {
  setAttributes({ [attributeName]: value });
};

const PricingCard = ({
  setAttributes,
  index,
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
  subDesc,
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
            style={{ width: topImageWidth ? `${topImageWidth}px` : "auto" }}
          />
        </span>
        {(index === 1 || index === 2) && (
          <RichText
            value={btnLabel || ""}
            placeholder="save 65%"
            onChange={handleChange(`btnLabel${index + 1}`, setAttributes)}
            className="btn-label"
          />
        )}
      </div>
      <RichText
        tagName="h3"
        value={planName}
        onChange={handleChange(`planName${index + 1}`, setAttributes)}
        placeholder={"Plan Name"}
        className="plan-name"
      />
      <RichText
        tagName="p"
        value={planDesc}
        onChange={handleChange(`planDesc${index + 1}`, setAttributes)}
        placeholder={
          "For individuals who want to securely connect personal devices, for free.s"
        }
        className="plan-description"
      />
      <RichText
        tagName="h4"
        value={planPrice}
        onChange={handleChange(`planPrice${index + 1}`, setAttributes)}
        placeholder={"Price"}
        className="plan-price"
      />
    </div>
    <div className="middle-section">
      <ul>
        <li>  <RichText
              tagName="p"
              value={featureDesc}
              onChange={handleChange(`featureDesc${index + 1}`, setAttributes)}
              placeholder={"Feature description"}
              className="feature-description"
            /></li>
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
          style={{ width: bottomImageWidth ? `${bottomImageWidth}px` : "auto" }}
        />
        <RichText
          tagName="span"
          value={subDesc}
          onChange={handleChange(`subDesc${index + 1}`, setAttributes)}
          placeholder={"Sub-description"}
          className="sub-description"
        />
      </span>
    </div>
  </div>
);

export default function Edit({ attributes, setAttributes }) {
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

  const onSelectImage = (index, section) => (media) => {
    const updatedCards = [...cards];
    updatedCards[index][`${section}Image`] = media.url;
    setAttributes({ cards: updatedCards });
  };

  const onChangeImageWidth = (index, section) => (value) => {
    const updatedCards = [...cards];
    updatedCards[index][`${section}ImageWidth`] = value;
    setAttributes({ cards: updatedCards });
  };

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
      <PanelBody
          title={__("Button Settings №1", "namespace")}
          initialOpen={false}
        >
          <TextControl
            label={__("Button Text", "namespace")}
            value={btnText1}
            onChange={(value) => setAttributes({ btnText1: value })}
          />
          <TextControl
            label={__("Button URL", "namespace")}
            value={btnURL1}
            onChange={(value) => setAttributes({ btnURL1: value })}
          />
        </PanelBody>
        
        <PanelBody
          title={__("Button Settings №2", "namespace")}
          initialOpen={false}
        >
          <TextControl
            label={__("Button Text", "namespace")}
            value={btnText2}
            onChange={(value) => setAttributes({ btnText2: value })}
          />
          <TextControl
            label={__("Button URL", "namespace")}
            value={btnURL2}
            onChange={(value) => setAttributes({ btnURL2: value })}
          />
        </PanelBody>
        
        <PanelBody
          title={__("Button Settings №3", "namespace")}
          initialOpen={false}
        >
          <TextControl
            label={__("Button Text", "namespace")}
            value={btnText3}
            onChange={(value) => setAttributes({ btnText3: value })}
          />
          <TextControl
            label={__("Button URL", "namespace")}
            value={btnURL3}
            onChange={(value) => setAttributes({ btnURL3: value })}
          />
        </PanelBody>

        {cards.map((card, index) => (
          <PanelBody
            title={__("Card " + (index + 1) + " Image Settings", "textdomain")}
            initialOpen={false}
            key={index}
          >
            <PanelBody
              title={__("Top Section Image Settings", "textdomain")}
              initialOpen={false}
            >
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectImage(index, "top")}
                  allowedTypes={["image"]}
                  value={card.topImage}
                  render={({ open }) => (
                    <Button
                      className={
                        card.topImage ? "image-button" : "button button-large"
                      }
                      onClick={open}
                    >
                      {card.topImage ? (
                        <img src={card.topImage} />
                      ) : (
                        __("Upload Top Image", "textdomain")
                      )}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
              <RangeControl
                label={__("Top Image Width", "textdomain")}
                value={card.topImageWidth}
                onChange={onChangeImageWidth(index, "top")}
                min={10}
                max={500}
              />
            </PanelBody>
            <PanelBody
              title={__("Middle Section Image Settings", "textdomain")}
              initialOpen={false}
            >
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectImage(index, "middle")}
                  allowedTypes={["image"]}
                  value={card.middleImage}
                  render={({ open }) => (
                    <Button
                      className={
                        card.middleImage
                          ? "image-button"
                          : "button button-large"
                      }
                      onClick={open}
                    >
                      {card.middleImage ? (
                        <img src={card.middleImage} />
                      ) : (
                        __("Upload Middle Image", "textdomain")
                      )}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
              <RangeControl
                label={__("Middle Image Width", "textdomain")}
                value={card.middleImageWidth}
                onChange={onChangeImageWidth(index, "middle")}
                min={10}
                max={500}
              />
            </PanelBody>
            <PanelBody
              title={__("Bottom Section Image Settings", "textdomain")}
              initialOpen={false}
            >
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectImage(index, "bottom")}
                  allowedTypes={["image"]}
                  value={card.bottomImage}
                  render={({ open }) => (
                    <Button
                      className={
                        card.bottomImage
                          ? "image-button"
                          : "button button-large"
                      }
                      onClick={open}
                    >
                      {card.bottomImage ? (
                        <img src={card.bottomImage} />
                      ) : (
                        __("Upload Bottom Image", "textdomain")
                      )}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
              <RangeControl
                label={__("Bottom Image Width", "textdomain")}
                value={card.bottomImageWidth}
                onChange={onChangeImageWidth(index, "bottom")}
                min={10}
                max={500}
              />
            </PanelBody>
          </PanelBody>
        ))}
      </InspectorControls>
      <div className="pricing-container gradient">
        <div className="card-wrapper">
          <PricingCard
            setAttributes={setAttributes}
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
            btnText={btnText1 || "Try now"}
            subDesc={subDesc1}
            featureDesc={featureDesc1}
            btnURL={btnURL1}
          />
        </div>
        <div className="active active-bg ">
          <div className="cnt">
            <RichText
              value={cnt}
              placeholder="Best Deal"
              onChange={handleChange("cnt", setAttributes)}
              className="cnt"
              tagName="span"
            />
            <span className="arrow">&#x2935;</span>
          </div>
          <PricingCard
            setAttributes={setAttributes}
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
            btnText={btnText2 || "Try now"}
            subDesc={subDesc2}
            featureDesc={featureDesc2}
            btnURL={btnURL2}
          />
        </div>
        <div className="card-wrapper">
          <PricingCard
            setAttributes={setAttributes}
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
            btnText={btnText3 || "Try now"}
            subDesc={subDesc3}
            featureDesc={featureDesc3}
            btnURL={btnURL3}
          />
        </div>
      </div>
    </div>
  );
}
