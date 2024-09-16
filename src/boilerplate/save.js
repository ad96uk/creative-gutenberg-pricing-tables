import { useBlockProps, RichText } from "@wordpress/block-editor";

import React from 'react'

export default function Save({ attributes }) {
const {} = attributes;

  return (
    <div {...useBlockProps.save()} >Save</div>
  )
}
