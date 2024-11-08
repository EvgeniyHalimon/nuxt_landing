<template>
  <body>
    <div>
      <section aria-labelledby="header-default">
        <details id="default">
          <summary>
            <h3 id="header-default">Default Collapsible</h3>
          </summary>
          <p>
            This detail element uses the default styling for showing or hiding information contained
            within.
          </p>
        </details>
      </section>

      <section aria-labelledby="header-smooth">
        <details id="smooth">
          <summary>
            <h3 id="header-smooth">Smooth Open Collapsible (with Child Elements)</h3>
          </summary>
          <div class="content">
            <p>
              This detail element requires the use of the height and transition attributes to open
              smoothly. The downside to this is that it's less flexible since you must know how long
              the content will be in order to display content properly.
            </p>
          </div>
        </details>
      </section>

      <section aria-labelleby="header-adjacent">
        <details id="adjacent" aria-details="content-adjacent">
          <summary>
            <h3 id="header-adjacent">Smooth Open Collapsible (Using Adjacent Elements)</h3>
          </summary>
        </details>
        <div class="content" id="content-adjacent">
          <p>
            This detail element still requires the use of the height and transition attributes to
            open smoothly. The difference is the state of the details element is used to control an
            adjacent sibling and the element itself only contains a summary.
          </p>

          <p>
            Since this method does not have content nested within the &lt;details&gt; element, one
            has to style the content separately, but depending on the use case, this may not be an
            issue.
          </p>

          <p>Accessibility is maintained using the "aria-details" attribute.</p>
          <ul>
            Sources:
            <li>
              <cite
                ><a
                  href="https://medium.com/@jgustavo.wd/solved-how-to-fully-animate-the-details-html-element-with-only-css-no-javascript-b7d32c53a9d7"
                  >How to fully animate the details HTML element with only CSS, no JavaScript</a
                >
              </cite>
              by jgustavo.wd
            </li>
            <li>
              <cite
                ><a href="https://www.digitala11y.com/aria-detailsproperties/"
                  >WAI-ARIA: aria-details (Property)</a
                ></cite
              >
              by Raghavendra Satish Peri
            </li>
            <li>
              <cite
                ><a
                  href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details"
                  >aria-details</a
                ></cite
              >
              on MDN
            </li>
          </ul>
        </div>
      </section>

      <section aria-labelleby="header-pseudo">
        <details id="pseudo" aria-details="content-pseudo">
          <summary>
            <h3 id="header-pseudo">Smooth Open Collapsible (Using ::details-content)</h3>
          </summary>
        </details>
        <div class="content" id="content-pseudo">
          <p>
            Though not yet available, a pseudo element called ::details-content will eventually be
            available for developers to use. This pseudo-element will allow developers to transition
            any contents' properties, preventing jumps from one state to another, unless wanted.
          </p>
          <ul>
            Sources:
            <li>
              <cite
                ><a
                  href="https://drafts.csswg.org/css-pseudo-4/#details-content-pseudo"
                  target="_blank"
                  >CSSWG Pseudo-Elements Module Level 4</a
                ></cite
              >
            </li>
            <li>
              <cite
                ><a
                  href="https://github.com/w3c/csswg-drafts/commit/3715f00190ea62a7e9afe31b3a7ca1f61b10b998"
                  target="_blank"
                  >Add ::details-content pseudo-element (#10379) on Github,<br />
                  authored by dbaron</a
                ></cite
              >
            </li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="group-collapsibles">
        <details name="collapsible-group">
          <summary id="group-collapsibles">
            <h3>Keeping only a single collapsible open</h3>
          </summary>
          <div class="content">
            In order to set up a group of collapsibles where only one may be open at a time, you
            need to use the "name" attribute. This groups the elements in a manner similar to radio
            inputs, where only one option may be selected at a time.
          </div>
        </details>
        <details name="collapsible-group">
          <summary><h3>Collapsible Group (1)</h3></summary>
          <div class="content">
            In order to set up a group of collapsibles where only one may be open at a time, you
            need to use the "name" attribute. This groups the elements in a manner similar to radio
            inputs, where only one option may be selected at a time.
          </div>
        </details>
        <details name="collapsible-group">
          <summary><h3>Collapsible Group (2)</h3></summary>
          <div class="content">
            In order to set up a group of collapsibles where only one may be open at a time, you
            need to use the "name" attribute. This groups the elements in a manner similar to radio
            inputs, where only one option may be selected at a time.
          </div>
        </details>
        <details name="collapsible-group">
          <summary><h3>Collapsible Group (3)</h3></summary>
          <div class="content">
            In order to set up a group of collapsibles where only one may be open at a time, you
            need to use the "name" attribute. This groups the elements in a manner similar to radio
            inputs, where only one option may be selected at a time.
          </div>
        </details>
      </section>
    </div>
  </body>
</template>

<style scoped>
body {
  height: 100vh;
  padding-block: 100px 500px;
}

section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 70%;
  margin-inline: auto;
}

h3,
p {
  margin: 0;
  padding: 0;
}

.content {
  height: 100%;
  overflow: hidden;
}

details {
  border: solid black 1px;
  padding: 25px 50px;
  width: 500px;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 2.5rem;
  height: 20px;
}

details#smooth[open] {
  height: 72px;
}

details[open] {
  padding-bottom: 100px;
}

details#smooth,
details#smooth .content {
  transition: height 0.3s ease-in-out;
}

summary {
  margin-bottom: 1rem;
}

/* Hide marker in non-Safari browsers */
summary::marker {
  content: none;
}

/* Hide marker in Safari */
summary::-webkit-details-marker {
  display: none;
}

/*
Below selector doesn't work

details slot#details-content {
  display: block !important;
  content-visibility: visible !important;
}
*/

section:has(> details#adjacent),
section:has(> details#pseudo),
section:has(> details[name='collapsible-group']) {
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
}

details#adjacent,
details#pseudo {
  margin-bottom: 0;
  border-bottom: 0;
}
details#adjacent[open],
details#pseudo[open] {
  padding-bottom: 25px;
}

details#adjacent + .content,
details#pseudo + .content {
  max-height: 0;
  transition: max-height 0.5s ease;
  width: 500px;
  padding-inline: 50px;
  border: solid black 1px;
  border-top: 0;
  margin-bottom: 2.5rem;
}

details#adjacent[open] + .content,
details#pseudo[open] + .content {
  max-height: 350px;
}

#smooth p,
#adjacent + .content :where(p, li),
#pseudo + .content :where(p, li) {
  margin-bottom: 1rem;
}

[name='collapsible-group'] {
  margin-bottom: 0;
}

[name='collapsible-group'] .content {
  height: unset;
  max-height: 0;
  opacity: 0;
  translate: 0% -50%;
  transition: opacity 500ms ease 0.5s, max-height 500ms ease 0.5s;
}

[name='collapsible-group'][open] .content {
  opacity: 1;
  translate: 0% 0%;
  max-height: 500vh;
}
</style>
