import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
injectGlobal`
  ${styledNormalize}

  :root {
  font-size: 16px;
  }

  body {
    font-family: 'Helvetica Neue', arial, sans-serif;
    color: black;
  }

  *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .clear:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}

.hide {
    position: absolute;
    width: 0px;
    height: 0px;
    overflow: hidden;
}

button:hover {
    cursor: pointer;
}

`;