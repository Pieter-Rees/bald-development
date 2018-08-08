import { injectGlobal } from 'styled-components';

injectGlobal`
html {
  width: 100%:
}

body, html {
  * {
  }
}

main {
  position: relative;
}

.section {
  display: grid;
  grid-template-columns: 5% auto 5%;
}

.intro {
  min-height: 100vh;

}

.content {
  position: relative;
  z-index: 1
  grid-column-start: 2;
  grid-column-end: 2;
  flex: 1;
  font-family: Nunito Sans;
}

.intro {
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`
