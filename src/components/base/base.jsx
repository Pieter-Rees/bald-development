import { injectGlobal } from 'styled-components';

injectGlobal`
html {
  width: 100%:
}

body, html {
  * {
    outline: 1px solid red;
  }
}
.section {
  height: 100vh;
  display: grid;
  grid-template-columns: 10% auto 10%;
  padding: 20px;
}

.content {
  grid-column-start: 2;
  grid-column-end: 2;
  padding: 1rem;
  flex: 1;
}
`