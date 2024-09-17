import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { PanelBody, Button, RangeControl } from "@wordpress/components";
import "./editor.scss";

const defaultImages = {
  topImage1:
    "/wp-content/plugins/trendywp-pricing-tables-library/assets/images/default-top-image1.jpg",
  topImage2:
    "/wp-content/plugins/trendywp-pricing-tables-library/assets/images/default-top-image2.jpg",
  topImage3:
    "/wp-content/plugins/trendywp-pricing-tables-library/assets/images/default-top-image3.jpg",
  middleImage:
    "/wp-content/plugins/trendywp-pricing-tables-library/assets/images/default-middle-image.jpg",
  bottomImage:
    "/wp-content/plugins/trendywp-pricing-tables-library/assets/images/default-bottom-image.jpg",
};

const PricingCard = ({
  topImage,
  middleImage,
  bottomImage,
  topImageWidth,
  middleImageWidth,
  bottomImageWidth,
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
        <button className="btn-label">Save 65%</button>
      </div>
      <h3>Personal</h3>
      <p>
        For individuals who want to securely connect personal devices, for free.
      </p>
      <h4>Free</h4>
    </div>
    <div className="middle-section">
      <ul>
        <li>
          <img
            className="img-icon"
            src={middleImage}
            style={{
              width: middleImageWidth ? `${middleImageWidth}px` : "auto",
            }}
          />
          <p>Feature descriptional 1</p>
        </li>
        <li>
          <img
            className="img-icon"
            src={middleImage}
            style={{
              width: middleImageWidth ? `${middleImageWidth}px` : "auto",
            }}
          />
          <p>Feature descriptional 1</p>
        </li>
        <li>
          <img
            className="img-icon"
            src={middleImage}
            style={{
              width: middleImageWidth ? `${middleImageWidth}px` : "auto",
            }}
          />
          <p>Feature descriptional 1</p>
        </li>
        <li>
          <img
            className="img-icon"
            src={middleImage}
            style={{
              width: middleImageWidth ? `${middleImageWidth}px` : "auto",
            }}
          />
          <p>Feature descriptional 1</p>
        </li>
      </ul>
    </div>
    <div className="bottom-section">
      <button className="btn">Try Now</button>
      <span>
        <img
          className="img-icon"
          src={bottomImage}
          style={{ width: bottomImageWidth ? `${bottomImageWidth}px` : "auto" }}
        />
        sub-description
      </span>
    </div>
  </div>
);

export default function Edit({ attributes, setAttributes }) {
  const { cards } = attributes;

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
            topImage={cards[0].topImage}
            middleImage={cards[0].middleImage}
            bottomImage={cards[0].bottomImage}
            topImageWidth={cards[0].topImageWidth}
            middleImageWidth={cards[0].middleImageWidth}
            bottomImageWidth={cards[0].bottomImageWidth}
          />
        </div>
        <div className="active active-bg ">
          <div className="cnt">
            <span>Best Deal</span>
            <span className="arrow">&#x2935;</span>
          </div>{" "}
          <PricingCard
            topImage={cards[1].topImage}
            middleImage={cards[1].middleImage}
            bottomImage={cards[1].bottomImage}
            topImageWidth={cards[1].topImageWidth}
            middleImageWidth={cards[1].middleImageWidth}
            bottomImageWidth={cards[1].bottomImageWidth}
          />
        </div>
        <div className="card-wrapper">
          <PricingCard
            topImage={cards[2].topImage}
            middleImage={cards[2].middleImage}
            bottomImage={cards[2].bottomImage}
            topImageWidth={cards[2].topImageWidth}
            middleImageWidth={cards[2].middleImageWidth}
            bottomImageWidth={cards[2].bottomImageWidth}
          />
        </div>
      </div>
    </div>
  );
}
