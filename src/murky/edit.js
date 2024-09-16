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

export default function Edit({ attributes, setAttributes }) {
const {} = attributes;

  return (
    <div {...useBlockProps()}>Edit</div>
  )
}
