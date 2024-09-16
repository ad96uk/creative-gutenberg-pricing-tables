import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from "@wordpress/block-editor";
import {
  PanelBody,
  TextControl,
  ColorPalette,
  RangeControl,
  CheckboxControl,
} from "@wordpress/components";
import "./editor.scss";

const handleChange = (attributeName, setAttributes) => (value) => {
  setAttributes({ [attributeName]: value });
};

const PricingPlan = ({
  handleChange,
  setAttributes,
  classNumber,
  planNumber,
  title,
  features,
  price,
  btnText,
  btnURL,
  btnBackgroundColor,
  btnTextColor,
  btnBorderWidth,
  btnBorderColor,
  btnBorderRadius,
  fontSizeNumber,
}) => {
  return (
    <div className={`price-section-${classNumber}`}>
      <div className="card-top-section">
        <RichText
          value={planNumber}
          onChange={handleChange(`planNumber${classNumber}`, setAttributes)}
          placeholder="#01"
          tagName="p"
          className="number-card edit"
        />
        <RichText
          value={title}
          onChange={handleChange(`planName${classNumber}`, setAttributes)}
          placeholder="Basic"
          tagName="p"
          className="title-card edit"
        />
        <RichText
          value={features}
          onChange={handleChange(`planFeatures${classNumber}`, setAttributes)}
          placeholder={`• 1 hour photoshoot\n• 30 professionally edited images\n• Online gallery for viewing and downloading`}
          tagName="p"
          className="plan-features edit"
        />
      </div>
      <div className="card-bottom-section">
        <RichText
          value={price}
          onChange={handleChange(`planPrice${classNumber}`, setAttributes)}
          placeholder="£150"
          tagName="p"
          className="price-label edit"
        />
        <a href={btnURL} className="btn-link">
          <button
            className="btn edit"
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

export default function Edit({ attributes, setAttributes }) {
  const {
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
    btnBackgroundColor2,
    btnTextColor2,
    btnBorderWidth2,
    btnBorderColor2,
    btnBorderRadius1,
    btnBorderRadius2,
    isLastBlock,
  } = attributes;


  return (
    <div {...useBlockProps()} className="main-pricing">
      <InspectorControls>
        <PanelBody
          title={__("Is this card a last one?", "namespace")}
          initialOpen={false}
        >
          <CheckboxControl
            label={__("Tick box if yes", "namespace")}
            checked={isLastBlock}
            onChange={handleChange("isLastBlock", setAttributes)}
          />
        </PanelBody>
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
          <div className="color-settings">
            <label>{__("Button Background Color", "namespace")}</label>
            <ColorPalette
              value={btnBackgroundColor1}
              onChange={(value) =>
                setAttributes({ btnBackgroundColor1: value })
              }
            />
          </div>
          <div className="color-settings">
            <label>{__("Button Text Color", "namespace")}</label>
            <ColorPalette
              value={btnTextColor1}
              onChange={(value) => setAttributes({ btnTextColor1: value })}
            />
          </div>
          <RangeControl
            label={__("Button Border Width", "namespace")}
            value={btnBorderWidth1}
            onChange={(value) => setAttributes({ btnBorderWidth1: value })}
            min={0}
            max={10}
          />
          <RangeControl
            label={__("Button Border Radius", "namespace")}
            value={btnBorderRadius1}
            onChange={(value) => setAttributes({ btnBorderRadius1: value })}
            min={0}
            max={300}
          />
          <div className="color-settings">
            <label>{__("Button Border Color", "namespace")}</label>
            <ColorPalette
              value={btnBorderColor1}
              onChange={(value) => setAttributes({ btnBorderColor1: value })}
            />
          </div>
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
          <div className="color-settings">
            <label>{__("Button Background Color", "namespace")}</label>
            <ColorPalette
              value={btnBackgroundColor2}
              onChange={(value) =>
                setAttributes({ btnBackgroundColor2: value })
              }
            />
          </div>
          <div className="color-settings">
            <label>{__("Button Text Color", "namespace")}</label>
            <ColorPalette
              value={btnTextColor2}
              onChange={(value) => setAttributes({ btnTextColor2: value })}
            />
          </div>
          <RangeControl
            label={__("Button Border Width", "namespace")}
            value={btnBorderWidth2}
            onChange={(value) => setAttributes({ btnBorderWidth2: value })}
            min={0}
            max={10}
          />
          <RangeControl
            label={__("Button Border Radius", "namespace")}
            value={btnBorderRadius2}
            onChange={(value) => setAttributes({ btnBorderRadius2: value })}
            min={0}
            max={300}
          />
          <div className="color-settings">
            <label>{__("Button Border Color", "namespace")}</label>
            <ColorPalette
              value={btnBorderColor2}
              onChange={(value) => setAttributes({ btnBorderColor2: value })}
            />
          </div>
        </PanelBody>
      </InspectorControls>
      <div
        className="card-container price-plan"
        style={{
          marginBottom: isLastBlock ? "-0.625rem" : "-20.625rem",
        }}
      >
        <div className="left-section">
          <RichText
            value={cardTitle1}
            onChange={handleChange("cardTitle1", setAttributes)}
            tagName="h4"
            placeholder="INDIVIDUALS PORTRAIT SESSION"
            className="edit"             
          />
          <RichText
            value={cardDes1}
            onChange={handleChange("cardDes1", setAttributes)}
            placeholder="*A non-refundable £50 deposit is required to secure your booking."
            tagName="p"
            className="edit"
          />
        </div>
        <div className="right-section">
          <PricingPlan
            classNumber="1"
            planNumber={planNumber1}
            title={planName1}
            features={planFeatures1}
            price={planPrice1}
            btnText={btnText1}
            btnURL={btnURL1}
            handleChange={handleChange}
            setAttributes={setAttributes}
            btnBackgroundColor={btnBackgroundColor1}
            btnTextColor={btnTextColor1}
            btnBorderWidth={btnBorderWidth1}
            btnBorderColor={btnBorderColor1}
            btnBorderRadius={btnBorderRadius1}
          />
          <PricingPlan
            classNumber="2"
            planNumber={planNumber2}
            title={planName2}
            features={planFeatures2}
            price={planPrice2}
            btnText={btnText2}
            btnURL={btnURL2}
            handleChange={handleChange}
            setAttributes={setAttributes}
            btnBackgroundColor={btnBackgroundColor2}
            btnTextColor={btnTextColor2}
            btnBorderWidth={btnBorderWidth2}
            btnBorderColor={btnBorderColor2}
            btnBorderRadius={btnBorderRadius2}
          />
        </div>
      </div>
    </div>
  );
}
