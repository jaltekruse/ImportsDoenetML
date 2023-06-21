import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {DoenetML} from '@doenet/doenetml';
import "./DoenetML.css";


window.setDoenetML = function (domId, variantIndex, doenetML) {

  const myelm = <DoenetML
    doenetML={doenetML}
    flags={{
      showCorrectness: true,
      readOnly: false,
      showFeedback: true,
      showHints: true,
    }}
    requestedVariantIndex={variantIndex}
    addVirtualKeyboard={true}
  />;
  const root = ReactDOM.createRoot(document.getElementById(domId));
  root.render(myelm);

}