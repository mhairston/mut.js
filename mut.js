 /**
 * mut.js: Minimal Ubiquitous Toolbox
 *
 * @module
 *
 * M. Hairston 2020
 * https://github.com/mhairston/mut.js
 *
 * qs        - querySelector shortcut
 * qsa       - querySelectorAll shortcut
 * ce        - createElement shortcut
 * post      - post to page            
 * getParam  - read named param from location query string
 * checkAttr - post useful info about an attribute.
 */

const mut = {
  /**
   * qsa
   *
   * Equiv. to `jQuery(sel, el)`. Returns an Array-like:
   * iterate with `forEach`.
   *
   */
  qsa: (selector, el) => {
    if (!el) {
      el = document;
    }
    return el.querySelectorAll(selector);
  },

  /**
   * qs
   *
   * Equiv. to `jQuery(sel).eq(0)`
   * Returns a single DOM Ref or `null`.
   *
   */
  qs: (selector, el=document) => {
    return el.querySelector(selector);
  },

  // listen - Needs testing.
  //
  // function listen(el, eventName, callback) {
  //   return el.addEventListener(eventName, callback);
  // }

  /**
   * Create Element
   * mut.ce('h3', 'Quick Brown Fox');
   *
   * @param {string} type - element type
   * @param {string} contents - HTML to go inside new element.
   * @returns {object} - The HTML element created.
   */
  ce: (type, contents) => {
    const el = document.createElement(type);
    el.innerHTML = contents;
    return el;
  },

  /**
   * post
   *
   * Adds a message log to the end of the page.
   * The log is created on the first call to post().
   * Usage: mut.post(message)
   *
   * @param  {string} msg - Message to be posted.
   * @param {boolean} isInline - whether msg rendered as a paragraph or a span.
   * @returns {object} - the element containing the message.
   */
  post: (msg, isInline) => {
    var docBody = this.qs("body");
    let elType = isInline ? "span" : "p";
    var msgEl = document.createElement(elType);
    var logBox = this.qs(".logbox");
    if (!logBox) {
      logBox = this.ce("div");
      logBox.classList.add("logbox");
      docBody.append(logBox);
    }
    logBox.appendChild(msgEl);
    msgEl.innerHTML = msg;
    return msgEl;
  },

  /**
   * get url param by key.
   *
   * Return types:
   * Non-empty string  = success, returns the value
   * Empty string = key exists with no value
   * null = key does not exist.
   *
   * @param {string} key -- which param to look at
   * @returns {varies} -- value of parameter with given key.
   */
  getParam: (key) => {
    const url = new URL(document.URL);
    return url.searchParams.get(key);
  },

  /**
   * Get a description of an element's attribute: value, type, presence, etc.

   * @param  {DOMElement} el   the element to inspect
   * @param  {string}     attr the name of the attribute to inspect
   * @return {string}          description of the value of this attribute
   */
  checkAttr: (el, attr) => {
    var attrExists = el.hasAttribute(attr);
    var attrVal = el.getAttribute(attr);
    return `.${el.className} ${attr} ${
      attrExists ? "present" : "absent"
    } ${typeof attrVal} ${attrVal}`;
  }
};
