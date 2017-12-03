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
  min-height: 75vh;
  display: grid;
  grid-template-columns: 10% auto 10%;
}

.content {
  grid-column-start: 2;
  grid-column-end: 2;
  flex: 1;
  font-family: Nunito Sans;
}

.about {
  .content {
    margin-top: 87px; //Navbar Fix
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`
