import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X as getBaseText, x as xtngl$1, A as AREA_NAME$1, a as CAN$1, C as CHI$1, s as SM$1, Z as ZolkName$1, G as GETHOA$1, c as CAN_HH$1, e as CHI_HH$1, D as THAP$1, H as HH$1, g as LTHG_HH$1, I as containsNumber$1, B as CHI_3HH$1, Y as arrH1, k as CfgValue$1 } from './8W4RV4Fe.js';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import utc from 'dayjs/plugin/utc.js';
import { L as LocalLunarCalendar } from './Bzb04YE8.js';
import html2canvas from 'html2canvas';
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types';
import isEqual from 'fast-deep-equal';
import youTubePlayer from 'youtube-player';

/*!
* sweetalert2 v11.26.17
* Released under the MIT License.
*/
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _checkPrivateRedeclaration(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldGet2(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldInitSpec(e, t, a) {
  _checkPrivateRedeclaration(e, t), t.set(e, a);
}
function _classPrivateFieldSet2(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}

const RESTORE_FOCUS_TIMEOUT = 100;

/** @type {GlobalState} */
const globalState = {};
const focusPreviousActiveElement = () => {
  if (globalState.previousActiveElement instanceof HTMLElement) {
    globalState.previousActiveElement.focus();
    globalState.previousActiveElement = null;
  } else if (document.body) {
    document.body.focus();
  }
};

/**
 * Restore previous active (focused) element
 *
 * @param {boolean} returnFocus
 * @returns {Promise<void>}
 */
const restoreActiveElement = returnFocus => {
  return new Promise(resolve => {
    if (!returnFocus) {
      return resolve();
    }
    const x = window.scrollX;
    const y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(() => {
      focusPreviousActiveElement();
      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    window.scrollTo(x, y);
  });
};

const swalPrefix = 'swal2-';

/**
 * @typedef {Record<SwalClass, string>} SwalClasses
 */

/**
 * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
 * @typedef {Record<SwalIcon, string>} SwalIcons
 */

/** @type {SwalClass[]} */
const classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error', 'draggable', 'dragging'];
const swalClasses = classNames.reduce((acc, className) => {
  acc[className] = swalPrefix + className;
  return acc;
}, /** @type {SwalClasses} */{});

/** @type {SwalIcon[]} */
const icons = ['success', 'warning', 'info', 'question', 'error'];
const iconTypes = icons.reduce((acc, icon) => {
  acc[icon] = swalPrefix + icon;
  return acc;
}, /** @type {SwalIcons} */{});

const consolePrefix = 'SweetAlert2:';

/**
 * Capitalize the first letter of a string
 *
 * @param {string} str
 * @returns {string}
 */
const capitalizeFirstLetter$2 = str => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Standardize console warnings
 *
 * @param {string | string[]} message
 */
const warn = message => {
  console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`);
};

/**
 * Standardize console errors
 *
 * @param {string} message
 */
const error = message => {
  console.error(`${consolePrefix} ${message}`);
};

/**
 * Private global state for `warnOnce`
 *
 * @type {string[]}
 * @private
 */
const previousWarnOnceMessages = [];

/**
 * Show a console warning, but only if it hasn't already been shown
 *
 * @param {string} message
 */
const warnOnce = message => {
  if (!previousWarnOnceMessages.includes(message)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};

/**
 * Show a one-time console warning about deprecated params/methods
 *
 * @param {string} deprecatedParam
 * @param {string?} useInstead
 */
const warnAboutDeprecation = (deprecatedParam, useInstead = null) => {
  warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release.${useInstead ? ` Use "${useInstead}" instead.` : ''}`);
};

/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 *
 * @param {(() => *) | *} arg
 * @returns {*}
 */
const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;

/**
 * @param {*} arg
 * @returns {boolean}
 */
const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';

/**
 * @param {*} arg
 * @returns {Promise<*>}
 */
const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);

/**
 * @param {*} arg
 * @returns {boolean}
 */
const isPromise = arg => arg && Promise.resolve(arg) === arg;

/**
 * Gets the popup container which contains the backdrop and the popup itself.
 *
 * @returns {HTMLElement | null}
 */
const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);

/**
 * @param {string} selectorString
 * @returns {HTMLElement | null}
 */
const elementBySelector = selectorString => {
  const container = getContainer();
  return container ? container.querySelector(selectorString) : null;
};

/**
 * @param {string} className
 * @returns {HTMLElement | null}
 */
const elementByClass = className => {
  return elementBySelector(`.${className}`);
};

/**
 * @returns {HTMLElement | null}
 */
const getPopup = () => elementByClass(swalClasses.popup);

/**
 * @returns {HTMLElement | null}
 */
const getIcon = () => elementByClass(swalClasses.icon);

/**
 * @returns {HTMLElement | null}
 */
const getIconContent = () => elementByClass(swalClasses['icon-content']);

/**
 * @returns {HTMLElement | null}
 */
const getTitle = () => elementByClass(swalClasses.title);

/**
 * @returns {HTMLElement | null}
 */
const getHtmlContainer = () => elementByClass(swalClasses['html-container']);

/**
 * @returns {HTMLElement | null}
 */
const getImage = () => elementByClass(swalClasses.image);

/**
 * @returns {HTMLElement | null}
 */
const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);

/**
 * @returns {HTMLElement | null}
 */
const getValidationMessage = () => elementByClass(swalClasses['validation-message']);

/**
 * @returns {HTMLButtonElement | null}
 */
const getConfirmButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`));

/**
 * @returns {HTMLButtonElement | null}
 */
const getCancelButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`));

/**
 * @returns {HTMLButtonElement | null}
 */
const getDenyButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`));

/**
 * @returns {HTMLElement | null}
 */
const getInputLabel = () => elementByClass(swalClasses['input-label']);

/**
 * @returns {HTMLElement | null}
 */
const getLoader = () => elementBySelector(`.${swalClasses.loader}`);

/**
 * @returns {HTMLElement | null}
 */
const getActions = () => elementByClass(swalClasses.actions);

/**
 * @returns {HTMLElement | null}
 */
const getFooter = () => elementByClass(swalClasses.footer);

/**
 * @returns {HTMLElement | null}
 */
const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);

/**
 * @returns {HTMLElement | null}
 */
const getCloseButton = () => elementByClass(swalClasses.close);

// https://github.com/jkup/focusable/blob/master/index.js
const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
/**
 * @returns {HTMLElement[]}
 */
const getFocusableElements = () => {
  const popup = getPopup();
  if (!popup) {
    return [];
  }
  /** @type {NodeListOf<HTMLElement>} */
  const focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
  const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
  // sort according to tabindex
  .sort((a, b) => {
    const tabindexA = parseInt(a.getAttribute('tabindex') || '0');
    const tabindexB = parseInt(b.getAttribute('tabindex') || '0');
    if (tabindexA > tabindexB) {
      return 1;
    } else if (tabindexA < tabindexB) {
      return -1;
    }
    return 0;
  });

  /** @type {NodeListOf<HTMLElement>} */
  const otherFocusableElements = popup.querySelectorAll(focusable);
  const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(el => el.getAttribute('tabindex') !== '-1');
  return [...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))].filter(el => isVisible$1(el));
};

/**
 * @returns {boolean}
 */
const isModal = () => {
  return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
};

/**
 * @returns {boolean}
 */
const isToast = () => {
  const popup = getPopup();
  if (!popup) {
    return false;
  }
  return hasClass(popup, swalClasses.toast);
};

/**
 * @returns {boolean}
 */
const isLoading = () => {
  const popup = getPopup();
  if (!popup) {
    return false;
  }
  return popup.hasAttribute('data-loading');
};

/**
 * Securely set innerHTML of an element
 * https://github.com/sweetalert2/sweetalert2/issues/1926
 *
 * @param {HTMLElement} elem
 * @param {string} html
 */
const setInnerHtml = (elem, html) => {
  elem.textContent = '';
  if (html) {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(html, `text/html`);
    const head = parsed.querySelector('head');
    if (head) {
      Array.from(head.childNodes).forEach(child => {
        elem.appendChild(child);
      });
    }
    const body = parsed.querySelector('body');
    if (body) {
      Array.from(body.childNodes).forEach(child => {
        if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
          elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
        } else {
          elem.appendChild(child);
        }
      });
    }
  }
};

/**
 * @param {HTMLElement} elem
 * @param {string} className
 * @returns {boolean}
 */
const hasClass = (elem, className) => {
  if (!className) {
    return false;
  }
  const classList = className.split(/\s+/);
  for (let i = 0; i < classList.length; i++) {
    if (!elem.classList.contains(classList[i])) {
      return false;
    }
  }
  return true;
};

/**
 * @param {HTMLElement} elem
 * @param {SweetAlertOptions} params
 */
const removeCustomClasses = (elem, params) => {
  Array.from(elem.classList).forEach(className => {
    if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
      elem.classList.remove(className);
    }
  });
};

/**
 * @param {HTMLElement} elem
 * @param {SweetAlertOptions} params
 * @param {string} className
 */
const applyCustomClass = (elem, params, className) => {
  removeCustomClasses(elem, params);
  if (!params.customClass) {
    return;
  }
  const customClass = params.customClass[(/** @type {keyof SweetAlertCustomClass} */className)];
  if (!customClass) {
    return;
  }
  if (typeof customClass !== 'string' && !customClass.forEach) {
    warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof customClass}"`);
    return;
  }
  addClass(elem, customClass);
};

/**
 * @param {HTMLElement} popup
 * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
 * @returns {HTMLInputElement | null}
 */
const getInput$1 = (popup, inputClass) => {
  if (!inputClass) {
    return null;
  }
  switch (inputClass) {
    case 'select':
    case 'textarea':
    case 'file':
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
    case 'checkbox':
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
    case 'radio':
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
    case 'range':
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
    default:
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
  }
};

/**
 * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
 */
const focusInput = input => {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    const val = input.value;
    input.value = '';
    input.value = val;
  }
};

/**
 * @param {HTMLElement | HTMLElement[] | null} target
 * @param {string | string[] | readonly string[] | undefined} classList
 * @param {boolean} condition
 */
const toggleClass = (target, classList, condition) => {
  if (!target || !classList) {
    return;
  }
  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }
  classList.forEach(className => {
    if (Array.isArray(target)) {
      target.forEach(elem => {
        if (condition) {
          elem.classList.add(className);
        } else {
          elem.classList.remove(className);
        }
      });
    } else {
      if (condition) {
        target.classList.add(className);
      } else {
        target.classList.remove(className);
      }
    }
  });
};

/**
 * @param {HTMLElement | HTMLElement[] | null} target
 * @param {string | string[] | readonly string[] | undefined} classList
 */
const addClass = (target, classList) => {
  toggleClass(target, classList, true);
};

/**
 * @param {HTMLElement | HTMLElement[] | null} target
 * @param {string | string[] | readonly string[] | undefined} classList
 */
const removeClass = (target, classList) => {
  toggleClass(target, classList, false);
};

/**
 * Get direct child of an element by class name
 *
 * @param {HTMLElement} elem
 * @param {string} className
 * @returns {HTMLElement | undefined}
 */
const getDirectChildByClass = (elem, className) => {
  const children = Array.from(elem.children);
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child instanceof HTMLElement && hasClass(child, className)) {
      return child;
    }
  }
};

/**
 * @param {HTMLElement} elem
 * @param {string} property
 * @param {string | number | null | undefined} value
 */
const applyNumericalStyle = (elem, property, value) => {
  if (value === `${parseInt(`${value}`)}`) {
    value = parseInt(value);
  }
  if (value || parseInt(`${value}`) === 0) {
    elem.style.setProperty(property, typeof value === 'number' ? `${value}px` : (/** @type {string} */value));
  } else {
    elem.style.removeProperty(property);
  }
};

/**
 * @param {HTMLElement | null} elem
 * @param {string} display
 */
const show = (elem, display = 'flex') => {
  if (!elem) {
    return;
  }
  elem.style.display = display;
};

/**
 * @param {HTMLElement | null} elem
 */
const hide = elem => {
  if (!elem) {
    return;
  }
  elem.style.display = 'none';
};

/**
 * @param {HTMLElement | null} elem
 * @param {string} display
 */
const showWhenInnerHtmlPresent = (elem, display = 'block') => {
  if (!elem) {
    return;
  }
  new MutationObserver(() => {
    toggle(elem, elem.innerHTML, display);
  }).observe(elem, {
    childList: true,
    subtree: true
  });
};

/**
 * @param {HTMLElement} parent
 * @param {string} selector
 * @param {string} property
 * @param {string} value
 */
const setStyle = (parent, selector, property, value) => {
  /** @type {HTMLElement | null} */
  const el = parent.querySelector(selector);
  if (el) {
    el.style.setProperty(property, value);
  }
};

/**
 * @param {HTMLElement} elem
 * @param {boolean | string | null | undefined} condition
 * @param {string} display
 */
const toggle = (elem, condition, display = 'flex') => {
  if (condition) {
    show(elem, display);
  } else {
    hide(elem);
  }
};

/**
 * borrowed from jquery $(elem).is(':visible') implementation
 *
 * @param {HTMLElement | null} elem
 * @returns {boolean}
 */
const isVisible$1 = elem => Boolean(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));

/**
 * @returns {boolean}
 */
const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());

/**
 * @param {HTMLElement} elem
 * @returns {boolean}
 */
const isScrollable = elem => Boolean(elem.scrollHeight > elem.clientHeight);

/**
 * @param {HTMLElement} element
 * @param {HTMLElement} stopElement
 * @returns {boolean}
 */
const selfOrParentIsScrollable = (element, stopElement) => {
  let parent = /** @type {HTMLElement | null} */element;
  while (parent && parent !== stopElement) {
    if (isScrollable(parent)) {
      return true;
    }
    parent = parent.parentElement;
  }
  return false;
};

/**
 * borrowed from https://stackoverflow.com/a/46352119
 *
 * @param {HTMLElement} elem
 * @returns {boolean}
 */
const hasCssAnimation = elem => {
  const style = window.getComputedStyle(elem);
  const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
  const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
  return animDuration > 0 || transDuration > 0;
};

/**
 * @param {number} timer
 * @param {boolean} reset
 */
const animateTimerProgressBar = (timer, reset = false) => {
  const timerProgressBar = getTimerProgressBar();
  if (!timerProgressBar) {
    return;
  }
  if (isVisible$1(timerProgressBar)) {
    if (reset) {
      timerProgressBar.style.transition = 'none';
      timerProgressBar.style.width = '100%';
    }
    setTimeout(() => {
      timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
      timerProgressBar.style.width = '0%';
    }, 10);
  }
};
const stopTimerProgressBar = () => {
  const timerProgressBar = getTimerProgressBar();
  if (!timerProgressBar) {
    return;
  }
  const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  timerProgressBar.style.removeProperty('transition');
  timerProgressBar.style.width = '100%';
  const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
  timerProgressBar.style.width = `${timerProgressBarPercent}%`;
};

/**
 * Detect Node env
 *
 * @returns {boolean}
 */
const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses['html-container']}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses['progress-steps']}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses['html-container']}" id="${swalClasses['html-container']}"></div>
   <input class="${swalClasses.input}" id="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}" id="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label class="${swalClasses.checkbox}">
     <input type="checkbox" id="${swalClasses.checkbox}" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}" id="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses['validation-message']}" id="${swalClasses['validation-message']}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses['timer-progress-bar-container']}">
     <div class="${swalClasses['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '');

/**
 * @returns {boolean}
 */
const resetOldContainer = () => {
  const oldContainer = getContainer();
  if (!oldContainer) {
    return false;
  }
  oldContainer.remove();
  removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'],
  // @ts-ignore: 'has-column' is not defined in swalClasses but may be set dynamically
  swalClasses['has-column']]);
  return true;
};
const resetValidationMessage$1 = () => {
  if (globalState.currentInstance) {
    globalState.currentInstance.resetValidationMessage();
  }
};
const addInputChangeListeners = () => {
  const popup = getPopup();
  if (!popup) {
    return;
  }
  const input = getDirectChildByClass(popup, swalClasses.input);
  const file = getDirectChildByClass(popup, swalClasses.file);
  /** @type {HTMLInputElement | null} */
  const range = popup.querySelector(`.${swalClasses.range} input`);
  /** @type {HTMLOutputElement | null} */
  const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
  const select = getDirectChildByClass(popup, swalClasses.select);
  /** @type {HTMLInputElement | null} */
  const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
  const textarea = getDirectChildByClass(popup, swalClasses.textarea);
  if (input) {
    input.oninput = resetValidationMessage$1;
  }
  if (file) {
    file.onchange = resetValidationMessage$1;
  }
  if (select) {
    select.onchange = resetValidationMessage$1;
  }
  if (checkbox) {
    checkbox.onchange = resetValidationMessage$1;
  }
  if (textarea) {
    textarea.oninput = resetValidationMessage$1;
  }
  if (range && rangeOutput) {
    range.oninput = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
    range.onchange = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  }
};

/**
 * @param {string | HTMLElement} target
 * @returns {HTMLElement}
 */
const getTarget = target => {
  if (typeof target === 'string') {
    const element = document.querySelector(target);
    if (!element) {
      throw new Error(`Target element "${target}" not found`);
    }
    return /** @type {HTMLElement} */element;
  }
  return target;
};

/**
 * @param {SweetAlertOptions} params
 */
const setupAccessibility = params => {
  const popup = getPopup();
  if (!popup) {
    return;
  }
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }
};

/**
 * @param {HTMLElement} targetElement
 */
const setupRTL = targetElement => {
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
    globalState.isRTL = true;
  }
};

/**
 * Add modal + backdrop to DOM
 *
 * @param {SweetAlertOptions} params
 */
const init = params => {
  // Clean up the old popup container if it exists
  const oldContainerExisted = resetOldContainer();
  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }
  const container = document.createElement('div');
  container.className = swalClasses.container;
  if (oldContainerExisted) {
    addClass(container, swalClasses['no-transition']);
  }
  setInnerHtml(container, sweetHTML);
  container.dataset['swal2Theme'] = params.theme;
  const targetElement = getTarget(params.target || 'body');
  targetElement.appendChild(container);
  if (params.topLayer) {
    container.setAttribute('popover', '');
    container.showPopover();
  }
  setupAccessibility(params);
  setupRTL(targetElement);
  addInputChangeListeners();
};

/**
 * @param {HTMLElement | object | string} param
 * @param {HTMLElement} target
 */
const parseHtmlToContainer = (param, target) => {
  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param);
  }

  // Object
  else if (typeof param === 'object') {
    handleObject(param, target);
  }

  // Plain string
  else if (param) {
    setInnerHtml(target, param);
  }
};

/**
 * @param {object} param
 * @param {HTMLElement} target
 */
const handleObject = (param, target) => {
  // JQuery element(s)
  if ('jquery' in param) {
    handleJqueryElem(target, param);
  }

  // For other objects use their string representation
  else {
    setInnerHtml(target, param.toString());
  }
};

/**
 * @param {HTMLElement} target
 * @param {any} elem
 */
const handleJqueryElem = (target, elem) => {
  target.textContent = '';
  if (0 in elem) {
    for (let i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true));
    }
  } else {
    target.appendChild(elem.cloneNode(true));
  }
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderActions = (instance, params) => {
  const actions = getActions();
  const loader = getLoader();
  if (!actions || !loader) {
    return;
  }

  // Actions (buttons) wrapper
  if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  }

  // Custom class
  applyCustomClass(actions, params, 'actions');

  // Render all the buttons
  renderButtons(actions, loader, params);

  // Loader
  setInnerHtml(loader, params.loaderHtml || '');
  applyCustomClass(loader, params, 'loader');
};

/**
 * @param {HTMLElement} actions
 * @param {HTMLElement} loader
 * @param {SweetAlertOptions} params
 */
function renderButtons(actions, loader, params) {
  const confirmButton = getConfirmButton();
  const denyButton = getDenyButton();
  const cancelButton = getCancelButton();
  if (!confirmButton || !denyButton || !cancelButton) {
    return;
  }

  // Render buttons
  renderButton(confirmButton, 'confirm', params);
  renderButton(denyButton, 'deny', params);
  renderButton(cancelButton, 'cancel', params);
  handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
  if (params.reverseButtons) {
    if (params.toast) {
      actions.insertBefore(cancelButton, confirmButton);
      actions.insertBefore(denyButton, confirmButton);
    } else {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    }
  }
}

/**
 * @param {HTMLElement} confirmButton
 * @param {HTMLElement} denyButton
 * @param {HTMLElement} cancelButton
 * @param {SweetAlertOptions} params
 */
function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
  if (!params.buttonsStyling) {
    removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    return;
  }
  addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

  // Apply custom background colors to action buttons
  if (params.confirmButtonColor) {
    confirmButton.style.setProperty('--swal2-confirm-button-background-color', params.confirmButtonColor);
  }
  if (params.denyButtonColor) {
    denyButton.style.setProperty('--swal2-deny-button-background-color', params.denyButtonColor);
  }
  if (params.cancelButtonColor) {
    cancelButton.style.setProperty('--swal2-cancel-button-background-color', params.cancelButtonColor);
  }

  // Apply the outline color to action buttons
  applyOutlineColor(confirmButton);
  applyOutlineColor(denyButton);
  applyOutlineColor(cancelButton);
}

/**
 * @param {HTMLElement} button
 */
function applyOutlineColor(button) {
  const buttonStyle = window.getComputedStyle(button);
  if (buttonStyle.getPropertyValue('--swal2-action-button-focus-box-shadow')) {
    // If the button already has a custom outline color, no need to change it
    return;
  }
  const outlineColor = buttonStyle.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/, 'rgba($1, $2, $3, 0.5)');
  button.style.setProperty('--swal2-action-button-focus-box-shadow', buttonStyle.getPropertyValue('--swal2-outline').replace(/ rgba\(.*/, ` ${outlineColor}`));
}

/**
 * @param {HTMLElement} button
 * @param {'confirm' | 'deny' | 'cancel'} buttonType
 * @param {SweetAlertOptions} params
 */
function renderButton(button, buttonType, params) {
  const buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter$2(buttonType);
  toggle(button, params[`show${buttonName}Button`], 'inline-block');
  setInnerHtml(button, params[`${buttonType}ButtonText`] || ''); // Set caption text
  button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`] || ''); // ARIA label

  // Add buttons custom classes
  button.className = swalClasses[buttonType];
  applyCustomClass(button, params, `${buttonType}Button`);
}

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderCloseButton = (instance, params) => {
  const closeButton = getCloseButton();
  if (!closeButton) {
    return;
  }
  setInnerHtml(closeButton, params.closeButtonHtml || '');

  // Custom class
  applyCustomClass(closeButton, params, 'closeButton');
  toggle(closeButton, params.showCloseButton);
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderContainer = (instance, params) => {
  const container = getContainer();
  if (!container) {
    return;
  }
  handleBackdropParam(container, params.backdrop);
  handlePositionParam(container, params.position);
  handleGrowParam(container, params.grow);

  // Custom class
  applyCustomClass(container, params, 'container');
};

/**
 * @param {HTMLElement} container
 * @param {SweetAlertOptions['backdrop']} backdrop
 */
function handleBackdropParam(container, backdrop) {
  if (typeof backdrop === 'string') {
    container.style.background = backdrop;
  } else if (!backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }
}

/**
 * @param {HTMLElement} container
 * @param {SweetAlertOptions['position']} position
 */
function handlePositionParam(container, position) {
  if (!position) {
    return;
  }
  if (position in swalClasses) {
    addClass(container, swalClasses[position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }
}

/**
 * @param {HTMLElement} container
 * @param {SweetAlertOptions['grow']} grow
 */
function handleGrowParam(container, grow) {
  if (!grow) {
    return;
  }
  addClass(container, swalClasses[`grow-${grow}`]);
}

/**
 * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

var privateProps = {
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};

/// <reference path="../../../../sweetalert2.d.ts"/>


/** @type {InputClass[]} */
const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderInput = (instance, params) => {
  const popup = getPopup();
  if (!popup) {
    return;
  }
  const innerParams = privateProps.innerParams.get(instance);
  const rerender = !innerParams || params.input !== innerParams.input;
  inputClasses.forEach(inputClass => {
    const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
    if (!inputContainer) {
      return;
    }

    // set attributes
    setAttributes(inputClass, params.inputAttributes);

    // set class
    inputContainer.className = swalClasses[inputClass];
    if (rerender) {
      hide(inputContainer);
    }
  });
  if (params.input) {
    if (rerender) {
      showInput(params);
    }
    // set custom class
    setCustomClass(params);
  }
};

/**
 * @param {SweetAlertOptions} params
 */
const showInput = params => {
  if (!params.input) {
    return;
  }
  if (!renderInputType[params.input]) {
    error(`Unexpected type of input! Expected ${Object.keys(renderInputType).join(' | ')}, got "${params.input}"`);
    return;
  }
  const inputContainer = getInputContainer(params.input);
  if (!inputContainer) {
    return;
  }
  const input = renderInputType[params.input](inputContainer, params);
  show(inputContainer);

  // input autofocus
  if (params.inputAutoFocus) {
    setTimeout(() => {
      focusInput(input);
    });
  }
};

/**
 * @param {HTMLInputElement} input
 */
const removeAttributes = input => {
  for (let i = 0; i < input.attributes.length; i++) {
    const attrName = input.attributes[i].name;
    if (!['id', 'type', 'value', 'style'].includes(attrName)) {
      input.removeAttribute(attrName);
    }
  }
};

/**
 * @param {InputClass} inputClass
 * @param {SweetAlertOptions['inputAttributes']} inputAttributes
 */
const setAttributes = (inputClass, inputAttributes) => {
  const popup = getPopup();
  if (!popup) {
    return;
  }
  const input = getInput$1(popup, inputClass);
  if (!input) {
    return;
  }
  removeAttributes(input);
  for (const attr in inputAttributes) {
    input.setAttribute(attr, inputAttributes[attr]);
  }
};

/**
 * @param {SweetAlertOptions} params
 */
const setCustomClass = params => {
  if (!params.input) {
    return;
  }
  const inputContainer = getInputContainer(params.input);
  if (inputContainer) {
    applyCustomClass(inputContainer, params, 'input');
  }
};

/**
 * @param {HTMLInputElement | HTMLTextAreaElement} input
 * @param {SweetAlertOptions} params
 */
const setInputPlaceholder = (input, params) => {
  if (!input.placeholder && params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder;
  }
};

/**
 * @param {Input} input
 * @param {Input} prependTo
 * @param {SweetAlertOptions} params
 */
const setInputLabel = (input, prependTo, params) => {
  if (params.inputLabel) {
    const label = document.createElement('label');
    const labelClass = swalClasses['input-label'];
    label.setAttribute('for', input.id);
    label.className = labelClass;
    if (typeof params.customClass === 'object') {
      addClass(label, params.customClass.inputLabel);
    }
    label.innerText = params.inputLabel;
    prependTo.insertAdjacentElement('beforebegin', label);
  }
};

/**
 * @param {SweetAlertInput} inputType
 * @returns {HTMLElement | undefined}
 */
const getInputContainer = inputType => {
  const popup = getPopup();
  if (!popup) {
    return;
  }
  return getDirectChildByClass(popup, swalClasses[(/** @type {SwalClass} */inputType)] || swalClasses.input);
};

/**
 * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
 * @param {SweetAlertOptions['inputValue']} inputValue
 */
const checkAndSetInputValue = (input, inputValue) => {
  if (['string', 'number'].includes(typeof inputValue)) {
    input.value = `${inputValue}`;
  } else if (!isPromise(inputValue)) {
    warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
  }
};

/** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
const renderInputType = {};

/**
 * @param {Input | HTMLElement} input
 * @param {SweetAlertOptions} params
 * @returns {Input}
 */
renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType['datetime-local'] = renderInputType.time = renderInputType.week = renderInputType.month = /** @type {(input: Input | HTMLElement, params: SweetAlertOptions) => Input} */
(input, params) => {
  const inputElement = /** @type {HTMLInputElement} */input;
  checkAndSetInputValue(inputElement, params.inputValue);
  setInputLabel(inputElement, inputElement, params);
  setInputPlaceholder(inputElement, params);
  inputElement.type = /** @type {string} */params.input;
  return inputElement;
};

/**
 * @param {Input | HTMLElement} input
 * @param {SweetAlertOptions} params
 * @returns {Input}
 */
renderInputType.file = (input, params) => {
  const inputElement = /** @type {HTMLInputElement} */input;
  setInputLabel(inputElement, inputElement, params);
  setInputPlaceholder(inputElement, params);
  return inputElement;
};

/**
 * @param {Input | HTMLElement} range
 * @param {SweetAlertOptions} params
 * @returns {Input}
 */
renderInputType.range = (range, params) => {
  const rangeContainer = /** @type {HTMLElement} */range;
  const rangeInput = rangeContainer.querySelector('input');
  const rangeOutput = rangeContainer.querySelector('output');
  if (rangeInput) {
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = /** @type {string} */params.input;
    setInputLabel(rangeInput, /** @type {Input} */range, params);
  }
  if (rangeOutput) {
    checkAndSetInputValue(rangeOutput, params.inputValue);
  }
  return /** @type {Input} */range;
};

/**
 * @param {Input | HTMLElement} select
 * @param {SweetAlertOptions} params
 * @returns {Input}
 */
renderInputType.select = (select, params) => {
  const selectElement = /** @type {HTMLSelectElement} */select;
  selectElement.textContent = '';
  if (params.inputPlaceholder) {
    const placeholder = document.createElement('option');
    setInnerHtml(placeholder, params.inputPlaceholder);
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    selectElement.appendChild(placeholder);
  }
  setInputLabel(selectElement, selectElement, params);
  return selectElement;
};

/**
 * @param {Input | HTMLElement} radio
 * @returns {Input}
 */
renderInputType.radio = radio => {
  const radioElement = /** @type {HTMLElement} */radio;
  radioElement.textContent = '';
  return /** @type {Input} */radio;
};

/**
 * @param {Input | HTMLElement} checkboxContainer
 * @param {SweetAlertOptions} params
 * @returns {Input}
 */
renderInputType.checkbox = (checkboxContainer, params) => {
  const popup = getPopup();
  if (!popup) {
    throw new Error('Popup not found');
  }
  const checkbox = getInput$1(popup, 'checkbox');
  if (!checkbox) {
    throw new Error('Checkbox input not found');
  }
  checkbox.value = '1';
  checkbox.checked = Boolean(params.inputValue);
  const containerElement = /** @type {HTMLElement} */checkboxContainer;
  const label = containerElement.querySelector('span');
  if (label) {
    const placeholderOrLabel = params.inputPlaceholder || params.inputLabel;
    if (placeholderOrLabel) {
      setInnerHtml(label, placeholderOrLabel);
    }
  }
  return checkbox;
};

/**
 * @param {Input | HTMLElement} textarea
 * @param {SweetAlertOptions} params
 * @returns {Input}
 */
renderInputType.textarea = (textarea, params) => {
  const textareaElement = /** @type {HTMLTextAreaElement} */textarea;
  checkAndSetInputValue(textareaElement, params.inputValue);
  setInputPlaceholder(textareaElement, params);
  setInputLabel(textareaElement, textareaElement, params);

  /**
   * @param {HTMLElement} el
   * @returns {number}
   */
  const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

  // https://github.com/sweetalert2/sweetalert2/issues/2291
  setTimeout(() => {
    // https://github.com/sweetalert2/sweetalert2/issues/1699
    if ('MutationObserver' in window) {
      const popup = getPopup();
      if (!popup) {
        return;
      }
      const initialPopupWidth = parseInt(window.getComputedStyle(popup).width);
      const textareaResizeHandler = () => {
        // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
        if (!document.body.contains(textareaElement)) {
          return;
        }
        const textareaWidth = textareaElement.offsetWidth + getMargin(textareaElement);
        const popupElement = getPopup();
        if (popupElement) {
          if (textareaWidth > initialPopupWidth) {
            popupElement.style.width = `${textareaWidth}px`;
          } else {
            applyNumericalStyle(popupElement, 'width', params.width);
          }
        }
      };
      new MutationObserver(textareaResizeHandler).observe(textareaElement, {
        attributes: true,
        attributeFilter: ['style']
      });
    }
  });
  return textareaElement;
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderContent = (instance, params) => {
  const htmlContainer = getHtmlContainer();
  if (!htmlContainer) {
    return;
  }
  showWhenInnerHtmlPresent(htmlContainer);
  applyCustomClass(htmlContainer, params, 'htmlContainer');

  // Content as HTML
  if (params.html) {
    parseHtmlToContainer(params.html, htmlContainer);
    show(htmlContainer, 'block');
  }

  // Content as plain text
  else if (params.text) {
    htmlContainer.textContent = params.text;
    show(htmlContainer, 'block');
  }

  // No content
  else {
    hide(htmlContainer);
  }
  renderInput(instance, params);
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderFooter = (instance, params) => {
  const footer = getFooter();
  if (!footer) {
    return;
  }
  showWhenInnerHtmlPresent(footer);
  toggle(footer, Boolean(params.footer), 'block');
  if (params.footer) {
    parseHtmlToContainer(params.footer, footer);
  }

  // Custom class
  applyCustomClass(footer, params, 'footer');
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderIcon = (instance, params) => {
  const innerParams = privateProps.innerParams.get(instance);
  const icon = getIcon();
  if (!icon) {
    return;
  }

  // if the given icon already rendered, apply the styling without re-rendering the icon
  if (innerParams && params.icon === innerParams.icon) {
    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);
    return;
  }
  if (!params.icon && !params.iconHtml) {
    hide(icon);
    return;
  }
  if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
    error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
    hide(icon);
    return;
  }
  show(icon);

  // Custom or default content
  setContent(icon, params);
  applyStyles(icon, params);

  // Animate icon
  addClass(icon, params.showClass && params.showClass.icon);

  // Re-adjust the success icon on system theme change
  const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
  colorSchemeQueryList.addEventListener('change', adjustSuccessIconBackgroundColor);
};

/**
 * @param {HTMLElement} icon
 * @param {SweetAlertOptions} params
 */
const applyStyles = (icon, params) => {
  for (const [iconType, iconClassName] of Object.entries(iconTypes)) {
    if (params.icon !== iconType) {
      removeClass(icon, iconClassName);
    }
  }
  addClass(icon, params.icon && iconTypes[params.icon]);

  // Icon color
  setColor(icon, params);

  // Success icon background color
  adjustSuccessIconBackgroundColor();

  // Custom class
  applyCustomClass(icon, params, 'icon');
};

// Adjust success icon background color to match the popup background color
const adjustSuccessIconBackgroundColor = () => {
  const popup = getPopup();
  if (!popup) {
    return;
  }
  const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  /** @type {NodeListOf<HTMLElement>} */
  const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
  for (let i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }
};

/**
 *
 * @param {SweetAlertOptions} params
 * @returns {string}
 */
const successIconHtml = params => `
  ${params.animation ? '<div class="swal2-success-circular-line-left"></div>' : ''}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${params.animation ? '<div class="swal2-success-fix"></div>' : ''}
  ${params.animation ? '<div class="swal2-success-circular-line-right"></div>' : ''}
`;
const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;

/**
 * @param {HTMLElement} icon
 * @param {SweetAlertOptions} params
 */
const setContent = (icon, params) => {
  if (!params.icon && !params.iconHtml) {
    return;
  }
  let oldContent = icon.innerHTML;
  let newContent = '';
  if (params.iconHtml) {
    newContent = iconContent(params.iconHtml);
  } else if (params.icon === 'success') {
    newContent = successIconHtml(params);
    oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
  } else if (params.icon === 'error') {
    newContent = errorIconHtml;
  } else if (params.icon) {
    const defaultIconHtml = {
      question: '?',
      warning: '!',
      info: 'i'
    };
    newContent = iconContent(defaultIconHtml[params.icon]);
  }
  if (oldContent.trim() !== newContent.trim()) {
    setInnerHtml(icon, newContent);
  }
};

/**
 * @param {HTMLElement} icon
 * @param {SweetAlertOptions} params
 */
const setColor = (icon, params) => {
  if (!params.iconColor) {
    return;
  }
  icon.style.color = params.iconColor;
  icon.style.borderColor = params.iconColor;
  for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
    setStyle(icon, sel, 'background-color', params.iconColor);
  }
  setStyle(icon, '.swal2-success-ring', 'border-color', params.iconColor);
};

/**
 * @param {string} content
 * @returns {string}
 */
const iconContent = content => `<div class="${swalClasses['icon-content']}">${content}</div>`;

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderImage = (instance, params) => {
  const image = getImage();
  if (!image) {
    return;
  }
  if (!params.imageUrl) {
    hide(image);
    return;
  }
  show(image, '');

  // Src, alt
  image.setAttribute('src', params.imageUrl);
  image.setAttribute('alt', params.imageAlt || '');

  // Width, height
  applyNumericalStyle(image, 'width', params.imageWidth);
  applyNumericalStyle(image, 'height', params.imageHeight);

  // Class
  image.className = swalClasses.image;
  applyCustomClass(image, params, 'image');
};

let dragging = false;
let mousedownX = 0;
let mousedownY = 0;
let initialX = 0;
let initialY = 0;

/**
 * @param {HTMLElement} popup
 */
const addDraggableListeners = popup => {
  popup.addEventListener('mousedown', down);
  document.body.addEventListener('mousemove', move);
  popup.addEventListener('mouseup', up);
  popup.addEventListener('touchstart', down);
  document.body.addEventListener('touchmove', move);
  popup.addEventListener('touchend', up);
};

/**
 * @param {HTMLElement} popup
 */
const removeDraggableListeners = popup => {
  popup.removeEventListener('mousedown', down);
  document.body.removeEventListener('mousemove', move);
  popup.removeEventListener('mouseup', up);
  popup.removeEventListener('touchstart', down);
  document.body.removeEventListener('touchmove', move);
  popup.removeEventListener('touchend', up);
};

/**
 * @param {MouseEvent | TouchEvent} event
 */
const down = event => {
  const popup = getPopup();
  if (!popup) {
    return;
  }
  const icon = getIcon();
  if (event.target === popup || icon && icon.contains(/** @type {HTMLElement} */event.target)) {
    dragging = true;
    const clientXY = getClientXY(event);
    mousedownX = clientXY.clientX;
    mousedownY = clientXY.clientY;
    initialX = parseInt(popup.style.insetInlineStart) || 0;
    initialY = parseInt(popup.style.insetBlockStart) || 0;
    addClass(popup, 'swal2-dragging');
  }
};

/**
 * @param {MouseEvent | TouchEvent} event
 */
const move = event => {
  const popup = getPopup();
  if (!popup) {
    return;
  }
  if (dragging) {
    let {
      clientX,
      clientY
    } = getClientXY(event);
    const deltaX = clientX - mousedownX;
    // In RTL mode, negate the horizontal delta since insetInlineStart refers to the right edge
    popup.style.insetInlineStart = `${initialX + (globalState.isRTL ? -deltaX : deltaX)}px`;
    popup.style.insetBlockStart = `${initialY + (clientY - mousedownY)}px`;
  }
};
const up = () => {
  const popup = getPopup();
  dragging = false;
  removeClass(popup, 'swal2-dragging');
};

/**
 * @param {MouseEvent | TouchEvent} event
 * @returns {{ clientX: number, clientY: number }}
 */
const getClientXY = event => {
  let clientX = 0,
    clientY = 0;
  if (event.type.startsWith('mouse')) {
    clientX = /** @type {MouseEvent} */event.clientX;
    clientY = /** @type {MouseEvent} */event.clientY;
  } else if (event.type.startsWith('touch')) {
    clientX = /** @type {TouchEvent} */event.touches[0].clientX;
    clientY = /** @type {TouchEvent} */event.touches[0].clientY;
  }
  return {
    clientX,
    clientY
  };
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderPopup = (instance, params) => {
  const container = getContainer();
  const popup = getPopup();
  if (!container || !popup) {
    return;
  }

  // Width
  // https://github.com/sweetalert2/sweetalert2/issues/2170
  if (params.toast) {
    applyNumericalStyle(container, 'width', params.width);
    popup.style.width = '100%';
    const loader = getLoader();
    if (loader) {
      popup.insertBefore(loader, getIcon());
    }
  } else {
    applyNumericalStyle(popup, 'width', params.width);
  }

  // Padding
  applyNumericalStyle(popup, 'padding', params.padding);

  // Color
  if (params.color) {
    popup.style.color = params.color;
  }

  // Background
  if (params.background) {
    popup.style.background = params.background;
  }
  hide(getValidationMessage());

  // Classes
  addClasses$1(popup, params);
  if (params.draggable && !params.toast) {
    addClass(popup, swalClasses.draggable);
    addDraggableListeners(popup);
  } else {
    removeClass(popup, swalClasses.draggable);
    removeDraggableListeners(popup);
  }
};

/**
 * @param {HTMLElement} popup
 * @param {SweetAlertOptions} params
 */
const addClasses$1 = (popup, params) => {
  const showClass = params.showClass || {};
  // Default Class + showClass when updating Swal.update({})
  popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? showClass.popup : ''}`;
  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  }

  // Custom class
  applyCustomClass(popup, params, 'popup');
  // TODO: remove in the next major
  if (typeof params.customClass === 'string') {
    addClass(popup, params.customClass);
  }

  // Icon class (#1842)
  if (params.icon) {
    addClass(popup, swalClasses[`icon-${params.icon}`]);
  }
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderProgressSteps = (instance, params) => {
  const progressStepsContainer = getProgressSteps();
  if (!progressStepsContainer) {
    return;
  }
  const {
    progressSteps,
    currentProgressStep
  } = params;
  if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
    hide(progressStepsContainer);
    return;
  }
  show(progressStepsContainer);
  progressStepsContainer.textContent = '';
  if (currentProgressStep >= progressSteps.length) {
    warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
  }
  progressSteps.forEach((step, index) => {
    const stepEl = createStepElement(step);
    progressStepsContainer.appendChild(stepEl);
    if (index === currentProgressStep) {
      addClass(stepEl, swalClasses['active-progress-step']);
    }
    if (index !== progressSteps.length - 1) {
      const lineEl = createLineElement(params);
      progressStepsContainer.appendChild(lineEl);
    }
  });
};

/**
 * @param {string} step
 * @returns {HTMLLIElement}
 */
const createStepElement = step => {
  const stepEl = document.createElement('li');
  addClass(stepEl, swalClasses['progress-step']);
  setInnerHtml(stepEl, step);
  return stepEl;
};

/**
 * @param {SweetAlertOptions} params
 * @returns {HTMLLIElement}
 */
const createLineElement = params => {
  const lineEl = document.createElement('li');
  addClass(lineEl, swalClasses['progress-step-line']);
  if (params.progressStepsDistance) {
    applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
  }
  return lineEl;
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderTitle = (instance, params) => {
  const title = getTitle();
  if (!title) {
    return;
  }
  showWhenInnerHtmlPresent(title);
  toggle(title, Boolean(params.title || params.titleText), 'block');
  if (params.title) {
    parseHtmlToContainer(params.title, title);
  }
  if (params.titleText) {
    title.innerText = params.titleText;
  }

  // Custom class
  applyCustomClass(title, params, 'title');
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const render = (instance, params) => {
  var _globalState$eventEmi;
  renderPopup(instance, params);
  renderContainer(instance, params);
  renderProgressSteps(instance, params);
  renderIcon(instance, params);
  renderImage(instance, params);
  renderTitle(instance, params);
  renderCloseButton(instance, params);
  renderContent(instance, params);
  renderActions(instance, params);
  renderFooter(instance, params);
  const popup = getPopup();
  if (typeof params.didRender === 'function' && popup) {
    params.didRender(popup);
  }
  (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === void 0 || _globalState$eventEmi.emit('didRender', popup);
};

/*
 * Global function to determine if SweetAlert2 popup is shown
 */
const isVisible = () => {
  return isVisible$1(getPopup());
};

/*
 * Global function to click 'Confirm' button
 */
const clickConfirm = () => {
  var _dom$getConfirmButton;
  return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
};

/*
 * Global function to click 'Deny' button
 */
const clickDeny = () => {
  var _dom$getDenyButton;
  return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
};

/*
 * Global function to click 'Cancel' button
 */
const clickCancel = () => {
  var _dom$getCancelButton;
  return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
};

/** @type {Record<DismissReason, DismissReason>} */
const DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

/**
 * @param {GlobalState} globalState
 */
const removeKeydownHandler = globalState => {
  if (globalState.keydownTarget && globalState.keydownHandlerAdded && globalState.keydownHandler) {
    const handler = /** @type {EventListenerOrEventListenerObject} */ /** @type {unknown} */globalState.keydownHandler;
    globalState.keydownTarget.removeEventListener('keydown', handler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }
};

/**
 * @param {GlobalState} globalState
 * @param {SweetAlertOptions} innerParams
 * @param {(dismiss: DismissReason) => void} dismissWith
 */
const addKeydownHandler = (globalState, innerParams, dismissWith) => {
  removeKeydownHandler(globalState);
  if (!innerParams.toast) {
    /** @type {(this: HTMLElement, event: KeyboardEvent) => void} */
    const handler = e => keydownHandler(innerParams, e, dismissWith);
    globalState.keydownHandler = handler;
    const target = innerParams.keydownListenerCapture ? window : getPopup();
    if (target) {
      globalState.keydownTarget = target;
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      const eventHandler = /** @type {EventListenerOrEventListenerObject} */ /** @type {unknown} */handler;
      globalState.keydownTarget.addEventListener('keydown', eventHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }
};

/**
 * @param {number} index
 * @param {number} increment
 */
const setFocus = (index, increment) => {
  var _dom$getPopup;
  const focusableElements = getFocusableElements();
  // search for visible elements and select the next possible match
  if (focusableElements.length) {
    index = index + increment;

    // shift + tab when .swal2-popup is focused
    if (index === -2) {
      index = focusableElements.length - 1;
    }

    // rollover to first item
    if (index === focusableElements.length) {
      index = 0;

      // go to last item
    } else if (index === -1) {
      index = focusableElements.length - 1;
    }
    focusableElements[index].focus();
    return;
  }
  // no visible focusable elements, focus the popup
  (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
};
const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

/**
 * @param {SweetAlertOptions} innerParams
 * @param {KeyboardEvent} event
 * @param {(dismiss: DismissReason) => void} dismissWith
 */
const keydownHandler = (innerParams, event, dismissWith) => {
  if (!innerParams) {
    return; // This instance has already been destroyed
  }

  // Ignore keydown during IME composition
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
  // https://github.com/sweetalert2/sweetalert2/issues/720
  // https://github.com/sweetalert2/sweetalert2/issues/2406
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  if (innerParams.stopKeydownPropagation) {
    event.stopPropagation();
  }

  // ENTER
  if (event.key === 'Enter') {
    handleEnter(event, innerParams);
  }

  // TAB
  else if (event.key === 'Tab') {
    handleTab(event);
  }

  // ARROWS - switch focus between buttons
  else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
    handleArrows(event.key);
  }

  // ESC
  else if (event.key === 'Escape') {
    handleEsc(event, innerParams, dismissWith);
  }
};

/**
 * @param {KeyboardEvent} event
 * @param {SweetAlertOptions} innerParams
 */
const handleEnter = (event, innerParams) => {
  // https://github.com/sweetalert2/sweetalert2/issues/2386
  if (!callIfFunction(innerParams.allowEnterKey)) {
    return;
  }
  const popup = getPopup();
  if (!popup || !innerParams.input) {
    return;
  }
  const input = getInput$1(popup, innerParams.input);
  if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
    if (['textarea', 'file'].includes(innerParams.input)) {
      return; // do not submit
    }
    clickConfirm();
    event.preventDefault();
  }
};

/**
 * @param {KeyboardEvent} event
 */
const handleTab = event => {
  const targetElement = event.target;
  const focusableElements = getFocusableElements();
  let btnIndex = -1;
  for (let i = 0; i < focusableElements.length; i++) {
    if (targetElement === focusableElements[i]) {
      btnIndex = i;
      break;
    }
  }

  // Cycle to the next button
  if (!event.shiftKey) {
    setFocus(btnIndex, 1);
  }

  // Cycle to the prev button
  else {
    setFocus(btnIndex, -1);
  }
  event.stopPropagation();
  event.preventDefault();
};

/**
 * @param {string} key
 */
const handleArrows = key => {
  const actions = getActions();
  const confirmButton = getConfirmButton();
  const denyButton = getDenyButton();
  const cancelButton = getCancelButton();
  if (!actions || !confirmButton || !denyButton || !cancelButton) {
    return;
  }
  /** @type HTMLElement[] */
  const buttons = [confirmButton, denyButton, cancelButton];
  if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
    return;
  }
  const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
  let buttonToFocus = document.activeElement;
  if (!buttonToFocus) {
    return;
  }
  for (let i = 0; i < actions.children.length; i++) {
    buttonToFocus = buttonToFocus[sibling];
    if (!buttonToFocus) {
      return;
    }
    if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
      break;
    }
  }
  if (buttonToFocus instanceof HTMLButtonElement) {
    buttonToFocus.focus();
  }
};

/**
 * @param {KeyboardEvent} event
 * @param {SweetAlertOptions} innerParams
 * @param {(dismiss: DismissReason) => void} dismissWith
 */
const handleEsc = (event, innerParams, dismissWith) => {
  event.preventDefault();
  if (callIfFunction(innerParams.allowEscapeKey)) {
    dismissWith(DismissReason.esc);
  }
};

/**
 * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

var privateMethods = {
  swalPromiseResolve: new WeakMap(),
  swalPromiseReject: new WeakMap()
};

// From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

const setAriaHidden = () => {
  const container = getContainer();
  const bodyChildren = Array.from(document.body.children);
  bodyChildren.forEach(el => {
    if (el.contains(container)) {
      return;
    }
    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
    }
    el.setAttribute('aria-hidden', 'true');
  });
};
const unsetAriaHidden = () => {
  const bodyChildren = Array.from(document.body.children);
  bodyChildren.forEach(el => {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

// @ts-ignore
const isSafariOrIOS = typeof window !== 'undefined' && Boolean(window.GestureEvent); // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

/**
 * Fix iOS scrolling
 * http://stackoverflow.com/q/39626302
 */
const iOSfix = () => {
  if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
    const offset = document.body.scrollTop;
    document.body.style.top = `${offset * -1}px`;
    addClass(document.body, swalClasses.iosfix);
    lockBodyScroll();
  }
};

/**
 * https://github.com/sweetalert2/sweetalert2/issues/1246
 */
const lockBodyScroll = () => {
  const container = getContainer();
  if (!container) {
    return;
  }
  /** @type {boolean} */
  let preventTouchMove;
  /**
   * @param {TouchEvent} event
   */
  container.ontouchstart = event => {
    preventTouchMove = shouldPreventTouchMove(event);
  };
  /**
   * @param {TouchEvent} event
   */
  container.ontouchmove = event => {
    if (preventTouchMove) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
};

/**
 * @param {TouchEvent} event
 * @returns {boolean}
 */
const shouldPreventTouchMove = event => {
  const target = event.target;
  const container = getContainer();
  const htmlContainer = getHtmlContainer();
  if (!container || !htmlContainer) {
    return false;
  }
  if (isStylus(event) || isZoom(event)) {
    return false;
  }
  if (target === container) {
    return true;
  }
  if (!isScrollable(container) && target instanceof HTMLElement && !selfOrParentIsScrollable(target, htmlContainer) &&
  // #2823
  target.tagName !== 'INPUT' &&
  // #1603
  target.tagName !== 'TEXTAREA' &&
  // #2266
  !(isScrollable(htmlContainer) &&
  // #1944
  htmlContainer.contains(target))) {
    return true;
  }
  return false;
};

/**
 * https://github.com/sweetalert2/sweetalert2/issues/1786
 *
 * @param {TouchEvent} event
 * @returns {boolean}
 */
const isStylus = event => {
  return Boolean(event.touches && event.touches.length &&
  // @ts-ignore - touchType is not a standard property
  event.touches[0].touchType === 'stylus');
};

/**
 * https://github.com/sweetalert2/sweetalert2/issues/1891
 *
 * @param {TouchEvent} event
 * @returns {boolean}
 */
const isZoom = event => {
  return event.touches && event.touches.length > 1;
};
const undoIOSfix = () => {
  if (hasClass(document.body, swalClasses.iosfix)) {
    const offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

/**
 * Measure scrollbar width for padding body during modal show/hide
 * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
 *
 * @returns {number}
 */
const measureScrollbar = () => {
  const scrollDiv = document.createElement('div');
  scrollDiv.className = swalClasses['scrollbar-measure'];
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

/**
 * Remember state in cases where opening and handling a modal will fiddle with it.
 * @type {number | null}
 */
let previousBodyPadding = null;

/**
 * @param {string} initialBodyOverflow
 */
const replaceScrollbarWithPadding = initialBodyOverflow => {
  // for queues, do not do this more than once
  if (previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
  ) {
    // add padding so the content doesn't shift after removal of scrollbar
    previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = `${previousBodyPadding + measureScrollbar()}px`;
  }
};
const undoReplaceScrollbarWithPadding = () => {
  if (previousBodyPadding !== null) {
    document.body.style.paddingRight = `${previousBodyPadding}px`;
    previousBodyPadding = null;
  }
};

/**
 * @param {SweetAlert} instance
 * @param {HTMLElement} container
 * @param {boolean} returnFocus
 * @param {(() => void) | undefined} didClose
 */
function removePopupAndResetState(instance, container, returnFocus, didClose) {
  if (isToast()) {
    triggerDidCloseAndDispose(instance, didClose);
  } else {
    restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
    removeKeydownHandler(globalState);
  }

  // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
  // for some reason removing the container in Safari will scroll the document to bottom
  if (isSafariOrIOS) {
    container.setAttribute('style', 'display:none !important');
    container.removeAttribute('class');
    container.innerHTML = '';
  } else {
    container.remove();
  }
  if (isModal()) {
    undoReplaceScrollbarWithPadding();
    undoIOSfix();
    unsetAriaHidden();
  }
  removeBodyClasses();
}

/**
 * Remove SweetAlert2 classes from body
 */
function removeBodyClasses() {
  removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
}

/**
 * Instance method to close sweetAlert
 *
 * @param {SweetAlertResult | undefined} resolveValue
 * @this {SweetAlert}
 */
function close(resolveValue) {
  resolveValue = prepareResolveValue(resolveValue);
  const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
  const didClose = triggerClosePopup(this);
  if (this.isAwaitingPromise) {
    // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
    if (!resolveValue.isDismissed) {
      handleAwaitingPromise(this);
      swalPromiseResolve(resolveValue);
    }
  } else if (didClose) {
    // Resolve Swal promise
    swalPromiseResolve(resolveValue);
  }
}

/**
 * @param {SweetAlert} instance
 * @returns {boolean}
 */
const triggerClosePopup = instance => {
  const popup = getPopup();
  if (!popup) {
    return false;
  }
  const innerParams = privateProps.innerParams.get(instance);
  if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
    return false;
  }
  removeClass(popup, innerParams.showClass.popup);
  addClass(popup, innerParams.hideClass.popup);
  const backdrop = getContainer();
  removeClass(backdrop, innerParams.showClass.backdrop);
  addClass(backdrop, innerParams.hideClass.backdrop);
  handlePopupAnimation(instance, popup, innerParams);
  return true;
};

/**
 * @param {Error | string} error
 * @this {SweetAlert}
 */
function rejectPromise(error) {
  const rejectPromise = privateMethods.swalPromiseReject.get(this);
  handleAwaitingPromise(this);
  if (rejectPromise) {
    // Reject Swal promise
    rejectPromise(error);
  }
}

/**
 * @param {SweetAlert} instance
 */
const handleAwaitingPromise = instance => {
  if (instance.isAwaitingPromise) {
    // @ts-ignore
    delete instance.isAwaitingPromise;
    // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
    if (!privateProps.innerParams.get(instance)) {
      instance._destroy();
    }
  }
};

/**
 * @param {SweetAlertResult | undefined} resolveValue
 * @returns {SweetAlertResult}
 */
const prepareResolveValue = resolveValue => {
  // When user calls Swal.close()
  if (typeof resolveValue === 'undefined') {
    return {
      isConfirmed: false,
      isDenied: false,
      isDismissed: true
    };
  }
  return Object.assign({
    isConfirmed: false,
    isDenied: false,
    isDismissed: false
  }, resolveValue);
};

/**
 * @param {SweetAlert} instance
 * @param {HTMLElement} popup
 * @param {SweetAlertOptions} innerParams
 */
const handlePopupAnimation = (instance, popup, innerParams) => {
  var _globalState$eventEmi;
  const container = getContainer();
  // If animation is supported, animate
  const animationIsSupported = hasCssAnimation(popup);
  if (typeof innerParams.willClose === 'function') {
    innerParams.willClose(popup);
  }
  (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === void 0 || _globalState$eventEmi.emit('willClose', popup);
  if (animationIsSupported && container) {
    animatePopup(instance, popup, container, Boolean(innerParams.returnFocus), innerParams.didClose);
  } else if (container) {
    // Otherwise, remove immediately
    removePopupAndResetState(instance, container, Boolean(innerParams.returnFocus), innerParams.didClose);
  }
};

/**
 * @param {SweetAlert} instance
 * @param {HTMLElement} popup
 * @param {HTMLElement} container
 * @param {boolean} returnFocus
 * @param {(() => void) | undefined} didClose
 */
const animatePopup = (instance, popup, container, returnFocus, didClose) => {
  globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
  /**
   * @param {AnimationEvent | TransitionEvent} e
   */
  const swalCloseAnimationFinished = function (e) {
    if (e.target === popup) {
      var _globalState$swalClos;
      (_globalState$swalClos = globalState.swalCloseEventFinishedCallback) === null || _globalState$swalClos === void 0 || _globalState$swalClos.call(globalState);
      delete globalState.swalCloseEventFinishedCallback;
      popup.removeEventListener('animationend', swalCloseAnimationFinished);
      popup.removeEventListener('transitionend', swalCloseAnimationFinished);
    }
  };
  popup.addEventListener('animationend', swalCloseAnimationFinished);
  popup.addEventListener('transitionend', swalCloseAnimationFinished);
};

/**
 * @param {SweetAlert} instance
 * @param {(() => void) | undefined} didClose
 */
const triggerDidCloseAndDispose = (instance, didClose) => {
  setTimeout(() => {
    var _globalState$eventEmi2;
    if (typeof didClose === 'function') {
      didClose.bind(instance.params)();
    }
    (_globalState$eventEmi2 = globalState.eventEmitter) === null || _globalState$eventEmi2 === void 0 || _globalState$eventEmi2.emit('didClose');
    // instance might have been destroyed already
    if (instance._destroy) {
      instance._destroy();
    }
  });
};

/**
 * Shows loader (spinner), this is useful with AJAX requests.
 * By default the loader be shown instead of the "Confirm" button.
 *
 * @param {HTMLButtonElement | null} [buttonToReplace]
 */
const showLoading = buttonToReplace => {
  let popup = getPopup();
  if (!popup) {
    new Swal();
  }
  popup = getPopup();
  if (!popup) {
    return;
  }
  const loader = getLoader();
  if (isToast()) {
    hide(getIcon());
  } else {
    replaceButton(popup, buttonToReplace);
  }
  show(loader);
  popup.setAttribute('data-loading', 'true');
  popup.setAttribute('aria-busy', 'true');
  popup.focus();
};

/**
 * @param {HTMLElement} popup
 * @param {HTMLButtonElement | null} [buttonToReplace]
 */
const replaceButton = (popup, buttonToReplace) => {
  const actions = getActions();
  const loader = getLoader();
  if (!actions || !loader) {
    return;
  }
  if (!buttonToReplace && isVisible$1(getConfirmButton())) {
    buttonToReplace = getConfirmButton();
  }
  show(actions);
  if (buttonToReplace) {
    hide(buttonToReplace);
    loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    actions.insertBefore(loader, buttonToReplace);
  }
  addClass([popup, actions], swalClasses.loading);
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const handleInputOptionsAndValue = (instance, params) => {
  if (params.input === 'select' || params.input === 'radio') {
    handleInputOptions(instance, params);
  } else if (['text', 'email', 'number', 'tel', 'textarea'].some(i => i === params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
    showLoading(getConfirmButton());
    handleInputValue(instance, params);
  }
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} innerParams
 * @returns {SweetAlertInputValue}
 */
const getInputValue = (instance, innerParams) => {
  const input = instance.getInput();
  if (!input) {
    return null;
  }
  switch (innerParams.input) {
    case 'checkbox':
      return getCheckboxValue(input);
    case 'radio':
      return getRadioValue(input);
    case 'file':
      return getFileValue(input);
    default:
      return innerParams.inputAutoTrim ? input.value.trim() : input.value;
  }
};

/**
 * @param {HTMLInputElement} input
 * @returns {number}
 */
const getCheckboxValue = input => input.checked ? 1 : 0;

/**
 * @param {HTMLInputElement} input
 * @returns {string | null}
 */
const getRadioValue = input => input.checked ? input.value : null;

/**
 * @param {HTMLInputElement} input
 * @returns {FileList | File | null}
 */
const getFileValue = input => input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const handleInputOptions = (instance, params) => {
  const popup = getPopup();
  if (!popup) {
    return;
  }
  /**
   * @param {*} inputOptions
   */
  const processInputOptions = inputOptions => {
    if (params.input === 'select') {
      populateSelectOptions(popup, formatInputOptions(inputOptions), params);
    } else if (params.input === 'radio') {
      populateRadioOptions(popup, formatInputOptions(inputOptions), params);
    }
  };
  if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
    showLoading(getConfirmButton());
    asPromise(params.inputOptions).then(inputOptions => {
      instance.hideLoading();
      processInputOptions(inputOptions);
    });
  } else if (typeof params.inputOptions === 'object') {
    processInputOptions(params.inputOptions);
  } else {
    error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
  }
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const handleInputValue = (instance, params) => {
  const input = instance.getInput();
  if (!input) {
    return;
  }
  hide(input);
  asPromise(params.inputValue).then(inputValue => {
    input.value = params.input === 'number' ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
    show(input);
    input.focus();
    instance.hideLoading();
  }).catch(err => {
    error(`Error in inputValue promise: ${err}`);
    input.value = '';
    show(input);
    input.focus();
    instance.hideLoading();
  });
};

/**
 * @param {HTMLElement} popup
 * @param {InputOptionFlattened[]} inputOptions
 * @param {SweetAlertOptions} params
 */
function populateSelectOptions(popup, inputOptions, params) {
  const select = getDirectChildByClass(popup, swalClasses.select);
  if (!select) {
    return;
  }
  /**
   * @param {HTMLElement} parent
   * @param {string} optionLabel
   * @param {string} optionValue
   */
  const renderOption = (parent, optionLabel, optionValue) => {
    const option = document.createElement('option');
    option.value = optionValue;
    setInnerHtml(option, optionLabel);
    option.selected = isSelected(optionValue, params.inputValue);
    parent.appendChild(option);
  };
  inputOptions.forEach(inputOption => {
    const optionValue = inputOption[0];
    const optionLabel = inputOption[1];
    // <optgroup> spec:
    // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
    // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
    // check whether this is a <optgroup>
    if (Array.isArray(optionLabel)) {
      // if it is an array, then it is an <optgroup>
      const optgroup = document.createElement('optgroup');
      optgroup.label = optionValue;
      optgroup.disabled = false; // not configurable for now
      select.appendChild(optgroup);
      optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
    } else {
      // case of <option>
      renderOption(select, optionLabel, optionValue);
    }
  });
  select.focus();
}

/**
 * @param {HTMLElement} popup
 * @param {InputOptionFlattened[]} inputOptions
 * @param {SweetAlertOptions} params
 */
function populateRadioOptions(popup, inputOptions, params) {
  const radio = getDirectChildByClass(popup, swalClasses.radio);
  if (!radio) {
    return;
  }
  inputOptions.forEach(inputOption => {
    const radioValue = inputOption[0];
    const radioLabel = inputOption[1];
    const radioInput = document.createElement('input');
    const radioLabelElement = document.createElement('label');
    radioInput.type = 'radio';
    radioInput.name = swalClasses.radio;
    radioInput.value = radioValue;
    if (isSelected(radioValue, params.inputValue)) {
      radioInput.checked = true;
    }
    const label = document.createElement('span');
    setInnerHtml(label, radioLabel);
    label.className = swalClasses.label;
    radioLabelElement.appendChild(radioInput);
    radioLabelElement.appendChild(label);
    radio.appendChild(radioLabelElement);
  });
  const radios = radio.querySelectorAll('input');
  if (radios.length) {
    radios[0].focus();
  }
}

/**
 * Converts `inputOptions` into an array of `[value, label]`s
 *
 * @param {*} inputOptions
 * @typedef {string[]} InputOptionFlattened
 * @returns {InputOptionFlattened[]}
 */
const formatInputOptions = inputOptions => {
  /** @type {InputOptionFlattened[]} */
  const result = [];
  if (inputOptions instanceof Map) {
    inputOptions.forEach((value, key) => {
      let valueFormatted = value;
      if (typeof valueFormatted === 'object') {
        // case of <optgroup>
        valueFormatted = formatInputOptions(valueFormatted);
      }
      result.push([key, valueFormatted]);
    });
  } else {
    Object.keys(inputOptions).forEach(key => {
      let valueFormatted = inputOptions[key];
      if (typeof valueFormatted === 'object') {
        // case of <optgroup>
        valueFormatted = formatInputOptions(valueFormatted);
      }
      result.push([key, valueFormatted]);
    });
  }
  return result;
};

/**
 * @param {string} optionValue
 * @param {SweetAlertInputValue} inputValue
 * @returns {boolean}
 */
const isSelected = (optionValue, inputValue) => {
  return Boolean(inputValue) && inputValue !== null && inputValue !== undefined && inputValue.toString() === optionValue.toString();
};

/**
 * @param {SweetAlert} instance
 */
const handleConfirmButtonClick = instance => {
  const innerParams = privateProps.innerParams.get(instance);
  instance.disableButtons();
  if (innerParams.input) {
    handleConfirmOrDenyWithInput(instance, 'confirm');
  } else {
    confirm(instance, true);
  }
};

/**
 * @param {SweetAlert} instance
 */
const handleDenyButtonClick = instance => {
  const innerParams = privateProps.innerParams.get(instance);
  instance.disableButtons();
  if (innerParams.returnInputValueOnDeny) {
    handleConfirmOrDenyWithInput(instance, 'deny');
  } else {
    deny(instance, false);
  }
};

/**
 * @param {SweetAlert} instance
 * @param {(dismiss: DismissReason) => void} dismissWith
 */
const handleCancelButtonClick = (instance, dismissWith) => {
  instance.disableButtons();
  dismissWith(DismissReason.cancel);
};

/**
 * @param {SweetAlert} instance
 * @param {'confirm' | 'deny'} type
 */
const handleConfirmOrDenyWithInput = (instance, type) => {
  const innerParams = privateProps.innerParams.get(instance);
  if (!innerParams.input) {
    error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter$2(type)}`);
    return;
  }
  const input = instance.getInput();
  const inputValue = getInputValue(instance, innerParams);
  if (innerParams.inputValidator) {
    handleInputValidator(instance, inputValue, type);
  } else if (input && !input.checkValidity()) {
    instance.enableButtons();
    instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
  } else if (type === 'deny') {
    deny(instance, inputValue);
  } else {
    confirm(instance, inputValue);
  }
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertInputValue} inputValue
 * @param {'confirm' | 'deny'} type
 */
const handleInputValidator = (instance, inputValue, type) => {
  const innerParams = privateProps.innerParams.get(instance);
  instance.disableInput();
  const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
  validationPromise.then(validationMessage => {
    instance.enableButtons();
    instance.enableInput();
    if (validationMessage) {
      instance.showValidationMessage(validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  });
};

/**
 * @param {SweetAlert} instance
 * @param {*} value
 */
const deny = (instance, value) => {
  const innerParams = privateProps.innerParams.get(instance);
  if (innerParams.showLoaderOnDeny) {
    showLoading(getDenyButton());
  }
  if (innerParams.preDeny) {
    instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
    const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
    preDenyPromise.then(preDenyValue => {
      if (preDenyValue === false) {
        instance.hideLoading();
        handleAwaitingPromise(instance);
      } else {
        instance.close(/** @type SweetAlertResult */{
          isDenied: true,
          value: typeof preDenyValue === 'undefined' ? value : preDenyValue
        });
      }
    }).catch(error => rejectWith(instance, error));
  } else {
    instance.close(/** @type SweetAlertResult */{
      isDenied: true,
      value
    });
  }
};

/**
 * @param {SweetAlert} instance
 * @param {*} value
 */
const succeedWith = (instance, value) => {
  instance.close(/** @type SweetAlertResult */{
    isConfirmed: true,
    value
  });
};

/**
 *
 * @param {SweetAlert} instance
 * @param {string} error
 */
const rejectWith = (instance, error) => {
  instance.rejectPromise(error);
};

/**
 *
 * @param {SweetAlert} instance
 * @param {*} value
 */
const confirm = (instance, value) => {
  const innerParams = privateProps.innerParams.get(instance);
  if (innerParams.showLoaderOnConfirm) {
    showLoading();
  }
  if (innerParams.preConfirm) {
    instance.resetValidationMessage();
    instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
    const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
    preConfirmPromise.then(preConfirmValue => {
      if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
        instance.hideLoading();
        handleAwaitingPromise(instance);
      } else {
        succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
      }
    }).catch(error => rejectWith(instance, error));
  } else {
    succeedWith(instance, value);
  }
};

/**
 * Hides loader and shows back the button which was hidden by .showLoading()
 * @this {SweetAlert}
 */
function hideLoading() {
  // do nothing if popup is closed
  const innerParams = privateProps.innerParams.get(this);
  if (!innerParams) {
    return;
  }
  const domCache = privateProps.domCache.get(this);
  hide(domCache.loader);
  if (isToast()) {
    if (innerParams.icon) {
      show(getIcon());
    }
  } else {
    showRelatedButton(domCache);
  }
  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.denyButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

/**
 * @param {DomCache} domCache
 */
const showRelatedButton = domCache => {
  const dataButtonToReplace = domCache.loader.getAttribute('data-button-to-replace');
  const buttonToReplace = dataButtonToReplace ? domCache.popup.getElementsByClassName(dataButtonToReplace) : [];
  if (buttonToReplace.length) {
    show(/** @type {HTMLElement} */buttonToReplace[0], 'inline-block');
  } else if (allButtonsAreHidden()) {
    hide(domCache.actions);
  }
};

/**
 * Gets the input DOM node, this method works with input parameter.
 *
 * @returns {HTMLInputElement | null}
 * @this {SweetAlert}
 */
function getInput() {
  const innerParams = privateProps.innerParams.get(this);
  const domCache = privateProps.domCache.get(this);
  if (!domCache) {
    return null;
  }
  return getInput$1(domCache.popup, innerParams.input);
}

/**
 * @param {SweetAlert} instance
 * @param {string[]} buttons
 * @param {boolean} disabled
 */
function setButtonsDisabled(instance, buttons, disabled) {
  const domCache = privateProps.domCache.get(instance);
  buttons.forEach(button => {
    domCache[button].disabled = disabled;
  });
}

/**
 * @param {HTMLInputElement | null} input
 * @param {boolean} disabled
 */
function setInputDisabled(input, disabled) {
  const popup = getPopup();
  if (!popup || !input) {
    return;
  }
  if (input.type === 'radio') {
    /** @type {NodeListOf<HTMLInputElement>} */
    const radios = popup.querySelectorAll(`[name="${swalClasses.radio}"]`);
    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled;
    }
  } else {
    input.disabled = disabled;
  }
}

/**
 * Enable all the buttons
 * @this {SweetAlert}
 */
function enableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
}

/**
 * Disable all the buttons
 * @this {SweetAlert}
 */
function disableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
}

/**
 * Enable the input field
 * @this {SweetAlert}
 */
function enableInput() {
  setInputDisabled(this.getInput(), false);
}

/**
 * Disable the input field
 * @this {SweetAlert}
 */
function disableInput() {
  setInputDisabled(this.getInput(), true);
}

/**
 * Show block with validation message
 *
 * @param {string} error
 * @this {SweetAlert}
 */
function showValidationMessage(error) {
  const domCache = privateProps.domCache.get(this);
  const params = privateProps.innerParams.get(this);
  setInnerHtml(domCache.validationMessage, error);
  domCache.validationMessage.className = swalClasses['validation-message'];
  if (params.customClass && params.customClass.validationMessage) {
    addClass(domCache.validationMessage, params.customClass.validationMessage);
  }
  show(domCache.validationMessage);
  const input = this.getInput();
  if (input) {
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
}

/**
 * Hide block with validation message
 *
 * @this {SweetAlert}
 */
function resetValidationMessage() {
  const domCache = privateProps.domCache.get(this);
  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }
  const input = this.getInput();
  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');
    removeClass(input, swalClasses.inputerror);
  }
}

const defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  icon: undefined,
  iconColor: undefined,
  iconHtml: undefined,
  template: undefined,
  toast: false,
  draggable: false,
  animation: true,
  theme: 'light',
  showClass: {
    popup: 'swal2-show',
    backdrop: 'swal2-backdrop-show',
    icon: 'swal2-icon-show'
  },
  hideClass: {
    popup: 'swal2-hide',
    backdrop: 'swal2-backdrop-hide',
    icon: 'swal2-icon-hide'
  },
  customClass: {},
  target: 'body',
  color: undefined,
  backdrop: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showDenyButton: false,
  showCancelButton: false,
  preConfirm: undefined,
  preDeny: undefined,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: undefined,
  denyButtonText: 'No',
  denyButtonAriaLabel: '',
  denyButtonColor: undefined,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: undefined,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusDeny: false,
  focusCancel: false,
  returnFocus: true,
  showCloseButton: false,
  closeButtonHtml: '&times;',
  closeButtonAriaLabel: 'Close this dialog',
  loaderHtml: '',
  showLoaderOnConfirm: false,
  showLoaderOnDeny: false,
  imageUrl: undefined,
  imageWidth: undefined,
  imageHeight: undefined,
  imageAlt: '',
  timer: undefined,
  timerProgressBar: false,
  width: undefined,
  padding: undefined,
  background: undefined,
  input: undefined,
  inputPlaceholder: '',
  inputLabel: '',
  inputValue: '',
  inputOptions: {},
  inputAutoFocus: true,
  inputAutoTrim: true,
  inputAttributes: {},
  inputValidator: undefined,
  returnInputValueOnDeny: false,
  validationMessage: undefined,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: undefined,
  progressStepsDistance: undefined,
  willOpen: undefined,
  didOpen: undefined,
  didRender: undefined,
  willClose: undefined,
  didClose: undefined,
  didDestroy: undefined,
  scrollbarPadding: true,
  topLayer: false
};
const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'draggable', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'theme', 'willClose'];

/** @type {Record<string, string | undefined>} */
const deprecatedParams = {
  allowEnterKey: undefined
};
const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'draggable', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

/**
 * Is valid parameter
 *
 * @param {string} paramName
 * @returns {boolean}
 */
const isValidParameter = paramName => {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
};

/**
 * Is valid parameter for Swal.update() method
 *
 * @param {string} paramName
 * @returns {boolean}
 */
const isUpdatableParameter = paramName => {
  return updatableParams.indexOf(paramName) !== -1;
};

/**
 * Is deprecated parameter
 *
 * @param {string} paramName
 * @returns {string | undefined}
 */
const isDeprecatedParameter = paramName => {
  return deprecatedParams[paramName];
};

/**
 * @param {string} param
 */
const checkIfParamIsValid = param => {
  if (!isValidParameter(param)) {
    warn(`Unknown parameter "${param}"`);
  }
};

/**
 * @param {string} param
 */
const checkIfToastParamIsValid = param => {
  if (toastIncompatibleParams.includes(param)) {
    warn(`The parameter "${param}" is incompatible with toasts`);
  }
};

/**
 * @param {string} param
 */
const checkIfParamIsDeprecated = param => {
  const isDeprecated = isDeprecatedParameter(param);
  if (isDeprecated) {
    warnAboutDeprecation(param, isDeprecated);
  }
};

/**
 * Show relevant warnings for given params
 *
 * @param {SweetAlertOptions} params
 */
const showWarningsForParams = params => {
  if (params.backdrop === false && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  }
  if (params.theme && !['light', 'dark', 'auto', 'minimal', 'borderless', 'bootstrap-4', 'bootstrap-4-light', 'bootstrap-4-dark', 'bootstrap-5', 'bootstrap-5-light', 'bootstrap-5-dark', 'material-ui', 'material-ui-light', 'material-ui-dark', 'embed-iframe', 'bulma', 'bulma-light', 'bulma-dark'].includes(params.theme)) {
    warn(`Invalid theme "${params.theme}"`);
  }
  for (const param in params) {
    checkIfParamIsValid(param);
    if (params.toast) {
      checkIfToastParamIsValid(param);
    }
    checkIfParamIsDeprecated(param);
  }
};

/**
 * Updates popup parameters.
 *
 * @this {any}
 * @param {SweetAlertOptions} params
 */
function update(params) {
  const container = getContainer();
  const popup = getPopup();
  const innerParams = privateProps.innerParams.get(this);
  if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
    warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
    return;
  }
  const validUpdatableParams = filterValidParams(params);
  const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
  showWarningsForParams(updatedParams);
  if (container) {
    container.dataset['swal2Theme'] = updatedParams.theme;
  }
  render(this, updatedParams);
  privateProps.innerParams.set(this, updatedParams);
  Object.defineProperties(this, {
    params: {
      value: Object.assign({}, this.params, params),
      writable: false,
      enumerable: true
    }
  });
}

/**
 * @param {SweetAlertOptions} params
 * @returns {SweetAlertOptions}
 */
const filterValidParams = params => {
  /** @type {Record<string, any>} */
  const validUpdatableParams = {};
  Object.keys(params).forEach(param => {
    if (isUpdatableParameter(param)) {
      const typedParams = /** @type {Record<string, any>} */params;
      validUpdatableParams[param] = typedParams[param];
    } else {
      warn(`Invalid parameter to update: ${param}`);
    }
  });
  return validUpdatableParams;
};

/**
 * Dispose the current SweetAlert2 instance
 * @this {SweetAlert}
 */
function _destroy() {
  var _globalState$eventEmi;
  const domCache = privateProps.domCache.get(this);
  const innerParams = privateProps.innerParams.get(this);
  if (!innerParams) {
    disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
    return; // This instance has already been destroyed
  }

  // Check if there is another Swal closing
  if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
    globalState.swalCloseEventFinishedCallback();
    delete globalState.swalCloseEventFinishedCallback;
  }
  if (typeof innerParams.didDestroy === 'function') {
    innerParams.didDestroy();
  }
  (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === void 0 || _globalState$eventEmi.emit('didDestroy');
  disposeSwal(this);
}

/**
 * @param {SweetAlert} instance
 */
const disposeSwal = instance => {
  disposeWeakMaps(instance);
  // Unset this.params so GC will dispose it (#1569)
  // @ts-ignore
  delete instance.params;
  // Unset globalState props so GC will dispose globalState (#1569)
  delete globalState.keydownHandler;
  delete globalState.keydownTarget;
  // Unset currentInstance
  delete globalState.currentInstance;
};

/**
 * @param {SweetAlert} instance
 */
const disposeWeakMaps = instance => {
  // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
  if (instance.isAwaitingPromise) {
    unsetWeakMaps(privateProps, instance);
    instance.isAwaitingPromise = true;
  } else {
    unsetWeakMaps(privateMethods, instance);
    unsetWeakMaps(privateProps, instance);

    // @ts-ignore
    delete instance.isAwaitingPromise;
    // Unset instance methods
    // @ts-ignore
    delete instance.disableButtons;
    // @ts-ignore
    delete instance.enableButtons;
    // @ts-ignore
    delete instance.getInput;
    // @ts-ignore
    delete instance.disableInput;
    // @ts-ignore
    delete instance.enableInput;
    // @ts-ignore
    delete instance.hideLoading;
    // @ts-ignore
    delete instance.disableLoading;
    // @ts-ignore
    delete instance.showValidationMessage;
    // @ts-ignore
    delete instance.resetValidationMessage;
    // @ts-ignore
    delete instance.close;
    // @ts-ignore
    delete instance.closePopup;
    // @ts-ignore
    delete instance.closeModal;
    // @ts-ignore
    delete instance.closeToast;
    // @ts-ignore
    delete instance.rejectPromise;
    // @ts-ignore
    delete instance.update;
    // @ts-ignore
    delete instance._destroy;
  }
};

/**
 * @param {Record<string, WeakMap<any, any>>} obj
 * @param {SweetAlert} instance
 */
const unsetWeakMaps = (obj, instance) => {
  for (const i in obj) {
    obj[i].delete(instance);
  }
};

var instanceMethods = /*#__PURE__*/Object.freeze({
  __proto__: null,
  _destroy: _destroy,
  close: close,
  closeModal: close,
  closePopup: close,
  closeToast: close,
  disableButtons: disableButtons,
  disableInput: disableInput,
  disableLoading: hideLoading,
  enableButtons: enableButtons,
  enableInput: enableInput,
  getInput: getInput,
  handleAwaitingPromise: handleAwaitingPromise,
  hideLoading: hideLoading,
  rejectPromise: rejectPromise,
  resetValidationMessage: resetValidationMessage,
  showValidationMessage: showValidationMessage,
  update: update
});

/**
 * @param {SweetAlertOptions} innerParams
 * @param {DomCache} domCache
 * @param {(dismiss: DismissReason) => void} dismissWith
 */
const handlePopupClick = (innerParams, domCache, dismissWith) => {
  if (innerParams.toast) {
    handleToastClick(innerParams, domCache, dismissWith);
  } else {
    // Ignore click events that had mousedown on the popup but mouseup on the container
    // This can happen when the user drags a slider
    handleModalMousedown(domCache);

    // Ignore click events that had mousedown on the container but mouseup on the popup
    handleContainerMousedown(domCache);
    handleModalClick(innerParams, domCache, dismissWith);
  }
};

/**
 * @param {SweetAlertOptions} innerParams
 * @param {DomCache} domCache
 * @param {(dismiss: DismissReason) => void} dismissWith
 */
const handleToastClick = (innerParams, domCache, dismissWith) => {
  // Closing toast by internal click
  domCache.popup.onclick = () => {
    if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
      return;
    }
    dismissWith(DismissReason.close);
  };
};

/**
 * @param {SweetAlertOptions} innerParams
 * @returns {boolean}
 */
const isAnyButtonShown = innerParams => {
  return Boolean(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
};
let ignoreOutsideClick = false;

/**
 * @param {DomCache} domCache
 */
const handleModalMousedown = domCache => {
  domCache.popup.onmousedown = () => {
    domCache.container.onmouseup = function (e) {
      domCache.container.onmouseup = () => {};
      // We only check if the mouseup target is the container because usually it doesn't
      // have any other direct children aside of the popup
      if (e.target === domCache.container) {
        ignoreOutsideClick = true;
      }
    };
  };
};

/**
 * @param {DomCache} domCache
 */
const handleContainerMousedown = domCache => {
  domCache.container.onmousedown = e => {
    // prevent the modal text from being selected on double click on the container (allowOutsideClick: false)
    if (e.target === domCache.container) {
      e.preventDefault();
    }
    domCache.popup.onmouseup = function (e) {
      domCache.popup.onmouseup = () => {};
      // We also need to check if the mouseup target is a child of the popup
      if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) {
        ignoreOutsideClick = true;
      }
    };
  };
};

/**
 * @param {SweetAlertOptions} innerParams
 * @param {DomCache} domCache
 * @param {(dismiss: DismissReason) => void} dismissWith
 */
const handleModalClick = (innerParams, domCache, dismissWith) => {
  domCache.container.onclick = e => {
    if (ignoreOutsideClick) {
      ignoreOutsideClick = false;
      return;
    }
    if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
      dismissWith(DismissReason.backdrop);
    }
  };
};

/**
 * @param {any} elem
 * @returns {boolean}
 */
const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;

/**
 * @param {any} elem
 * @returns {boolean}
 */
const isElement = elem => elem instanceof Element || isJqueryElement(elem);

/**
 * @param {any[]} args
 * @returns {SweetAlertOptions}
 */
const argsToParams = args => {
  /** @type {Record<string, any>} */
  const params = {};
  if (typeof args[0] === 'object' && !isElement(args[0])) {
    Object.assign(params, args[0]);
  } else {
    ['title', 'html', 'icon'].forEach((name, index) => {
      const arg = args[index];
      if (typeof arg === 'string' || isElement(arg)) {
        params[name] = arg;
      } else if (arg !== undefined) {
        error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
      }
    });
  }
  return params;
};

/**
 * Main method to create a new SweetAlert2 popup
 *
 * @this {new (...args: any[]) => any}
 * @param  {...SweetAlertOptions} args
 * @returns {Promise<SweetAlertResult>}
 */
function fire(...args) {
  return new this(...args);
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param {SweetAlertOptions} mixinParams
 * @returns {SweetAlert}
 * @this {typeof import('../SweetAlert.js').SweetAlert}
 */
function mixin(mixinParams) {
  // @ts-ignore: 'this' refers to the SweetAlert constructor
  class MixinSwal extends this {
    /**
     * @param {any} params
     * @param {any} priorityMixinParams
     */
    _main(params, priorityMixinParams) {
      return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
    }
  }
  // @ts-ignore
  return MixinSwal;
}

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 *
 * @returns {number | undefined}
 */
const getTimerLeft = () => {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};

/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 *
 * @returns {number | undefined}
 */
const stopTimer = () => {
  if (globalState.timeout) {
    stopTimerProgressBar();
    return globalState.timeout.stop();
  }
};

/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 *
 * @returns {number | undefined}
 */
const resumeTimer = () => {
  if (globalState.timeout) {
    const remaining = globalState.timeout.start();
    animateTimerProgressBar(remaining);
    return remaining;
  }
};

/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 *
 * @returns {number | undefined}
 */
const toggleTimer = () => {
  const timer = globalState.timeout;
  return timer && (timer.running ? stopTimer() : resumeTimer());
};

/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 *
 * @param {number} ms
 * @returns {number | undefined}
 */
const increaseTimer = ms => {
  if (globalState.timeout) {
    const remaining = globalState.timeout.increase(ms);
    animateTimerProgressBar(remaining, true);
    return remaining;
  }
};

/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 *
 * @returns {boolean}
 */
const isTimerRunning = () => {
  return Boolean(globalState.timeout && globalState.timeout.isRunning());
};

let bodyClickListenerAdded = false;
/** @type {Record<string, any>} */
const clickHandlers = {};

/**
 * @this {any}
 * @param {string} attr
 */
function bindClickHandler(attr = 'data-swal-template') {
  clickHandlers[attr] = this;
  if (!bodyClickListenerAdded) {
    document.body.addEventListener('click', bodyClickListener);
    bodyClickListenerAdded = true;
  }
}

/**
 * @param {MouseEvent} event
 */
const bodyClickListener = event => {
  for (let el = /** @type {any} */event.target; el && el !== document; el = el.parentNode) {
    for (const attr in clickHandlers) {
      const template = el.getAttribute && el.getAttribute(attr);
      if (template) {
        clickHandlers[attr].fire({
          template
        });
        return;
      }
    }
  }
};

// Source: https://gist.github.com/mudge/5830382?permalink_comment_id=2691957#gistcomment-2691957

class EventEmitter {
  constructor() {
    /** @type {Events} */
    this.events = {};
  }

  /**
   * @param {string} eventName
   * @returns {EventHandlers}
   */
  _getHandlersByEventName(eventName) {
    if (typeof this.events[eventName] === 'undefined') {
      // not Set because we need to keep the FIFO order
      // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1748990334
      this.events[eventName] = [];
    }
    return this.events[eventName];
  }

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  on(eventName, eventHandler) {
    const currentHandlers = this._getHandlersByEventName(eventName);
    if (!currentHandlers.includes(eventHandler)) {
      currentHandlers.push(eventHandler);
    }
  }

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  once(eventName, eventHandler) {
    /**
     * @param {...any} args
     */
    const onceFn = (...args) => {
      this.removeListener(eventName, onceFn);
      // @ts-ignore
      eventHandler.apply(this, args);
    };
    this.on(eventName, onceFn);
  }

  /**
   * @param {string} eventName
   * @param {...any} args
   */
  emit(eventName, ...args) {
    this._getHandlersByEventName(eventName).forEach(
    /**
     * @param {EventHandler} eventHandler
     */
    eventHandler => {
      try {
        // @ts-ignore
        eventHandler.apply(this, args);
      } catch (error) {
        console.error(error);
      }
    });
  }

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  removeListener(eventName, eventHandler) {
    const currentHandlers = this._getHandlersByEventName(eventName);
    const index = currentHandlers.indexOf(eventHandler);
    if (index > -1) {
      currentHandlers.splice(index, 1);
    }
  }

  /**
   * @param {string} eventName
   */
  removeAllListeners(eventName) {
    if (this.events[eventName] !== undefined) {
      // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1749239222
      this.events[eventName].length = 0;
    }
  }
  reset() {
    this.events = {};
  }
}

globalState.eventEmitter = new EventEmitter();

/**
 * @param {string} eventName
 * @param {EventHandler} eventHandler
 */
const on = (eventName, eventHandler) => {
  if (globalState.eventEmitter) {
    globalState.eventEmitter.on(eventName, eventHandler);
  }
};

/**
 * @param {string} eventName
 * @param {EventHandler} eventHandler
 */
const once = (eventName, eventHandler) => {
  if (globalState.eventEmitter) {
    globalState.eventEmitter.once(eventName, eventHandler);
  }
};

/**
 * @param {string} [eventName]
 * @param {EventHandler} [eventHandler]
 */
const off = (eventName, eventHandler) => {
  if (!globalState.eventEmitter) {
    return;
  }

  // Remove all handlers for all events
  if (!eventName) {
    globalState.eventEmitter.reset();
    return;
  }
  if (eventHandler) {
    // Remove a specific handler
    globalState.eventEmitter.removeListener(eventName, eventHandler);
  } else {
    // Remove all handlers for a specific event
    globalState.eventEmitter.removeAllListeners(eventName);
  }
};

var staticMethods = /*#__PURE__*/Object.freeze({
  __proto__: null,
  argsToParams: argsToParams,
  bindClickHandler: bindClickHandler,
  clickCancel: clickCancel,
  clickConfirm: clickConfirm,
  clickDeny: clickDeny,
  enableLoading: showLoading,
  fire: fire,
  getActions: getActions,
  getCancelButton: getCancelButton,
  getCloseButton: getCloseButton,
  getConfirmButton: getConfirmButton,
  getContainer: getContainer,
  getDenyButton: getDenyButton,
  getFocusableElements: getFocusableElements,
  getFooter: getFooter,
  getHtmlContainer: getHtmlContainer,
  getIcon: getIcon,
  getIconContent: getIconContent,
  getImage: getImage,
  getInputLabel: getInputLabel,
  getLoader: getLoader,
  getPopup: getPopup,
  getProgressSteps: getProgressSteps,
  getTimerLeft: getTimerLeft,
  getTimerProgressBar: getTimerProgressBar,
  getTitle: getTitle,
  getValidationMessage: getValidationMessage,
  increaseTimer: increaseTimer,
  isDeprecatedParameter: isDeprecatedParameter,
  isLoading: isLoading,
  isTimerRunning: isTimerRunning,
  isUpdatableParameter: isUpdatableParameter,
  isValidParameter: isValidParameter,
  isVisible: isVisible,
  mixin: mixin,
  off: off,
  on: on,
  once: once,
  resumeTimer: resumeTimer,
  showLoading: showLoading,
  stopTimer: stopTimer,
  toggleTimer: toggleTimer
});

class Timer {
  /**
   * @param {() => void} callback
   * @param {number} delay
   */
  constructor(callback, delay) {
    this.callback = callback;
    this.remaining = delay;
    this.running = false;
    this.start();
  }

  /**
   * @returns {number}
   */
  start() {
    if (!this.running) {
      this.running = true;
      this.started = new Date();
      this.id = setTimeout(this.callback, this.remaining);
    }
    return this.remaining;
  }

  /**
   * @returns {number}
   */
  stop() {
    if (this.started && this.running) {
      this.running = false;
      clearTimeout(this.id);
      this.remaining -= new Date().getTime() - this.started.getTime();
    }
    return this.remaining;
  }

  /**
   * @param {number} n
   * @returns {number}
   */
  increase(n) {
    const running = this.running;
    if (running) {
      this.stop();
    }
    this.remaining += n;
    if (running) {
      this.start();
    }
    return this.remaining;
  }

  /**
   * @returns {number}
   */
  getTimerLeft() {
    if (this.running) {
      this.stop();
      this.start();
    }
    return this.remaining;
  }

  /**
   * @returns {boolean}
   */
  isRunning() {
    return this.running;
  }
}

const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

/**
 * @param {SweetAlertOptions} params
 * @returns {SweetAlertOptions}
 */
const getTemplateParams = params => {
  const template = typeof params.template === 'string' ? (/** @type {HTMLTemplateElement} */document.querySelector(params.template)) : params.template;
  if (!template) {
    return {};
  }
  /** @type {DocumentFragment} */
  const templateContent = template.content;
  showWarningsForElements(templateContent);
  const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 * @returns {Record<string, string | boolean | number>}
 */
const getSwalParams = templateContent => {
  /** @type {Record<string, string | boolean | number>} */
  const result = {};
  /** @type {HTMLElement[]} */
  const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
  swalParams.forEach(param => {
    showWarningsForAttributes(param, ['name', 'value']);
    const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
    const value = param.getAttribute('value');
    if (!paramName || !value) {
      return;
    }
    if (paramName in defaultParams && typeof defaultParams[(/** @type {keyof typeof defaultParams} */paramName)] === 'boolean') {
      result[paramName] = value !== 'false';
    } else if (paramName in defaultParams && typeof defaultParams[(/** @type {keyof typeof defaultParams} */paramName)] === 'object') {
      result[paramName] = JSON.parse(value);
    } else {
      result[paramName] = value;
    }
  });
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 * @returns {Record<string, () => void>}
 */
const getSwalFunctionParams = templateContent => {
  /** @type {Record<string, () => void>} */
  const result = {};
  /** @type {HTMLElement[]} */
  const swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
  swalFunctions.forEach(param => {
    const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
    const value = param.getAttribute('value');
    if (!paramName || !value) {
      return;
    }
    result[paramName] = new Function(`return ${value}`)();
  });
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 * @returns {Record<string, string | boolean>}
 */
const getSwalButtons = templateContent => {
  /** @type {Record<string, string | boolean>} */
  const result = {};
  /** @type {HTMLElement[]} */
  const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
  swalButtons.forEach(button => {
    showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
    const type = button.getAttribute('type');
    if (!type || !['confirm', 'cancel', 'deny'].includes(type)) {
      return;
    }
    result[`${type}ButtonText`] = button.innerHTML;
    result[`show${capitalizeFirstLetter$2(type)}Button`] = true;
    if (button.hasAttribute('color')) {
      const color = button.getAttribute('color');
      if (color !== null) {
        result[`${type}ButtonColor`] = color;
      }
    }
    if (button.hasAttribute('aria-label')) {
      const ariaLabel = button.getAttribute('aria-label');
      if (ariaLabel !== null) {
        result[`${type}ButtonAriaLabel`] = ariaLabel;
      }
    }
  });
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 * @returns {Pick<SweetAlertOptions, 'imageUrl' | 'imageWidth' | 'imageHeight' | 'imageAlt'>}
 */
const getSwalImage = templateContent => {
  const result = {};
  /** @type {HTMLElement | null} */
  const image = templateContent.querySelector('swal-image');
  if (image) {
    showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
    if (image.hasAttribute('src')) {
      result.imageUrl = image.getAttribute('src') || undefined;
    }
    if (image.hasAttribute('width')) {
      result.imageWidth = image.getAttribute('width') || undefined;
    }
    if (image.hasAttribute('height')) {
      result.imageHeight = image.getAttribute('height') || undefined;
    }
    if (image.hasAttribute('alt')) {
      result.imageAlt = image.getAttribute('alt') || undefined;
    }
  }
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 * @returns {object}
 */
const getSwalIcon = templateContent => {
  const result = {};
  /** @type {HTMLElement | null} */
  const icon = templateContent.querySelector('swal-icon');
  if (icon) {
    showWarningsForAttributes(icon, ['type', 'color']);
    if (icon.hasAttribute('type')) {
      result.icon = icon.getAttribute('type');
    }
    if (icon.hasAttribute('color')) {
      result.iconColor = icon.getAttribute('color');
    }
    result.iconHtml = icon.innerHTML;
  }
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 * @returns {object}
 */
const getSwalInput = templateContent => {
  /** @type {Record<string, any>} */
  const result = {};
  /** @type {HTMLElement | null} */
  const input = templateContent.querySelector('swal-input');
  if (input) {
    showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
    result.input = input.getAttribute('type') || 'text';
    if (input.hasAttribute('label')) {
      result.inputLabel = input.getAttribute('label');
    }
    if (input.hasAttribute('placeholder')) {
      result.inputPlaceholder = input.getAttribute('placeholder');
    }
    if (input.hasAttribute('value')) {
      result.inputValue = input.getAttribute('value');
    }
  }
  /** @type {HTMLElement[]} */
  const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
  if (inputOptions.length) {
    result.inputOptions = {};
    inputOptions.forEach(option => {
      showWarningsForAttributes(option, ['value']);
      const optionValue = option.getAttribute('value');
      if (!optionValue) {
        return;
      }
      const optionName = option.innerHTML;
      result.inputOptions[optionValue] = optionName;
    });
  }
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 * @param {string[]} paramNames
 * @returns {Record<string, string>}
 */
const getSwalStringParams = (templateContent, paramNames) => {
  /** @type {Record<string, string>} */
  const result = {};
  for (const i in paramNames) {
    const paramName = paramNames[i];
    /** @type {HTMLElement | null} */
    const tag = templateContent.querySelector(paramName);
    if (tag) {
      showWarningsForAttributes(tag, []);
      result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
    }
  }
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 */
const showWarningsForElements = templateContent => {
  const allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
  Array.from(templateContent.children).forEach(el => {
    const tagName = el.tagName.toLowerCase();
    if (!allowedElements.includes(tagName)) {
      warn(`Unrecognized element <${tagName}>`);
    }
  });
};

/**
 * @param {HTMLElement} el
 * @param {string[]} allowedAttributes
 */
const showWarningsForAttributes = (el, allowedAttributes) => {
  Array.from(el.attributes).forEach(attribute => {
    if (allowedAttributes.indexOf(attribute.name) === -1) {
      warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`]);
    }
  });
};

const SHOW_CLASS_TIMEOUT = 10;

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {SweetAlertOptions} params
 */
const openPopup = params => {
  var _globalState$eventEmi, _globalState$eventEmi2;
  const container = getContainer();
  const popup = getPopup();
  if (!container || !popup) {
    return;
  }
  if (typeof params.willOpen === 'function') {
    params.willOpen(popup);
  }
  (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === void 0 || _globalState$eventEmi.emit('willOpen', popup);
  const bodyStyles = window.getComputedStyle(document.body);
  const initialBodyOverflow = bodyStyles.overflowY;
  addClasses(container, popup, params);

  // scrolling is 'hidden' until animation is done, after that 'auto'
  setTimeout(() => {
    setScrollingVisibility(container, popup);
  }, SHOW_CLASS_TIMEOUT);
  if (isModal()) {
    // Using ternary instead of ?? operator for Webpack 4 compatibility
    fixScrollContainer(container, params.scrollbarPadding !== undefined ? params.scrollbarPadding : false, initialBodyOverflow);
    setAriaHidden();
  }
  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }
  if (typeof params.didOpen === 'function') {
    const didOpen = params.didOpen;
    setTimeout(() => didOpen(popup));
  }
  (_globalState$eventEmi2 = globalState.eventEmitter) === null || _globalState$eventEmi2 === void 0 || _globalState$eventEmi2.emit('didOpen', popup);
};

/**
 * @param {Event} event
 */
const swalOpenAnimationFinished = event => {
  const popup = getPopup();
  if (!popup || event.target !== popup) {
    return;
  }
  const container = getContainer();
  if (!container) {
    return;
  }
  popup.removeEventListener('animationend', swalOpenAnimationFinished);
  popup.removeEventListener('transitionend', swalOpenAnimationFinished);
  container.style.overflowY = 'auto';

  // no-transition is added in init() in case one swal is opened right after another
  removeClass(container, swalClasses['no-transition']);
};

/**
 * @param {HTMLElement} container
 * @param {HTMLElement} popup
 */
const setScrollingVisibility = (container, popup) => {
  if (hasCssAnimation(popup)) {
    container.style.overflowY = 'hidden';
    popup.addEventListener('animationend', swalOpenAnimationFinished);
    popup.addEventListener('transitionend', swalOpenAnimationFinished);
  } else {
    container.style.overflowY = 'auto';
  }
};

/**
 * @param {HTMLElement} container
 * @param {boolean} scrollbarPadding
 * @param {string} initialBodyOverflow
 */
const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
  iOSfix();
  if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
    replaceScrollbarWithPadding(initialBodyOverflow);
  }

  // sweetalert2/issues/1247
  setTimeout(() => {
    container.scrollTop = 0;
  });
};

/**
 * @param {HTMLElement} container
 * @param {HTMLElement} popup
 * @param {SweetAlertOptions} params
 */
const addClasses = (container, popup, params) => {
  var _params$showClass;
  if ((_params$showClass = params.showClass) !== null && _params$showClass !== void 0 && _params$showClass.backdrop) {
    addClass(container, params.showClass.backdrop);
  }
  if (params.animation) {
    // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      var _params$showClass2;
      // Animate popup right after showing it
      if ((_params$showClass2 = params.showClass) !== null && _params$showClass2 !== void 0 && _params$showClass2.popup) {
        addClass(popup, params.showClass.popup);
      }
      // and remove the opacity workaround
      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
  } else {
    show(popup, 'grid');
  }
  addClass([document.documentElement, document.body], swalClasses.shown);
  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }
};

var defaultInputValidators = {
  /**
   * @param {string} string
   * @param {string} [validationMessage]
   * @returns {Promise<string | void>}
   */
  email: (string, validationMessage) => {
    return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
  },
  /**
   * @param {string} string
   * @param {string} [validationMessage]
   * @returns {Promise<string | void>}
   */
  url: (string, validationMessage) => {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
  }
};

/**
 * @param {SweetAlertOptions} params
 */
function setDefaultInputValidators(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (params.inputValidator) {
    return;
  }
  if (params.input === 'email') {
    params.inputValidator = defaultInputValidators['email'];
  }
  if (params.input === 'url') {
    params.inputValidator = defaultInputValidators['url'];
  }
}

/**
 * @param {SweetAlertOptions} params
 */
function validateCustomTargetElement(params) {
  // Determine if the custom target element is valid
  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }
}

/**
 * Set type, text and actions on popup
 *
 * @param {SweetAlertOptions} params
 */
function setParameters(params) {
  setDefaultInputValidators(params);

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
  validateCustomTargetElement(params);

  // Replace newlines with <br> in title
  if (typeof params.title === 'string') {
    params.title = params.title.split('\n').join('<br />');
  }
  init(params);
}

/** @type {SweetAlert} */
let currentInstance;
var _promise = /*#__PURE__*/new WeakMap();
class SweetAlert {
  /**
   * @param {...(SweetAlertOptions | string)} args
   * @this {SweetAlert}
   */
  constructor(...args) {
    /**
     * @type {Promise<SweetAlertResult>}
     */
    _classPrivateFieldInitSpec(this, _promise, /** @type {Promise<SweetAlertResult>} */Promise.resolve({
      isConfirmed: false,
      isDenied: false,
      isDismissed: true
    }));
    // Prevent run in Node env
    if (typeof window === 'undefined') {
      return;
    }
    currentInstance = this;

    // @ts-ignore
    const outerParams = Object.freeze(this.constructor.argsToParams(args));

    /** @type {Readonly<SweetAlertOptions>} */
    this.params = outerParams;

    /** @type {boolean} */
    this.isAwaitingPromise = false;
    _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
  }

  /**
   * @param {any} userParams
   * @param {any} mixinParams
   */
  _main(userParams, mixinParams = {}) {
    showWarningsForParams(Object.assign({}, mixinParams, userParams));
    if (globalState.currentInstance) {
      const swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
      const {
        isAwaitingPromise
      } = globalState.currentInstance;
      globalState.currentInstance._destroy();
      if (!isAwaitingPromise) {
        swalPromiseResolve({
          isDismissed: true
        });
      }
      if (isModal()) {
        unsetAriaHidden();
      }
    }
    globalState.currentInstance = currentInstance;
    const innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams);

    // clear the previous timer
    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    }

    // clear the restore focus timeout
    clearTimeout(globalState.restoreFocusTimeout);
    const domCache = populateDomCache(currentInstance);
    render(currentInstance, innerParams);
    privateProps.innerParams.set(currentInstance, innerParams);
    return swalPromise(currentInstance, domCache, innerParams);
  }

  // `catch` cannot be the name of a module export, so we define our thenable methods here instead
  /**
   * @param {any} onFulfilled
   */
  then(onFulfilled) {
    return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
  }

  /**
   * @param {any} onFinally
   */
  finally(onFinally) {
    return _classPrivateFieldGet2(_promise, this).finally(onFinally);
  }
}

/**
 * @param {SweetAlert} instance
 * @param {DomCache} domCache
 * @param {SweetAlertOptions} innerParams
 * @returns {Promise<SweetAlertResult>}
 */
const swalPromise = (instance, domCache, innerParams) => {
  return new Promise((resolve, reject) => {
    // functions to handle all closings/dismissals
    /**
     * @param {DismissReason} dismiss
     */
    const dismissWith = dismiss => {
      instance.close({
        isDismissed: true,
        dismiss,
        isConfirmed: false,
        isDenied: false
      });
    };
    privateMethods.swalPromiseResolve.set(instance, resolve);
    privateMethods.swalPromiseReject.set(instance, reject);
    domCache.confirmButton.onclick = () => {
      handleConfirmButtonClick(instance);
    };
    domCache.denyButton.onclick = () => {
      handleDenyButtonClick(instance);
    };
    domCache.cancelButton.onclick = () => {
      handleCancelButtonClick(instance, dismissWith);
    };
    domCache.closeButton.onclick = () => {
      dismissWith(DismissReason.close);
    };
    handlePopupClick(innerParams, domCache, dismissWith);
    addKeydownHandler(globalState, innerParams, dismissWith);
    handleInputOptionsAndValue(instance, innerParams);
    openPopup(innerParams);
    setupTimer(globalState, innerParams, dismissWith);
    initFocus(domCache, innerParams);

    // Scroll container to top on open (#1247, #1946)
    setTimeout(() => {
      domCache.container.scrollTop = 0;
    });
  });
};

/**
 * @param {SweetAlertOptions} userParams
 * @param {SweetAlertOptions} mixinParams
 * @returns {SweetAlertOptions}
 */
const prepareParams = (userParams, mixinParams) => {
  const templateParams = getTemplateParams(userParams);
  const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
  params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
  params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
  if (params.animation === false) {
    params.showClass = {
      backdrop: 'swal2-noanimation'
    };
    params.hideClass = {};
  }
  return params;
};

/**
 * @param {SweetAlert} instance
 * @returns {DomCache}
 */
const populateDomCache = instance => {
  const domCache = /** @type {DomCache} */{
    popup: (/** @type {HTMLElement} */getPopup()),
    container: (/** @type {HTMLElement} */getContainer()),
    actions: (/** @type {HTMLElement} */getActions()),
    confirmButton: (/** @type {HTMLElement} */getConfirmButton()),
    denyButton: (/** @type {HTMLElement} */getDenyButton()),
    cancelButton: (/** @type {HTMLElement} */getCancelButton()),
    loader: (/** @type {HTMLElement} */getLoader()),
    closeButton: (/** @type {HTMLElement} */getCloseButton()),
    validationMessage: (/** @type {HTMLElement} */getValidationMessage()),
    progressSteps: (/** @type {HTMLElement} */getProgressSteps())
  };
  privateProps.domCache.set(instance, domCache);
  return domCache;
};

/**
 * @param {GlobalState} globalState
 * @param {SweetAlertOptions} innerParams
 * @param {(dismiss: DismissReason) => void} dismissWith
 */
const setupTimer = (globalState, innerParams, dismissWith) => {
  const timerProgressBar = getTimerProgressBar();
  hide(timerProgressBar);
  if (innerParams.timer) {
    globalState.timeout = new Timer(() => {
      dismissWith('timer');
      delete globalState.timeout;
    }, innerParams.timer);
    if (innerParams.timerProgressBar && timerProgressBar) {
      show(timerProgressBar);
      applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
      setTimeout(() => {
        if (globalState.timeout && globalState.timeout.running) {
          // timer can be already stopped or unset at this point
          animateTimerProgressBar(/** @type {number} */innerParams.timer);
        }
      });
    }
  }
};

/**
 * Initialize focus in the popup:
 *
 * 1. If `toast` is `true`, don't steal focus from the document.
 * 2. Else if there is an [autofocus] element, focus it.
 * 3. Else if `focusConfirm` is `true` and confirm button is visible, focus it.
 * 4. Else if `focusDeny` is `true` and deny button is visible, focus it.
 * 5. Else if `focusCancel` is `true` and cancel button is visible, focus it.
 * 6. Else focus the first focusable element in a popup (if any).
 *
 * @param {DomCache} domCache
 * @param {SweetAlertOptions} innerParams
 */
const initFocus = (domCache, innerParams) => {
  if (innerParams.toast) {
    return;
  }
  // TODO: this is dumb, remove `allowEnterKey` param in the next major version
  if (!callIfFunction(innerParams.allowEnterKey)) {
    warnAboutDeprecation('allowEnterKey');
    blurActiveElement();
    return;
  }
  if (focusAutofocus(domCache)) {
    return;
  }
  if (focusButton(domCache, innerParams)) {
    return;
  }
  setFocus(-1, 1);
};

/**
 * @param {DomCache} domCache
 * @returns {boolean}
 */
const focusAutofocus = domCache => {
  const autofocusElements = Array.from(domCache.popup.querySelectorAll('[autofocus]'));
  for (const autofocusElement of autofocusElements) {
    if (autofocusElement instanceof HTMLElement && isVisible$1(autofocusElement)) {
      autofocusElement.focus();
      return true;
    }
  }
  return false;
};

/**
 * @param {DomCache} domCache
 * @param {SweetAlertOptions} innerParams
 * @returns {boolean}
 */
const focusButton = (domCache, innerParams) => {
  if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
    domCache.denyButton.focus();
    return true;
  }
  if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
    domCache.cancelButton.focus();
    return true;
  }
  if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
    domCache.confirmButton.focus();
    return true;
  }
  return false;
};
const blurActiveElement = () => {
  if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }
};

// Assign instance methods from src/instanceMethods/*.js to prototype
SweetAlert.prototype.disableButtons = disableButtons;
SweetAlert.prototype.enableButtons = enableButtons;
SweetAlert.prototype.getInput = getInput;
SweetAlert.prototype.disableInput = disableInput;
SweetAlert.prototype.enableInput = enableInput;
SweetAlert.prototype.hideLoading = hideLoading;
SweetAlert.prototype.disableLoading = hideLoading;
SweetAlert.prototype.showValidationMessage = showValidationMessage;
SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
SweetAlert.prototype.close = close;
SweetAlert.prototype.closePopup = close;
SweetAlert.prototype.closeModal = close;
SweetAlert.prototype.closeToast = close;
SweetAlert.prototype.rejectPromise = rejectPromise;
SweetAlert.prototype.update = update;
SweetAlert.prototype._destroy = _destroy;

// Assign static methods from src/staticMethods/*.js to constructor
Object.assign(SweetAlert, staticMethods);

// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(instanceMethods).forEach(key => {
  /**
   * @param {...(SweetAlertOptions | string | undefined)} args
   * @returns {SweetAlertResult | Promise<SweetAlertResult> | undefined}
   */
  // @ts-ignore: Dynamic property assignment for backwards compatibility
  SweetAlert[key] = function (...args) {
    // @ts-ignore
    if (currentInstance && currentInstance[key]) {
      // @ts-ignore
      return currentInstance[key](...args);
    }
    return undefined;
  };
});
SweetAlert.DismissReason = DismissReason;
SweetAlert.version = '11.26.17';

const Swal = SweetAlert;
// @ts-ignore
Swal.default = Swal;
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t;}catch(e){n.innerText=t;}}(document,":root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}");

// sweetalert2-react-content v5.1.1


const mounts = [{
  key: 'title',
  getter: swal => swal.getTitle()
}, {
  key: 'html',
  getter: swal => swal.getHtmlContainer()
}, {
  key: 'confirmButtonText',
  getter: swal => swal.getConfirmButton()
}, {
  key: 'denyButtonText',
  getter: swal => swal.getDenyButton()
}, {
  key: 'cancelButtonText',
  getter: swal => swal.getCancelButton()
}, {
  key: 'footer',
  getter: swal => swal.getFooter()
}, {
  key: 'closeButtonHtml',
  getter: swal => swal.getCloseButton()
}, {
  key: 'iconHtml',
  getter: swal => swal.getIconContent()
}, {
  key: 'loaderHtml',
  getter: swal => swal.getLoader()
}];

const noop = () => {};
function withReactContent(ParentSwal) {
  /* Returns `params` separated into a tuple of `reactParams` (the React params that need to be rendered)
  and`otherParams` (all the other parameters, with any React params replaced with a space ' ') */
  function extractReactParams(params) {
    const reactParams = {};
    const otherParams = {};
    const mountKeys = mounts.map(mount => mount.key);
    Object.entries(params).forEach(_ref => {
      let [key, value] = _ref;
      if (mountKeys.includes(key) && /*#__PURE__*/React.isValidElement(value)) {
        reactParams[key] = value;
        otherParams[key] = ' ';
      } else {
        otherParams[key] = value;
      }
    });
    return [reactParams, otherParams];
  }
  function render(swal, reactParams) {
    Object.entries(reactParams).forEach(_ref2 => {
      let [key, value] = _ref2;
      const mount = mounts.find(mount => mount.key === key);
      const domElement = mount.getter(ParentSwal);
      const root = createRoot(domElement);
      root.render(value);
      swal.__roots.push(root);
    });
  }
  function unrender(swal) {
    swal.__roots.forEach(root => {
      root.unmount();
    });
    swal.__roots = [];
  }
  return class extends ParentSwal {
    static argsToParams(args) {
      if (/*#__PURE__*/React.isValidElement(args[0]) || /*#__PURE__*/React.isValidElement(args[1])) {
        const params = {};
        ['title', 'html', 'icon'].forEach((name, index) => {
          if (args[index] !== undefined) {
            params[name] = args[index];
          }
        });
        return params;
      } else {
        return ParentSwal.argsToParams(args);
      }
    }
    _main(params, mixinParams) {
      this.__roots = [];
      this.__params = Object.assign({}, mixinParams, params);
      const [reactParams, otherParams] = extractReactParams(this.__params);
      const superWillOpen = otherParams.willOpen || noop;
      const superDidOpen = otherParams.didOpen || noop;
      const superDidDestroy = otherParams.didDestroy || noop;
      return super._main(Object.assign({}, otherParams, {
        willOpen: popup => {
          render(this, reactParams);
          superWillOpen(popup);
        },
        didOpen: popup => {
          // read more about why this setTimeout is needed here:
          // https://github.com/reactwg/react-18/discussions/5 (What about the render callback?)
          setTimeout(() => {
            superDidOpen(popup);
          });
        },
        didDestroy: popup => {
          superDidDestroy(popup);
          unrender(this);
        }
      }));
    }
    update(params) {
      Object.assign(this.__params, params);
      unrender(this);
      const [reactParams, otherParams] = extractReactParams(this.__params);
      super.update(otherParams);
      render(this, reactParams);
    }
  };
}

const IconBase = ({ size = "1em", className, children, ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className,
    ...props,
    children
  }
);
const IconSchedule = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" }) });
const IconVisibility = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }) });
const IconAutoStories = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M19 1l-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-1.45-1.1-3.55-1.5-5.5-1.5s-4.05.4-5.5 1.5v15.5c1.45-1.1 3.55-1.5 5.5-1.5 1.45 0 3.4.45 4.75 1.1.1.05.15.05.25.05.25 0 .5-.25.5-.5z" }) });
const IconSettings = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" }) });

function getStarNames(starIds) {
  return starIds.map((idStar) => SM$1[idStar].name).join(", ");
}
function getSmallStarNames(starIds) {
  return starIds.filter((idStarSS) => idStarSS < 40 || idStarSS > 51).map((sao) => SM$1[sao].name).join(", ");
}
function getTruongSinhStarNames(starIds) {
  return starIds.filter((idStarSS) => idStarSS >= 40 && idStarSS <= 51).map((sao) => SM$1[sao].name).join(", ");
}
function getTuanTrietStarNames(zoneCi, ttr) {
  if (ttr[0][0].includes(zoneCi) && ttr[0][1].includes(zoneCi)) {
    return ", Tuần, Triệt";
  } else if (ttr[0][0].includes(zoneCi)) {
    return ", Tuần";
  } else if (ttr[0][1].includes(zoneCi)) {
    return ", Triệt";
  }
  return "";
}
function capitalizeFirstLetter$1(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function toBase64(str) {
  try {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16))));
  } catch (e) {
    return "";
  }
}
function generateData(ls, typeVan = 0) {
  if (!ls || !ls.ars) return [];
  const myData = [];
  ls.ars.forEach((zone) => {
    let lstStar = zone.sb.length > 0 ? `${getStarNames(zone.sb)}, ` : `VCD xung (${getStarNames(ls.ars[xtngl$1[zone.ci].x].sb).replace(",", " -")}), `;
    lstStar += `${getSmallStarNames(zone.ss)}, `;
    lstStar += getTruongSinhStarNames(zone.ss);
    lstStar += getTuanTrietStarNames(zone.ci, ls.ttr);
    const nameCung = typeVan === 0 ? AREA_NAME$1[zone.ai] : typeVan === 1 ? AREA_NAME$1[zone.aid] : AREA_NAME$1[zone.ail];
    let namePhi = [`Phi Lộc đến `, `Phi Quyền đến `, `Phi Khoa đến `, `Phi Kị đến `];
    for (let dr = 0; dr <= 3; dr += 1) {
      const text = `${capitalizeFirstLetter$1(AREA_NAME$1[ls.ars[zone.cno[dr]].ai].toLowerCase())}`;
      namePhi[dr] += text;
    }
    namePhi = namePhi.join(", ");
    namePhi = `"${namePhi}"`;
    myData.push({
      name: `${nameCung.toString()} tại ${CHI$1[zone.ci]}`,
      cc: `${CAN$1[zone.cn]} ${CHI$1[zone.ci]}`,
      // phi: namePhi,
      dv: `${zone.dv} đến ${zone.dv + 9} tuổi tại cung ${nameCung.toString()}`,
      star: lstStar
    });
  });
  return myData;
}
function generateCSVTable(data) {
  const title = ["Tên cung vị trí cung", "Can Chi cung", "Đại vận", "Tên sao"];
  const header = title.join(",");
  const rows = data.map((item) => {
    const star = item.star.includes(",") ? `"${item.star}"` : item.star;
    return `${item.name}, ${item.cc}, ${item.dv}, ${star}`;
  });
  return [header, ...rows].join("\n");
}
const TabContent = ({ title, content, btnId, onCopy }) => /* @__PURE__ */ jsx("pre", { className: "overflow-visible!", children: /* @__PURE__ */ jsxs("div", { className: "rounded-md border-[0.5px] border-[#ffffff26] bg-[#ddd] contain-inline-size dark:bg-gray-950", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex h-9 items-center justify-center rounded-t-md bg-[#ccc] px-4 py-2 font-sans text-xs text-black/85 select-none", children: [
    /* @__PURE__ */ jsx("span", { children: title }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-1", onClick: () => onCopy(content, btnId), children: [
      /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24",
          className: "icon-sm",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z",
              clipRule: "evenodd"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("span", { id: btnId, className: "cursor-pointer pl-2 font-sans", children: "Click Copy - Lấy Text" })
    ] }) })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "", dir: "ltr", children: /* @__PURE__ */ jsx(
    "textarea",
    {
      className: "language-markdown h-[120px] w-full overflow-y-auto border-none bg-[#ddd] p-4 text-left font-mono text-xs leading-normal whitespace-pre-wrap text-[#686868] focus:bg-yellow-100 focus:outline-hidden",
      readOnly: true,
      value: content
    }
  ) })
] }) });
const CSVTable = ({ ls }) => {
  const [_activeTab] = useState("nguyenBan");
  const [_csvContent, setCsvContent] = useState("");
  const [_csvContentDv, setCsvContentDv] = useState("");
  const [_csvContentLn, setCsvContentLn] = useState("");
  const data = generateData(ls);
  const dataDv = generateData(ls, 1);
  const dataLn = generateData(ls, 2);
  const baseIf = getBaseText(ls);
  let request = "";
  request += `Giới tính ${baseIf.adage}, ${baseIf.ad} mệnh ${baseIf.hmenh} sinh mùa ${baseIf.mua}, ${baseIf.okmua}, cục ${baseIf.cuc}, ${baseIf.sk}, và thân cư ${baseIf.tcu}`;
  request += `
${baseIf.textbt}
`;
  request += "\n Luận tổng quát tử vi kết hợp bát tự";
  useEffect(() => {
    setCsvContent(toBase64(`${generateCSVTable(data)}

${request}`));
    setCsvContentDv(generateCSVTable(dataDv));
    setCsvContentLn(generateCSVTable(dataLn));
  }, [data, dataDv, dataLn]);
  const handleCopyClick = (content, btnId) => {
    const btnCopy = document.getElementById(btnId);
    if (!btnCopy) return;
    const originalText = btnCopy.textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(content).then(() => {
        btnCopy.textContent = "Đã copy";
        setTimeout(() => {
          btnCopy.textContent = originalText;
        }, 2e3);
      }).catch((err) => {
        console.warn("Clipboard API failed, trying fallback:", err);
        fallbackCopyTextToClipboard(content, btnCopy, originalText);
      });
    } else {
      fallbackCopyTextToClipboard(content, btnCopy, originalText);
    }
  };
  const fallbackCopyTextToClipboard = (text, btnElement, originalText) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    textArea.style.left = "-9999px";
    textArea.style.width = "1px";
    textArea.style.height = "1px";
    textArea.style.opacity = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.resize = "none";
    textArea.style.overflow = "hidden";
    document.body.appendChild(textArea);
    setTimeout(() => {
      try {
        textArea.focus();
        textArea.select();
        textArea.setSelectionRange(0, text.length);
        const successful = document.execCommand("copy");
        if (successful) {
          btnElement.textContent = "Đã copy";
          setTimeout(() => {
            btnElement.textContent = originalText;
          }, 2e3);
        } else {
          if (navigator.userAgent.match(/ipad|iphone/i)) {
            const tempDiv = document.createElement("div");
            tempDiv.innerText = text;
            tempDiv.style.position = "absolute";
            tempDiv.style.left = "-9999px";
            document.body.appendChild(tempDiv);
            const range = document.createRange();
            range.selectNodeContents(tempDiv);
            const selection = window.getSelection();
            if (selection) {
              selection.removeAllRanges();
              selection.addRange(range);
              const iosSuccess = document.execCommand("copy");
              selection.removeAllRanges();
              if (iosSuccess) {
                btnElement.textContent = "Đã copy";
                setTimeout(() => {
                  btnElement.textContent = originalText;
                }, 2e3);
              } else {
                throw new Error("iOS copy failed");
              }
            }
            document.body.removeChild(tempDiv);
          } else {
            throw new Error("Copy command failed");
          }
        }
      } catch (err) {
        console.error("Fallback copy error:", err);
        btnElement.textContent = "Copy thất bại";
        setTimeout(() => {
          btnElement.textContent = originalText;
        }, 2e3);
      }
      if (document.body.contains(textArea)) {
        document.body.removeChild(textArea);
      }
    }, 0);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(TabContent, { title: "", content: _csvContent, btnId: "btnCopy", onCopy: handleCopyClick }) });
};

class CalculationHelper {
  // Nhảy xuống từ vị trí idxStart
  jumpDown(idxStart) {
    return (idxStart + 11) % 12;
  }
  // Nhảy lên từ vị trí idxStart
  jumpUp(idxStart) {
    return (idxStart + 1) % 12;
  }
  // Tính toán vị trí sau khi di chuyển
  idxAfterMove(idxStart, steps, forward = true) {
    let currentIdx = forward ? this.jumpDown(idxStart) : this.jumpUp(idxStart);
    for (let i = 1; i <= steps; i++) {
      currentIdx = forward ? this.jumpUp(currentIdx) : this.jumpDown(currentIdx);
    }
    return currentIdx;
  }
  // Kiểm tra có thể nhảy xuống từ vị trí startIdxInput
  canJumpDown(startIdxInput) {
    return (startIdxInput - 1 + 10) % 10;
  }
  // Kiểm tra có thể nhảy lên từ vị trí startIdxInput
  canJumpUp(startIdxInput) {
    return (startIdxInput + 1) % 10;
  }
}

const ICHING_NUMBER = [
  "111111",
  // ䷀: Thuần Càn (Hexagram 1)
  "000000",
  // ䷁: Thuần Khôn (Hexagram 2)
  "010001",
  // ䷂: Thủy Lôi Truân (Hexagram 3)
  "100010",
  // ䷃: Sơn Thủy Mông (Hexagram 4)
  "010111",
  // ䷄: Thủy Thiên Nhu (Hexagram 5)
  "111010",
  // ䷅: Thiên Thủy Tụng (Hexagram 6)
  "000010",
  // ䷆: Địa Thủy Sư (Hexagram 7)
  "010000",
  // ䷇: Thủy Địa Tỷ (Hexagram 8)
  "110111",
  // ䷈: Phong Thiên Tiểu Súc (Hexagram 9)
  "111011",
  // ䷉: Thiên Trạch Lý (Hexagram 10)
  "000111",
  // ䷊: Địa Thiên Thái (Hexagram 11)
  "111000",
  // ䷋: Thiên Địa Bĩ (Hexagram 12)
  "111101",
  // ䷌: Thiên Hỏa Đồng Nhân (Hexagram 13)
  "101111",
  // ䷍: Hỏa Thiên Đại Hữu (Hexagram 14)
  "000100",
  // ䷎: Địa Sơn Khiêm (Hexagram 15)
  "001000",
  // ䷏: Lôi Địa Dự (Hexagram 16)
  "011001",
  // ䷐: Trạch Lôi Tùy (Hexagram 17)
  "100110",
  // ䷑: Sơn Phong Cổ (Hexagram 18)
  "000011",
  // ䷒: Địa Trạch Lâm (Hexagram 19)
  "110000",
  // ䷓: Phong Địa Quan (Hexagram 20)
  "101001",
  // ䷔: Hỏa Lôi Phệ Hạp (Hexagram 21)
  "100101",
  // ䷕: Sơn Hỏa Bí (Hexagram 22)
  "100000",
  // ䷖: Sơn Địa Bác (Hexagram 23)
  "000001",
  // ䷗: Địa Lôi Phục (Hexagram 24)
  "111001",
  // ䷘: Thiên Lôi Vô Vọng (Hexagram 25)
  "100111",
  // ䷙: Sơn Thiên Đại Súc (Hexagram 26)
  "100001",
  // ䷚: Sơn Lôi Di (Hexagram 27)
  "011110",
  // ䷛: Trạch Phong Đại Quá (Hexagram 28)
  "010010",
  // ䷜: Thuần Khảm (Hexagram 29)
  "101101",
  // ䷝: Thuần Ly (Hexagram 30)
  "011100",
  // ䷞: Trạch Sơn Hàm (Hexagram 31)
  "001110",
  // ䷟: Lôi Phong Hằng (Hexagram 32)
  "111100",
  // ䷠: Thiên Sơn Độn (Hexagram 33)
  "001111",
  // ䷡: Lôi Thiên Đại Tráng (Hexagram 34)
  "101000",
  // ䷢: Hỏa Địa Tấn (Hexagram 35)
  "000101",
  // ䷣: Địa Hỏa Minh Di (Hexagram 36)
  "110101",
  // ䷤: Phong Hỏa Gia Nhân (Hexagram 37)
  "101011",
  // ䷥: Hỏa Trạch Khuê (Hexagram 38)
  "010100",
  // ䷦: Thủy Sơn Kiển (Hexagram 39)
  "001010",
  // ䷧: Lôi Thủy Giải (Hexagram 40)
  "100011",
  // ䷨: Sơn Trạch Tổn (Hexagram 41)
  "110001",
  // ䷹: Phong Lôi Ích (Hexagram 42)
  "011111",
  // ䷺: Trạch Thiên Quải (Hexagram 43)
  "111110",
  // ䷻: Thiên Phong Cấu (Hexagram 44)
  "011000",
  // ䷼: Trạch Địa Tụy (Hexagram 45)
  "000110",
  // ䷽: Địa Phong Thăng (Hexagram 46)
  "011010",
  // ䷾: Trạch Thủy Khốn (Hexagram 47)
  "010110",
  // ䷿: Thủy Phong Tỉnh (Hexagram 48)
  "011101",
  // ䷰: Trạch Hỏa Cách (Hexagram 49)
  "101110",
  // ䷱: Hỏa Phong Đỉnh (Hexagram 50)
  "001001",
  // ䷲: Thuần Chấn (Hexagram 51)
  "100100",
  // ䷳: Thuần Cấn (Hexagram 52)
  "110100",
  // ䷴: Phong Sơn Tiệm (Hexagram 53)
  "001011",
  // ䷵: Lôi Trạch Quy Muội (Hexagram 54)
  "001101",
  // ䷶: Lôi Hỏa Phong (Hexagram 55)
  "101100",
  // ䷷: Hỏa Sơn Lữ (Hexagram 56)
  "110110",
  // ䷸: Thuần Tốn (Hexagram 57)
  "011011",
  // ䷹: Thuần Đoài (Hexagram 58)
  "110010",
  // ䷺: Phong Thủy Hoán (Hexagram 59)
  "010011",
  // ䷻: Thủy Trạch Tiết (Hexagram 60)
  "110011",
  // ䷼: Phong Trạch Trung Phu (Hexagram 61)
  "001100",
  // ䷽: Lôi Sơn Tiểu Quá (Hexagram 62)
  "010101",
  // ䷾: Thủy Hỏa Ký Tế (Hexagram 63)
  "101010"
  // ䷿: Hỏa Thủy Vị Tế (Hexagram 64)
];

const HOROSCOPE_CONFIG = [
  {
    id: 0,
    slug: "viet-nam",
    name: "Mặc định",
    typeLs: 2,
    // Logic mapping from page: if slug is 'viet-nam' -> defaultType = 2
    color: "#2C3E50",
    icon: "⍟",
    tvPage: {
      slug: "the-gioi-theo-vi-tri-sinh",
      title: "Tử Vi Tứ Trụ Thế Giới: Hệ thống Hiệu chỉnh Tọa độ Vị trí sinh Chuyên sâu",
      desc: "Hệ thống lập lá số Tử Vi & Tứ Trụ chuyên nghiệp, tự động hiệu chỉnh sai lệch múi giờ dựa trên tọa độ vị trí sinh thực tế. Giải pháp tối ưu cho chuyên gia luận giải toàn cầu."
    },
    gpsPage: {
      slug: "viet-nam",
      title: "Lập Lá Số Tử Vi & Tứ Trụ Chính Xác Theo Tọa Độ - Giờ Chính Ngọ Theo Tọa Độ",
      desc: "Lập lá số Tử Vi Việt Nam chuẩn xác dựa trên tọa độ nơi sinh. Hệ thống tự động hiệu chỉnh giờ Mặt Trời và giờ địa phương, giúp luận giải vận mệnh, tài lộc, gia đạo chính xác tuyệt đối."
    }
  },
  {
    id: 1,
    slug: "luong-phai-nam-phai",
    name: "Lương Phái + Nam phái",
    typeLs: 1,
    color: "#27AE60",
    icon: "☸",
    tvPage: {
      slug: "luong-phai-nam-phai-toan-cau",
      title: "Lá Số Tử Vi Tứ Trụ & Lương Phái + Nam Phái - Chuẩn hóa Giờ sinh theo Vị trí Thực tế",
      desc: "Công cụ lập lá số Phi Tinh Lương Phái & Nam Phái tích hợp thuật toán định vị tọa độ. Xác định chính xác giờ sinh địa phương tại bất kỳ địa điểm nào trên thế giới."
    },
    gpsPage: {
      slug: "luong-phai-nam-phai",
      title: "Lá Số Tử Vi Phi Tinh Lương Phái & Nam Phái - Tính Giờ Theo Tọa Độ Kinh Độ",
      desc: "Khám phá lá số Tử Vi Phi Tinh Lương Phái & Nam Phái với thuật toán tính giờ theo kinh độ và tọa độ. Phân tích hiện đại, chính xác đến từng phút, giúp thấu hiểu sâu sắc bản mệnh."
    }
  },
  {
    id: 2,
    slug: "kham-thien-tu-hoa-nam-phai",
    name: "Khâm Thiên + Nam phái",
    typeLs: 2,
    color: "#8E44AD",
    icon: "❖",
    tvPage: {
      slug: "kham-thien-tu-hoa-nam-phai-toan-cau",
      title: "Tử Vi Tứ Trụ & Khâm Thiên Tứ Hóa - Hiệu chỉnh Giờ Địa phương Toàn cầu theo Tọa độ",
      desc: "Nền tảng Tử Vi Khâm Thiên Tứ Hóa chuyên sâu. Tự động xử lý sai lệch múi giờ pháp định bằng cách hiệu chỉnh theo vị trí sinh thực tế, loại bỏ hoàn toàn sai số khi lập số quốc tế."
    },
    gpsPage: {
      slug: "kham-thien-tu-hoa-nam-phai",
      title: "Lá Số Tử Vi Khâm Thiên & Tứ Trụ - Giờ Mặt Trời & Giờ Địa Phương",
      desc: "Xem lá số Tử Vi Khâm Thiên Tứ Hóa & Nam Phái chuẩn giờ Chính Ngọ theo tọa độ thực tế. Luận giải chi tiết sự nghiệp, tình duyên dựa trên hệ thống tính giờ thiên văn hiện đại."
    }
  },
  {
    id: 3,
    slug: "nam-phai",
    name: "Nam phái",
    typeLs: 3,
    color: "#2980B9",
    icon: "▩",
    tvPage: {
      slug: "nam-phai-toan-cau",
      title: "Lập Lá Tử Vi Tứ Trụ & Nam Phái - Tự động Định vị GPS & Hiệu chỉnh Giờ sinh",
      desc: "Phần mềm lập lá số Tử Vi Nam Phái hàng đầu. Tự động định vị GPS để xác định giờ sinh địa phương chuẩn xác nhất, đảm bảo lá số nhất quán với thực địa nơi sinh."
    },
    gpsPage: {
      slug: "nam-phai",
      title: "Lập Lá Số Tử Vi Nam Phái - Hiệu Chỉnh Giờ Sinh Chính Xác Theo Tọa Độ",
      desc: "Công cụ lập lá số Tử Vi Nam Phái hàng đầu, tự động hiệu chỉnh giờ sinh theo tọa độ địa lý. Phân tích chính xác vận hạn, tài lộc và sự nghiệp nhờ xác định chuẩn xác giờ Mặt Trời."
    }
  },
  {
    id: 4,
    slug: "phi-tinh-luong-phai",
    name: "Lương Phái",
    typeLs: 4,
    color: "#F39C12",
    icon: "☸",
    tvPage: {
      slug: "phi-tinh-luong-phai-toan-cau",
      title: "Tử Vi Tứ Trụ & Tứ Trụ & Phi Tinh Lương Phái - Tự động hiệu chỉnh trên Vị trí sinh",
      desc: "Tra cứu Tử Vi Lương Phái với hệ thống tính Tiết khí thực dựa trên tọa độ địa lý. Tự động xử lý dữ liệu địa điểm toàn cầu, phục vụ phân tích cách cục chuyên sâu và chuyên nghiệp."
    },
    gpsPage: {
      slug: "phi-tinh-luong-phai",
      title: "Tử Vi Phi Tinh Lương Phái Chuyên Sâu - Tự Động Tính Giờ Tọa Độ Địa Phương",
      desc: "Tra cứu lá số Tử Vi Phi Tinh Lương Phái chuyên sâu. Hệ thống tự động tính giờ âm lịch địa phương dựa trên tọa độ và kinh độ nơi sinh, giúp nhận diện chính xác các cách cục phức tạp."
    }
  },
  {
    id: 5,
    slug: "kham-thien-tu-hoa",
    name: "Khâm Thiên",
    typeLs: 5,
    color: "#D35400",
    icon: "❖",
    tvPage: {
      slug: "kham-thien-tu-hoa-toan-cau",
      title: "Lập Lá Tử Vi Tứ Trụ & Khâm Thiên Tứ Hóa - Phân tích Chuẩn xác theo Tọa độ GPS",
      desc: "Lập lá số Tử Vi Khâm Thiên Tứ Hóa chuẩn xác qua tọa độ GPS. Hệ thống hiệu chỉnh giờ sinh dựa trên vị trí thực tế, cung cấp thông số tọa độ minh bạch cho các chuyên gia."
    },
    gpsPage: {
      slug: "kham-thien-tu-hoa",
      title: "Lập Lá Số Tử Vi Khâm Thiên Tứ Hóa  Xác Qua Tọa Độ & Kinh Độ",
      desc: "Lập lá số Tử Vi Khâm Thiên Tứ Hóa chuẩn xác qua tọa độ. Nhận ngay phân tích chi tiết công danh, vận hạn dựa trên phương pháp tính giờ Chính Ngọ và hiệu chỉnh giờ theo kinh độ."
    }
  },
  {
    id: 6,
    slug: "trung-chau-phai",
    name: "Trung Châu Phái",
    typeLs: 6,
    color: "#C0392B",
    icon: "☪",
    tvPage: {
      slug: "trung-chau-phai-toan-cau",
      title: "Lá Tử Vi Tứ Trụ & Trung Châu Phái - Xác định Giờ sinh chuẩn xác tại mọi Vị trí Địa lý",
      desc: "Lá số Trung Châu Phái chuẩn xác nhờ thuật toán xử lý tọa độ thực địa. Giải mã vận mệnh với hệ thống hiệu chỉnh giờ sinh địa phương chuẩn xác tại mọi quốc gia trên thế giới."
    },
    gpsPage: {
      slug: "trung-chau-phai",
      title: "Lá Số Tử Vi Trung Châu Phái - Xác Định Giờ Chính Ngọ Theo Tọa Độ Thực tế",
      desc: "Lá số Trung Châu Phái chuẩn xác nhất nhờ thuật toán xử lý tọa độ thực tế. Giải mã cuộc sống toàn diện với hệ thống hiệu chỉnh giờ sinh theo thiên văn địa phương và giờ mặt trời."
    }
  },
  {
    id: 7,
    slug: "trung-chau-phai-kham-thien",
    name: "Trung Châu Phái + Khâm Thiên",
    typeLs: 7,
    color: "#458305",
    icon: "☪",
    tvPage: {
      slug: "trung-chau-phai-kham-thien-toan-cau",
      title: "Tử Vi Tứ Trụ & Trung Châu & Khâm Thiên - Giải pháp Hiệu chỉnh Địa điểm Toàn cầu",
      desc: "Sự kết hợp giữa Trung Châu & Khâm Thiên Tứ Hóa trên nền tảng số hóa địa điểm. Chuẩn hóa quy trình lập số theo vị trí sinh, đảm bảo độ chính xác tuyệt đối cho việc luận giải."
    },
    gpsPage: {
      slug: "trung-chau-phai-kham-thien",
      title: "Tử Vi Trung Châu & Khâm Thiên Tứ Hóa - Chuẩn Hóa Giờ Địa Phương Qua Tọa Độ",
      desc: "Sự kết hợp độc đáo giữa Trung Châu Phái & Khâm Thiên Tứ Hóa trên nền tảng tính giờ tọa độ. Khám phá vận mệnh chi tiết với độ chính xác thời gian tuyệt đối theo từng vị trí địa lý."
    }
  },
  {
    id: 8,
    slug: "trung-chau-luong-phai",
    name: "Trung Châu Phái + Lương Phái",
    typeLs: 8,
    color: "#04719d",
    icon: "☪",
    tvPage: {
      slug: "trung-chau-luong-phai-toan-cau",
      title: "Tử Vi Tứ Trụ & Trung Châu & Lương Phái - Tối ưu hóa Giờ sinh theo Tọa độ Nơi sinh",
      desc: "Công cụ lập lá số dành cho nghiên cứu chuyên sâu. Tích hợp thuật toán hiệu chỉnh giờ sinh theo tọa độ địa lý và múi giờ lịch sử tại mọi vị trí sinh trên toàn thế giới."
    },
    gpsPage: {
      slug: "trung-chau-luong-phai",
      title: "Lá Số Tử Vi Trung Châu & Lương Phái - Tối Ưu Giờ Mặt Trời Theo Tọa Độ",
      desc: "Khám phá lá số Trung Châu Phái & Lương Phái tính theo giờ Mặt Trời và tọa độ. Mang đến cái nhìn sâu sắc, chính xác về cuộc đời nhờ công nghệ định vị và thuật toán tính giờ hiện đại."
    }
  }
];
HOROSCOPE_CONFIG.map((item) => item.slug);
const typeLsName$1 = HOROSCOPE_CONFIG.map((item) => item.name);
HOROSCOPE_CONFIG.map((item) => item.color);
HOROSCOPE_CONFIG.map((item) => item.icon);

const configDefault = Object.freeze([
  1,
  // lsCanType 1
  2,
  // typeLs 3
  3,
  // typePhiHoa 3
  0,
  // showHideStar 1
  0,
  // currentStar 1
  0,
  // dvTuHoa 0
  1,
  // locKiToanDo 0
  1,
  // dvKVXK 0
  0,
  // lnTuHoa 0
  0,
  // lnDHCQH 0
  0,
  // lnKVXK 0
  0,
  // lnTuTr 0
  0,
  // isADSat 0
  1,
  // batTuCenter 1
  0,
  // batTuCung 0
  1,
  // isNapAmCung 1
  1,
  // showSun 1
  0,
  // shortStar 0
  0,
  // rotateZone 0
  0,
  // drawByZone 0
  2,
  // showHoaIcon 0
  0,
  // tcph 0
  0
  // dvStar 0
]);
var CfgValue = /* @__PURE__ */ ((CfgValue2) => {
  CfgValue2[CfgValue2["lsCanType"] = 0] = "lsCanType";
  CfgValue2[CfgValue2["typeLs"] = 1] = "typeLs";
  CfgValue2[CfgValue2["typePhiHoa"] = 2] = "typePhiHoa";
  CfgValue2[CfgValue2["showHideStar"] = 3] = "showHideStar";
  CfgValue2[CfgValue2["currentStar"] = 4] = "currentStar";
  CfgValue2[CfgValue2["dvTuHoa"] = 5] = "dvTuHoa";
  CfgValue2[CfgValue2["locKiToanDo"] = 6] = "locKiToanDo";
  CfgValue2[CfgValue2["tuanHoanZone"] = 7] = "tuanHoanZone";
  CfgValue2[CfgValue2["lnTuHoa"] = 8] = "lnTuHoa";
  CfgValue2[CfgValue2["lnDHCQH"] = 9] = "lnDHCQH";
  CfgValue2[CfgValue2["lnKVXK"] = 10] = "lnKVXK";
  CfgValue2[CfgValue2["lnTuTr"] = 11] = "lnTuTr";
  CfgValue2[CfgValue2["isADSat"] = 12] = "isADSat";
  CfgValue2[CfgValue2["batTuCenter"] = 13] = "batTuCenter";
  CfgValue2[CfgValue2["batTuCung"] = 14] = "batTuCung";
  CfgValue2[CfgValue2["isNapAmCung"] = 15] = "isNapAmCung";
  CfgValue2[CfgValue2["showSun"] = 16] = "showSun";
  CfgValue2[CfgValue2["shortStar"] = 17] = "shortStar";
  CfgValue2[CfgValue2["rotateZone"] = 18] = "rotateZone";
  CfgValue2[CfgValue2["drawByZone"] = 19] = "drawByZone";
  CfgValue2[CfgValue2["showHoaIcon"] = 20] = "showHoaIcon";
  CfgValue2[CfgValue2["tcpb"] = 21] = "tcpb";
  CfgValue2[CfgValue2["dvStar"] = 22] = "dvStar";
  return CfgValue2;
})(CfgValue || {});
const CanChi = {
  /** Get CAN index from CanChiTuple */
  can: (tuple) => tuple[0],
  /** Get CHI index from CanChiTuple */
  chi: (tuple) => tuple[1],
  /** Get LTHG index from CanChiTuple */
  lthg: (tuple) => tuple[2],
  /** Create CanChiTuple from individual indices */
  create: (can, chi, lthg) => [can, chi, lthg]
};
const CanChiPair = {
  /** Get CAN index from CanChiPair */
  can: (pair) => pair[0],
  /** Get CHI index from CanChiPair */
  chi: (pair) => pair[1],
  /** Create CanChiPair from individual indices */
  create: (can, chi) => [can, chi]
};
var StlkName = /* @__PURE__ */ ((StlkName2) => {
  StlkName2[StlkName2["numLoc"] = 0] = "numLoc";
  StlkName2[StlkName2["numKi"] = 1] = "numKi";
  StlkName2[StlkName2["currentLoc"] = 2] = "currentLoc";
  StlkName2[StlkName2["isMoveLoc"] = 3] = "isMoveLoc";
  StlkName2[StlkName2["isMoveKi"] = 4] = "isMoveKi";
  StlkName2[StlkName2["isTruyLoc"] = 5] = "isTruyLoc";
  StlkName2[StlkName2["isTruyKi"] = 6] = "isTruyKi";
  return StlkName2;
})(StlkName || {});
var ZolkName = /* @__PURE__ */ ((ZolkName2) => {
  ZolkName2[ZolkName2["isMoveLoc"] = 0] = "isMoveLoc";
  ZolkName2[ZolkName2["totalLoc"] = 1] = "totalLoc";
  ZolkName2[ZolkName2["currentLoc"] = 2] = "currentLoc";
  ZolkName2[ZolkName2["isMoveAllLoc"] = 3] = "isMoveAllLoc";
  ZolkName2[ZolkName2["locKeep"] = 4] = "locKeep";
  ZolkName2[ZolkName2["isMoveNienLoc"] = 5] = "isMoveNienLoc";
  ZolkName2[ZolkName2["isMoveKi"] = 0] = "isMoveKi";
  ZolkName2[ZolkName2["totalKi"] = 1] = "totalKi";
  ZolkName2[ZolkName2["currentKi"] = 2] = "currentKi";
  return ZolkName2;
})(ZolkName || {});
var TH = /* @__PURE__ */ ((TH2) => {
  TH2[TH2["L"] = 0] = "L";
  TH2[TH2["Q"] = 1] = "Q";
  TH2[TH2["Z"] = 2] = "Z";
  TH2[TH2["K"] = 3] = "K";
  return TH2;
})(TH || {});
function numbStringToArr(inputString) {
  const digits = inputString.split("").map((char) => Number.parseInt(char, 10)).filter((digit) => !Number.isNaN(digit));
  return digits;
}
function fixMaxMinValue(val, min, max) {
  return Math.max(min, Math.min(max, val));
}
function validateConfig(name, val) {
  let value = val;
  switch (name) {
    case 0 /* lsCanType */:
      value = fixMaxMinValue(value, 0, 4);
      break;
    case 1 /* typeLs */:
      value = fixMaxMinValue(value, 0, 8);
      break;
    case 2 /* typePhiHoa */:
      value = fixMaxMinValue(value, 0, 3);
      break;
    case 3 /* showHideStar */:
      value = fixMaxMinValue(value, 0, 4);
      break;
    case 4 /* currentStar */:
      value = fixMaxMinValue(value, 0, 4);
      break;
    case 5 /* dvTuHoa */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 6 /* locKiToanDo */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 7 /* tuanHoanZone */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 8 /* lnTuHoa */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 9 /* lnDHCQH */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 10 /* lnKVXK */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 11 /* lnTuTr */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 12 /* isADSat */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 13 /* batTuCenter */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 14 /* batTuCung */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 15 /* isNapAmCung */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 16 /* showSun */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 17 /* shortStar */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 18 /* rotateZone */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 19 /* drawByZone */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 20 /* showHoaIcon */:
      value = fixMaxMinValue(value, 0, 4);
      break;
    case 21 /* tcpb */:
      value = fixMaxMinValue(value, 0, 2);
      break;
    case 22 /* dvStar */:
      value = fixMaxMinValue(value, 0, 1);
      break;
  }
  return value;
}
function updateConfig(cfg, name, val) {
  let newConfig;
  if (typeof cfg === "string") {
    newConfig = numbStringToArr(cfg);
  } else {
    newConfig = numbStringToArr(cfg.join(""));
  }
  newConfig[name] = validateConfig(name, val);
  if (![6, 7, 8].includes(newConfig[1 /* typeLs */])) {
    newConfig[21 /* tcpb */] = 0;
  }
  return newConfig;
}
function validateAllConfig(cfg) {
  const newConfig = numbStringToArr(cfg.join(""));
  return newConfig.map((val, idx) => validateConfig(idx, val));
}
function getLunaBornText(ls) {
  return {
    y: `${CAN[ls.dtb.bs.y[0]]} ${CHI[ls.dtb.bs.y[1]]}`,
    m: `${CAN[ls.dtb.bs.m[0]]} ${CHI[ls.dtb.bs.m[1]]}`,
    d: `${CAN[ls.dtb.bs.d[0]]} ${CHI[ls.dtb.bs.d[1]]}`,
    h: `${CAN[ls.dtb.bs.h[0]]} ${CHI[ls.dtb.bs.h[1]]}`
  };
}
function hoa2IchingIdx(arrTuHoa) {
  const lstTuHoaToBigFor = [
    [1, 1],
    // A
    [0, 1],
    // B
    [1, 0],
    // C
    [0, 0]
    // D
  ];
  let iChingCheck = [];
  iChingCheck = iChingCheck.concat(
    lstTuHoaToBigFor[arrTuHoa[0]],
    lstTuHoaToBigFor[arrTuHoa[1]],
    lstTuHoaToBigFor[arrTuHoa[2]]
  );
  const idxICH = ICHING_NUMBER.indexOf(iChingCheck.join(""));
  return idxICH;
}
function sameAD(firstCan, twoCan) {
  if (CAN_AD[firstCan] === CAN_AD[twoCan]) return 1;
  return 0;
}
function idxTHAP(firstCan, twoCan) {
  return HH_THAP[CAN_HH[firstCan]][CAN_HH[twoCan]][sameAD(firstCan, twoCan)];
}
function idxTSTutru(can, chi) {
  return CAN_TSTB[can][chi];
}
const typeLsName = typeLsName$1;
const typeBanTCP = ["Thiên Bàn", "Địa Bàn", "Nhân Bàn"];
const levelPhiHoaMsg = ["Tiên Thiên", "Đại Vận", "Lưu Niên", "Lưu Nguyệt", "Lưu Nhật"];
const changeCanTypeMsg = [
  "Can hóa 1 - Canh Đồng Kị",
  "Can hóa 2 - Canh Âm Kị",
  "Can hóa 3 - Trung Châu Phái",
  "Can hóa 4 - Phái khác",
  "Can hóa 5 - Phái nhỏ"
];
const hideStarMsg = [
  "Tất cả",
  "Sao chính",
  "Sao chính, quý tinh",
  "Sao chính, quý tinh, trường sinh",
  "Sao chính, quý tinh, trường sinh, lục bại"
];
const yearLoopStarMsg = ["Không hiện", "Hiện 9 sao", "Hiện 15 sao", "Toàn bộ"];
function containsNumber(arr, x) {
  for (const subArr of arr) {
    if (subArr.includes(x)) {
      return true;
    }
  }
  return false;
}

const TKN = [
  /* 0 */
  "Tiểu Hàn",
  // Tháng 12
  /* 1 */
  "Đại Hàn",
  /* 2 */
  "Lập Xuân",
  // Tháng 1
  /* 3 */
  "Vũ Thủy",
  /* 4 */
  "Kinh Trập",
  // Tháng 2
  /* 5 */
  "Xuân Phân",
  /* 6 */
  "Thanh Minh",
  // Tháng 3
  /* 7 */
  "Cốc Vũ",
  /* 8 */
  "Lập Hạ",
  // Tháng 4
  /* 9 */
  "Tiểu Mãn",
  /* 10 */
  "Mang Chủng",
  // Tháng 5
  /* 11 */
  "Hạ Chí",
  /* 12 */
  "Tiểu Thử",
  // Tháng 6
  /* 13 */
  "Đại Thử",
  /* 14 */
  "Lập Thu",
  // Tháng 7
  /* 15 */
  "Xử Thử",
  /* 16 */
  "Bạch Lộ",
  // Tháng 8
  /* 17 */
  "Thu Phân",
  /* 18 */
  "Hàn Lộ",
  // Tháng 9
  /* 19 */
  "Sương Giáng",
  /* 20 */
  "Lập Đông",
  // Tháng 10
  /* 21 */
  "Tiểu Tuyết",
  /* 22 */
  "Đại Tuyết",
  // Tháng 11
  /* 23 */
  "Đông Chí"
];
const TKN_MONTH = [12, 12, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11];
const TKN_PN = [
  [0, 2],
  // 0
  [0, 2],
  // 1
  [2, 4],
  // 2
  [2, 4],
  // 3
  [4, 6],
  // 4
  [4, 6],
  // 5
  [6, 8],
  // 6
  [6, 8],
  // 7
  [8, 10],
  // 8
  [8, 10],
  // 9
  [10, 12],
  // 10
  [10, 12],
  // 11
  [12, 14],
  // 12
  [12, 14],
  // 13
  [14, 16],
  // 14
  [14, 16],
  // 15
  [16, 18],
  // 16
  [16, 18],
  // 17
  [18, 20],
  // 18
  [18, 20],
  // 19
  [20, 22],
  // 20
  [20, 22],
  // 21
  [22, 0],
  // 22
  [22, 0]
  // 23
];
const LTHG = [
  "Giáp Tý",
  // 4,
  "Ất Sửu",
  // 4,
  "Bính Dần",
  // 6,
  "Đinh Mão",
  // 6,
  "Mậu Thìn",
  // 3,
  "Kỷ Tị",
  // 3,
  "Canh Ngọ",
  // 5,
  "Tân Mùi",
  // 5,
  "Nhâm Thân",
  // 4,
  "Quý Dậu",
  // 4,
  "Giáp Tuất",
  // 6,
  "Ất Hợi",
  // 6,
  "Bính Tý",
  // 2,
  "Đinh Sửu",
  // 2,
  "Mậu Dần",
  // 5,
  "Kỷ Mão",
  // 5,
  "Canh Thìn",
  // 4,
  "Tân Tị",
  // 4,
  "Nhâm Ngọ",
  // 3,
  "Quý Mùi",
  // 3,
  "Giáp Thân",
  // 2,
  "Ất Dậu",
  // 2,
  "Bính Tuất",
  // 5,
  "Đinh Hợi",
  // 5,
  "Mậu Tý",
  // 6,
  "Kỷ Sửu",
  // 6,
  "Canh Dần",
  // 3,
  "Tân Mão",
  // 3,
  "Nhâm Thìn",
  // 2,
  "Quý Tị",
  // 2,
  "Giáp Ngọ",
  // 4,
  "Ất Mùi",
  // 4,
  "Bính Thân",
  // 6,
  "Đinh Dậu",
  // 6,
  "Mậu Tuất",
  // 3,
  "Kỷ Hợi",
  // 3,
  "Canh Tý",
  // 5,
  "Tân Sửu",
  // 5,
  "Nhâm Dần",
  // 4,
  "Quý Mão",
  // 4,
  "Giáp Thìn",
  // 6,
  "Ất Tị",
  // 6,
  "Bính Ngọ",
  // 2,
  "Đinh Mùi",
  // 2,
  "Mậu Thân",
  // 5,
  "Kỷ Dậu",
  // 5,
  "Canh Tuất",
  // 4,
  "Tân Hợi",
  // 4,
  "Nhâm Tý",
  // 3,
  "Quý Sửu",
  // 3,
  "Giáp Dần",
  // 2,
  "Ất Mão",
  // 2,
  "Bính Thìn",
  // 5,
  "Đinh Tị",
  // 5,
  "Mậu Ngọ",
  // 6,
  "Kỷ Mùi",
  // 6,
  "Canh Thân",
  // 3,
  "Tân Dậu",
  // 3,
  "Nhâm Tuất",
  // 2,
  "Quý Hợi"
  // 2,
];
const LTHG_HH = [
  4,
  4,
  6,
  6,
  3,
  3,
  5,
  5,
  4,
  4,
  6,
  6,
  2,
  2,
  5,
  5,
  4,
  4,
  3,
  3,
  2,
  2,
  5,
  5,
  6,
  6,
  3,
  3,
  2,
  2,
  4,
  4,
  6,
  6,
  3,
  3,
  5,
  5,
  4,
  4,
  6,
  6,
  2,
  2,
  5,
  5,
  4,
  4,
  3,
  3,
  2,
  2,
  5,
  5,
  6,
  6,
  3,
  3,
  2,
  2
];
const NAPAM = {
  T1: "Giản Hạ Thủy",
  T2: "Đại Khê Thủy",
  T3: "Trường Lưu Thủy",
  T4: "Thiên Hà Thủy",
  T5: "Tuyền Trung Thủy",
  T6: "Đại Hải Thủy",
  M1: "Tang Đố Mộc",
  M2: "Tùng Bách Mộc",
  M3: "Đại Lâm Mộc",
  M4: "Dương Liễu Mộc",
  M5: "Thạch Lựu Mộc",
  M6: "Bình Địa Mộc",
  K1: "Hải Trung Kim",
  K2: "Kim Bạch Kim",
  K3: "Bạch Lạp Kim",
  K4: "Sa Trung Kim",
  K5: "Kiếm Phong Kim",
  K6: "Thoa Xuyến Kim",
  G1: "Bích Thượng Thổ",
  G2: "Thành Đầu Thổ",
  G3: "Sa Trung Thổ",
  G4: "Lộ Bàng Thổ",
  G5: "Đại Trạch Thổ",
  G6: "Ốc Thượng Thổ",
  H1: "Tích Lịch Hỏa",
  H2: "Lư Trung Hỏa",
  H3: "Phú Đăng Hỏa",
  H4: "Thiên Thượng Hỏa",
  H5: "Sơn Hạ Hỏa",
  H6: "Sơn Đầu Hỏa"
};
const LTHG_NA = [
  NAPAM.K1,
  // 'Giáp Tý', // 4,
  NAPAM.K1,
  // 'Ất Sửu', // 4,
  NAPAM.H2,
  // 'Bính Dần', // 6,
  NAPAM.H2,
  // 'Đinh Mão', // 6,
  NAPAM.M3,
  // 'Mậu Thìn', // 3,
  NAPAM.M3,
  // 'Kỷ Tị', // 3,
  NAPAM.G4,
  // 'Canh Ngọ', // 5,
  NAPAM.G4,
  // 'Tân Mùi', // 5,
  NAPAM.K5,
  // 'Nhâm Thân', // 4,
  NAPAM.K5,
  // 'Quý Dậu', // 4,
  NAPAM.H6,
  // 'Giáp Tuất', // 6,
  NAPAM.H6,
  // 'Ất Hợi', // 6,
  NAPAM.T1,
  // 'Bính Tý', // 2,
  NAPAM.T1,
  // 'Đinh Sửu', // 2,
  NAPAM.G2,
  // 'Mậu Dần', // 5,
  NAPAM.G2,
  // 'Kỷ Mão', // 5,
  NAPAM.K3,
  // 'Canh Thìn', // 4,
  NAPAM.K3,
  // 'Tân Tị', // 4,
  NAPAM.M4,
  // 'Nhâm Ngọ', // 3,
  NAPAM.M4,
  // 'Quý Mùi', // 3,
  NAPAM.T5,
  // 'Giáp Thân', // 2,
  NAPAM.T5,
  // 'Ất Dậu', // 2,
  NAPAM.G6,
  // 'Bính Tuất', // 5,
  NAPAM.G6,
  // 'Đinh Hợi', // 5,
  NAPAM.H1,
  // 'Mậu Tý', // 6,
  NAPAM.H1,
  // 'Kỷ Sửu', // 6,
  NAPAM.M2,
  // 'Canh Dần', // 3,
  NAPAM.M2,
  // 'Tân Mão', // 3,
  NAPAM.T3,
  // 'Nhâm Thìn', // 2,
  NAPAM.T3,
  // 'Quý Tị', // 2,
  NAPAM.K4,
  // 'Giáp Ngọ', // 4,
  NAPAM.K4,
  // 'Ất Mùi', // 4,
  NAPAM.H5,
  // 'Bính Thân', // 6,
  NAPAM.H5,
  // 'Đinh Dậu', // 6,
  NAPAM.M6,
  // 'Mậu Tuất', // 3,
  NAPAM.M6,
  // 'Kỷ Hợi', // 3,
  NAPAM.G1,
  // 'Canh Tý', // 5,
  NAPAM.G1,
  // 'Tân Sửu', // 5,
  NAPAM.K2,
  // 'Nhâm Dần', // 4,
  NAPAM.K2,
  // 'Quý Mão', // 4,
  NAPAM.H3,
  // 'Giáp Thìn', // 6,
  NAPAM.H3,
  // 'Ất Tị', // 6,
  NAPAM.T4,
  // 'Bính Ngọ', // 2,
  NAPAM.T4,
  // 'Đinh Mùi', // 2,
  NAPAM.G5,
  // 'Mậu Thân', // 5,
  NAPAM.G5,
  // 'Kỷ Dậu', // 5,
  NAPAM.K6,
  // 'Canh Tuất', // 4,
  NAPAM.K6,
  // 'Tân Hợi', // 4,
  NAPAM.M1,
  // 'Nhâm Tý', // 3,
  NAPAM.M1,
  // 'Quý Sửu', // 3,
  NAPAM.T2,
  // 'Giáp Dần', // 2,
  NAPAM.T2,
  // 'Ất Mão', // 2,
  NAPAM.G3,
  // 'Bính Thìn', // 5,
  NAPAM.G3,
  // 'Đinh Tị', // 5,
  NAPAM.H4,
  // 'Mậu Ngọ', // 6,
  NAPAM.H4,
  // 'Kỷ Mùi', // 6,
  NAPAM.M5,
  // 'Canh Thân', // 3,
  NAPAM.M5,
  // 'Tân Dậu', // 3,
  NAPAM.T6,
  // 'Nhâm Tuất', // 2,
  NAPAM.T6
  // 'Quý Hợi' // 2,
];
const CAN = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
const CAN_HH = [4, 4, 2, 2, 3, 3, 6, 6, 5, 5];
const CAN_AD = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
const CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tị", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
const CHI_HH = [2, 5, 3, 3, 5, 6, 6, 5, 4, 4, 5, 2];
const CHI_3HH = [2, 4, 6, 3, 2, 4, 6, 3, 2, 4, 6, 3];
const CHI_AD = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
const CHI_CAN = {
  0: [3],
  1: [9, 3, 1],
  2: [4, 6, 8],
  3: [5],
  4: [8, 5, 3],
  5: [6, 8, 0],
  6: [7, 9],
  7: [9, 7, 5],
  8: [0, 2, 8],
  9: [1],
  10: [8, 1, 7],
  11: [2, 4]
};
const xtngl = {
  0: {
    x: 6,
    t: [4, 8],
    n: 1,
    g: [11, 1],
    l: 7
  },
  1: {
    x: 7,
    t: [5, 9],
    n: 0,
    g: [0, 2],
    l: 6
  },
  2: {
    x: 8,
    t: [6, 10],
    n: 11,
    g: [1, 3],
    l: 5
  },
  3: {
    x: 9,
    t: [7, 11],
    n: 10,
    g: [2, 4],
    l: 4
  },
  4: {
    x: 10,
    t: [8, 0],
    n: 9,
    g: [3, 5],
    l: 3
  },
  5: {
    x: 11,
    t: [9, 1],
    n: 8,
    g: [4, 6],
    l: 2
  },
  6: {
    x: 0,
    t: [10, 2],
    n: 7,
    g: [5, 7],
    l: 1
  },
  7: {
    x: 1,
    t: [11, 3],
    n: 6,
    g: [6, 8],
    l: 0
  },
  8: {
    x: 2,
    t: [0, 4],
    n: 5,
    g: [7, 9],
    l: 11
  },
  9: {
    x: 3,
    t: [1, 5],
    n: 4,
    g: [8, 10],
    l: 10
  },
  10: {
    x: 4,
    t: [2, 6],
    n: 3,
    g: [9, 11],
    l: 9
  },
  11: {
    x: 5,
    t: [3, 7],
    n: 2,
    g: [10, 0],
    l: 8
  }
};
const AREA_NAME = ["MỆNH", "BÀO", "PHỐI", "TỬ", "TÀI", "TẬT", "DI", "NÔ", "QUAN", "ĐIỀN", "PHÚC", "PHỤ"];
const SKB = {
  3: "Mệnh Cục tì hòa",
  1: "Cục sinh mệnh",
  2: "Mệnh sinh Cục",
  4: "Mệnh khắc cục",
  5: "Cục khắc mệnh"
};
const ADTN = ["Âm dương nghịch lý", "Âm dương thuận lý"];
const HH = {
  2: "Thủy",
  3: "Mộc",
  4: "Kim",
  5: "Thổ",
  6: "Hỏa"
};
const THAP = ["Quan", "Sát", "Tài", "T.Tài", "Ấn", "Kiêu", "Thương", "Thực", "Kiếp", "Tỷ"];
const HH_THAP = {
  2: {
    2: [8, 9],
    3: [6, 7],
    4: [4, 5],
    6: [2, 3],
    5: [0, 1]
  },
  3: {
    3: [8, 9],
    6: [6, 7],
    2: [4, 5],
    5: [2, 3],
    4: [0, 1]
  },
  4: {
    4: [8, 9],
    2: [6, 7],
    5: [4, 5],
    3: [2, 3],
    6: [0, 1]
  },
  5: {
    5: [8, 9],
    4: [6, 7],
    6: [4, 5],
    2: [2, 3],
    3: [0, 1]
  },
  6: {
    6: [8, 9],
    5: [6, 7],
    3: [4, 5],
    4: [2, 3],
    2: [0, 1]
  }
};
const SM = [
  {
    name: "Tử Vi",
    id: 1,
    hh: 5,
    isht: 1,
    sht: "Tử",
    ad: -1,
    grp: 1,
    type: "Quý",
    lvl: { 6: "M", 7: "M", 3: "M", 9: "M", 5: "V", 11: "V", 2: "Đ", 8: "Đ", 4: "B", 12: "B", 10: "B", 1: "B" },
    nn: [1, 0]
  },
  {
    name: "Thiên Cơ",
    id: 2,
    hh: 3,
    isht: 1,
    sht: "Cơ",
    ad: -1,
    grp: 1,
    type: "Thọ,Phúc",
    lvl: {
      5: "M",
      11: "M",
      4: "M",
      10: "M",
      6: "V",
      9: "V",
      1: "Đ",
      7: "Đ",
      2: "Đ",
      8: "Đ",
      3: "H",
      12: "H"
    },
    nn: [0, 1]
  },
  {
    name: "Thái Dương",
    id: 3,
    hh: 6,
    isht: 1,
    sht: "Nhật",
    ad: 1,
    grp: 1,
    type: "Quý",
    htg: "Mắt trái",
    lvl: {
      6: "M",
      7: "M",
      3: "M",
      4: "M",
      5: "M",
      2: "Đ",
      8: "Đ",
      9: "H",
      10: "H",
      11: "H",
      12: "H",
      1: "H"
    },
    nn: [1, 1]
  },
  {
    name: "Vũ Khúc",
    id: 4,
    hh: 4,
    isht: 1,
    sht: "Vũ",
    ad: -1,
    grp: 1,
    type: "Tài",
    htg: "Vú trái/Nốt ruồi",
    lvl: {
      5: "M",
      11: "M",
      2: "M",
      8: "M",
      3: "V",
      9: "V",
      1: "V",
      7: "V",
      4: "Đ",
      10: "Đ",
      6: "H",
      12: "H"
    },
    nn: [0, 0],
    good: [5, 11, 2, 8],
    bad: [6, 12, 4],
    good_pos: [4, 9]
  },
  {
    name: "Thiên Đồng",
    id: 5,
    hh: 2,
    isht: 1,
    sht: "Đồng",
    ad: 1,
    grp: 1,
    type: "Thọ,Phúc",
    htg: "Bộ máy tiêu hóa",
    lvl: {
      3: "M",
      9: "M",
      1: "V",
      4: "Đ",
      6: "Đ",
      12: "Đ",
      7: "H",
      10: "H",
      5: "H",
      11: "H",
      2: "H",
      8: "H"
    },
    nn: [1, 1],
    bad: [2, 8, 7],
    good_pos: [1, 3]
  },
  {
    name: "Liêm Trinh",
    id: 6,
    hh: 6,
    isht: 1,
    sht: "Liêm",
    ad: -1,
    grp: 1,
    type: "Hình",
    lvl: {
      5: "M",
      11: "M",
      1: "V",
      7: "V",
      3: "V",
      9: "V",
      2: "Đ",
      8: "Đ",
      6: "H",
      12: "H",
      4: "H",
      10: "H"
    },
    nn: [0, 0]
  },
  {
    name: "Thiên Phủ",
    id: 7,
    hh: 5,
    isht: 1,
    sht: "Phủ",
    ad: 1,
    grp: 2,
    type: "Tài",
    lvl: {
      3: "M",
      9: "M",
      1: "M",
      7: "M",
      5: "V",
      11: "V",
      6: "Đ",
      12: "Đ",
      8: "Đ",
      4: "B",
      10: "B",
      2: "B"
    },
    nn: [1, 1]
  },
  {
    name: "Thái Âm",
    id: 8,
    hh: 2,
    isht: 1,
    sht: "Nguyệt",
    ad: -1,
    grp: 2,
    type: "Tài",
    htg: "Mắt phải",
    lvl: {
      10: "M",
      11: "M",
      12: "M",
      9: "V",
      1: "V",
      2: "Đ",
      8: "Đ",
      3: "H",
      4: "H",
      5: "H",
      6: "H",
      7: "H"
    },
    nn: [0, 0]
  },
  {
    name: "Tham Lang",
    id: 9,
    hh: 3,
    isht: 1,
    sht: "Tham",
    ad: 1,
    grp: 2,
    type: "Dâm",
    htg: "Nách/Vết bớt",
    lvl: {
      2: "M",
      8: "M",
      5: "V",
      11: "V",
      3: "Đ",
      9: "Đ",
      6: "H",
      12: "H",
      1: "H",
      7: "H",
      4: "H",
      10: "H"
    },
    nn: [0, 1]
  },
  {
    name: "Cự Môn",
    id: 10,
    hh: 2,
    isht: 1,
    sht: "Cự",
    ad: -1,
    grp: 2,
    type: "Ám",
    htg: "Mồm/Nhân trung",
    lvl: {
      4: "M",
      10: "M",
      1: "V",
      7: "V",
      3: "V",
      9: "Đ",
      12: "Đ",
      5: "H",
      11: "H",
      2: "H",
      8: "H",
      6: "H"
    },
    nn: [0, 0]
  },
  {
    name: "Thiên Tướng",
    id: 11,
    hh: 2,
    isht: 1,
    sht: "Tướng",
    ad: 1,
    grp: 2,
    type: "Quyền",
    htg: "Mặt",
    lvl: {
      3: "M",
      9: "M",
      5: "V",
      11: "V",
      1: "V",
      7: "V",
      2: "Đ",
      8: "Đ",
      6: "Đ",
      12: "Đ",
      4: "H",
      10: "H"
    },
    nn: [1, 1]
  },
  {
    name: "Thiên Lương",
    id: 12,
    hh: 5,
    isht: 1,
    sht: "Lương",
    ad: 1,
    grp: 2,
    type: "Thọ,Phúc",
    lvl: {
      7: "M",
      5: "M",
      11: "M",
      1: "V",
      4: "V",
      3: "V",
      9: "V",
      2: "Đ",
      8: "Đ",
      10: "H",
      6: "H",
      12: "H"
    },
    nn: [0, 1],
    good: [1, 7, 4, 5, 2, 8],
    bad: [9, 6, 12, 10],
    good_pos: [1, 13, 3, 6]
  },
  {
    name: "Thất Sát",
    id: 13,
    hh: 4,
    isht: 1,
    sht: "Sát",
    ad: 1,
    grp: 2,
    type: "Quyền",
    lvl: {
      3: "M",
      9: "M",
      1: "M",
      7: "M",
      6: "V",
      12: "V",
      2: "Đ",
      8: "Đ",
      4: "H",
      10: "H",
      5: "H",
      11: "H"
    },
    nn: [1, 1],
    good: [3, 9],
    good_pos: [1, 3]
  },
  {
    name: "Phá Quân",
    id: 14,
    hh: 2,
    isht: 1,
    sht: "Phá",
    ad: -1,
    grp: 2,
    type: "Quyền",
    lvl: {
      1: "M",
      7: "M",
      2: "V",
      8: "V",
      5: "Đ",
      11: "Đ",
      4: "H",
      10: "H",
      3: "H",
      9: "H",
      6: "H",
      12: "H"
    },
    nn: [0, 0]
  },
  {
    name: "Thiên Không",
    id: 15,
    hh: 6,
    isht: 1,
    sht: "Th.Không",
    ad: 0,
    ans: 1,
    sort: 10,
    type: "Hung",
    typ: 2,
    zone: 1
  },
  {
    name: "Thái Tuế",
    id: 16,
    hh: 6,
    isht: 1,
    sht: "Tuế",
    ad: 0,
    ans: 1,
    sort: 101,
    cir: "vtt",
    cirTp: 2,
    type: "Hình",
    typ: 1,
    zone: 3
  },
  {
    name: "Thiếu Dương",
    id: 17,
    hh: 6,
    isht: 1,
    sht: "Dương",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 2,
    type: "Phúc",
    typ: 1,
    zone: 3
  },
  {
    name: "Tang Môn",
    id: 18,
    hh: 3,
    isht: 1,
    sht: "Tang",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 3,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 3,
    lvl: {
      3: "Đ",
      4: "Đ",
      9: "Đ",
      10: "Đ"
    }
  },
  {
    name: "Thiếu Âm",
    id: 19,
    hh: 2,
    isht: 1,
    sht: "Âm",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 4,
    type: "Phúc",
    typ: 1,
    zone: 3
  },
  {
    name: "Quan Phù",
    id: 20,
    hh: 6,
    isht: 1,
    sht: "Phù",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 1,
    typ: 2,
    zone: 3
  },
  {
    name: "Tử Phù",
    id: 21,
    hh: 6,
    isht: 1,
    sht: "Tử.P",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 2,
    typ: 1,
    zone: 3
  },
  {
    name: "Tuế Phá",
    id: 22,
    hh: 6,
    isht: 1,
    sht: "Tuế.P",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 3,
    typ: 2,
    zone: 3,
    htg: "Răng"
  },
  {
    name: "Long Đức",
    id: 23,
    hh: 2,
    isht: 1,
    sht: "Long.Đ",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 4,
    typ: 1,
    zone: 3
  },
  {
    name: "Bạch Hổ",
    id: 24,
    hh: 4,
    isht: 1,
    sht: "Hổ",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 1,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 3,
    htg: "Xương, máu",
    lvl: {
      3: "Đ",
      4: "Đ",
      9: "Đ",
      10: "Đ"
    }
  },
  {
    name: "Phúc Đức",
    id: 25,
    hh: 5,
    isht: 1,
    sht: "P.Đức",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 2,
    typ: 1,
    zone: 3
  },
  {
    name: "Điếu Khách",
    id: 26,
    hh: 6,
    isht: 1,
    sht: "Điếu",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 3,
    typ: 2,
    zone: 3
  },
  {
    name: "Trực Phù",
    id: 27,
    hh: 6,
    isht: 1,
    sht: "Trực.P",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 4,
    typ: 2,
    zone: 3
  },
  {
    name: "Lộc Tồn",
    id: 28,
    hh: 5,
    isht: 1,
    sht: "Lộc.T",
    iptt: true,
    ad: 1,
    ans: 0,
    sort: 10,
    type: "Tài",
    typ: 1,
    zone: 1
  },
  {
    name: "Bác Sĩ",
    id: 29,
    hh: 2,
    isht: 1,
    sht: "Bác.S",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 1,
    typ: 1,
    zone: 3
  },
  {
    name: "Lực Sĩ",
    id: 30,
    hh: 6,
    isht: 1,
    sht: "Lực",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 2,
    typ: 1,
    zone: 3
  },
  {
    name: "Thanh Long",
    id: 31,
    hh: 2,
    isht: 1,
    sht: "T.Long",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 3,
    type: "Hỉ",
    typ: 1,
    zone: 3
  },
  {
    name: "Tiểu Hao",
    id: 32,
    hh: 6,
    isht: 1,
    sht: "T.Hao",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 4,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 3,
    lvl: {
      3: "Đ",
      4: "Đ",
      9: "Đ",
      10: "Đ"
    }
  },
  {
    name: "Tướng Quân",
    id: 33,
    hh: 3,
    isht: 1,
    sht: "Tướng",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 1,
    type: "Quyền",
    typ: 2,
    zone: 3
  },
  {
    name: "Tấu Thư",
    id: 34,
    hh: 4,
    isht: 1,
    sht: "Tấu",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 2,
    type: "Quý",
    typ: 1,
    zone: 3
  },
  {
    name: "Phi Liêm",
    id: 35,
    hh: 6,
    isht: 1,
    sht: "Phi",
    ans: 1,
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 3,
    typ: 2,
    zone: 3,
    htg: "Tóc"
  },
  {
    name: "Hỉ Thần",
    id: 36,
    hh: 6,
    isht: 1,
    sht: "Hỉ.T",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 4,
    type: "Hỉ",
    typ: 1,
    zone: 3,
    htg: "Hậu môn"
  },
  {
    name: "Bệnh Phù",
    id: 37,
    hh: 5,
    isht: 1,
    sht: "Bệnh.P",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 1,
    typ: 2,
    zone: 3
  },
  {
    name: "Đại Hao",
    id: 38,
    hh: 6,
    isht: 1,
    sht: "Đ.Hao",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 2,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 3,
    lvl: {
      3: "Đ",
      4: "Đ",
      9: "Đ",
      10: "Đ"
    }
  },
  {
    name: "Phục Binh",
    id: 39,
    hh: 6,
    isht: 1,
    sht: "Phục",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 3,
    typ: 2,
    zone: 3
  },
  {
    name: "Quan Phủ",
    id: 40,
    hh: 6,
    isht: 1,
    sht: "Q.Phủ",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 4,
    typ: 2,
    zone: 3
  },
  {
    name: "Trường Sinh",
    id: 41,
    hh: 2,
    isht: 1,
    sht: "Sinh",
    ad: 0,
    cir: "vts",
    cirTp: 1,
    type: "Thọ",
    typ: 1,
    zone: 0
  },
  {
    name: "Mộc Dục",
    id: 42,
    hh: 2,
    isht: 1,
    sht: "Mộc",
    ad: 0,
    cir: "vts",
    cirTp: 2,
    type: "Dâm",
    typ: 1,
    zone: 0
  },
  {
    name: "Quan Đới",
    id: 43,
    hh: 2,
    // 4
    isht: 1,
    sht: "Đới",
    ad: 0,
    cir: "vts",
    cirTp: 3,
    type: "Quyền",
    typ: 1,
    zone: 0
  },
  {
    name: "Lâm Quan",
    id: 44,
    hh: 2,
    // 4
    isht: 1,
    sht: "Lâm",
    ad: 0,
    cir: "vts",
    cirTp: 4,
    typ: 1,
    zone: 0,
    htg: "Cổ"
  },
  {
    name: "Đế Vượng",
    id: 45,
    hh: 2,
    // 4
    isht: 1,
    sht: "Vượng",
    ad: 0,
    cir: "vts",
    cirTp: 1,
    type: "Thọ",
    typ: 1,
    zone: 0,
    htg: "Lưng"
  },
  {
    name: "Suy",
    id: 46,
    hh: 2,
    isht: 1,
    sht: "Suy",
    ad: 0,
    cir: "vts",
    cirTp: 2,
    type: "Bại",
    typ: 1,
    zone: 0
  },
  {
    name: "Bệnh",
    id: 47,
    hh: 2,
    // 6
    isht: 1,
    sht: "Bệnh",
    ad: 0,
    cir: "vts",
    cirTp: 3,
    type: "Bại",
    typ: 1,
    zone: 0
  },
  {
    name: "Tử",
    id: 48,
    hh: 2,
    isht: 1,
    sht: "Tử",
    ad: 0,
    cir: "vts",
    cirTp: 4,
    type: "Bại",
    typ: 1,
    zone: 0
  },
  {
    name: "Mộ",
    id: 49,
    hh: 2,
    // 5
    isht: 1,
    sht: "Mộ",
    ad: 0,
    cir: "vts",
    cirTp: 1,
    type: "Bại",
    typ: 1,
    zone: 0,
    htg: "Nhọt, u bướu"
  },
  {
    name: "Tuyệt",
    id: 50,
    hh: 2,
    // 5
    isht: 1,
    sht: "Tuyệt",
    ad: 0,
    cir: "vts",
    cirTp: 2,
    type: "Bại",
    typ: 1,
    zone: 0
  },
  {
    name: "Thai",
    id: 51,
    hh: 2,
    // 5
    isht: 1,
    sht: "Thai",
    ad: 0,
    cir: "vts",
    cirTp: 3,
    type: "Dâm",
    typ: 1,
    zone: 0,
    htg: "Rốn, chỗ kín phụ nữ"
  },
  {
    name: "Dưỡng",
    id: 52,
    hh: 2,
    // 3
    isht: 1,
    sht: "Dưỡng",
    ad: 0,
    cir: "vts",
    cirTp: 4,
    typ: 1,
    zone: 0
  },
  {
    name: "Địa Không",
    id: 53,
    hh: 6,
    isht: 1,
    sht: "Không",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 4,
    ad: 1,
    type: "Hung",
    typ: 2,
    zone: 1,
    lvl: {
      1: "H",
      2: "H",
      3: "Đ",
      4: "H",
      5: "H",
      6: "Đ",
      7: "H",
      8: "H",
      9: "Đ",
      10: "H",
      11: "H",
      12: "Đ"
    }
  },
  {
    name: "Địa Kiếp",
    id: 54,
    hh: 6,
    isht: 1,
    sht: "Kiếp",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 4,
    ad: -1,
    type: "Hung",
    typ: 2,
    zone: 1,
    lvl: {
      1: "H",
      2: "H",
      3: "Đ",
      4: "H",
      5: "H",
      6: "Đ",
      7: "H",
      8: "H",
      9: "Đ",
      10: "H",
      11: "H",
      12: "Đ"
    }
  },
  {
    name: "Hỏa Tinh",
    id: 55,
    hh: 6,
    isht: 1,
    sht: "Hỏa",
    iptt: true,
    ans: 1,
    sort: 1,
    grp: 4,
    ad: 1,
    type: "Hung",
    typ: 2,
    zone: 1,
    lvl: {
      1: "H",
      2: "H",
      3: "Đ",
      4: "Đ",
      5: "Đ",
      6: "Đ",
      7: "Đ",
      8: "H",
      9: "H",
      10: "H",
      11: "H",
      12: "H"
    }
  },
  {
    name: "Linh Tinh",
    id: 56,
    hh: 6,
    isht: 1,
    sht: "Linh",
    iptt: true,
    ans: 1,
    sort: 1,
    grp: 4,
    ad: -1,
    type: "Hung",
    typ: 2,
    zone: 1,
    lvl: {
      1: "H",
      2: "H",
      3: "Đ",
      4: "Đ",
      5: "Đ",
      6: "Đ",
      7: "Đ",
      8: "H",
      9: "H",
      10: "H",
      11: "H",
      12: "H"
    }
  },
  {
    name: "Kình Dương",
    id: 57,
    hh: 4,
    isht: 1,
    sht: "Kình",
    iptt: true,
    ans: 0,
    sort: 1,
    grp: 4,
    ad: 1,
    type: "Hung",
    typ: 2,
    zone: 1,
    htg: "Dương vật",
    lvl: {
      1: "H",
      2: "Đ",
      3: "H",
      4: "H",
      5: "Đ",
      6: "H",
      7: "H",
      8: "Đ",
      9: "H",
      10: "H",
      11: "Đ",
      12: "H"
    }
  },
  {
    name: "Đà La",
    id: 58,
    hh: 4,
    isht: 1,
    sht: "Đà",
    iptt: true,
    ans: 0,
    sort: 1,
    grp: 4,
    ad: -1,
    type: "Hung",
    typ: 2,
    zone: 1,
    htg: "Chân tay",
    lvl: {
      1: "H",
      2: "Đ",
      3: "H",
      4: "H",
      5: "Đ",
      6: "H",
      7: "H",
      8: "Đ",
      9: "H",
      10: "H",
      11: "Đ",
      12: "H"
    }
  },
  {
    name: "Thiên Khôi",
    id: 59,
    hh: 6,
    isht: 1,
    sht: "Khôi",
    iptt: true,
    ans: 0,
    sort: 1,
    grp: 3,
    ad: 1,
    type: "Văn",
    typ: 1,
    zone: 1,
    htg: "Đầu"
  },
  {
    name: "Thiên Việt",
    id: 60,
    hh: 6,
    isht: 1,
    sht: "Việt",
    iptt: true,
    ans: 0,
    sort: 1,
    grp: 3,
    ad: -1,
    type: "Văn",
    typ: 1,
    zone: 1,
    htg: "Hai vai"
  },
  {
    name: "Tả Phụ",
    id: 61,
    hh: 5,
    isht: 1,
    sht: "Tả",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 3,
    ad: 1,
    type: "Trợ",
    typ: 1,
    zone: 1,
    htg: "Lông mày trái",
    nn: [-1e3, 1]
  },
  {
    name: "Hữu Bật",
    id: 62,
    hh: 2,
    isht: 1,
    sht: "Hữu",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 3,
    ad: -1,
    type: "Trợ",
    typ: 1,
    zone: 1,
    htg: "Lông mày phải",
    nn: [-1e3, -1]
  },
  {
    name: "Văn Xương",
    id: 63,
    hh: 4,
    isht: 1,
    sht: "Xương",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 3,
    ad: 1,
    type: "Văn",
    typ: 1,
    zone: 1,
    htg: "Thính giác",
    lvl: {
      1: "H",
      2: "Đ",
      3: "H",
      4: "H",
      5: "Đ",
      6: "Đ",
      7: "H",
      8: "Đ",
      9: "H",
      10: "H",
      11: "Đ",
      12: "Đ"
    },
    nn: [-1e3, 1]
  },
  {
    name: "Văn Khúc",
    id: 64,
    hh: 2,
    isht: 1,
    sht: "Khúc",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 3,
    ad: -1,
    type: "Văn",
    typ: 1,
    zone: 1,
    htg: "Vú phải",
    lvl: {
      2: "Đ",
      5: "Đ",
      6: "Đ",
      8: "Đ",
      11: "Đ",
      12: "Đ"
    },
    nn: [-1e3, -1]
  },
  {
    name: "Hóa Lộc",
    id: 65,
    hh: 3,
    isht: 1,
    sht: "Lộc",
    iptt: true,
    ans: 0,
    sort: 300,
    grp: 6,
    ad: 0,
    type: "Tài",
    typ: 1,
    zone: 1,
    htg: "Râu",
    colorpt: "#18b248"
  },
  {
    name: "Hóa Quyền",
    id: 66,
    hh: 3,
    isht: 1,
    sht: "Quyền",
    iptt: true,
    ans: 0,
    sort: 300,
    grp: 6,
    ad: 0,
    type: "Quyền",
    typ: 1,
    zone: 1,
    htg: "Gò má",
    notshow: false,
    colorpt: "#982b8b"
  },
  {
    name: "Hóa Khoa",
    id: 67,
    hh: 2,
    isht: 1,
    sht: "Khoa",
    iptt: true,
    ans: 0,
    sort: 300,
    grp: 6,
    ad: 0,
    type: "Văn,Phúc",
    typ: 1,
    zone: 1,
    notshow: false,
    colorpt: "#00c6da"
  },
  {
    name: "Hóa Kị",
    id: 68,
    hh: 2,
    isht: 1,
    sht: "Kị",
    iptt: true,
    ans: 0,
    sort: 300,
    grp: 7,
    ad: 0,
    type: "Ám",
    typ: 2,
    zone: 1,
    htg: "Lưỡi",
    notshow: false,
    colorpt: "#222222",
    lvl: {
      1: "H",
      2: "Đ",
      3: "H",
      4: "H",
      5: "Đ",
      6: "H",
      7: "H",
      8: "Đ",
      9: "H",
      10: "H",
      11: "Đ",
      12: "H"
    }
  },
  {
    name: "Ân Quang",
    id: 69,
    hh: 3,
    isht: 1,
    sht: "Quang",
    sort: 2,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    grp: 8
  },
  {
    name: "Thiên Quý",
    id: 70,
    hh: 5,
    isht: 1,
    sht: "Quý",
    sort: 2,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    grp: 8
  },
  {
    name: "Tam Thai",
    id: 71,
    hh: 2,
    isht: 1,
    sht: "Thai",
    ans: 2,
    sort: 2,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    htg: "Trán",
    grp: 8
  },
  {
    name: "Bát Tọa",
    id: 72,
    hh: 3,
    isht: 1,
    sht: "Tọa",
    ans: 2,
    sort: 2,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    htg: "Cằm",
    grp: 8
  },
  {
    name: "Thai Phụ",
    id: 73,
    hh: 4,
    isht: 1,
    sht: "T.Phụ",
    ad: 0,
    type: "Văn",
    typ: 1,
    zone: 2,
    grp: 8
  },
  {
    name: "Phong Cáo",
    id: 74,
    hh: 5,
    isht: 1,
    sht: "Cáo",
    ad: 0,
    type: "Văn",
    typ: 1,
    zone: 2,
    grp: 8
  },
  {
    name: "Quốc Ấn",
    id: 75,
    hh: 5,
    isht: 1,
    sht: "Ấn",
    ad: 0,
    type: "Quyền",
    typ: 1,
    zone: 2
  },
  {
    name: "Đường Phù",
    id: 76,
    hh: 3,
    isht: 1,
    sht: "Đường",
    ad: 0,
    typ: 1,
    zone: 2
  },
  {
    name: "Long Trì",
    id: 77,
    hh: 2,
    isht: 1,
    sht: "Long",
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 2,
    htg: "Mũi",
    grp: 11
  },
  {
    name: "Phượng Các",
    id: 78,
    hh: 3,
    isht: 1,
    sht: "Phượng",
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 2,
    htg: "Tai"
  },
  {
    name: "Hoa Cái",
    id: 79,
    hh: 4,
    isht: 1,
    sort: 120,
    sht: "Cái",
    cir: "vtt2",
    cirTp: 5,
    ans: 1,
    ad: 0,
    typ: 1,
    zone: 2,
    grp: 11
  },
  {
    name: "Thiên Mã",
    id: 80,
    hh: 6,
    isht: 1,
    sht: "Mã",
    ans: 1,
    sort: 4,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    htg: "Chân tay",
    lvl: {
      3: "Đ",
      6: "Đ"
    }
  },
  {
    name: "Thiên Khốc",
    id: 81,
    hh: 2,
    isht: 1,
    sht: "Khốc",
    ans: 1,
    sort: 4,
    ad: 0,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 1,
    lvl: {
      1: "Đ",
      2: "Đ",
      4: "Đ",
      7: "Đ",
      8: "Đ",
      10: "Đ"
    }
  },
  {
    name: "Thiên Hư",
    id: 82,
    hh: 2,
    isht: 1,
    sht: "Hư",
    ans: 1,
    sort: 4,
    ad: 0,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 1,
    lvl: {
      1: "Đ",
      2: "Đ",
      4: "Đ",
      7: "Đ",
      8: "Đ",
      10: "Đ"
    }
  },
  {
    name: "Đào Hoa",
    id: 83,
    hh: 3,
    sort: 100,
    ans: 1,
    isht: 1,
    sht: "Đào",
    cir: "vtt2",
    ad: 0,
    type: "Dâm",
    typ: 1,
    zone: 1
  },
  {
    name: "Hồng Loan",
    id: 84,
    hh: 2,
    ans: 1,
    isht: 1,
    sht: "Hồng",
    ad: 0,
    type: "Dâm",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Hỉ",
    id: 85,
    hh: 2,
    ans: 1,
    isht: 1,
    sht: "Hỉ",
    ad: 0,
    type: "Hỉ",
    typ: 1,
    zone: 2
  },
  {
    name: "Cô Thần",
    id: 86,
    hh: 5,
    ans: 1,
    isht: 1,
    sht: "Cô",
    ad: 0,
    type: "Bại",
    typ: 2,
    zone: 2
  },
  {
    name: "Quả Tú",
    id: 87,
    hh: 5,
    ans: 1,
    isht: 1,
    sht: "Quả",
    ad: 0,
    type: "Bại",
    typ: 2,
    zone: 2
  },
  {
    name: "Thiên Hình",
    id: 88,
    hh: 6,
    isht: 1,
    iptt: true,
    sht: "Hình",
    ans: 2,
    sort: 3,
    ad: 0,
    type: "Hình",
    typ: 2,
    zone: 1,
    htg: "Da hay vết sẹo",
    lvl: {
      3: "Đ",
      4: "Đ",
      9: "Đ",
      10: "Đ"
    }
  },
  {
    name: "Thiên Diêu",
    id: 89,
    hh: 2,
    isht: 1,
    sht: "Diêu",
    ans: 2,
    sort: 3,
    ad: 0,
    type: "Dâm",
    typ: 2,
    zone: 1,
    htg: "Lông, tóc, bộ ngực",
    lvl: {
      3: "Đ",
      4: "Đ",
      10: "Đ",
      11: "Đ"
    }
  },
  {
    name: "Thiên Y",
    id: 90,
    hh: 2,
    isht: 1,
    sht: "Y",
    ad: 0,
    typ: 1,
    zone: 2
  },
  {
    name: "Lưu Hà",
    id: 91,
    hh: 2,
    isht: 1,
    sht: "Hà",
    ans: 0,
    ad: 0,
    type: "Hung",
    typ: 2,
    zone: 2
  },
  {
    name: "Kiếp Sát",
    id: 92,
    hh: 6,
    isht: 1,
    sht: "K.Sát",
    cir: "vtt2",
    sort: 120,
    cirTp: 5,
    ans: 1,
    ad: 0,
    type: "Hung",
    typ: 2,
    zone: 2
  },
  {
    name: "Phá Toái",
    id: 93,
    hh: 6,
    isht: 1,
    sht: "Toái",
    ans: 1,
    ad: 0,
    type: "Hung",
    typ: 1,
    zone: 2,
    htg: "Cuống họng"
  },
  {
    name: "Thiên Quan",
    id: 94,
    hh: 6,
    isht: 1,
    sht: "Quan",
    ad: 0,
    ans: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Phúc",
    id: 95,
    hh: 5,
    isht: 1,
    sht: "TPhúc",
    ad: 0,
    ans: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Văn Tinh",
    id: 96,
    hh: 6,
    isht: 1,
    sht: "Văn.T",
    ad: 0,
    type: "Tài",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Trù",
    id: 97,
    hh: 5,
    isht: 1,
    sht: "TTrù",
    ad: 0,
    ans: 0,
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Đức",
    id: 98,
    hh: 6,
    isht: 1,
    sht: "Th.Đức",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Nguyệt Đức",
    id: 99,
    hh: 6,
    isht: 1,
    sht: "Ng.Đức",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Giải",
    id: 100,
    hh: 6,
    isht: 1,
    sht: "T.Giải",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Địa Giải",
    id: 101,
    hh: 5,
    isht: 1,
    sht: "Đ.Giải",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Giải Thần",
    id: 102,
    hh: 3,
    isht: 1,
    sht: "G.Thần",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Tài",
    id: 103,
    hh: 5,
    isht: 1,
    sht: "Tài",
    ad: 0,
    type: "Trợ",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Thọ",
    id: 104,
    hh: 5,
    isht: 1,
    sht: "Thọ",
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 2
  },
  {
    name: "Đẩu Quân",
    id: 105,
    hh: 6,
    isht: 1,
    sht: "Đẩu.Q",
    ad: 0,
    type: "Phúc",
    typ: 2,
    zone: 2
  },
  {
    name: "Thiên Thương",
    id: 106,
    hh: 5,
    isht: 1,
    sht: "Thương",
    ad: 0,
    typ: 2,
    zone: 2
  },
  {
    name: "Thiên Sứ",
    id: 107,
    hh: 2,
    isht: 1,
    sht: "Sứ",
    ad: 0,
    typ: 2,
    zone: 2
  },
  {
    name: "Thiên La",
    id: 108,
    hh: 5,
    isht: 1,
    sht: "La",
    ad: 0,
    typ: 2,
    zone: 2
  },
  {
    name: "Địa Võng",
    id: 109,
    hh: 5,
    isht: 1,
    sht: "Võng",
    ad: 0,
    typ: 2,
    zone: 2
  },
  {
    name: "Tướng Tinh",
    id: 110,
    hh: 5,
    isht: 1,
    sht: "T.Tinh",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Phan An",
    id: 111,
    hh: 4,
    isht: 1,
    sht: "P.An",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 3,
    htg: ""
  },
  {
    name: "Tuế Dịch",
    id: 112,
    hh: 6,
    isht: 1,
    sht: "T.Dịch",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 3,
    htg: ""
  },
  {
    name: "Tức Thần",
    id: 113,
    hh: 3,
    isht: 1,
    sht: "T.Thần",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Tai Sát",
    id: 114,
    hh: 3,
    isht: 1,
    sht: "Tai.S",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Thiên Sát",
    id: 115,
    hh: 3,
    isht: 1,
    sht: "Thiên.S",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Chỉ Bối",
    id: 116,
    hh: 3,
    isht: 1,
    sht: "Chỉ.B",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 3,
    htg: ""
  },
  {
    name: "Nguyệt Sát",
    id: 117,
    hh: 3,
    isht: 1,
    sht: "Nguyệt.S",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Vong Thần",
    id: 118,
    hh: 3,
    isht: 1,
    sht: "Vong.T",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Niên Giải",
    id: 119,
    hh: 2,
    isht: 1,
    sht: "Niên.G",
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 2,
    htg: ""
  },
  {
    name: "Nguyệt Giải",
    id: 120,
    hh: 3,
    isht: 1,
    sht: "Nguyệt.G",
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 2,
    htg: ""
  },
  {
    name: "Thiên Vu",
    id: 121,
    hh: 3,
    isht: 1,
    sht: "Thiên.V",
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 3,
    htg: ""
  },
  {
    name: "Thiên Nguyệt",
    id: 122,
    hh: 3,
    isht: 1,
    sht: "Thiên.N",
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 2,
    htg: ""
  },
  {
    name: "Âm Sát",
    id: 123,
    hh: 2,
    isht: 1,
    sht: "Âm.S",
    sort: 120,
    ad: 0,
    type: "Hung",
    typ: 2,
    zone: 2,
    htg: ""
  },
  {
    name: "Dương Sát",
    id: 124,
    hh: 2,
    isht: 1,
    sht: "Dương.S",
    sort: 120,
    ad: 0,
    type: "Hung",
    typ: 2,
    zone: 2,
    htg: ""
  },
  {
    name: "Âm Đức",
    id: 125,
    hh: 5,
    isht: 1,
    sht: "Âm.Đ",
    sort: 120,
    ad: 0,
    type: "Hung",
    typ: 1,
    zone: 2,
    htg: ""
  },
  {
    name: "Dương Đức",
    id: 126,
    hh: 5,
    isht: 1,
    sht: "Dương.Đức",
    sort: 120,
    ad: 0,
    type: "Hung",
    typ: 1,
    zone: 2,
    htg: ""
  }
];
const TUHOAID = [64, 65, 66, 67];
const STAR_RULE = [87, 88];
const STAR_SIGN = [68, 69, 70, 71, 72, 73, 93, 94];
const STAR_LOCMA = [27, 79];
const ASSASSIN6 = [52, 53, 54, 55, 56, 57];
const BUFF6 = [58, 59, 60, 61, 62, 63];
const FAILURE6 = [17, 23, 31, 37, 80, 81];
const CR_TS = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
const STARSTRONG = [...TUHOAID, ...STAR_RULE, ...STAR_LOCMA, ...ASSASSIN6, ...BUFF6];
const STARLOOP1 = [15, 17, 23, 80, 81, 27, 56, 57, 79];
const CAN_HOA = {
  4: [5, 13, 3, 2],
  // Giap 'Liêm Trinh', 'Phá Quân', 'Vũ Khúc', 'Thái Dương'
  5: [1, 11, 0, 7],
  // At 'Thiên Cơ', 'Thiên Lương', 'Tử Vi', 'Thái Âm'
  6: [4, 1, 62, 5],
  // Binh 'Thiên Đồng', 'Thiên Cơ', 'Văn Xương', 'Liêm Trinh'
  7: [7, 4, 1, 9],
  // Dinh 'Thái Âm', 'Thiên Đồng', 'Thiên Cơ', 'Cự Môn'
  8: [8, 7, 61, 1],
  // Mau 'Tham Lang', 'Thái Âm', 'Hữu Bật', 'Thiên Cơ'
  9: [3, 8, 11, 63],
  // Ky 'Vũ Khúc', 'Tham Lang', 'Thiên Lương', 'Văn Khúc'
  0: [2, 3, 4, 7],
  // Canh 'Thái Dương', 'Vũ Khúc',  'Thiên Đồng','Thái Âm',
  1: [9, 2, 63, 62],
  // Tan 'Cự Môn', 'Thái Dương', 'Văn Khúc', 'Văn Xương'
  2: [11, 0, 60, 3],
  // Nham 'Thiên Lương', 'Tử Vi', 'Tả Phụ', 'Vũ Khúc'
  3: [13, 9, 7, 8]
  // Quy 'Phá Quân', 'Cự Môn', 'Thái Âm', 'Tham Lang'
};
function GETHOA(tcan = 1) {
  let myCan = {};
  myCan = { ...CAN_HOA };
  if (tcan === 0) {
    myCan[0] = [2, 3, 7, 4];
  }
  if (tcan === 2) {
    myCan[0] = [2, 3, 6, 4];
    myCan[8] = [8, 7, 2, 1];
    myCan[2] = [11, 0, 6, 3];
  }
  if (tcan === 3) {
    myCan[0] = [2, 3, 4, 10];
  }
  if (tcan === 4) {
    myCan[0] = [2, 3, 8, 4];
  }
  return myCan;
}
function findAllPositionsOfValue(obj, value) {
  const positions = [];
  for (const key of Object.keys(obj)) {
    obj[Number(key)].forEach((item, index) => {
      if (item === value) {
        positions.push({ parentKey: key, key: index });
      }
    });
  }
  return positions;
}
function getAllUniqueValues(obj) {
  const allValues = Object.values(obj).flat();
  const uniqueValues = [...new Set(allValues)];
  return uniqueValues;
}
function StarUseHoa(objHoa) {
  return getAllUniqueValues(objHoa);
}
function StarToHoaCan(objHoa) {
  const arrObj = {};
  const listStar = getAllUniqueValues(objHoa);
  listStar.forEach((idSTAR) => {
    arrObj[Number(idSTAR)] = [[], [], [], []];
    const positions = findAllPositionsOfValue(objHoa, idSTAR);
    positions.forEach((item) => {
      arrObj[Number(idSTAR)][Number(item.key)].push(Number(item.parentKey));
    });
  });
  return arrObj;
}
const PHIHOA_COLOR = ["#038c00", "#6e0888", "#0e7cca", "#d90404"];
const PHIHOA_SYMBOL1 = ["A", "B", "C", "D"];
const TSNAME = [
  "Sinh",
  // 0
  "Dục",
  "Đới",
  "LQuan",
  "Vượng",
  "Suy",
  // 5
  "Bệnh",
  // 6
  "Tử",
  // 7
  "Mộ",
  // 8
  "Tuyệt",
  // 9
  "Thai",
  // 10
  "Dưỡng"
  // 11
];
const CAN_TSTB = [
  [7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6],
  // Canh ts
  [0, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  // Tân ts
  [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3],
  // Nhâm ts
  [3, 2, 1, 0, 11, 10, 9, 8, 7, 6, 5, 4],
  // Quý ts
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0],
  // Giáp ts
  [6, 5, 4, 3, 2, 1, 0, 11, 10, 9, 8, 7],
  // Ất ts
  [10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  // Bính ts
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 10],
  // Đinh ts
  [10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  // Mậu ts
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 10]
  // Kỷ ts
];

const CIRCLE_LENGTH = 12;
const TRUONG_SINH_START = 40;
const BAC_SI_START = 28;
const THAI_TUE_START = 15;
const MT_TRUONG = /* @__PURE__ */ new Map([
  [2, 8],
  [3, 11],
  [4, 5],
  [5, 8],
  [6, 2]
]);
const MT_BS = /* @__PURE__ */ new Map([
  [0, 8],
  [1, 9],
  [2, 11],
  [3, 0],
  [4, 2],
  [5, 3],
  [6, 5],
  [7, 6],
  [8, 5],
  [9, 6]
]);
class CirclePlacer {
  hsc;
  constructor(horoscope) {
    this.hsc = horoscope;
  }
  fillGrowCircle() {
    let idxStart = MT_TRUONG.get(this.hsc.cid) ?? 0;
    let circleTruongsinh = TRUONG_SINH_START;
    for (let k = 0; k < CIRCLE_LENGTH; k += 1) {
      this.hsc.addStar(idxStart, circleTruongsinh, PrefixArea.SmallStar);
      idxStart = this.hsc.jumbByYinBoyYanGirl(idxStart);
      circleTruongsinh += 1;
    }
  }
  fillDoctorCircle(idxCan, prefix) {
    let idxStart = MT_BS.get(idxCan) ?? 0;
    let circleBacSi = BAC_SI_START;
    for (let k = 0; k < CIRCLE_LENGTH; k += 1) {
      this.hsc.addStar(idxStart, circleBacSi, prefix);
      if (circleBacSi === BAC_SI_START) {
        this.hsc.addStar(idxStart, BAC_SI_START - 1, prefix);
      }
      idxStart = this.hsc.jumbByYinBoyYanGirl(idxStart);
      circleBacSi += 1;
    }
  }
  fillKingCircle(yearIdx, prefix) {
    let idx = yearIdx;
    let circleThaiTue = THAI_TUE_START;
    for (let k = 0; k < CIRCLE_LENGTH; k += 1) {
      this.hsc.addStar(idx, circleThaiTue, prefix);
      if (circleThaiTue === THAI_TUE_START + 1) {
        this.hsc.addStar(idx, THAI_TUE_START - 1, prefix);
      }
      idx = this.hsc.jumbUp(idx);
      circleThaiTue += 1;
    }
  }
  fillCircleSmallTime() {
    this.setAilPositions();
    this.setMonthCanChi();
    this.setLuuNguyetPositions();
    this.setLuuNienPositions();
    this.setLuuNguyetNPPositions();
  }
  setAilPositions() {
    const { dtv, ars, aIdx } = this.hsc;
    let menhLnIdx = dtv.bs.y[1];
    let idxZone = 0;
    for (let i = 0; i < CIRCLE_LENGTH; i += 1) {
      ars[menhLnIdx].ail = idxZone;
      aIdx[`ail${idxZone}`] = menhLnIdx;
      idxZone = this.hsc.jumbDown(idxZone);
      menhLnIdx = this.hsc.jumbUp(menhLnIdx);
    }
  }
  setMonthCanChi() {
    const { dtv, ars } = this.hsc;
    let firstChiLuuNguyetIdx = 2;
    let firstCanThangIdx = this.getNguHoDon(dtv.bs.y[0]);
    for (let idMonth = 0; idMonth < CIRCLE_LENGTH; idMonth += 1) {
      ars[firstChiLuuNguyetIdx].lmpt = [
        idMonth + 1,
        // Số thứ tự tháng
        0,
        // Giá trị mặc định (có thể được cập nhật sau)
        firstCanThangIdx,
        // Chỉ số Can của tháng
        firstChiLuuNguyetIdx,
        // Chỉ số Chi của tháng
        LTHG.indexOf(`${CAN[firstCanThangIdx]} ${CHI[firstChiLuuNguyetIdx]}`)
        // Chỉ số trong bảng Lục Thập Hoa Giáp
      ];
      firstCanThangIdx = this.hsc.canJumpUp(firstCanThangIdx);
      firstChiLuuNguyetIdx = this.hsc.jumbUp(firstChiLuuNguyetIdx);
    }
  }
  setLuuNguyetPositions() {
    const { dtv, dtb, ars, aIdx } = this.hsc;
    let idxNguyetTCP = dtv.bs.y[1];
    idxNguyetTCP = this.hsc.idxAfterMove(idxNguyetTCP, dtb.ln.m, false);
    idxNguyetTCP = this.hsc.idxAfterMove(idxNguyetTCP, dtb.ln.h + 1, true);
    for (let idNameCung = 0; idNameCung < CIRCLE_LENGTH; idNameCung += 1) {
      ars[idxNguyetTCP].lmpt[1] = [idNameCung + 1, idNameCung];
      aIdx[`lmpt${idNameCung}`] = idxNguyetTCP;
      idxNguyetTCP = this.hsc.jumbUp(idxNguyetTCP);
    }
  }
  setLuuNienPositions() {
    const { dtv, dtb, ars, aIdx } = this.hsc;
    const mt = {
      8: 10,
      0: 10,
      4: 10,
      2: 4,
      6: 4,
      10: 4,
      5: 7,
      9: 7,
      1: 7,
      11: 1,
      3: 1,
      7: 1
    };
    const idxChiYearView = dtv.bs.y[1];
    let idxCungTieuvan = mt[dtb.bs.y[1]];
    let idxYearBorn = dtb.bs.y[1];
    const direction = this.hsc.sx > 0;
    for (let i = 0; i < CIRCLE_LENGTH; i += 1) {
      if (idxChiYearView === idxYearBorn) {
        aIdx.lynpc = idxCungTieuvan;
      }
      ars[idxCungTieuvan].lynp = idxYearBorn;
      idxYearBorn = this.hsc.jumbUp(idxYearBorn);
      idxCungTieuvan = direction ? this.hsc.jumbUp(idxCungTieuvan) : this.hsc.jumbDown(idxCungTieuvan);
    }
  }
  setLuuNguyetNPPositions() {
    const { dtv, dtb, ars, aIdx } = this.hsc;
    let idxNguyetNP = aIdx.lynpc;
    idxNguyetNP = this.hsc.idxAfterMove(idxNguyetNP, dtb.ln.m, false);
    idxNguyetNP = this.hsc.idxAfterMove(idxNguyetNP, dtb.ln.h + 1, true);
    let canThangNvIdx = this.getNguHoDon(dtv.bs.y[0]);
    let chiThangNvIdx = 2;
    for (let i = 0; i < CIRCLE_LENGTH; i += 1) {
      ars[idxNguyetNP].lmnp = [
        i + 1,
        // Số thứ tự tháng
        canThangNvIdx,
        // Chỉ số Can của tháng
        chiThangNvIdx,
        // Chỉ số Chi của tháng
        LTHG.indexOf(`${CAN[canThangNvIdx]} ${CHI[chiThangNvIdx]}`)
        // Chỉ số trong bảng Lục Thập Hoa Giáp
      ];
      if (dtv.ln.m - 1 === i) {
        aIdx.lmnpc = idxNguyetNP;
      }
      idxNguyetNP = this.hsc.jumbUp(idxNguyetNP);
      canThangNvIdx = this.hsc.canJumpUp(canThangNvIdx);
      chiThangNvIdx = this.hsc.jumbUp(chiThangNvIdx);
    }
  }
  // Phương thức lấy giá trị Ngũ Hổ Đồn dựa trên năm
  getNguHoDon(year) {
    const nguHoDon = {
      4: 6,
      5: 8,
      6: 0,
      7: 2,
      8: 4,
      9: 6,
      0: 8,
      1: 0,
      2: 2,
      3: 4
    };
    return nguHoDon[year];
  }
  // Phương thức điền thông tin cho vòng Đại Vận
  fillCircleBigTime() {
    const { ars, aIdx } = this.hsc;
    let idxStart = aIdx.am;
    const idxFirstCuc = this.hsc.cid;
    let idxCuc = this.hsc.cid;
    for (let i = 0; i < CIRCLE_LENGTH; i += 1) {
      ars[idxStart].dv = idxCuc;
      const prvCuc = idxCuc;
      const idxStartPrev = idxStart;
      idxStart = this.hsc.jumbByYinBoyYanGirl(idxStart);
      idxCuc += 10;
      if (this.hsc.yeo >= prvCuc && this.hsc.yeo < idxCuc) {
        ars[idxStartPrev].dvc = true;
        this.hsc.dvidx = idxStartPrev;
      }
      if (this.hsc.yeo <= idxFirstCuc) {
        ars[aIdx.am].dvc = true;
        this.hsc.dvidx = aIdx.am;
      }
    }
    let menhLuuDvIdx = this.hsc.dvidx;
    let idxZone = 0;
    for (let i = 0; i < AREA_NAME.length; i += 1) {
      ars[menhLuuDvIdx].aid = idxZone;
      aIdx[`aid${idxZone}`] = menhLuuDvIdx;
      idxZone = this.hsc.jumbDown(idxZone);
      menhLuuDvIdx = this.hsc.jumbUp(menhLuuDvIdx);
    }
  }
}

class StarPlacer {
  hsc;
  constructor(horoscope) {
    this.hsc = horoscope;
  }
  fillBigStar() {
    const arrConst = [0, 1, 2, 3, 4, 5];
    let firstJumb = 0;
    let secondJumb = 0;
    for (let item = 0; item < arrConst.length; item += 1) {
      if ((this.hsc.dtb.ln.d + item) % this.hsc.cid === 0) {
        firstJumb = (this.hsc.dtb.ln.d + item) / this.hsc.cid;
        secondJumb = item;
        break;
      }
    }
    let idxTuvi = this.hsc.idxAfterMove(2, firstJumb);
    idxTuvi = this.hsc.idxAfterMove(idxTuvi, secondJumb + 1, secondJumb % 2 === 0);
    const chomBacDau = [0, 1, -1, 2, 3, 4, -1, -1, 5, -1, -1, -1];
    const thienphuMt = {
      0: 4,
      1: 3,
      2: 2,
      3: 1,
      4: 0,
      5: 11,
      6: 10,
      7: 9,
      8: 8,
      9: 7,
      10: 6,
      11: 5
    };
    const chomThienPhu = [6, 7, 8, 9, 10, 11, 12, -1, -1, -1, 13];
    const handleBigStar = (idx, items, upOrDown) => {
      let idxAddStar = idx;
      items.forEach((starId) => {
        if (Number(starId) >= 0) {
          this.hsc.addStar(idxAddStar, Number(starId), PrefixArea.BigStar);
        }
        idxAddStar = upOrDown(idxAddStar);
      });
      return idxAddStar;
    };
    handleBigStar(idxTuvi, chomBacDau, this.hsc.jumbDown.bind(this.hsc));
    handleBigStar(thienphuMt[idxTuvi], chomThienPhu, this.hsc.jumbUp.bind(this.hsc));
  }
  fillSixAssassin(idxLocton, prefix) {
    this.hsc.addStar(this.hsc.jumbUp(idxLocton), 56, prefix);
    this.hsc.addStar(this.hsc.jumbDown(idxLocton), 57, prefix);
    if (prefix !== PrefixArea.SmallStar) {
      return;
    }
    this.hsc.addStar(this.hsc.idxAfterMove(11, this.hsc.dtb.ln.h + 1, false), 52, PrefixArea.SmallStar);
    this.hsc.addStar(this.hsc.idxAfterMove(11, this.hsc.dtb.ln.h + 1, true), 53, PrefixArea.SmallStar);
    const mtBigFire = {
      2: 1,
      6: 1,
      10: 1,
      8: 2,
      0: 2,
      4: 2,
      5: 3,
      9: 3,
      1: 3,
      11: 9,
      3: 9,
      7: 9
    };
    const mtSmallFire = {
      2: 3,
      6: 3,
      10: 3,
      8: 10,
      0: 10,
      4: 10,
      5: 10,
      9: 10,
      1: 10,
      11: 10,
      3: 10,
      7: 10
    };
    let bigFireIdx = mtBigFire[this.hsc.dtb.bs.y[1]];
    let smallFireIdx = mtSmallFire[this.hsc.dtb.bs.y[1]];
    if (!this.hsc.istc) {
      bigFireIdx = this.hsc.idxAfterMove(bigFireIdx, this.hsc.dtb.ln.h + 1, this.hsc.sx === this.hsc.adye);
      smallFireIdx = this.hsc.idxAfterMove(smallFireIdx, this.hsc.dtb.ln.h + 1, !(this.hsc.sx === this.hsc.adye));
    } else {
      bigFireIdx = this.hsc.idxAfterMove(bigFireIdx, this.hsc.dtb.ln.h + 1, true);
      smallFireIdx = this.hsc.idxAfterMove(smallFireIdx, this.hsc.dtb.ln.h + 1, true);
    }
    this.hsc.addStar(bigFireIdx, 54, PrefixArea.SmallStar);
    this.hsc.addStar(smallFireIdx, 55, PrefixArea.SmallStar);
  }
  fillSixBuffer(canIdx, prefix, lunaHour = 0) {
    const khoiCung = { 4: 1, 5: 0, 6: 11, 7: 11, 8: 1, 9: 0, 0: 1, 1: 6, 2: 3, 3: 3 };
    const vietCung = { 4: 7, 5: 8, 6: 9, 7: 9, 8: 7, 9: 8, 0: 7, 1: 2, 2: 5, 3: 5 };
    this.hsc.addStar(khoiCung[canIdx], 58, prefix);
    this.hsc.addStar(vietCung[canIdx], 59, prefix);
    if (prefix !== PrefixArea.SmallStar) {
      const xuongKhucMt = {
        0: [5, 9],
        1: [6, 8],
        2: [8, 6],
        3: [9, 5],
        4: [8, 6],
        5: [9, 5],
        6: [11, 3],
        7: [0, 2],
        8: [2, 0],
        9: [3, 11]
      };
      this.hsc.addStar(xuongKhucMt[canIdx][0], 62, prefix);
      this.hsc.addStar(xuongKhucMt[canIdx][1], 63, prefix);
      return;
    }
    const xuongIdx = this.hsc.idxAfterMove(10, lunaHour + 1, false);
    const khucIdx = this.hsc.idxAfterMove(4, lunaHour + 1, true);
    this.hsc.addStar(xuongIdx, 62, prefix);
    this.hsc.addStar(khucIdx, 63, prefix);
    const taIdx = this.hsc.idxAfterMove(4, this.hsc.dtb.ln.m, true);
    const huuIdx = this.hsc.idxAfterMove(10, this.hsc.dtb.ln.m, false);
    this.hsc.addStar(taIdx, 60, prefix);
    this.hsc.addStar(huuIdx, 61, prefix);
  }
  fillBig4(idCan, prefix) {
    const starHoa = this.hsc.HOA[idCan];
    this.hsc.addStar(this.hsc.aIdx[`s${starHoa[TH.L]}`], 64, prefix);
    this.hsc.addStar(this.hsc.aIdx[`s${starHoa[TH.Q]}`], 65, prefix);
    this.hsc.addStar(this.hsc.aIdx[`s${starHoa[TH.Z]}`], 66, prefix);
    this.hsc.addStar(this.hsc.aIdx[`s${starHoa[TH.K]}`], 67, prefix);
  }
  fillTuanTriet(idCan, idChi, prefix = PrefixArea.SmallStar) {
    const tuanMt = {
      0: [10, 11],
      // tuần giáp tý
      10: [8, 9],
      // tuần giáp tuất
      8: [6, 7],
      // tuần giáp thân
      6: [4, 5],
      // tuần giáp ngọ
      4: [2, 3],
      // tuần giáp thìn
      2: [0, 1]
      // tuần giáp tuất
    };
    const trietMt = {
      4: [8, 9],
      // giáp
      5: [6, 7],
      // ất
      6: [4, 5],
      // bính
      7: [2, 3],
      // đinh
      8: [0, 1],
      // mậu
      9: [8, 9],
      // kỷ
      0: [6, 7],
      // canh
      1: [4, 5],
      // tân
      2: [2, 3],
      // nhâm
      3: [0, 1]
      // quý
    };
    let yearCan = idCan;
    let yearChiofGiap = idChi;
    for (let i = 0; i < 10; i += 1) {
      if (yearCan === 4) {
        break;
      }
      yearCan = this.hsc.canJumpDown(yearCan);
      yearChiofGiap = this.hsc.jumbDown(yearChiofGiap);
    }
    const arrTuanIdx = tuanMt[yearChiofGiap];
    const arrTuanTr = [];
    arrTuanTr[0] = [arrTuanIdx[0], arrTuanIdx[1]];
    this.hsc.aIdx.tu = arrTuanIdx;
    arrTuanTr[1] = trietMt[idCan];
    this.hsc.aIdx.tr = trietMt[idCan];
    const idxTTR = prefix === PrefixArea.SmallStar ? 0 : prefix === PrefixArea.TenYearStar ? 1 : 2;
    this.hsc.ttr[idxTTR] = arrTuanTr;
  }
  fillDargon(idChi = this.hsc.dtb.bs.y[1], prefix = PrefixArea.SmallStar) {
    this.hsc.addStar(this.hsc.idxAfterMove(4, idChi + 1, true), 76, prefix);
    this.hsc.addStar(this.hsc.idxAfterMove(10, idChi + 1, false), 77, prefix);
    const hoaCaiMt = {
      5: 1,
      9: 1,
      1: 1,
      11: 7,
      3: 7,
      7: 7,
      2: 10,
      6: 10,
      10: 10,
      8: 4,
      0: 4,
      4: 4
    };
    this.hsc.addStar(hoaCaiMt[idChi], 78, prefix);
  }
  fillTangMaKhocHu(yearChiIdx, prefix) {
    const thienMaMt = {
      5: 11,
      9: 11,
      1: 11,
      11: 5,
      3: 5,
      7: 5,
      2: 8,
      6: 8,
      10: 8,
      8: 2,
      0: 2,
      4: 2
    };
    const thienMaIdx = thienMaMt[yearChiIdx];
    this.hsc.addStar(thienMaIdx, 79, prefix);
    const thienKhocIdx = this.hsc.idxAfterMove(6, yearChiIdx + 1, false);
    this.hsc.addStar(thienKhocIdx, 80, prefix);
    const thienHuIdx = this.hsc.idxAfterMove(6, yearChiIdx + 1, true);
    this.hsc.addStar(thienHuIdx, 81, prefix);
  }
  fillHinhRieuHaSatToai(idCan = this.hsc.dtb.bs.y[0], idChi = this.hsc.dtb.bs.y[1], prefix = PrefixArea.SmallStar) {
    const luuHaMt = {
      4: 9,
      5: 10,
      6: 7,
      7: 8,
      8: 5,
      9: 6,
      0: 4,
      1: 3,
      2: 11,
      3: 2
    };
    this.hsc.addStar(luuHaMt[idCan], 90, prefix);
    const kiepSatMt = {
      5: 2,
      9: 2,
      1: 2,
      11: 8,
      3: 8,
      7: 8,
      2: 11,
      6: 11,
      10: 11,
      8: 5,
      0: 5,
      4: 5
    };
    this.hsc.addStar(kiepSatMt[idChi], 91, prefix);
    const phaToaiMt = {
      0: 5,
      6: 5,
      3: 5,
      9: 5,
      2: 9,
      8: 9,
      5: 9,
      11: 9,
      4: 1,
      10: 1,
      1: 1,
      7: 1
    };
    const phaToaiIdx = phaToaiMt[idChi];
    this.hsc.addStar(phaToaiIdx, 92, prefix);
    if (prefix !== PrefixArea.SmallStar) {
      return;
    }
    this.hsc.addStar(this.hsc.idxAfterMove(9, this.hsc.dtb.ln.m, true), 87, PrefixArea.SmallStar);
    const thienRieuIdx = this.hsc.idxAfterMove(1, this.hsc.dtb.ln.m, true);
    this.hsc.addStar(thienRieuIdx, 88, PrefixArea.SmallStar);
    this.hsc.addStar(thienRieuIdx, 89, PrefixArea.SmallStar);
  }
  fillDaoHongHiCoQua(yearChiIdx, prefix) {
    const daoHoaMt = {
      5: 6,
      9: 6,
      1: 6,
      11: 0,
      3: 0,
      7: 0,
      2: 3,
      6: 3,
      10: 3,
      8: 9,
      0: 9,
      4: 9
    };
    const daoHoaIdx = daoHoaMt[yearChiIdx];
    this.hsc.addStar(daoHoaIdx, 82, prefix);
    const hongLoanIdx = this.hsc.idxAfterMove(3, yearChiIdx + 1, false);
    this.hsc.addStar(hongLoanIdx, 83, prefix);
    const thienHiIdx = this.hsc.idxAfterMove(hongLoanIdx, 7, true);
    this.hsc.addStar(thienHiIdx, 84, prefix);
    if (prefix !== PrefixArea.SmallStar) {
      return;
    }
    const coQuaMt = {
      11: [2, 10],
      0: [2, 10],
      1: [2, 10],
      2: [5, 1],
      3: [5, 1],
      4: [5, 1],
      5: [8, 4],
      6: [8, 4],
      7: [8, 4],
      8: [11, 7],
      9: [11, 7],
      10: [11, 7]
    };
    const cothanIdx = coQuaMt[yearChiIdx][0];
    this.hsc.addStar(cothanIdx, 85, prefix);
    const quaTuIdx = coQuaMt[yearChiIdx][1];
    this.hsc.addStar(quaTuIdx, 86, prefix);
  }
  fillThaiCaoAnDuong() {
    const thaiPhuIdx = this.hsc.idxAfterMove(6, this.hsc.dtb.ln.h + 1, true);
    this.hsc.addStar(thaiPhuIdx, 72, PrefixArea.SmallStar);
    const phongCaoIdx = this.hsc.idxAfterMove(2, this.hsc.dtb.ln.h + 1, true);
    this.hsc.addStar(phongCaoIdx, 73, PrefixArea.SmallStar);
    const quocAnIdx = this.hsc.idxAfterMove(this.hsc.aIdx.s27, 9, true);
    const duongPhuIdx = this.hsc.idxAfterMove(this.hsc.aIdx.s27, 8, false);
    this.hsc.addStar(quocAnIdx, 74, PrefixArea.SmallStar);
    this.hsc.addStar(duongPhuIdx, 75, PrefixArea.SmallStar);
  }
  fillQuangQuyThaiToa() {
    const lunaDate = this.hsc.dtb.ln.d;
    this.hsc.addStar(
      this.hsc.jumbDown(this.hsc.idxAfterMove(this.hsc.aIdx.s62, lunaDate, true)),
      68,
      PrefixArea.SmallStar
    );
    this.hsc.addStar(
      this.hsc.jumbUp(this.hsc.idxAfterMove(this.hsc.aIdx.s63, lunaDate, false)),
      69,
      PrefixArea.SmallStar
    );
    this.hsc.addStar(this.hsc.idxAfterMove(this.hsc.aIdx.s60, lunaDate, true), 70, PrefixArea.SmallStar);
    this.hsc.addStar(this.hsc.idxAfterMove(this.hsc.aIdx.s61, lunaDate, false), 71, PrefixArea.SmallStar);
  }
  fillQuanPhucNienTru(canYearIdx, prefix) {
    const quanPhucNienTru = {
      4: [7, 9, 5, 5],
      5: [4, 8, 6, 6],
      6: [5, 0, 8, 5],
      7: [2, 11, 9, 6],
      8: [3, 3, 8, 8],
      9: [9, 2, 9, 9],
      0: [11, 6, 11, 11],
      1: [9, 5, 0, 0],
      2: [10, 6, 2, 2],
      3: [6, 5, 3, 3]
    };
    const thienQuanIdx = quanPhucNienTru[canYearIdx][0];
    const thienPhucIdx = quanPhucNienTru[canYearIdx][1];
    const luuNienVanTinhIdx = quanPhucNienTru[canYearIdx][2];
    const thienTruIdx = quanPhucNienTru[canYearIdx][3];
    this.hsc.addStar(thienQuanIdx, 93, prefix);
    this.hsc.addStar(thienPhucIdx, 94, prefix);
    this.hsc.addStar(luuNienVanTinhIdx, 95, prefix);
    this.hsc.addStar(thienTruIdx, 96, prefix);
  }
  fillThienNguyetDiaThanTaiTho() {
    if (!this.hsc.istc) {
      this.hsc.addStar(this.hsc.aIdx.s77, 101, PrefixArea.SmallStar);
    }
    const diaGiaiIdx = this.hsc.idxAfterMove(7, this.hsc.dtb.ln.m, true);
    this.hsc.addStar(diaGiaiIdx, 100, PrefixArea.SmallStar);
    const thienGiaiIdx = this.hsc.idxAfterMove(8, this.hsc.dtb.ln.m, true);
    this.hsc.addStar(thienGiaiIdx, 99, PrefixArea.SmallStar);
    const thienDucIdx = this.hsc.idxAfterMove(9, this.hsc.dtb.bs.y[1] + 1, true);
    this.hsc.addStar(thienDucIdx, 97, PrefixArea.SmallStar);
    const nguyetDucIdx = this.hsc.idxAfterMove(5, this.hsc.dtb.bs.y[1] + 1, true);
    this.hsc.addStar(nguyetDucIdx, 98, PrefixArea.SmallStar);
    const thienTaiIdx = this.hsc.idxAfterMove(this.hsc.aIdx.am, this.hsc.dtb.bs.y[1] + 1, true);
    this.hsc.addStar(thienTaiIdx, 102, PrefixArea.SmallStar);
    const thienThoIdx = this.hsc.idxAfterMove(this.hsc.aIdx.at, this.hsc.dtb.bs.y[1] + 1, true);
    this.hsc.addStar(thienThoIdx, 103, PrefixArea.SmallStar);
  }
  fillDauThuongSuLaVong() {
    let dauQuanIdx = this.hsc.idxAfterMove(this.hsc.aIdx.s15, this.hsc.dtb.ln.m, false);
    dauQuanIdx = this.hsc.idxAfterMove(dauQuanIdx, this.hsc.dtb.ln.h + 1, true);
    this.hsc.addStar(dauQuanIdx, 104, PrefixArea.SmallStar);
    this.hsc.addStar(this.hsc.aIdx.ai5, 106, PrefixArea.SmallStar);
    this.hsc.addStar(this.hsc.aIdx.ai7, 105, PrefixArea.SmallStar);
    this.hsc.addStar(4, 107, PrefixArea.SmallStar);
    this.hsc.addStar(10, 108, PrefixArea.SmallStar);
    const mtAs = {
      1: [2, 6, 9, 10],
      2: [0, 8, 7, 0],
      3: [10, 10, 5, 2],
      4: [8, 0, 3, 4],
      5: [6, 2, 1, 6],
      6: [4, 4, 11, 8],
      7: [2, 6, 9, 10],
      8: [0, 8, 7, 0],
      9: [10, 10, 5, 2],
      10: [8, 0, 3, 4],
      11: [6, 2, 1, 6],
      12: [4, 4, 11, 8]
    };
    this.hsc.addStar(mtAs[this.hsc.dtb.ln.m][0], 122, PrefixArea.SmallStar);
    this.hsc.addStar(mtAs[this.hsc.dtb.ln.m][1], 123, PrefixArea.SmallStar);
    this.hsc.addStar(mtAs[this.hsc.dtb.ln.m][2], 124, PrefixArea.SmallStar);
    this.hsc.addStar(mtAs[this.hsc.dtb.ln.m][3], 125, PrefixArea.SmallStar);
  }
  fillTuViTrungChauPhai() {
    const idxNien = this.hsc.idxAfterMove(10, this.hsc.dtb.bs.y[1] + 1, false);
    this.hsc.addStar(idxNien, 118, PrefixArea.SmallStar);
    const mtNg = {
      1: 8,
      2: 8,
      3: 10,
      4: 10,
      5: 0,
      6: 0,
      7: 2,
      8: 2,
      9: 4,
      10: 4,
      11: 6,
      12: 6
    };
    const idxNg = mtNg[this.hsc.dtb.ln.m];
    this.hsc.addStar(idxNg, 119, PrefixArea.SmallStar);
    const mtTv = {
      1: 5,
      5: 5,
      9: 5,
      2: 8,
      6: 8,
      10: 8,
      3: 2,
      7: 2,
      11: 2,
      4: 11,
      8: 11,
      12: 11
    };
    const idxTv = mtTv[this.hsc.dtb.ln.m];
    this.hsc.addStar(idxTv, 120, PrefixArea.SmallStar);
    const mtTn = {
      1: 10,
      2: 5,
      3: 4,
      4: 2,
      5: 7,
      6: 3,
      7: 11,
      8: 7,
      9: 2,
      10: 6,
      11: 10,
      12: 2
    };
    const idxTn = mtTn[this.hsc.dtb.ln.m];
    this.hsc.addStar(idxTn, 121, PrefixArea.SmallStar);
    const mtTt = {
      8: 0,
      0: 0,
      4: 0,
      2: 6,
      6: 6,
      10: 6,
      11: 3,
      3: 3,
      7: 3,
      5: 9,
      9: 9,
      1: 9
    };
    let idxTt = mtTt[this.hsc.dtb.bs.y[1]];
    const vTT = [109, 110, 111, 112, -1, -1, 113, 114, 115, -1, 116, 117];
    for (let i = 0; i < vTT.length; i += 1) {
      if (vTT[i] > 0) {
        this.hsc.addStar(idxTt, vTT[i], PrefixArea.SmallStar);
      }
      idxTt = this.hsc.jumbUp(idxTt);
    }
  }
}

class ZoneBuilder {
  hsc;
  constructor(horoscope) {
    this.hsc = horoscope;
  }
  /**
   * Xác định tên các cung
   */
  buildZoneName() {
    let idxChi = this.hsc.idxAfterMove(2, this.hsc.dtb.ln.m);
    const idxThan = this.hsc.idxAfterMove(idxChi, this.hsc.dtb.ln.h + 1);
    this.hsc.aIdx.at = idxThan;
    idxChi = this.hsc.idxAfterMove(idxChi, this.hsc.dtb.ln.h + 1, false);
    this.hsc.aIdx.am = idxChi;
    let idxZone = 0;
    for (let i = 0; i < 12; i += 1) {
      const itemAppend = {
        ai: idxZone,
        ci: idxChi,
        cn: -1,
        na: -1,
        sb: [],
        ss: [],
        sv: [],
        sy: [],
        sm: [],
        sd: [],
        lmnp: [],
        lynp: 0,
        lmpt: [],
        aid: 0,
        dv: 0,
        cni: [[], [], [], []],
        cnw: [[], [], [], []],
        cno: [],
        th1: [[0, 0, 0], [], [], [0, 0]],
        ys: [],
        que: [],
        stlk: [],
        zolk: []
      };
      this.hsc.ars[idxChi] = itemAppend;
      this.hsc.aIdx[`ai${idxZone}`] = idxChi;
      idxZone = this.hsc.jumbDown(idxZone);
      idxChi = this.hsc.jumbUp(idxChi);
    }
    let idMonth12 = 0;
    let idxCanStart = 2;
    while (idMonth12 < 12) {
      const cnCiCur = this.hsc.dtb.m12[idMonth12][0];
      this.hsc.ars[idxCanStart].cn = cnCiCur;
      this.hsc.ars[idxCanStart].na = LTHG.indexOf(`${CAN[cnCiCur]} ${CHI[idxCanStart]}`);
      idMonth12 += 1;
      idxCanStart = this.hsc.jumbUp(idxCanStart);
    }
    this.hsc.am = this.hsc.aIdx.am;
    this.hsc.at = this.hsc.aIdx.at;
    this.hsc.cid = LTHG_HH[this.hsc.ars[this.hsc.aIdx.am].na];
    if (this.hsc.cfg[CfgValue.tcpb] === 1) {
      this.hsc.cid = LTHG_HH[this.hsc.ars[this.hsc.aIdx.at].na];
    }
    if (this.hsc.cfg[CfgValue.tcpb] === 2) {
      this.hsc.cid = LTHG_HH[this.hsc.ars[this.hsc.aIdx.ai10].na];
    }
    this.hsc.adme = CHI_AD[this.hsc.ars[this.hsc.aIdx.am].ci];
    const adMenhChk = this.hsc.adme === 1 ? 1 : -1;
    this.hsc.adye = CHI_AD[this.hsc.dtb.bs.y[1]];
    this.hsc.adyetk = CHI_AD[this.hsc.dtb.tk.y[1]];
    const adYearChk = this.hsc.adye === 1 ? 1 : -1;
    this.hsc.ad = adMenhChk * adYearChk > 0 ? 1 : 0;
  }
  /**
   * Xác định Mệnh Chủ Thân Chủ base trên sao nào dựa trên năm sinh
   * Mệnh chủ thân chủ này không giống cung mệnh chủ, cung thân chủ
   */
  fillBaseMenhThan() {
    const mtMenhThan = {
      0: [8, 55],
      1: [9, 10],
      2: [27, 11],
      3: [63, 4],
      4: [5, 62],
      5: [3, 1],
      6: [13, 54],
      7: [3, 10],
      8: [5, 11],
      9: [63, 4],
      10: [27, 62],
      11: [9, 1]
    };
    this.hsc.mctc = mtMenhThan[this.hsc.dtb.bs.y[1]];
  }
  /**
   * Xử lý Phi Hóa cho mỗi cung
   */
  fillPhiHoa() {
    for (let idx = 0; idx <= 11; idx += 1) {
      const idStarHoa = this.hsc.HOA[this.hsc.ars[idx].cn];
      this.hsc.ars[idx].cno = [
        this.hsc.aIdx[`s${idStarHoa[TH.L]}`],
        this.hsc.aIdx[`s${idStarHoa[TH.Q]}`],
        this.hsc.aIdx[`s${idStarHoa[TH.Z]}`],
        this.hsc.aIdx[`s${idStarHoa[TH.K]}`]
      ];
      for (let idx2 = 0; idx2 <= 11; idx2 += 1) {
        const lstIdStartHoa = this.hsc.HOA[this.hsc.ars[idx2].cn];
        for (let k = 0; k < 4; k += 1) {
          if (this.hsc.aIdx[`s${lstIdStartHoa[k]}`] === idx) {
            this.hsc.ars[idx].cni[k].push(idx2);
            this.hsc.ars[idx].cnw[k].push(lstIdStartHoa[k]);
          }
        }
      }
    }
    this.setLocKiStatic();
    const tuanHoanKiZones = [[], [], [], [], [], [], [], [], [], [], [], []];
    const tuanHoanLocZones = [[], [], [], [], [], [], [], [], [], [], [], []];
    const ptTuanHoan = [
      [[], [], [], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], [], [], []]
    ];
    for (let idc = 0; idc < 12; idc += 1) {
      this.hsc.countLoop = 0;
      this.countMoveKi(idc);
      this.hsc.countLoop = 0;
      this.countMoveLoc(idc);
      this.hsc.countLoop = 0;
      const arrTuanHoanKi = this.checkTuanHoan(3, idc);
      if (this.checkPeriodicRepetition(arrTuanHoanKi)) {
        tuanHoanKiZones[idc] = this.getUniquePeriodicElements(arrTuanHoanKi);
      }
      this.hsc.countLoop = 0;
      const arrTuanHoanLoc = this.checkTuanHoan(0, idc);
      if (this.checkPeriodicRepetition(arrTuanHoanLoc)) {
        tuanHoanLocZones[idc] = this.getUniquePeriodicElements(arrTuanHoanLoc);
      }
      for (let tph = 0; tph < 4; tph++) {
        this.hsc.countLoop = 0;
        const ptArrTuanHoan = this.checkTuanHoanPT(tph, idc);
        if (this.checkPeriodicRepetition(ptArrTuanHoan)) {
          ptTuanHoan[tph][idc] = this.getUniquePeriodicElements(ptArrTuanHoan);
        }
      }
    }
    this.hsc.loopLP[TH.L] = this.getUniqueRepresentatives(tuanHoanLocZones);
    this.hsc.loopLP[TH.K] = this.getUniqueRepresentatives(tuanHoanKiZones);
    for (let tph = 0; tph < 4; tph++) {
      this.hsc.loopPT[tph] = this.getUniqueRepresentatives(ptTuanHoan[tph]);
    }
    if (this.hsc.loopLP[TH.L].length > 0) {
      this.hsc.loopLP[TH.L].forEach((item, index) => {
        if (item.length > 0 && !this.isTuanHoanLocLuongPhai(item)) {
          this.hsc.loopLP[TH.L][index] = [];
        }
      });
    }
    this.addBatQuai();
  }
  /**
   * Kiểm tra Tuần Hoàn Lộc Luông Phái
   * @param arrTuanHoanLoc
   * @returns True if the Tuần Hoàn Lộc follows the correct pattern, false otherwise
   */
  isTuanHoanLocLuongPhai(arrTuanHoanLoc) {
    let isOk = true;
    arrTuanHoanLoc.forEach((idxCung, index) => {
      const idxCungLoc = idxCung;
      let indexNext = index + 1;
      if (indexNext > arrTuanHoanLoc.length - 1) {
        indexNext = 0;
      }
      const idxChuyenLocTiep = arrTuanHoanLoc[indexNext];
      const idxFlyCungChuyenLoc = this.hsc.ars[idxCungLoc].cno[TH.K];
      if (idxFlyCungChuyenLoc !== idxChuyenLocTiep) {
        isOk = false;
        return false;
      }
      const idStarChuyenKi = this.hsc.HOA[this.hsc.ars[idxCungLoc].cn][3];
      if (this.hsc.ars[idxChuyenLocTiep].stlk[idStarChuyenKi][StlkName.isMoveLoc] === 0) {
        isOk = false;
        return false;
      }
    });
    return isOk;
  }
  /**
   * So sánh hai mảng
   * @param a
   * @param b
   * @returns True if the arrays are equal (have identical content), false otherwise
   */
  arraysEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  /**
   * Xoay mảng
   * @param arr
   * @param k
   * @returns A new array with elements rotated by k positions
   */
  rotateArray(arr, k) {
    return [...arr.slice(k, arr.length), ...arr.slice(0, k)];
  }
  /**
   * Lấy các đại diện duy nhất
   * @param arr
   * @returns An array of unique representative elements from the input array
   */
  getUniqueRepresentatives(arr) {
    const representatives = [];
    const visited = Array.from({ length: arr.length }).fill(false);
    for (let i = 0; i < arr.length; i++) {
      if (visited[i] || arr[i].length === 0) continue;
      const representative = arr[i];
      visited[i] = true;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].length === 0) continue;
        for (let k = 0; k < arr[j].length; k++) {
          if (this.arraysEqual(this.rotateArray(arr[j], k), representative)) {
            visited[j] = true;
            break;
          }
        }
      }
      representatives.push(representative);
    }
    return representatives;
  }
  /**
   * Lấy danh sách các sao Hóa trong cung
   * @param idx
   * @returns An array of star objects containing information about transformed stars in the specified zone
   */
  listStarHoaInZone(idx) {
    const starHoaRows = [];
    const cungCr = this.hsc.ars[idx];
    const filteredTHXK = cungCr.ss.filter((item) => [60, 61, 62, 63].includes(item));
    const allStars = cungCr.sb.concat(filteredTHXK);
    allStars.forEach((starCr) => {
      if (this.hsc.str2u.includes(starCr)) {
        starHoaRows.push({ ids: starCr, vl: this.hsc.str2hc[starCr] });
      }
    });
    return starHoaRows;
  }
  /**
   * Kiểm tra Niên Lộc
   * @param idx
   * @returns True if the zone contains Niên Lộc, false otherwise
   */
  isNienLoc(idx) {
    const idxNienLoc = this.hsc.aIdx.s64;
    return idxNienLoc === idx;
  }
  /**
   * Kiểm tra Niên Kỵ
   * @param idx
   * @returns True if the zone contains Niên Kỵ, false otherwise
   */
  isNienKi(idx) {
    const idxNienKi = this.hsc.aIdx.s67;
    return idxNienKi === idx;
  }
  /**
   * Kiểm tra Mệnh Lộc hoặc Niên Lộc
   * @param idx
   * @returns True if the zone contains either Mệnh Lộc or Niên Lộc, false otherwise
   */
  isMenhLocNienLoc(idx) {
    const idxNienLoc = this.hsc.aIdx.s64;
    const idxMenhPhiLoc = this.hsc.ars[this.hsc.am].cno[TH.L];
    return idxNienLoc === idx || idxMenhPhiLoc === idx;
  }
  /**
   * Kiểm tra Mệnh Kỵ hoặc Niên Kỵ
   * @param idx
   * @returns True if the zone contains either Mệnh Kỵ or Niên Kỵ, false otherwise
   */
  isMenhKiNienKi(idx) {
    const idxNienKi = this.hsc.aIdx.s67;
    const idxMenhPhiKy = this.hsc.ars[this.hsc.am].cno[TH.K];
    return idxNienKi === idx || idxMenhPhiKy === idx;
  }
  /**
   * Kiểm tra Mệnh Kỵ
   * @param idx
   * @returns True if the zone contains Mệnh Kỵ, false otherwise
   */
  isMenhKi(idx) {
    const idxMenhPhiKy = this.hsc.ars[this.hsc.am].cno[TH.K];
    return idxMenhPhiKy === idx;
  }
  /**
   * Thiết lập Lộc Kỵ tĩnh
   */
  /**
   * Thiết lập Lộc Kỵ tĩnh cho tất cả các cung
   */
  setLocKiStatic() {
    for (let idx = 0; idx < 12; idx += 1) {
      let zoneNumLoc = 0;
      let zoneNumLocKeep = 0;
      let zoneNumKi = 0;
      zoneNumLoc += this.isNienLoc(idx) ? 1 : 0;
      zoneNumKi += this.isNienKi(idx) ? 1 : 0;
      let isMoveLoc = this.isMenhLocNienLoc(idx) ? 1 : 0;
      let isMoveAll = this.isMenhLocNienLoc(idx) ? 1 : 0;
      let isMoveKi = this.isMenhKiNienKi(idx) ? 1 : 0;
      const bTuKi = this.hsc.ars[idx].cno[TH.K] === idx;
      const bTuLoc = this.hsc.ars[idx].cno[TH.L] === idx;
      const starHoaInZones = this.listStarHoaInZone(idx);
      if (starHoaInZones.length <= 0) {
        this.hsc.ars[idx].zolk[TH.L] = [0, -1, 0, 0, 0, 0];
        this.hsc.ars[idx].zolk[TH.K] = [0, -1, 0];
        continue;
      }
      starHoaInZones.forEach((starHoaIz) => {
        const detailStarHoaCome = this.hsc.ars[idx].cnw;
        const starNumLoc = detailStarHoaCome[TH.L].filter((x) => x === starHoaIz.ids).length;
        const starNumKi = detailStarHoaCome[TH.K].filter((x) => x === starHoaIz.ids).length;
        if (starNumLoc > 0 || starNumKi > 0) {
          let locKeepSmall = 0;
          this.hsc.ars[idx].stlk[starHoaIz.ids] = [0, 0, 0, 0, 0, 0, 0];
          this.hsc.ars[idx].stlk[starHoaIz.ids][StlkName.numLoc] = starNumLoc;
          this.hsc.ars[idx].stlk[starHoaIz.ids][StlkName.numKi] = starNumKi;
          this.hsc.ars[idx].stlk[starHoaIz.ids][StlkName.currentLoc] = starNumLoc;
          this.hsc.ars[idx].stlk[starHoaIz.ids][StlkName.isMoveLoc] = bTuKi ? 0 : starNumLoc >= 2 ? 1 : 0;
          this.hsc.ars[idx].stlk[starHoaIz.ids][StlkName.isMoveKi] = bTuKi ? 0 : starNumKi >= 2 ? 1 : 0;
          this.hsc.ars[idx].stlk[starHoaIz.ids][StlkName.isTruyLoc] = 0;
          this.hsc.ars[idx].stlk[starHoaIz.ids][StlkName.isTruyKi] = 0;
          locKeepSmall = bTuKi ? starNumLoc : starNumLoc >= 2 ? 0 : starNumLoc;
          zoneNumLocKeep += locKeepSmall;
          zoneNumLoc += starNumLoc;
          zoneNumKi += starNumKi;
        }
      });
      isMoveLoc = bTuLoc ? 1 : isMoveLoc;
      isMoveAll = bTuLoc ? 1 : isMoveAll;
      isMoveLoc = this.checkMoveLoc(isMoveLoc, zoneNumLoc, idx);
      isMoveAll = this.checkMoveAll(isMoveAll, idx, isMoveLoc);
      isMoveKi = this.checkMoveKi(isMoveKi, zoneNumKi);
      isMoveLoc = bTuKi ? 0 : isMoveLoc;
      isMoveAll = bTuKi ? 0 : isMoveAll;
      isMoveKi = bTuKi ? 0 : isMoveKi;
      this.updateZoneLocKi(idx, isMoveLoc, zoneNumLoc, zoneNumLocKeep, isMoveAll, isMoveKi, zoneNumKi);
    }
    this.truyLocKi();
    this.countKiStatic();
  }
  /**
   * Kiểm tra di chuyển Lộc
   * @param isMoveLoc
   * @param zoneNumLoc
   * @param idx
   * @returns Updated isMoveLoc value: 1 if zone should move Lộc, 0 otherwise
   */
  checkMoveLoc(isMoveLoc, zoneNumLoc, idx) {
    if (isMoveLoc === 0) {
      const isZoneHas1StarHasMoveLoc = this.hsc.ars[idx].stlk.some(
        (lksData) => lksData[StlkName.isMoveLoc] === 1
      );
      isMoveLoc = zoneNumLoc >= 2 && isZoneHas1StarHasMoveLoc ? 1 : isMoveLoc;
    }
    return isMoveLoc;
  }
  /**
   * Kiểm tra di chuyển tất cả
   * @param isMoveAll
   * @param idx
   * @param isMoveLoc
   * @returns Updated isMoveAll value: 1 if all Lộc should move, 0 otherwise
   */
  checkMoveAll(isMoveAll, idx, isMoveLoc) {
    if (isMoveAll === 0) {
      if (this.hsc.ars[idx].stlk.length === 1 && isMoveLoc === 1) {
        isMoveAll = 1;
      }
    }
    return isMoveAll;
  }
  /**
   * Kiểm tra di chuyển Kỵ
   * @param isMoveKi
   * @param zoneNumKi
   * @returns Updated isMoveKi value: 1 if zone should move Kỵ, 0 otherwise
   */
  checkMoveKi(isMoveKi, zoneNumKi) {
    if (isMoveKi === 0) {
      return zoneNumKi >= 2 ? 1 : isMoveKi;
    }
    return isMoveKi;
  }
  /**
   * Update zone loc ki
   * @param idx
   * @param isMoveLoc
   * @param zoneNumLoc
   * @param zoneNumLocKeep
   * @param isMoveAll
   * @param isMoveKi
   * @param zoneNumKi
   */
  updateZoneLocKi(idx, isMoveLoc, zoneNumLoc, zoneNumLocKeep, isMoveAll, isMoveKi, zoneNumKi) {
    this.hsc.ars[idx].zolk[TH.L] = [0, 0, 0, 0, 0, 0, 0];
    this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveLoc] = isMoveLoc;
    this.hsc.ars[idx].zolk[TH.L][ZolkName.totalLoc] = zoneNumLoc;
    this.hsc.ars[idx].zolk[TH.L][ZolkName.currentLoc] = zoneNumLoc;
    this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveAllLoc] = isMoveAll;
    this.hsc.ars[idx].zolk[TH.L][ZolkName.locKeep] = isMoveAll === 1 ? 0 : zoneNumLocKeep;
    this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveNienLoc] = this.isNienLoc(idx) ? 1 : 0;
    this.hsc.ars[idx].zolk[TH.K] = [0, 0, 0, 0, 0, 0, 0];
    this.hsc.ars[idx].zolk[TH.K][ZolkName.isMoveKi] = isMoveKi;
    this.hsc.ars[idx].zolk[TH.K][ZolkName.totalKi] = zoneNumKi;
    this.hsc.ars[idx].zolk[TH.K][ZolkName.currentKi] = 0;
  }
  /**
   * Kiểm tra Truy Lộc cho cung
   * @param idx
   */
  checkZoneTruyLoc(idx) {
    const isTuKi = this.hsc.ars[idx].cno[TH.K] === idx;
    if (!isTuKi) {
      const isIdxMoveAllLoc = this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveAllLoc];
      let zoneNumLoc = 0;
      this.hsc.ars[idx].stlk.forEach((stlkData, idxStar) => {
        if (isIdxMoveAllLoc === 1 && stlkData[StlkName.currentLoc] > 0 && stlkData[StlkName.isMoveLoc] === 0) {
          this.hsc.ars[idx].stlk[idxStar][StlkName.isMoveLoc] = 1;
          this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveLoc] = 1;
        } else {
          if (stlkData[StlkName.currentLoc] > 0 && stlkData[StlkName.isMoveLoc] === 0 && stlkData[StlkName.numKi] > 0 && stlkData[StlkName.numLoc] > 0) {
            this.hsc.ars[idx].cni[3].forEach((idZoneCome, index) => {
              if (this.hsc.ars[idx].cnw[3][index] === idxStar) {
                const isZoneComeMoveLoc = this.hsc.ars[idZoneCome].zolk[TH.L][ZolkName.isMoveLoc] > 0;
                if (isZoneComeMoveLoc) {
                  this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveLoc] = 1;
                  this.hsc.ars[idx].stlk[idxStar][StlkName.isMoveLoc] = 1;
                  this.hsc.ars[idx].stlk[idxStar][StlkName.isTruyLoc] = 1;
                }
              }
            });
          }
        }
        zoneNumLoc += stlkData[StlkName.currentLoc];
      });
      this.hsc.ars[idx].zolk[TH.L][ZolkName.currentLoc] = zoneNumLoc;
    }
    if (!isTuKi && this.hsc.ars[idx].stlk.length === 1 && this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveLoc] === 1) {
      this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveAllLoc] = 1;
    }
  }
  /**
   * Kiểm tra Truy Kỵ cho cung
   * @param idx
   */
  checkZoneTruyKi(idx) {
    const isTuKi = this.hsc.ars[idx].cno[TH.K] === idx;
    let countZoneComeIsMoveKi = 0;
    this.hsc.ars[idx].cni[TH.K].forEach((idZoneCome) => {
      if (this.hsc.ars[idZoneCome].zolk[TH.K][ZolkName.isMoveKi] === 1 && !isTuKi) {
        countZoneComeIsMoveKi += 1;
      }
    });
    if (this.hsc.ars[idx].zolk[TH.K][ZolkName.isMoveKi] === 1 && countZoneComeIsMoveKi === this.hsc.ars[idx].cni[TH.K].length && !this.isMenhKiNienKi(idx)) {
      this.hsc.ars[idx].zolk[TH.K][ZolkName.isMoveKi] = 0;
    }
    if (this.hsc.ars[idx].zolk[TH.K][ZolkName.isMoveKi] === 0 && this.hsc.ars[idx].cni[TH.K].length > 1 && countZoneComeIsMoveKi < this.hsc.ars[idx].cni[TH.K].length && !isTuKi) {
      this.hsc.ars[idx].zolk[TH.K][ZolkName.isMoveKi] = 1;
    }
  }
  /**
   * Truy loc ki
   */
  truyLocKi() {
    for (let idx = 0; idx < 12; idx += 1) {
      this.checkZoneTruyLoc(idx);
      this.checkZoneTruyKi(idx);
    }
  }
  /**
   * Count ki static
   */
  countKiStatic() {
    for (let idx = 0; idx < 12; idx++) {
      let currentKi = 0;
      if (this.isNienKi(idx)) {
        currentKi++;
      }
      this.hsc.ars[idx].cni[TH.K].forEach((idZoneCome) => {
        if (this.hsc.ars[idZoneCome].zolk[TH.K][ZolkName.isMoveKi] === 0 || this.isMenhKi(idx) && this.hsc.ars[idZoneCome].zolk[TH.K][ZolkName.isMoveKi] === 1) {
          currentKi++;
        }
      });
      this.hsc.ars[idx].zolk[TH.K][ZolkName.currentKi] = currentKi;
    }
  }
  /**
   * Count move ki
   * @param idx
   */
  countMoveKi(idx) {
    if (this.hsc.countLoop >= 11) return;
    const currentZone = this.hsc.ars[idx].zolk[TH.K];
    if (this.hsc.ars[idx].cno[TH.K] === idx) return;
    if (currentZone[ZolkName.totalKi] === -1) return;
    this.hsc.countLoop += 1;
    if (this.isZoneMove2(idx)) {
      const idxFly = this.hsc.ars[idx].cno[TH.K];
      const flyZone = this.hsc.ars[idxFly].zolk[TH.K];
      const idCurrentKi = currentZone[ZolkName.currentKi];
      const idCurrentKiFly = flyZone[ZolkName.currentKi];
      flyZone[ZolkName.currentKi] = idCurrentKiFly + idCurrentKi;
      currentZone[ZolkName.currentKi] = 0;
      if (this.isZoneMove2(idxFly)) {
        this.countMoveKi(idxFly);
      }
    }
  }
  /**
   * Count move loc
   * @param idx
   */
  countMoveLoc(idx) {
    if (this.hsc.countLoop >= 11) return;
    const currentZone = this.hsc.ars[idx].zolk[TH.L];
    if (currentZone[ZolkName.totalLoc] === -1) return;
    if (this.hsc.ars[idx].cno[TH.K] === idx) return;
    this.hsc.countLoop += 1;
    const idxStlkList = this.hsc.ars[idx].stlk;
    let zoneLocWillMove = 0;
    idxStlkList.forEach((dataStlk, idStar) => {
      const currentLoc = dataStlk[StlkName.currentLoc];
      const isMoveLoc = dataStlk[StlkName.isMoveLoc];
      const isMoveAllLoc = currentZone[ZolkName.isMoveAllLoc];
      if (isMoveAllLoc === 1 && currentLoc > 0 || currentLoc > 0 && isMoveLoc === 1) {
        zoneLocWillMove += currentLoc;
        currentZone[ZolkName.currentLoc] -= currentLoc;
        this.hsc.ars[idx].stlk[idStar][StlkName.currentLoc] = 0;
      }
    });
    if (this.isNienLoc(idx) && currentZone[ZolkName.isMoveNienLoc] === 1) {
      zoneLocWillMove += 1;
      currentZone[ZolkName.isMoveNienLoc] = 0;
    }
    const idxFly = this.hsc.ars[idx].cno[TH.K];
    const idCan = this.hsc.ars[idx].cn;
    const starIdxFly = this.hsc.HOA[idCan][TH.K];
    const flyZone = this.hsc.ars[idxFly].zolk[TH.L];
    const flyStlk = this.hsc.ars[idxFly].stlk[starIdxFly];
    flyZone[ZolkName.currentLoc] += zoneLocWillMove;
    flyStlk[StlkName.currentLoc] += zoneLocWillMove;
    this.checkZoneTruyLoc(idxFly);
    if (this.isZoneMove2(idxFly, 0)) {
      this.countMoveLoc(idxFly);
    }
  }
  /**
   * Check tuan hoan
   * @param typeTuanHoan
   * @param idx
   * @param arrTuanHoa
   * @returns An array of indices representing the path of tuần hoàn (periodic repetition) through zones
   */
  checkTuanHoan(typeTuanHoan, idx, arrTuanHoa = []) {
    let arrTuanHoaTemp = arrTuanHoa;
    if (this.hsc.countLoop >= 24) return arrTuanHoaTemp;
    this.hsc.countLoop += 1;
    if (this.isZoneMove2(idx, typeTuanHoan)) {
      arrTuanHoaTemp.push(idx);
      const idxFly = this.hsc.ars[idx].cno[TH.K];
      if (this.isZoneMove2(idxFly, typeTuanHoan)) {
        arrTuanHoaTemp = this.checkTuanHoan(typeTuanHoan, idxFly, arrTuanHoaTemp);
      } else {
        arrTuanHoaTemp.push(idxFly);
      }
    }
    return arrTuanHoaTemp;
  }
  /**
   * Check tuan hoan phu thien
   * @param typeTuanHoan
   * @param idx
   * @param arrTuanHoa
   * @returns An array of indices representing the cycle of tuần hoàn (periodic repetition) in Phủ Thiên
   */
  checkTuanHoanPT(typeTuanHoan, idx, arrTuanHoa = []) {
    let arrTuanHoaTemp = arrTuanHoa;
    if (this.hsc.countLoop >= 12 || this.hsc.ars[idx].cno[typeTuanHoan] === idx) {
      return arrTuanHoaTemp;
    }
    this.hsc.countLoop += 1;
    arrTuanHoaTemp.push(idx);
    const idxFly = this.hsc.ars[idx].cno[typeTuanHoan];
    if (idxFly === idx) {
      arrTuanHoaTemp.push(idx);
      return arrTuanHoaTemp;
    }
    arrTuanHoaTemp = this.checkTuanHoanPT(typeTuanHoan, idxFly, arrTuanHoaTemp);
    return arrTuanHoaTemp;
  }
  isZoneMove2(idx, typeLocKi = 3) {
    return typeLocKi === 0 ? this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveLoc] === 1 : this.hsc.ars[idx].zolk[TH.K][ZolkName.isMoveKi] === 1;
  }
  /**
   * Check xem có phải chu kỳ lặp lại
   * @param arr
   * @returns True if the array has a periodic pattern, false otherwise
   */
  checkPeriodicRepetition(arr) {
    const n = arr.length;
    for (let len = 1; len <= n / 2; len++) {
      let isPeriodic = true;
      for (let i = 0; i < n; i++) {
        if (arr[i] !== arr[i % len]) {
          isPeriodic = false;
          break;
        }
      }
      if (isPeriodic) {
        return true;
      }
    }
    return false;
  }
  /**
   * Lấy các phần tử duy nhất có chu kỳ lặp lại
   * @param arr
   * @returns Array of unique elements that form the periodic pattern
   */
  getUniquePeriodicElements(arr) {
    for (let len = 1; len <= arr.length / 2; len++) {
      const subArray = arr.slice(0, len);
      const repeatedSubArray = Array.from({ length: Math.ceil(arr.length / len) }).fill(subArray).flat().slice(0, arr.length);
      if (JSON.stringify(repeatedSubArray) === JSON.stringify(arr)) {
        return [...new Set(subArray)];
      }
    }
    return [];
  }
  /**
   * Check xem có phải que đã tồn tại trong cung
   * @param idx
   * @param iQue
   * @returns True if the que exists in the zone, false otherwise
   */
  isExitQueByCung(idx, iQue) {
    const queLst = this.hsc.ars[idx].que;
    let returnData = false;
    queLst.forEach((element) => {
      if (iQue === element[0]) {
        returnData = true;
        return returnData;
      }
    });
    return returnData;
  }
  /**
   *Add Bat Quai
   */
  addBatQuai() {
    const mtHoaIdx = [this.hsc.aIdx.s64, this.hsc.aIdx.s65, this.hsc.aIdx.s66, this.hsc.aIdx.s67];
    for (let typeHoa = 0; typeHoa < 4; typeHoa += 1) {
      const quePart1 = typeHoa;
      const idxTienThien = mtHoaIdx[typeHoa];
      const cungTienThien = this.hsc.ars[idxTienThien];
      cungTienThien.cno.forEach((idxCungFlyOut, typeHoaFlyOut) => {
        if (idxCungFlyOut === idxTienThien) {
          const quePart2 = typeHoaFlyOut;
          cungTienThien.cni.forEach((arrCniFlyIn, typeHoaFlyIn) => {
            for (let idxArrTemp = 0; idxArrTemp < arrCniFlyIn.length; idxArrTemp += 1) {
              const idxCungFlyIn = arrCniFlyIn[idxArrTemp];
              if (idxCungFlyIn === idxTienThien && typeHoaFlyIn === typeHoaFlyOut) {
                continue;
              }
              const quePart3 = typeHoaFlyIn;
              const idxIChing = hoa2IchingIdx([quePart1, quePart2, quePart3]);
              if (!this.isExitQueByCung(idxCungFlyIn, idxIChing)) {
                this.hsc.ars[idxCungFlyIn].que.push([
                  idxIChing,
                  [typeHoa, typeHoaFlyOut, typeHoaFlyIn],
                  [idxTienThien, idxTienThien, idxCungFlyIn]
                ]);
              }
            }
          });
        }
      });
      const idxXungTH = xtngl[idxTienThien].x;
      cungTienThien.cno.forEach((idxCungFlyOut, typeHoaFlyOut) => {
        if (idxCungFlyOut === idxXungTH) {
          const quePart2 = typeHoaFlyOut;
          this.hsc.ars[idxXungTH].cni.forEach((arrCniFlyIn, typeHoaFlyIn) => {
            for (let idxArrTemp = 0; idxArrTemp < arrCniFlyIn.length; idxArrTemp += 1) {
              const idxCungFlyIn = arrCniFlyIn[idxArrTemp];
              if (idxCungFlyIn === idxTienThien && typeHoaFlyIn === typeHoaFlyOut) {
                continue;
              }
              const quePart3 = typeHoaFlyIn;
              const idxIChing = hoa2IchingIdx([quePart1, quePart2, quePart3]);
              if (!this.isExitQueByCung(idxCungFlyIn, idxIChing)) {
                this.hsc.ars[idxCungFlyIn].que.push([
                  idxIChing,
                  [typeHoa, typeHoaFlyOut, typeHoaFlyIn],
                  [idxTienThien, idxXungTH, idxCungFlyIn]
                ]);
              }
            }
          });
          cungTienThien.cni.forEach((arrCniFlyIn, typeHoaFlyIn) => {
            for (let idxArrTemp = 0; idxArrTemp < arrCniFlyIn.length; idxArrTemp += 1) {
              const idxCungFlyIn = arrCniFlyIn[idxArrTemp];
              if (idxCungFlyIn === idxTienThien) {
                continue;
              }
              const quePart3 = typeHoaFlyIn;
              const idxIChing = hoa2IchingIdx([quePart1, quePart2, quePart3]);
              if (!this.isExitQueByCung(idxCungFlyIn, idxIChing)) {
                this.hsc.ars[idxCungFlyIn].que.push([
                  idxIChing,
                  [typeHoa, typeHoaFlyOut, typeHoaFlyIn],
                  [idxTienThien, idxTienThien, idxCungFlyIn]
                ]);
              }
            }
          });
        }
      });
      const cungXungTH = this.hsc.ars[idxXungTH];
      cungXungTH.cno.forEach((idxCungFlyOut, typeHoaFlyOut) => {
        if (idxCungFlyOut === idxTienThien) {
          const quePart2 = typeHoaFlyOut;
          this.hsc.ars[idxXungTH].cni.forEach((arrCniFlyIn, typeHoaFlyIn) => {
            for (let idxArrTemp = 0; idxArrTemp < arrCniFlyIn.length; idxArrTemp += 1) {
              const idxCungFlyIn = arrCniFlyIn[idxArrTemp];
              const quePart3 = typeHoaFlyIn;
              const idxIChing = hoa2IchingIdx([quePart1, quePart2, quePart3]);
              if (!this.isExitQueByCung(idxCungFlyIn, idxIChing)) {
                this.hsc.ars[idxCungFlyIn].que.push([
                  idxIChing,
                  [typeHoa, typeHoaFlyOut, typeHoaFlyIn],
                  [idxTienThien, idxXungTH, idxCungFlyIn]
                ]);
              }
            }
          });
          cungTienThien.cni.forEach((arrCniFlyIn, typeHoaFlyIn) => {
            for (let idxArrTemp = 0; idxArrTemp < arrCniFlyIn.length; idxArrTemp += 1) {
              const idxCungFlyIn = arrCniFlyIn[idxArrTemp];
              if (idxCungFlyIn === idxXungTH && typeHoaFlyIn === typeHoaFlyOut) {
                continue;
              }
              if (idxCungFlyIn === idxTienThien) {
                continue;
              }
              const quePart3 = typeHoaFlyIn;
              const idxIChing = hoa2IchingIdx([quePart1, quePart2, quePart3]);
              if (!this.isExitQueByCung(idxCungFlyIn, idxIChing)) {
                this.hsc.ars[idxCungFlyIn].que.push([
                  idxIChing,
                  [typeHoa, typeHoaFlyOut, typeHoaFlyIn],
                  [idxTienThien, idxTienThien, idxCungFlyIn]
                ]);
              }
            }
          });
        }
      });
    }
  }
}

dayjs.extend(utc);
dayjs.extend(customParseFormat);
var PrefixArea = /* @__PURE__ */ ((PrefixArea2) => {
  PrefixArea2["BigStar"] = "sb";
  PrefixArea2["SmallStar"] = "ss";
  PrefixArea2["YearStar"] = "sy";
  PrefixArea2["MonthStar"] = "sm";
  PrefixArea2["DayStar"] = "sd";
  PrefixArea2["TenYearStar"] = "sv";
  return PrefixArea2;
})(PrefixArea || {});
class HoroscopeBuildGps {
  lat = 21.0285;
  lon = 105.8333;
  search;
  cid = 2;
  //Số cục trong tử vi 2 Thủy nhị cục, 3 Mộc tam cục, 4 Kim tứ cục, 5 Thổ ngũ cục, 6 Hỏa lục cục
  at = 1;
  // Index cung thân (0-11)
  am = 1;
  // Index cung mệnh (0-11)
  yeo = 1;
  // Tuổi âm lịch
  dtb;
  // Thông tin ngày sinh dương lịch, âm lịch, can chi, lục thập hoa giáp
  dtv;
  // Thông tin ngày xem dương lịch, âm lịch, can chi, lục thập hoa giáp
  dtc;
  // Thông tin ngày hiện tại dương lịch, âm lịch, can chi, lục thập hoa giáp
  bornDate;
  // Original Date object for birth date to avoid redundant reconstruction
  aIdx = {};
  // Index các sao trong lá số
  adye = 1;
  // Năm Dương, Năm Âm theo âm lịch 1 Dương, 0 Âm
  adyetk = 1;
  // Năm Dương, Năm Âm theo tiết khí 1 Dương, 0 Âm
  adme = 1;
  // Cung Mệnh Dương Âm theo địa chi 1 Dương, 0 Âm
  ad = 1;
  //âm dương thuận lý 1, âm dương nghịch lý 0
  sx = 1;
  // Giới tính 1 Nam, 0 Nữ
  ttr = { 0: [], 1: [], 2: [] };
  // Tứ trụ
  ars = [];
  // Lá số
  sks = 5;
  // Index của SKB trong staticData.ts 3 Mệnh Cục tì hòa, 1 Cục sinh mệnh, 2 Mệnh sinh Cục, 4 Mệnh khắc cục, 5 Cục khắc mệnh
  istc = false;
  // False la khoong phai Trung châu phái, Kiểu lá số 6, 7, 8 là Trung châu phái
  tpCan = 0;
  cfg = [...configDefault];
  // Cấu Hình ls
  dvidx = 0;
  // Index của DV Đại Vận hiện tại trong lá số
  idxCheckZone = 0;
  mctc = [];
  // Mệnh chủ thân chủ base trên sao nào dựa trên năm sinh array SM index [0] Mệnh chủ, [1] Thân chủ
  cach = {};
  // cách cục nhưng chưa dùng
  rad = 0;
  tutru = {
    cot: [
      { cht: -1, cn: -1, ci: -1, ctg: [], pht: [], tsctg: [], ts: -1, na: -1 },
      { cht: -1, cn: -1, ci: -1, ctg: [], pht: [], tsctg: [], ts: -1, na: -1 },
      { cht: -1, cn: -1, ci: -1, ctg: [], pht: [], tsctg: [], ts: -1, na: -1 },
      { cht: -1, cn: -1, ci: -1, ctg: [], pht: [], tsctg: [], ts: -1, na: -1 }
    ],
    dv: [],
    dvt: []
  };
  // Đánh dấu các thuộc tính có thể bị xóa là optional nhưng khởi tạo giá trị mặc định
  starPlacer;
  circlePlacer;
  zoneBuilder;
  calculationHelper;
  arrIdxChuyenLoc = [];
  str2hc = {};
  str2u = [];
  arrCkZone = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ];
  loopLP = [[], [], [], []];
  loopPT = [[], [], [], []];
  countLoop = 0;
  HOA = CAN_HOA;
  numberStarCol1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  numberStarCol2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  css = 0;
  /**
   * Constructor
   * @param _opt Options
   * @param _opt.sex Giới tính
   * @param _opt.born Ngày sinh (Dạyjs UTC)
   * @param _opt.view Ngày xem (Dạyjs UTC)
   * @param _opt.cfg Cấu hình
   * @param _opt.lat Vĩ độ
   * @param _opt.lon Kinh độ
   */
  constructor(_opt) {
    if (_opt && _opt.cfg) {
      Object.assign(this.cfg, _opt.cfg);
    }
    this.lat = _opt.lat || 21.0285;
    this.lon = _opt.lon || 105.8542;
    const dtNow = dayjs().utc();
    this.bornDate = _opt.born;
    const bornLnIf = this.getSafeLunarDetails(_opt.born.format("YYYY-MM-DD HH:mm"), this.lat, this.lon);
    this.dtb = this.buildDateInfo(bornLnIf);
    _opt.view ? _opt.view : dtNow.utc().toDate();
    const viewLnIf = this.getSafeLunarDetails(_opt.view.format("YYYY-MM-DD HH:mm"), this.lat, this.lon);
    this.dtv = this.buildDateInfo(viewLnIf);
    this.yeo = this.dtv.ln.y - this.dtb.ln.y + 1;
    this.sx = _opt.sex;
    this.istc = [6, 7, 8].includes(this.cfg[CfgValue.typeLs]);
    this.HOA = GETHOA(this.cfg[CfgValue.lsCanType]);
    if (!this.istc) {
      this.cfg[CfgValue.tcpb] = 0;
    }
    this.str2hc = StarToHoaCan(this.HOA);
    this.str2u = StarUseHoa(this.HOA);
    this.starPlacer = new StarPlacer(this);
    this.circlePlacer = new CirclePlacer(this);
    this.zoneBuilder = new ZoneBuilder(this);
    this.calculationHelper = new CalculationHelper();
    this.initializeHoroscope();
  }
  // /**
  //  * Chuyển đổi UTC time thành local time của GPS location
  //  *
  //  * Luồng xử lý:
  //  * 1. Nhận UTC time (từ user input sau khi đã convert từ local time của user)
  //  * 2. Lấy timezone offset của GPS coordinates (ví dụ: VN = +7h)
  //  * 3. Cộng offset vào UTC time để được local time tại GPS location
  //  *
  //  * Tại sao cần: LocalLunarCalendar cần UTC time, nhưng phải là UTC time
  //  * tương ứng với local time tại GPS location để tính toán thiên văn chính xác.
  //  *
  //  * @param utcDate Date object (UTC time từ user input)
  //  * @returns Date object (local time tại GPS location)
  //  */
  // public adjustDateForGpsTimezone = (utcDate: Date): Date => {
  // const tzInfo = SolarCalculator.getTimezoneInfo(this.lat, this.lon, utcDate);
  // // Tạo đối tượng dayjs từ utcDate (coi như đây là gốc UTC)
  // // Sau đó cộng offset (tính bằng phút để chính xác hơn giờ)
  // const gpsDate = dayjs.utc(utcDate).add(tzInfo.offset, 'hour');
  // // Trả về Date object đã được "dịch chuyển" kim đồng hồ
  // return gpsDate.toDate();
  // };
  /**
   * Chuẩn hóa Date object từ Input để truyền vào bộ tính toán Lunar
   * @param inputDateTime Chuỗi giờ từ picker (VD: "2026-01-06 08:00")
   * @param gpsLat Tọa độ Vĩ độ
   * @param gpsLon Tọa độ Kinh độ
   */
  getSafeLunarDetails = (inputDateTime, gpsLat, gpsLon) => {
    const localMoment = dayjs(inputDateTime);
    return LocalLunarCalendar.getLunarDetails(localMoment.toDate(), gpsLat, gpsLon);
  };
  removePrivateProperties() {
    delete this.starPlacer;
    delete this.circlePlacer;
    delete this.zoneBuilder;
    delete this.calculationHelper;
    this.arrIdxChuyenLoc = [];
    this.str2hc = {};
    this.str2u = [];
    this.arrCkZone = [];
    this.countLoop = 0;
    this.HOA = {};
    this.numberStarCol1 = [];
    this.numberStarCol2 = [];
    this.idxCheckZone = 0;
    this.tpCan = 0;
    this.adyetk = 1;
    delete this.dtc;
  }
  initializeHoroscope() {
    this.zoneBuilder.buildZoneName();
    this.starPlacer.fillBigStar();
    const mtLocTon = [8, 9, 11, 0, 2, 3, 5, 6, 5, 6];
    const canDv = CanChi.can(this.dtb.bs.y);
    this.starPlacer.fillSixAssassin(mtLocTon[canDv], "ss" /* SmallStar */);
    this.starPlacer.fillSixBuffer(CanChi.can(this.dtb.bs.y), "ss" /* SmallStar */, this.dtb.ln.h);
    this.starPlacer.fillBig4(CanChi.can(this.dtb.bs.y), "ss" /* SmallStar */);
    this.circlePlacer.fillKingCircle(CanChi.chi(this.dtb.bs.y), "ss" /* SmallStar */);
    this.circlePlacer.fillDoctorCircle(CanChi.can(this.dtb.bs.y), "ss" /* SmallStar */);
    this.circlePlacer.fillGrowCircle();
    this.starPlacer.fillTuanTriet(CanChi.can(this.dtb.bs.y), CanChi.chi(this.dtb.bs.y));
    this.starPlacer.fillQuangQuyThaiToa();
    this.starPlacer.fillThaiCaoAnDuong();
    this.starPlacer.fillDargon();
    this.starPlacer.fillTangMaKhocHu(CanChi.chi(this.dtb.bs.y), "ss" /* SmallStar */);
    this.starPlacer.fillHinhRieuHaSatToai();
    this.starPlacer.fillDaoHongHiCoQua(CanChi.chi(this.dtb.bs.y), "ss" /* SmallStar */);
    this.starPlacer.fillQuanPhucNienTru(CanChi.can(this.dtb.bs.y), "ss" /* SmallStar */);
    this.starPlacer.fillThienNguyetDiaThanTaiTho();
    this.starPlacer.fillDauThuongSuLaVong();
    this.skyAreaSK();
    if (this.istc) {
      this.starPlacer.fillTuViTrungChauPhai();
    }
    this.circlePlacer.fillCircleBigTime();
    this.circlePlacer.fillCircleSmallTime();
    this.fillStarRepeatByLoop();
    this.addAgeToAreas();
    this.zoneBuilder.fillBaseMenhThan();
    this.zoneBuilder.fillPhiHoa();
    this.tuTruBuildBigTime();
    this.tuTruBuildCot(0, this.dtb.tk.y, this.dtb.tk.d);
    this.tuTruBuildCot(1, this.dtb.tk.m, this.dtb.tk.d);
    this.tuTruBuildCot(2, this.dtb.tk.d, this.dtb.tk.d, true);
    this.tuTruBuildCot(3, this.dtb.tk.h, this.dtb.tk.d);
    this.css = Math.max(Math.max(...this.numberStarCol1), Math.max(...this.numberStarCol2));
  }
  // Phương thức thêm sao vào lá số
  addStar(idx, starID, prefix) {
    if (prefix !== "sb" /* BigStar */ && prefix !== "ss" /* SmallStar */ && SM[starID][`is${prefix}`] !== void 0) {
      if (SM[starID][`is${prefix}`] === false) {
        return;
      }
    }
    this.ars[idx][prefix].push(starID);
    const mang = this.ars[idx][prefix];
    mang.sort((a, b) => {
      if (SM[a].zone === 1 && SM[b].zone !== 1) {
        return -1;
      }
      if (SM[a].zone === 3 && SM[b].zone !== 1 && SM[b].zone !== 3) {
        return -1;
      }
      return 1;
    });
    this.ars[idx][prefix] = mang;
    switch (prefix) {
      case "sb" /* BigStar */:
      case "ss" /* SmallStar */:
        this.aIdx[`s${starID}`] = idx;
        break;
      default:
        this.aIdx[`${prefix}${starID}`] = idx;
        break;
    }
    const luuStar = prefix !== "sb" /* BigStar */ && prefix !== "ss" /* SmallStar */;
    if ((prefix === "ss" /* SmallStar */ || prefix === "sv" /* TenYearStar */ && this.cfg[CfgValue.dvStar] === 1 && ![64, 65, 66, 67].includes(starID) || prefix === "sy" /* YearStar */ && this.cfg[CfgValue.currentStar] > 0 && ![64, 65, 66, 67].includes(starID)) && starID > 13) {
      const sif = SM[starID];
      if (!(sif.cir !== void 0 && sif.cir === "vts")) {
        const cfgShowStar = this.cfg[CfgValue.showHideStar];
        if (cfgShowStar > 0 && !luuStar) {
          if (cfgShowStar === 1 && !STARSTRONG.includes(starID)) {
            return;
          }
          if (cfgShowStar === 2 && !STARSTRONG.includes(starID) && !STAR_SIGN.includes(starID)) {
            return;
          }
          if (cfgShowStar === 3 && !STARSTRONG.includes(starID) && !STAR_SIGN.includes(starID) && !CR_TS.includes(starID)) {
            return;
          }
          if (cfgShowStar === 4 && !STARSTRONG.includes(starID) && !STAR_SIGN.includes(starID) && !CR_TS.includes(starID) && !FAILURE6.includes(starID)) {
            return;
          }
        }
        const isShowDV = this.cfg[CfgValue.dvStar] === 1;
        const isShowLuu = this.cfg[CfgValue.currentStar] > 0;
        if (prefix === "sv" /* TenYearStar */ && !isShowDV || prefix === "sy" /* YearStar */ && !isShowLuu) {
          return;
        }
        if (sif.typ === 1) {
          this.numberStarCol1[idx] += 1;
        }
        if (sif.typ === 2) {
          this.numberStarCol2[idx] += 1;
        }
      }
    }
  }
  // Các phương thức di chuyển và tính toán vị trí
  jumbDown(idxStart) {
    return this.calculationHelper.jumpDown(idxStart);
  }
  jumbUp(idxStart) {
    return this.calculationHelper.jumpUp(idxStart);
  }
  jumbByYinBoyYanGirl(idxStart) {
    return this.sx === this.adye ? this.jumbUp(idxStart) : this.jumbDown(idxStart);
  }
  jumbByYinBoyYanGirlTietKhi(idxStart) {
    return this.sx === this.adyetk ? this.jumbUp(idxStart) : this.jumbDown(idxStart);
  }
  idxAfterMove(idxStart, limit, bThuan = true) {
    return this.calculationHelper.idxAfterMove(idxStart, limit, bThuan);
  }
  canJumpDown(startIdxInput) {
    return this.calculationHelper.canJumpDown(startIdxInput);
  }
  canJumpUp(startIdxInput) {
    return this.calculationHelper.canJumpUp(startIdxInput);
  }
  canJumbByYinBoyYanGirl(startIdxInput) {
    return this.sx === this.adye ? this.canJumpUp(startIdxInput) : this.canJumpDown(startIdxInput);
  }
  canJumbByYinBoyYanGirlTietKhi(startIdxInput) {
    return this.sx === this.adyetk ? this.canJumpUp(startIdxInput) : this.canJumpDown(startIdxInput);
  }
  // Phương thức tính toán khu vực bầu trời
  skyAreaSK() {
    const SKBS = {
      2: { 2: 3, 3: 2, 4: 1, 6: 4, 5: 5 },
      3: { 3: 3, 6: 2, 2: 1, 5: 4, 4: 5 },
      4: { 4: 3, 2: 2, 5: 1, 3: 4, 6: 5 },
      5: { 5: 3, 4: 2, 6: 1, 2: 4, 3: 5 },
      6: { 6: 3, 5: 2, 3: 1, 4: 4, 2: 5 }
    };
    this.sks = SKBS[LTHG_HH[CanChi.lthg(this.dtb.bs.y)]][LTHG_HH[this.ars[this.aIdx.am].na]];
  }
  // Phương thức đặt các sao lặp lại theo chu kỳ
  fillStarRepeatByLoop() {
    const cungDvCheckIdx = this.aIdx[`aid${this.idxCheckZone}`];
    const mtLocTon = [8, 9, 11, 0, 2, 3, 5, 6, 5, 6];
    const canDvCheck = this.ars[cungDvCheckIdx].cn;
    this.addStar(mtLocTon[canDvCheck], 27, "sv" /* TenYearStar */);
    this.starPlacer.fillSixAssassin(this.aIdx.sv27, "sv" /* TenYearStar */);
    this.starPlacer.fillSixBuffer(canDvCheck, "sv" /* TenYearStar */);
    this.starPlacer.fillBig4(canDvCheck, "sv" /* TenYearStar */);
    this.circlePlacer.fillKingCircle(CanChi.chi(this.dtv.bs.y), "sy" /* YearStar */);
    this.circlePlacer.fillDoctorCircle(CanChi.can(this.dtv.bs.y), "sy" /* YearStar */);
    this.starPlacer.fillSixAssassin(this.aIdx.sy27, "sy" /* YearStar */);
    this.starPlacer.fillSixBuffer(CanChi.can(this.dtv.bs.y), "sy" /* YearStar */);
    this.starPlacer.fillBig4(CanChi.can(this.dtv.bs.y), "sy" /* YearStar */);
    this.starPlacer.fillTangMaKhocHu(CanChi.chi(this.dtv.bs.y), "sy" /* YearStar */);
    this.starPlacer.fillHinhRieuHaSatToai(CanChi.can(this.dtv.bs.y), CanChi.chi(this.dtv.bs.y), "sy" /* YearStar */);
    this.starPlacer.fillDaoHongHiCoQua(CanChi.chi(this.dtv.bs.y), "sy" /* YearStar */);
    this.starPlacer.fillDargon(CanChi.chi(this.dtv.bs.y), "sy" /* YearStar */);
    this.starPlacer.fillTuanTriet(CanChi.can(this.dtv.bs.y), CanChi.chi(this.dtv.bs.y), "sy" /* YearStar */);
  }
  // Phương thức thêm tuổi vào các cung
  addAgeToAreas() {
    let idxBorn = CanChi.chi(this.dtb.bs.y);
    let yearCount = 0;
    for (let i = 1; i <= 84; i += 1) {
      const numbYear = yearCount + this.dtb.ln.y;
      if (numbYear > 2099) {
        break;
      }
      const canYearIdx = numbYear % 10;
      const chiYearIdx = (numbYear + 8) % 12;
      const canChi = `${CAN[canYearIdx]} ${CHI[chiYearIdx]}`;
      const lthgIdx = LTHG.indexOf(canChi);
      const yearInfo = {
        bs: {
          y: CanChi.create(canYearIdx, chiYearIdx, lthgIdx)
        }
      };
      this.ars[idxBorn].ys.push([yearCount + 1, numbYear, CanChi.lthg(yearInfo.bs.y), CanChi.can(yearInfo.bs.y)]);
      idxBorn = this.jumbUp(idxBorn);
      yearCount += 1;
    }
  }
  // Phương thức xây dựng thời gian lớn cho Tứ Trụ
  tuTruBuildBigTime() {
    const tgSinh = this.bornDate;
    const realTkArr = this.dtb.tki;
    const isDirectRight = this.sx === this.adyetk;
    let endDate, numberDay;
    if (!realTkArr || realTkArr.length < 5) {
      endDate = dayjs.utc();
      numberDay = 0;
    } else {
      const parseTkDate = (dateStr) => {
        return dayjs.utc(dateStr, "YYYY/MM/DD HH:mm");
      };
      if (isDirectRight) {
        endDate = parseTkDate(realTkArr[4]);
        numberDay = endDate.diff(tgSinh, "day", true);
      } else {
        endDate = parseTkDate(realTkArr[3]);
        numberDay = tgSinh.diff(endDate, "day", true);
      }
    }
    const realNumberDay = Number(numberDay.toFixed(10));
    const dayNhapVanReal = Math.floor(realNumberDay);
    const hourNhapVanFirst = (realNumberDay - dayNhapVanReal) * 24;
    const hourNhapVanReal = Math.ceil(hourNhapVanFirst);
    const yearConvertFloat = realNumberDay / 3;
    const yeoNhapVanFix = Math.floor(yearConvertFloat);
    const monthNhapVanFloat = (yearConvertFloat - yeoNhapVanFix) * 365 / 30;
    const monthNhapVanFix = Math.floor(monthNhapVanFloat);
    const dayNhapVanFloat = (monthNhapVanFloat - monthNhapVanFix) * 30;
    const dayNhapVanFix = Math.floor(dayNhapVanFloat);
    let timeNhapVan = tgSinh.add(yeoNhapVanFix, "year").add(monthNhapVanFix, "month").add(dayNhapVanFix, "day");
    let canStart = CanChi.can(this.dtb.tk.m);
    let chiStart = CanChi.chi(this.dtb.tk.m);
    for (let i = 0; i < 10; i++) {
      canStart = this.canJumbByYinBoyYanGirlTietKhi(canStart);
      chiStart = this.jumbByYinBoyYanGirlTietKhi(chiStart);
      this.tutru.dv.push([canStart, chiStart, timeNhapVan.unix()]);
      timeNhapVan = timeNhapVan.add(10, "year");
    }
    this.tutru.dvt = [isDirectRight, dayNhapVanReal, hourNhapVanReal, yeoNhapVanFix, monthNhapVanFix, dayNhapVanFix];
  }
  // Phương thức xây dựng cột cho Tứ Trụ
  tuTruBuildCot(idxCot, cotCC, nhatChu, isNhatChu = false) {
    const canNhatChu = CanChi.can(nhatChu);
    this.tutru.cot[idxCot].cht = isNhatChu ? -1 : idxTHAP(canNhatChu, CanChi.can(cotCC));
    this.tutru.cot[idxCot].cn = CanChi.can(cotCC);
    this.tutru.cot[idxCot].ci = CanChi.chi(cotCC);
    const lstCanTang = CHI_CAN[CanChi.chi(cotCC)];
    this.tutru.cot[idxCot].ctg = lstCanTang;
    const lstPhoTinh = [];
    lstCanTang.forEach((val, idxCT) => {
      lstPhoTinh[idxCT] = idxTHAP(canNhatChu, val);
    });
    this.tutru.cot[idxCot].pht = lstPhoTinh;
    this.tutru.cot[idxCot].ts = idxTSTutru(CanChi.can(nhatChu), CanChi.chi(cotCC));
    this.tutru.cot[idxCot].na = CanChi.lthg(cotCC);
  }
  /**
   *
   * @param lnInfo Luna date canchi
   * @returns InfoDate
   */
  buildDateInfo(lnInfo) {
    const data = {
      sn: {
        y: lnInfo.sun.year(),
        m: lnInfo.sun.month() + 1,
        d: lnInfo.sun.date(),
        h: lnInfo.sun.hour(),
        i: lnInfo.sun.minute(),
        ys: lnInfo.solarTime.year(),
        ms: lnInfo.solarTime.month() + 1,
        ds: lnInfo.solarTime.date(),
        hs: lnInfo.solarTime.hour(),
        is: lnInfo.solarTime.minute()
      },
      ln: { y: lnInfo.y, m: lnInfo.m, d: lnInfo.d, h: lnInfo.h, mt: lnInfo.stcc.ml, yt: lnInfo.stcc.yl },
      bs: {
        y: CanChi.create(CAN.indexOf(lnInfo.ycc[0]), CHI.indexOf(lnInfo.ycc[1]), LTHG.indexOf(lnInfo.ycc.join(" "))),
        m: CanChi.create(CAN.indexOf(lnInfo.mcc[0]), CHI.indexOf(lnInfo.mcc[1]), LTHG.indexOf(lnInfo.mcc.join(" "))),
        d: CanChi.create(CAN.indexOf(lnInfo.dcc[0]), CHI.indexOf(lnInfo.dcc[1]), LTHG.indexOf(lnInfo.dcc.join(" "))),
        h: CanChi.create(
          CAN.indexOf(lnInfo.h12cc[lnInfo.h][0]),
          CHI.indexOf(lnInfo.h12cc[lnInfo.h][1]),
          LTHG.indexOf(lnInfo.h12cc[lnInfo.h].join(" "))
        )
      },
      tk: {
        y: CanChi.create(
          CAN.indexOf(lnInfo.stcc.ycc[0]),
          CHI.indexOf(lnInfo.stcc.ycc[1]),
          LTHG.indexOf(lnInfo.stcc.ycc.join(" "))
        ),
        m: CanChi.create(
          CAN.indexOf(lnInfo.stcc.mcc[0]),
          CHI.indexOf(lnInfo.stcc.mcc[1]),
          LTHG.indexOf(lnInfo.stcc.mcc.join(" "))
        ),
        d: CanChi.create(CAN.indexOf(lnInfo.dcc[0]), CHI.indexOf(lnInfo.dcc[1]), LTHG.indexOf(lnInfo.dcc.join(" "))),
        h: CanChi.create(
          CAN.indexOf(lnInfo.h12cc[lnInfo.h][0]),
          CHI.indexOf(lnInfo.h12cc[lnInfo.h][1]),
          LTHG.indexOf(lnInfo.h12cc[lnInfo.h].join(" "))
        )
      },
      m12: this.parse12ToIdx(lnInfo.m12cc),
      h12: this.parse12ToIdx(lnInfo.h12cc),
      m12k: this.parse12ToIdx(lnInfo.stcc.m12cc),
      tki: lnInfo.tk
    };
    return data;
  }
  // fn
  parse12ToIdx(data) {
    const obj12data = [];
    for (let i = 0; i < 12; i += 1) {
      obj12data[i] = CanChiPair.create(CAN.indexOf(data[i][0]), CHI.indexOf(data[i][1]));
    }
    return obj12data;
  }
}

class HoroHelp {
  ls;
  // public cach: { name: string; tuvi: string; good: string[]; bad: string[] };
  aIdx;
  mIdx;
  diaban;
  // private group: Record<number, Record<string, any>> = {
  //   0: {
  //     xung: 6,
  //     tamhop: [4, 8],
  //     nhihop: 1,
  //     giap: [11, 1],
  //     luchai: 7
  //   },
  //   1: {
  //     xung: 7,
  //     tamhop: [5, 9],
  //     nhihop: 0,
  //     giap: [0, 2],
  //     luchai: 6
  //   },
  //   2: {
  //     xung: 8,
  //     tamhop: [6, 10],
  //     nhihop: 11,
  //     giap: [1, 3],
  //     luchai: 5
  //   },
  //   3: {
  //     xung: 9,
  //     tamhop: [7, 11],
  //     nhihop: 10,
  //     giap: [2, 4],
  //     luchai: 4
  //   },
  //   4: {
  //     xung: 10,
  //     tamhop: [8, 12],
  //     nhihop: 9,
  //     giap: [3, 5],
  //     luchai: 3
  //   },
  //   5: {
  //     xung: 11,
  //     tamhop: [9, 1],
  //     nhihop: 8,
  //     giap: [4, 6],
  //     luchai: 2
  //   },
  //   6: {
  //     xung: 0,
  //     tamhop: [10, 2],
  //     nhihop: 7,
  //     giap: [5, 7],
  //     luchai: 1
  //   },
  //   7: {
  //     xung: 1,
  //     tamhop: [11, 3],
  //     nhihop: 6,
  //     giap: [6, 8],
  //     luchai: 0
  //   },
  //   8: {
  //     xung: 2,
  //     tamhop: [0, 4],
  //     nhihop: 5,
  //     giap: [7, 9],
  //     luchai: 11
  //   },
  //   9: {
  //     xung: 3,
  //     tamhop: [1, 5],
  //     nhihop: 4,
  //     giap: [8, 10],
  //     luchai: 10
  //   },
  //   10: {
  //     xung: 4,
  //     tamhop: [2, 6],
  //     nhihop: 3,
  //     giap: [9, 11],
  //     luchai: 9
  //   },
  //   11: {
  //     xung: 5,
  //     tamhop: [3, 7],
  //     nhihop: 2,
  //     giap: [10, 0],
  //     luchai: 8
  //   }
  // };
  constructor(ls) {
    this.ls = ls;
    this.diaban = ls.ars;
    this.aIdx = ls.aIdx;
    this.mIdx = ls.am;
  }
  // bindCachCuc() {
  //   this.ccTuPhuVuTuong();
  // }
  tuChinh(idx) {
    return [idx, xtngl$1[idx].x, xtngl$1[idx].t[0], xtngl$1[idx].t[1]];
  }
  tamPhuong(idx) {
    return [idx, xtngl$1[idx].t[0], xtngl$1[idx].t[1]];
  }
  xungChieu(idx) {
    return [xtngl$1[idx].x];
  }
  giapCung(idx) {
    return [xtngl$1[idx].g[0], xtngl$1[idx].g[1]];
  }
  isGiap(idStar, idx) {
    return this.giapCung(idx).includes(this.aIdx[`s${idStar}`]);
  }
  isXung(idStar, idx) {
    return this.xungChieu(idx).includes(this.aIdx[`s${idStar}`]);
  }
  isStar4(idStar, idx) {
    return this.tuChinh(idx).includes(this.aIdx[`s${idStar}`]);
  }
  isStar3(idStar, idx) {
    return this.tamPhuong(idx).includes(this.aIdx[`s${idStar}`]);
  }
  isStar(idStar, idx) {
    return this.aIdx[`s${idStar}`] === idx;
  }
  isKo(idx, type = 0) {
    if (type === 3) return this.isStar3(52, idx);
    if (type === 4) return this.isStar4(52, idx);
    return this.isStar(52, idx);
  }
  isKiep(idx, type = 0) {
    if (type === 3) return this.isStar3(53, idx);
    if (type === 4) return this.isStar4(53, idx);
    return this.isStar(53, idx);
  }
  isKoKiep(idx, type = 0) {
    return this.isKo(idx, type) || this.isKiep(idx, type);
  }
  isHoa(idx, type = 0) {
    if (type === 3) return this.isStar3(54, idx);
    if (type === 4) return this.isStar4(54, idx);
    return this.isStar(54, idx);
  }
  isLinh(idx, type = 0) {
    if (type === 3) return this.isStar3(55, idx);
    if (type === 4) return this.isStar4(55, idx);
    return this.isStar(55, idx);
  }
  isHoaLinh(idx, type = 0) {
    return this.isHoa(idx, type) || this.isLinh(idx, type);
  }
  isKinh(idx, type = 0) {
    if (type === 3) return this.isStar3(56, idx);
    if (type === 4) return this.isStar4(56, idx);
    return this.isStar(56, idx);
  }
  isDa(idx, type = 0) {
    if (type === 3) return this.isStar3(57, idx);
    if (type === 4) return this.isStar4(57, idx);
    return this.isStar(57, idx);
  }
  isKinhDa(idx, type = 0) {
    return this.isKinh(idx, type) || this.isDa(idx, type);
  }
  isLucSatTinh(idx, type = 0) {
    return this.isKoKiep(idx, type) || this.isKinhDa(idx, type) || this.isHoaLinh(idx, type);
  }
  isKhoi(idx, type = 0) {
    if (type === 3) return this.isStar3(58, idx);
    if (type === 4) return this.isStar4(58, idx);
    return this.isStar(58, idx);
  }
  isViet(idx, type = 0) {
    if (type === 3) return this.isStar3(59, idx);
    if (type === 4) return this.isStar4(59, idx);
    return this.isStar(59, idx);
  }
  isKhoiViet(idx, type = 0) {
    return this.isKhoi(idx, type) || this.isViet(idx, type);
  }
  isTa(idx, type = 0) {
    if (type === 3) return this.isStar3(60, idx);
    if (type === 4) return this.isStar4(60, idx);
    return this.isStar(60, idx);
  }
  isHuu(idx, type = 0) {
    if (type === 3) return this.isStar3(61, idx);
    if (type === 4) return this.isStar4(61, idx);
    return this.isStar(61, idx);
  }
  isTaHuu(idx, type = 0) {
    return this.isTa(idx, type) || this.isHuu(idx, type);
  }
  isXuong(idx, type = 0) {
    if (type === 3) return this.isStar3(62, idx);
    if (type === 4) return this.isStar4(62, idx);
    return this.isStar(62, idx);
  }
  isKhuc(idx, type = 0) {
    if (type === 3) return this.isStar3(63, idx);
    if (type === 4) return this.isStar4(63, idx);
    return this.isStar(63, idx);
  }
  isXuongKhuc(idx, type = 0) {
    return this.isXuong(idx, type) || this.isKhuc(idx, type);
  }
  isGiapKhoi(idx) {
    return this.isGiap(58, idx);
  }
  isGiapViet(idx) {
    return this.isGiap(59, idx);
  }
  isGiapTa(idx) {
    return this.isGiap(60, idx);
  }
  isGiapHuu(idx) {
    return this.isGiap(61, idx);
  }
  isGiapXuong(idx) {
    return this.isGiap(62, idx);
  }
  isGiapKhuc(idx) {
    return this.isGiap(63, idx);
  }
  // addMsgMeet(idStar: number, idx: number, isGood: boolean, msg = '') {
  //   this.addMsg(this.isStar4(idStar, idx), isGood, `Gặp ${SM[idStar].name} ${msg}`);
  // }
  // addListMeet(lstStar: number[], idx: number, isGood: boolean) {
  //   lstStar.forEach((idStar: number, _id: number) => {
  //     this.addMsgMeet(idStar, idx, isGood);
  //   });
  // }
  // addMsgGiap(idStar: number, idx: number, isGood: boolean, msg = '') {
  //   this.addMsg(this.isGiap(idStar, idx), isGood, `Giáp cung là ${SM[idStar].name} ${msg}`);
  // }
  // addListGiap(lstStar: number[], idx: number, isGood: boolean) {
  //   lstStar.forEach((idStar: number, _id: number) => {
  //     this.addMsgGiap(idStar, idx, isGood);
  //   });
  // }
  // chkMeetLucCat(idx: number, isGood = true) {
  //   this.addListMeet([58, 59, 60, 61, 62, 63], idx, isGood);
  // }
  // chkGiapLucCat(idx: number, isGood = true) {
  //   this.addListGiap([58, 59, 60, 61, 62, 63], idx, isGood);
  // }
  isTangTueDieu(idx) {
    return this.isStar(17, idx) || this.isStar(21, idx) || this.isStar(25, idx);
  }
  isThaiTueCircle(idx) {
    return this.isStar(15, idx) || this.isStar(23, idx) || this.isStar(19, idx);
  }
  isLocTonCircle(idx) {
    return this.isStar(27, idx) || this.isStar(32, idx) || this.isStar(74, idx);
  }
  isTruongSinhCircle(idx) {
    return this.isStar(40, idx) || this.isStar(44, idx) || this.isStar(48, idx);
  }
  isTuanChieu(idx) {
    return this.isTuan(this.xungChieu(idx)[0]);
  }
  isTrietChieu(idx) {
    return this.isTriet(this.xungChieu(idx)[0]);
  }
  isTuan(idx) {
    return this.ls.ttr[0].includes(idx);
  }
  isTriet(idx) {
    return this.ls.ttr[1].includes(idx);
  }
  // isPhuMeetTuan(){
  //   this.addMsg(this.isTuan(this.aIdx.ss6), false, 'Thiên Phủ rất kị gặp tuần tượng kho rỗng');
  // }
  // isTuongMeetTriet(){
  //   this.addMsg(this.isTriet(this.aIdx.ss10), false, 'Thiên Tướng rất kị gặp triệt');
  // }
  // addMsg(isOk: boolean, isGood = true, text: string) {
  //   if (isOk && isGood) this.cach.good.push(text);
  //   if (isOk && !isGood) this.cach.bad.push(text);
  //   // this.cach.desc.push([isOk, text]); //'✓' '✖'
  //   return isOk;
  // }
  // addDacThreeCircle() {
  //   let count = 0;
  //   if (this.addMsg(this.isLocTonCircle(this.mIdx), true, 'Đắc vòng Lộc Tồn')) count = +1;
  //   if (this.addMsg(this.isThaiTueCircle(this.mIdx), true, 'Đắc vòng Thái Tuế')) count = +1;
  //   if (this.addMsg(this.isTruongSinhCircle(this.mIdx), true, 'Đắc vòng Trường Sinh')) count = +1;
  //   return count;
  // }
  // ccTuPhuVuTuong(): boolean {
  //   /*
  //   Cách cục tử phủ vũ tướng
  //   6 thế đứng sao tử vi khi sao tử vi đóng cung dương, hợp Tí, Dân, Thìn, Ngọ, Thân, Tuất
  //   Tứ sinh:
  //   - Tử Vũ Liêm của vòng chính tinh
  //   - Tuế Hổ Phù của vòng thái tuế
  //   - Lộc Tướng Ấn của vòng lộc tồn bác sỹ
  //   - Sinh Vượng Mộ của vòng trường sinh
  //   */
  //   let isNext = true;
  //   let idxTuvi = this.aIdx.s0;
  //   let tuviCcMt = [0, 2, 4, 6, 8, 10];
  //   if (this.mIdx !== this.aIdx.s0 || !tuviCcMt.includes(this.mIdx)) return isNext;
  //   isNext = false;
  //   this.cach.name = 'Tử Phủ Vũ Tướng';
  //   this.cach.tuvi = `Thế Tử Vi cư ${CHI[idxTuvi]}`;
  //   this.addMsg(this.addDacThreeCircle() === 3, true, 'Đắc cả 3 vòng Lộc Tồn, Thái Tuế, Trường Sinh rất hợp cho cách cục');
  //   this.addMsg(this.mIdx === 6, true, 'Đồ hình Tử Vi tại Ngọ là vị trí tốt nhất của Tử Vi trong các đồ hình');
  //   this.addMsg(tuviCcMt.includes(this.ls.dtb.bs.y[1]), true, `Đương số tuổi trong các tuổi Tý, Dần, Thìn, Ngọ, Thân, Tuất hợp với cách cục`);
  //   this.addMsgMeet(27, this.mIdx, true, 'rất tốt tăng độ số cách cục nhiều');
  //   this.chkMeetLucCat(this.mIdx);
  //   this.chkGiapLucCat(this.mIdx);
  //   this.isPhuMeetTuan();
  //   this.isTuongMeetTriet();
  //   this.addMsg(this.isTangTueDieu(this.mIdx), false, 'Gặp Tang Tuế Điếu rất không hợp cho cách cục giảm độ số cách cục');
  //   this.addMsg(this.isKoKiep(this.mIdx, 4), false, 'Gặp Không hoặc Kiếp rất kị cách đế ngộ hung đồ rất xấu');
  //   this.addMsg(this.isKinhDa(this.mIdx, 4), false, 'Gặp Kình, Đà thiên về thái quá dễ gây biến chất Tử Vi');
  //   this.addMsg(this.isHoaLinh(this.mIdx, 4), false, 'Gặp Hỏa, Linh Tử Vi có thể trị được Hỏa Linh');
  //   this.addMsg(this.isTriet(this.mIdx), false, 'Gặp Triệt cực kì không tốt cho Tử Vi');
  //   this.addMsg(this.isTuan(this.mIdx), false, 'Gặp Tuần cực kì không tốt cho Tử Vi');
  //   return isNext;
  // }
}

const tmdAppThumb = new Proxy({"src":"/images/TinhMenhDo-Gemini-app.jpg","width":844,"height":733,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/content/posts/img/TinhMenhDo-Gemini-app.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/content/posts/img/TinhMenhDo-Gemini-app.jpg");
							return target[name];
						}
					});

function AppUI(props) {
  const fnPageClick = () => {
    if (props.fnPageClick !== void 0) {
      props.fnPageClick();
    }
  };
  const fnPageTouchStart = () => {
    if (props.fnPageTouchStart !== void 0) {
      props.fnPageTouchStart();
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "div",
    {
      onClick: fnPageClick,
      onTouchStart: fnPageTouchStart,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          fnPageClick();
        }
      },
      tabIndex: 0,
      children: props.children
    }
  ) });
}

const TRANSFORMATION_COLORS$2 = {
  0: { stroke: "rgb(3 140 0)", fill: "rgba(114,250,112,0.9)" },
  // Lộc - Green
  1: { stroke: "rgb(110 8 136)", fill: "rgba(227,100,255,0.9)" },
  // Quyền - Purple
  2: { stroke: "rgb(14 124 202)", fill: "rgba(77,182,255,0.9)" },
  // Khoa - Blue
  3: { stroke: "rgb(217 4 4)", fill: "rgba(246,66,66,0.9)" }
  // Kị - Red
};
const ZONE_POSITIONS$2 = [
  { col: 3, row: 4 },
  // Zone 0 - Bottom Right Center
  { col: 2, row: 4 },
  // Zone 1 - Bottom Center Left
  { col: 1, row: 4 },
  // Zone 2 - Bottom Left
  { col: 1, row: 3 },
  // Zone 3 - Middle Left Bottom
  { col: 1, row: 2 },
  // Zone 4 - Middle Left Top
  { col: 1, row: 1 },
  // Zone 5 - Top Left
  { col: 2, row: 1 },
  // Zone 6 - Top Center Left
  { col: 3, row: 1 },
  // Zone 7 - Top Center Right
  { col: 4, row: 1 },
  // Zone 8 - Top Right
  { col: 4, row: 2 },
  // Zone 9 - Middle Right Top
  { col: 4, row: 3 },
  // Zone 10 - Middle Right Bottom
  { col: 4, row: 4 }
  // Zone 11 - Bottom Right
];
function getOppositeZone$1(zoneIdx) {
  return (zoneIdx + 6) % 12;
}
function isCornerChi$1(chiIdx) {
  return chiIdx === 2 || chiIdx === 8 || chiIdx === 5 || chiIdx === 11;
}
function getZoneEdgePoint$1(zoneIdx, chiIdx, wSquare, hSquare, offset = 0) {
  const pos = ZONE_POSITIONS$2[zoneIdx];
  const zoneX = (pos.col - 1) * wSquare;
  const zoneY = (pos.row - 1) * hSquare;
  const isCorner = isCornerChi$1(chiIdx);
  let x = zoneX + wSquare / 2;
  let y = zoneY + hSquare / 2;
  let usedCornerVertex = false;
  if (isCorner) {
    if (chiIdx === 2) {
      x = zoneX + wSquare;
      y = zoneY + offset;
      usedCornerVertex = true;
    } else if (chiIdx === 5) {
      x = zoneX + wSquare;
      y = zoneY + hSquare + offset;
      usedCornerVertex = true;
    } else if (chiIdx === 8) {
      x = zoneX + offset;
      y = zoneY + hSquare;
      usedCornerVertex = true;
    } else if (chiIdx === 11) {
      x = zoneX + offset;
      y = zoneY;
      usedCornerVertex = true;
    }
  }
  if (!usedCornerVertex) {
    if (pos.col === 1) {
      x = zoneX + wSquare;
      y = zoneY + hSquare / 2 + offset;
    } else if (pos.col === 4) {
      x = zoneX;
      y = zoneY + hSquare / 2 + offset;
    } else if (pos.row === 1) {
      x = zoneX + wSquare / 2 + offset;
      y = zoneY + hSquare;
    } else if (pos.row === 4) {
      x = zoneX + wSquare / 2 + offset;
      y = zoneY;
    }
  }
  return { x, y };
}
function createArrowMarker$1(transformType, id) {
  const color = TRANSFORMATION_COLORS$2[transformType];
  return /* @__PURE__ */ jsx("marker", { id, markerWidth: "10", markerHeight: "10", refX: "9", refY: "3", orient: "auto", markerUnits: "strokeWidth", children: /* @__PURE__ */ jsx("path", { d: "M0,0 L0,6 L9,3 z", fill: color.stroke }) });
}
function FlyingStarsHtml({ ls, wSquare, hSquare }) {
  if (!ls || !ls.ars || !ls.cfg) {
    return null;
  }
  const typeLs = ls.cfg[1] || 0;
  const connections = [];
  const zoneLevels = Array(12).fill(0);
  ls.ars.forEach((zone, idx) => {
    if (!zone.cno || zone.cno.length < 4) return;
    const oppositeIdx = getOppositeZone$1(idx);
    if (idx === 0) {
      console.log("[FlyingStars] Zone 0:");
      console.log("  zone.cno:", zone.cno);
      console.log("  oppositeIdx:", oppositeIdx);
    }
    for (let transformType = 0; transformType <= 3; transformType++) {
      const targetIdx = zone.cno[transformType];
      const isDraw = targetIdx === oppositeIdx;
      if (isDraw) {
        const isChuyenKi = transformType === 3 && zone.zolk?.[3]?.[ZolkName$1.isMoveKi] === 1;
        const isChuyenLoc = transformType === 0 && zone.zolk?.[0]?.[ZolkName$1.isMoveLoc] === 1;
        const isDashed = (isChuyenKi || isChuyenLoc && transformType === 3) && (typeLs === 0 || typeLs === 1 || typeLs === 4 || typeLs === 8);
        const levelDoiCung = zoneLevels[oppositeIdx];
        const levelCurrentCung = zoneLevels[idx];
        let levelUse = levelCurrentCung;
        if (levelDoiCung > levelCurrentCung) {
          zoneLevels[idx] = levelDoiCung;
          levelUse = levelDoiCung;
        }
        connections.push({
          from: idx,
          to: targetIdx,
          type: transformType,
          isDashed,
          level: levelUse
        });
        zoneLevels[idx] = levelUse + 1;
        zoneLevels[oppositeIdx] = zoneLevels[idx];
        if (idx === 0) {
          console.log(`  ✓ Found hướng tâm: type=${transformType}, to=${targetIdx}, level=${levelUse}`);
        }
      }
    }
  });
  console.log("[FlyingStars] Total connections:", connections.length);
  const svgWidth = wSquare * 4;
  const svgHeight = hSquare * 4;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: svgWidth,
        height: svgHeight,
        pointerEvents: "none",
        zIndex: 3
        // Highest - flying stars should be visible on top
      },
      children: [
        /* @__PURE__ */ jsx("defs", { children: [0, 1, 2, 3].map((type) => createArrowMarker$1(type, `arrow-${type}`)) }),
        connections.map((conn, i) => {
          const sourceZone = ls.ars[conn.from];
          const targetZone = ls.ars[conn.to];
          const sourceChiIdx = sourceZone?.ci || 0;
          const targetChiIdx = targetZone?.ci || 0;
          const padArrow = 17;
          const offset = conn.level * padArrow;
          const fromPoint = getZoneEdgePoint$1(conn.from, sourceChiIdx, wSquare, hSquare, offset);
          const toPoint = getZoneEdgePoint$1(conn.to, targetChiIdx, wSquare, hSquare, offset);
          const color = TRANSFORMATION_COLORS$2[conn.type];
          const pathData = `M ${fromPoint.x},${fromPoint.y} L ${centerX},${centerY} L ${toPoint.x},${toPoint.y}`;
          let strokeWidth = 2.5;
          if (typeLs === 4) {
            strokeWidth = 3;
          }
          return /* @__PURE__ */ jsx(
            "path",
            {
              d: pathData,
              stroke: color.stroke,
              strokeWidth,
              fill: "none",
              opacity: "0.8",
              markerEnd: `url(#arrow-${conn.type})`,
              strokeDasharray: conn.isDashed ? "12,3" : void 0
            },
            `${conn.from}-${conn.to}-${conn.type}-${i}`
          );
        })
      ]
    }
  );
}

const TRANSFORM_BADGES = {
  [0 /* Loc */]: "A",
  [1 /* Quyen */]: "B",
  [2 /* Khoa */]: "C",
  [3 /* Ki */]: "D"
};
function extractCanHoa(ls) {
  const typeLs = ls.cfg[1] || 0;
  const canHoaArray = GETHOA$1(typeLs);
  console.log("[extractCanHoa] typeLs:", typeLs);
  console.log("[extractCanHoa] canHoaArray from GETHOA:", canHoaArray);
  const zoneMap = {};
  const starMap = {};
  for (let i = 0; i < 12; i++) {
    zoneMap[i] = [];
  }
  ls.ars.forEach((zone, idx) => {
    const sourceCan = zone.cn;
    const canStars = canHoaArray[sourceCan];
    if (idx === 0) {
      console.log("[extractCanHoa] Zone 0:");
      console.log("  zone.cn:", sourceCan);
      console.log("  canStars:", canStars);
    }
    if (!canStars) {
      console.warn(`No canHoa data for Can ${sourceCan} in zone ${idx}`);
      return;
    }
    for (let transformType = 0; transformType <= 3; transformType++) {
      const starId = canStars[transformType];
      const targetZoneIdx = zone.cno?.[transformType];
      if (typeof targetZoneIdx !== "number") {
        continue;
      }
      const transformInfo = {
        type: transformType,
        starId,
        sourceZoneIdx: idx,
        targetZoneIdx,
        sourceCan,
        isSelfTransform: targetZoneIdx === idx,
        badge: TRANSFORM_BADGES[transformType]
      };
      zoneMap[idx].push(transformInfo);
      if (!starMap[starId]) {
        starMap[starId] = [];
      }
      starMap[starId].push(transformInfo);
    }
  });
  return {
    zoneMap,
    starMap,
    canHoaArray
  };
}

const TRANSFORMATION_COLORS$1 = {
  0: { stroke: "rgb(3 140 0)", fill: "rgba(114,250,112,0.9)" },
  // Lộc - Green
  1: { stroke: "rgb(110 8 136)", fill: "rgba(227,100,255,0.9)" },
  // Quyền - Purple
  2: { stroke: "rgb(14 124 202)", fill: "rgba(77,182,255,0.9)" },
  // Khoa - Blue
  3: { stroke: "rgb(217 4 4)", fill: "rgba(246,66,66,0.9)" }
  // Kị - Red
};
const ZONE_POSITIONS$1 = [
  { col: 3, row: 4 },
  // Zone 0
  { col: 2, row: 4 },
  // Zone 1
  { col: 1, row: 4 },
  // Zone 2
  { col: 1, row: 3 },
  // Zone 3
  { col: 1, row: 2 },
  // Zone 4
  { col: 1, row: 1 },
  // Zone 5
  { col: 2, row: 1 },
  // Zone 6
  { col: 3, row: 1 },
  // Zone 7
  { col: 4, row: 1 },
  // Zone 8
  { col: 4, row: 2 },
  // Zone 9
  { col: 4, row: 3 },
  // Zone 10
  { col: 4, row: 4 }
  // Zone 11
];
function isCornerChi(chiIdx) {
  return chiIdx === 2 || chiIdx === 8 || chiIdx === 5 || chiIdx === 11;
}
function getZoneEdgePoint(zoneIdx, chiIdx, wSquare, hSquare, offset = 0) {
  const pos = ZONE_POSITIONS$1[zoneIdx];
  const zoneX = (pos.col - 1) * wSquare;
  const zoneY = (pos.row - 1) * hSquare;
  const isCorner = isCornerChi(chiIdx);
  let x = zoneX + wSquare / 2;
  let y = zoneY + hSquare / 2;
  let usedCornerVertex = false;
  if (isCorner) {
    if (chiIdx === 2) {
      x = zoneX + wSquare;
      y = zoneY + offset;
      usedCornerVertex = true;
    } else if (chiIdx === 5) {
      x = zoneX + wSquare;
      y = zoneY + hSquare + offset;
      usedCornerVertex = true;
    } else if (chiIdx === 8) {
      x = zoneX + offset;
      y = zoneY + hSquare;
      usedCornerVertex = true;
    } else if (chiIdx === 11) {
      x = zoneX + offset;
      y = zoneY;
      usedCornerVertex = true;
    }
  }
  if (!usedCornerVertex) {
    if (pos.col === 1) {
      x = zoneX + wSquare;
      y = zoneY + hSquare / 2 + offset;
    } else if (pos.col === 4) {
      x = zoneX;
      y = zoneY + hSquare / 2 + offset;
    } else if (pos.row === 1) {
      x = zoneX + wSquare / 2 + offset;
      y = zoneY + hSquare;
    } else if (pos.row === 4) {
      x = zoneX + wSquare / 2 + offset;
      y = zoneY;
    }
  }
  return { x, y };
}
function getOppositeZone(zoneIdx) {
  return (zoneIdx + 6) % 12;
}
function createCurvedPath(startX, startY, endX, endY, centerX, centerY, isSelfTransform) {
  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2;
  const toCenterX = centerX - midX;
  const toCenterY = centerY - midY;
  const toCenterLength = Math.sqrt(toCenterX * toCenterX + toCenterY * toCenterY);
  const dx = endX - startX;
  const dy = endY - startY;
  const lineLength = Math.sqrt(dx * dx + dy * dy);
  const offsetFactor = lineLength * 0.2;
  const controlX = midX + toCenterX / toCenterLength * offsetFactor;
  const controlY = midY + toCenterY / toCenterLength * offsetFactor;
  return `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`;
}
function createArrowMarker(transformType, id) {
  const color = TRANSFORMATION_COLORS$1[transformType];
  return /* @__PURE__ */ jsx("marker", { id, markerWidth: "10", markerHeight: "10", refX: "9", refY: "3", orient: "auto", markerUnits: "strokeWidth", children: /* @__PURE__ */ jsx("path", { d: "M0,0 L0,6 L9,3 z", fill: color.stroke }) });
}
function PhiHoaArrowsHtml({ ls, wSquare, hSquare }) {
  if (!ls || !ls.ars || !ls.cfg) {
    return null;
  }
  const typeLs = ls.cfg[1] || 0;
  const typePhiHoa = ls.cfg[2] || 3;
  if (typeLs === 3 || ![0, 1, 4, 6, 8].includes(typeLs)) {
    return null;
  }
  extractCanHoa(ls);
  const arrows = [];
  const svgWidth = wSquare * 4;
  const svgHeight = hSquare * 4;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const arrowsFromZone = /* @__PURE__ */ new Map();
  const arrowsToZone = /* @__PURE__ */ new Map();
  ls.ars.forEach((zone, idx) => {
    if (!zone.cno || zone.cno.length < 4) return;
    for (let dr = 0; dr <= 3; dr++) {
      const targetZoneIdx = zone.cno[dr];
      if (targetZoneIdx < 0 || targetZoneIdx === zone.ci) continue;
      const isLocChuyenKi = dr === 0 && zone.zolk?.[0]?.[ZolkName$1.isMoveLoc] === 1;
      const isKiChuyenKi = dr === 3 && zone.zolk?.[3]?.[ZolkName$1.isMoveKi] === 1;
      const isDraw = targetZoneIdx >= 0;
      const shouldConsiderDrawing = isDraw && typeLs !== 4 || typeLs === 4 && typePhiHoa === dr && isDraw || typeLs === 1 && typePhiHoa === dr && isDraw || typeLs === 8 && typePhiHoa === dr && isDraw || isDraw && isLocChuyenKi && dr === 3 && typePhiHoa !== 1 && typePhiHoa !== 2;
      if (!shouldConsiderDrawing) continue;
      const shouldRender = typePhiHoa === dr || isLocChuyenKi && dr === 3;
      if (!shouldRender) continue;
      const oppositeIdx = getOppositeZone(idx);
      if (targetZoneIdx === oppositeIdx) continue;
      if (isLocChuyenKi && dr === 0 || isKiChuyenKi && dr === 3) continue;
      arrowsFromZone.set(idx, (arrowsFromZone.get(idx) || 0) + 1);
      arrowsToZone.set(targetZoneIdx, (arrowsToZone.get(targetZoneIdx) || 0) + 1);
    }
  });
  const currentArrowFromZone = /* @__PURE__ */ new Map();
  const currentArrowToZone = /* @__PURE__ */ new Map();
  console.log("[PhiHoaArrows] typePhiHoa:", typePhiHoa);
  console.log("[PhiHoaArrows] typeLs:", typeLs);
  ls.ars.forEach((zone, idx) => {
    if (!zone.cno || zone.cno.length < 4) return;
    if (idx === 0) {
      console.log("[PhiHoaArrows] Zone 0:");
      console.log("  zone.cno:", zone.cno);
      console.log("  typePhiHoa:", typePhiHoa);
      console.log("  typeLs:", typeLs);
    }
    for (let dr = 0; dr <= 3; dr++) {
      const targetZoneIdx = zone.cno[dr];
      if (targetZoneIdx < 0 || targetZoneIdx === zone.ci) {
        continue;
      }
      const isLocChuyenKi = dr === 0 && zone.zolk?.[0]?.[ZolkName$1.isMoveLoc] === 1;
      const isKiChuyenKi = dr === 3 && zone.zolk?.[3]?.[ZolkName$1.isMoveKi] === 1;
      const isDraw = targetZoneIdx >= 0;
      const shouldConsiderDrawing = isDraw && typeLs !== 4 || typeLs === 4 && typePhiHoa === dr && isDraw || typeLs === 1 && typePhiHoa === dr && isDraw || typeLs === 8 && typePhiHoa === dr && isDraw || isDraw && isLocChuyenKi && dr === 3 && typePhiHoa !== 1 && typePhiHoa !== 2;
      if (!shouldConsiderDrawing) {
        continue;
      }
      const shouldRender = typePhiHoa === dr || isLocChuyenKi && dr === 3;
      if (!shouldRender) {
        continue;
      }
      if (idx === 0) {
        console.log(`  ✓ Drawing phi hóa: dr=${dr}, to=${targetZoneIdx}`);
      }
      const oppositeIdx = getOppositeZone(idx);
      const isOpposite = targetZoneIdx === oppositeIdx;
      if (isLocChuyenKi && dr === 0 || isKiChuyenKi && dr === 3) {
        continue;
      }
      const sourceChiIdx = zone.ci;
      const targetZone = ls.ars[targetZoneIdx];
      const targetChiIdx = targetZone?.ci || 0;
      const totalFromSource = arrowsFromZone.get(idx) || 1;
      const currentFromIdx = currentArrowFromZone.get(idx) || 0;
      currentArrowFromZone.set(idx, currentFromIdx + 1);
      const totalToTarget = arrowsToZone.get(targetZoneIdx) || 1;
      const currentToIdx = currentArrowToZone.get(targetZoneIdx) || 0;
      currentArrowToZone.set(targetZoneIdx, currentToIdx + 1);
      const offsetSpacing = 15;
      const sourceOffset = totalFromSource > 1 ? (currentFromIdx - (totalFromSource - 1) / 2) * offsetSpacing : 0;
      const targetOffset = totalToTarget > 1 ? (currentToIdx - (totalToTarget - 1) / 2) * offsetSpacing : 0;
      const startPoint = getZoneEdgePoint(idx, sourceChiIdx, wSquare, hSquare, sourceOffset);
      const endPoint = getZoneEdgePoint(targetZoneIdx, targetChiIdx, wSquare, hSquare, targetOffset);
      const color = TRANSFORMATION_COLORS$1[dr];
      let pathData;
      if (isOpposite) {
        pathData = `M ${startPoint.x},${startPoint.y} L ${centerX},${centerY} L ${endPoint.x},${endPoint.y}`;
      } else {
        pathData = createCurvedPath(startPoint.x, startPoint.y, endPoint.x, endPoint.y, centerX, centerY);
      }
      let strokeWidth = 0.4;
      let opacity = 0.6;
      let dashArray = void 0;
      if (typeLs === 4 || typeLs === 5) {
        strokeWidth = 1.7;
        opacity = 0.8;
      }
      if (isKiChuyenKi) {
        strokeWidth = 2;
        opacity = 0.8;
        dashArray = "7,3";
      }
      const ngaCungPattern = [true, false, true, true, true, false, false, true, true, false, false, false];
      const isNgaCung = ngaCungPattern[targetZoneIdx];
      if (isNgaCung) {
        strokeWidth = 1.5;
        opacity = 0.7;
      }
      arrows.push(
        /* @__PURE__ */ jsx(
          "path",
          {
            d: pathData,
            stroke: color.stroke,
            strokeWidth,
            fill: "none",
            opacity,
            markerEnd: `url(#phi-arrow-${dr})`,
            strokeDasharray: dashArray
          },
          `phi-${idx}-${targetZoneIdx}-${dr}`
        )
      );
    }
  });
  console.log("[PhiHoaArrows] Total arrows to render:", arrows.length);
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: svgWidth,
        height: svgHeight,
        pointerEvents: "none",
        zIndex: 2
        // Higher than FlyingStarsHtml
      },
      children: [
        /* @__PURE__ */ jsx("defs", { children: [0, 1, 2, 3].map((type) => createArrowMarker(type, `phi-arrow-${type}`)) }),
        arrows
      ]
    }
  );
}

function getElementColor$1(elementId) {
  const colors = ["", "", "#031640", "#067b11", "#8b8380", "#e39e25", "#cf233b"];
  return colors[elementId] || "#000";
}
const PILLAR_NAMES = ["Năm", "Tháng", "Ngày", "Giờ"];
function SkyHtml(props) {
  const { ls, className, fontCenter } = props;
  if (!ls.tutru || !ls.tutru.cot) {
    return /* @__PURE__ */ jsx("div", { className: `flex items-center justify-center ${className}`, children: /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "No Four Pillars data" }) });
  }
  const pillars = ls.tutru.cot;
  return /* @__PURE__ */ jsxs("div", { className: `sky-container relative border-2 border-gray-800 bg-white p-4 ${className}`, children: [
    /* @__PURE__ */ jsx("div", { className: "grid h-full grid-cols-4 gap-2", children: pillars.map((pillar, idx) => {
      const canColor = getElementColor$1(CAN_HH$1[pillar.cn]);
      const chiColor = getElementColor$1(CHI_HH$1[pillar.ci]);
      return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center border-r px-1 last:border-r-0", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-2 text-xs font-semibold", style: { fontSize: fontCenter }, children: PILLAR_NAMES[idx] }),
        /* @__PURE__ */ jsx("div", { className: "mb-1 text-lg font-bold", style: { color: canColor, fontSize: fontCenter + 6 }, children: CAN$1[pillar.cn] }),
        /* @__PURE__ */ jsx("div", { className: "mb-2 text-lg font-bold", style: { color: chiColor, fontSize: fontCenter + 6 }, children: CHI$1[pillar.ci] }),
        pillar.cht !== -1 && /* @__PURE__ */ jsx("div", { className: "mb-1 text-xs", style: { fontSize: fontCenter - 2 }, children: THAP$1[pillar.cht] }),
        pillar.ctg && pillar.ctg.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-2 space-y-0.5 text-[10px]", style: { fontSize: fontCenter - 2 }, children: pillar.ctg.map((hiddenCan, i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsx("span", { style: { color: getElementColor$1(CAN_HH$1[hiddenCan]) }, children: CAN$1[hiddenCan] }),
          /* @__PURE__ */ jsx("span", { className: "opacity-70", children: pillar.pht && pillar.pht[i] !== void 0 ? THAP$1[pillar.pht[i]] : "" })
        ] }, i)) })
      ] }, idx);
    }) }),
    ls.dtb && ls.dtb.bs && /* @__PURE__ */ jsxs("div", { className: "absolute bottom-2 left-2 text-[10px] text-gray-500", style: { fontSize: fontCenter - 2 }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "Mệnh ",
        /* @__PURE__ */ jsx("span", { style: { color: getElementColor$1(LTHG_HH$1[ls.dtb.bs.y[2]]) }, children: HH$1[LTHG_HH$1[ls.dtb.bs.y[2]]] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        "Cục ",
        /* @__PURE__ */ jsx("span", { style: { color: getElementColor$1(ls.cid) }, children: HH$1[ls.cid] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute right-2 bottom-2 text-[10px] opacity-50", style: { fontSize: fontCenter - 2 }, children: "TinhMenhDo.com" })
  ] });
}

const MySwal = withReactContent(Swal);
function generateFileName(ls, extension = "png") {
  try {
    const solarDate = ls.dtb.sn;
    const year = solarDate.y.toString();
    const month = solarDate.m.toString().padStart(2, "0");
    const day = solarDate.d.toString().padStart(2, "0");
    const hour = solarDate.h.toString().padStart(2, "0");
    const minute = (solarDate.i || 0).toString().padStart(2, "0");
    const gender = ls.sx === 1 ? "nam" : "nu";
    return `tinhmenhdo-html-${gender}-${year}.${month}.${day}-${hour}.${minute}.${extension}`;
  } catch (error) {
    console.error("Error generating filename:", error);
    return `tinhmenhdo-html-${Date.now()}.${extension}`;
  }
}
function isIOSDevice() {
  if (typeof window === "undefined") return false;
  const userAgent = window.navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const isMacSafari = /Mac OS X/.test(userAgent) && /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
  return isIOS || isMacSafari;
}
function useExportHtml(chartRef, ls) {
  const exportToImage = async (scale = 2) => {
    if (!chartRef.current) {
      console.error("Chart ref is null");
      return null;
    }
    try {
      const canvas = await html2canvas(chartRef.current, {
        scale,
        backgroundColor: "#ffffff",
        logging: false,
        useCORS: true,
        allowTaint: true,
        imageTimeout: 0
      });
      return canvas.toDataURL("image/png", 1);
    } catch (error) {
      console.error("Error exporting to image:", error);
      MySwal.fire({
        title: "Lỗi",
        text: "Không thể xuất ảnh lá số. Vui lòng thử lại.",
        icon: "error"
      });
      return null;
    }
  };
  const copyImageToClipboard = async () => {
    try {
      const imageData = await exportToImage(2);
      if (!imageData) {
        throw new Error("Không thể lấy được ảnh lá số");
      }
      if (isIOSDevice()) {
        const newWindow = window.open();
        if (newWindow) {
          newWindow.document.write(`
            <html>
              <head>
                <title>Lá số Tử Vi - TinhMenhDo.com</title>
                <style>
                  body { margin: 0; padding: 20px; text-align: center; background: #f5f5f5; }
                  .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 12px; }
                  img { max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
                  .instructions { margin-top: 20px; padding: 15px; background: #e3f2fd; color: #1565c0; border-radius: 8px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <img src="${imageData}" alt="Lá số Tử Vi" />
                  <div class="instructions">
                    <p><strong>Hướng dẫn lưu ảnh:</strong></p>
                    <p>Nhấn và giữ vào ảnh, sau đó chọn "Lưu vào Ảnh"</p>
                  </div>
                </div>
              </body>
            </html>
          `);
          newWindow.document.close();
        }
        MySwal.fire({
          title: "Thông báo",
          text: "Lá số đã mở trong tab mới. Vui lòng nhấn và giữ vào ảnh để lưu.",
          icon: "info"
        });
        return;
      }
      const res = await fetch(imageData);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      MySwal.fire({
        title: "Thành công",
        text: "Đã copy lá số vào clipboard!",
        icon: "success"
      });
    } catch (error) {
      console.error("Error copying image:", error);
      MySwal.fire({
        title: "Lỗi",
        text: error instanceof Error ? error.message : "Có lỗi xảy ra khi copy lá số",
        icon: "error"
      });
    }
  };
  const downloadImage = async (fileName) => {
    try {
      const imageData = await exportToImage(2);
      if (!imageData) {
        throw new Error("Không thể lấy được ảnh lá số");
      }
      const link = document.createElement("a");
      link.download = fileName || generateFileName(ls, "png");
      link.href = imageData;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      MySwal.fire({
        title: "Thành công",
        text: "Đã tải xuống lá số!",
        icon: "success",
        timer: 2e3
      });
    } catch (error) {
      console.error("Error downloading image:", error);
      MySwal.fire({
        title: "Lỗi",
        text: error instanceof Error ? error.message : "Có lỗi xảy ra khi tải lá số",
        icon: "error"
      });
    }
  };
  const exportImageNote = async () => {
    try {
      const imageData = await exportToImage(2);
      if (!imageData) {
        throw new Error("Không thể lấy được ảnh lá số");
      }
      if (isIOSDevice()) {
        const newWindow = window.open();
        if (newWindow) {
          newWindow.document.write(`
            <html>
              <head><title>Lá số Tử Vi</title></head>
              <body style="margin:0;padding:20px;text-align:center;">
                <img src="${imageData}" style="max-width:100%;" />
                <p style="margin-top:20px;color:#666;">Nhấn và giữ vào ảnh để lưu</p>
              </body>
            </html>
          `);
          newWindow.document.close();
        }
        const result2 = await MySwal.fire({
          title: "Thông báo",
          text: "Lá số đã mở trong tab mới. Bạn có muốn chuyển sang tab Note không?",
          icon: "info",
          showCancelButton: true,
          confirmButtonText: "Chuyển sang Note",
          cancelButtonText: "Đóng"
        });
        if (result2.isConfirmed) {
          window.open("/note?export=1", "_blank");
        }
        return;
      }
      const res = await fetch(imageData);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      const result = await MySwal.fire({
        title: "Thành công",
        text: "Đã copy lá số. Bạn có muốn chuyển sang tab Note không?",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Chuyển sang Note",
        cancelButtonText: "Đóng"
      });
      if (result.isConfirmed) {
        window.open("/note?export=1", "_blank");
      }
    } catch (error) {
      console.error("Error exporting for notes:", error);
      MySwal.fire({
        title: "Lỗi",
        text: error instanceof Error ? error.message : "Có lỗi xảy ra",
        icon: "error"
      });
    }
  };
  return {
    exportToImage,
    copyImageToClipboard,
    downloadImage,
    exportImageNote
  };
}

function getElementColor(elementId) {
  const colors = ["", "", "#031640", "#067b11", "#8b8380", "#e39e25", "#cf233b"];
  return colors[elementId] || "#000";
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function renderTuHoaArrow(transformType, startX, startY, direction, containerWidth, containerHeight) {
  const colors = [
    "rgb(3 140 0)",
    // Lộc - Green
    "rgb(110 8 136)",
    // Quyền - Purple
    "rgb(14 124 202)",
    // Khoa - Blue
    "rgb(217 4 4)"
    // Kị - Red
  ];
  const color = colors[transformType];
  const x1 = startX;
  const y1 = startY;
  let x2 = startX;
  let y2 = startY;
  const arrowLength = 25;
  switch (direction) {
    case "bottom":
      y2 = containerHeight + arrowLength;
      break;
    case "top":
      y2 = -25;
      break;
    case "left":
      x2 = -25;
      break;
    case "right":
      x2 = containerWidth + arrowLength;
      break;
  }
  return /* @__PURE__ */ jsx(
    "line",
    {
      x1,
      y1,
      x2,
      y2,
      stroke: color,
      strokeWidth: "1.5",
      opacity: "0.8",
      markerEnd: `url(#tu-hoa-arrow-${transformType})`
    }
  );
}
const TRANSFORMATION_COLORS = {
  loc: { bg: "rgba(114,250,112,0.9)", border: "rgb(3 140 0)", text: "rgb(3 140 0)" },
  // Green
  quyen: { bg: "rgba(227,100,255,0.9)", border: "rgb(110 8 136)", text: "rgb(110 8 136)" },
  // Purple
  khoa: { bg: "rgba(77,182,255,0.9)", border: "rgb(14 124 202)", text: "rgb(14 124 202)" },
  // Blue
  ki: { bg: "rgba(246,66,66,0.9)", border: "rgb(217 4 4)", text: "rgb(217 4 4)" }
  // Red
};
function getTransformationColor(type) {
  const colors = [
    TRANSFORMATION_COLORS.loc,
    TRANSFORMATION_COLORS.quyen,
    TRANSFORMATION_COLORS.khoa,
    TRANSFORMATION_COLORS.ki
  ];
  return colors[type] || TRANSFORMATION_COLORS.loc;
}
function ZoneHtml(props) {
  const { zone, idx, ls, wSquare, hSquare, config } = props;
  if (!zone) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center border border-gray-300 bg-white/50 p-2", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400", children: "No data" }) });
  }
  const canHoaData = extractCanHoa(ls);
  const typeLs = ls.cfg[1] || 0;
  const zoneName = AREA_NAME$1[zone.ai];
  const napColor = getElementColor(LTHG_HH$1[zone.na]);
  const triangleColor = getElementColor(CHI_3HH$1[idx]);
  const triangleOpacity = CHI_3HH$1[idx] === 2 ? 0.8 : 0.6;
  const hasDaiVan = ls.tutru?.dv?.some((dv) => {
    const dvIndex = ls.tutru.dv.indexOf(dv);
    const startIdx = ls.ad > 0 ? ls.am : ls.at;
    const moves = ls.ad > 0 ? dvIndex : -dvIndex;
    const targetIdx = (startIdx + moves + 12) % 12;
    return targetIdx === idx;
  });
  hasDaiVan ? ls.tutru.dv.find((dv) => {
    const dvIndex = ls.tutru.dv.indexOf(dv);
    const startIdx = ls.ad > 0 ? ls.am : ls.at;
    const moves = ls.ad > 0 ? dvIndex : -dvIndex;
    const targetIdx = (startIdx + moves + 12) % 12;
    return targetIdx === idx;
  }) : null;
  const isThanhZone = zone.ai === 0;
  const isMenhZone = ls.am === idx;
  const ngaCungPattern = [true, false, true, true, true, false, false, true, true, false, false, false];
  const phiCungNames = zone.cno?.map((cnoIdx, phiType) => {
    const targetZone = ls.ars[cnoIdx];
    if (!targetZone) return null;
    return {
      name: capitalizeFirstLetter(AREA_NAME$1[targetZone.ai]),
      type: phiType,
      isNga: ngaCungPattern[targetZone.ai],
      isSelf: cnoIdx === idx
    };
  });
  const luuNienCung = zone.ail !== void 0 ? AREA_NAME$1[zone.ail] : null;
  const idxThangThuc = zone.lmpt ? (zone.lmpt[1][0] - 1 + 2) % 12 : 0;
  const cungCanThang = idxThangThuc >= 0 && idxThangThuc < 12 ? ls.ars[idxThangThuc] : null;
  const padContent = 5;
  const padContentTop = 5;
  const padContentBottom = hSquare - 5;
  const fontDV = 11;
  const fontPhuTinh = 11;
  const fontChinhTinh = 15;
  const chinhTinhStartY = 38;
  const phuTinhStartY = 73;
  const isCung4bottom = idx === 11 || idx === 0 || idx === 1 || idx === 2;
  const isCung4top = idx === 5 || idx === 6 || idx === 7 || idx === 8;
  const isCung2left = idx === 3 || idx === 4;
  const isCung2right = idx === 9 || idx === 10;
  if (idx === 0 && zone.ss && zone.ss.length > 0) {
    console.log("[ZoneHtml Debug] Zone 0:");
    console.log("  zone.ci (Chi):", zone.ci, CHI$1[zone.ci]);
    console.log("  zone.cn (Can):", zone.cn, CAN$1[zone.cn]);
    console.log("  zone.ai (Area name):", AREA_NAME$1[zone.ai]);
    console.log("  canStars (transformations):", canHoaData.canHoaArray[zone.cn]);
    console.log("  typeLs:", typeLs);
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "zone-container border border-gray-800",
      style: {
        position: "relative",
        background: isThanhZone ? "rgba(240, 233, 222, 0.6)" : "linear-gradient(135deg, #fff 0%, #f9f9f9 100%)",
        width: wSquare,
        height: hSquare,
        overflow: "visible"
        // Changed from 'hidden' to show arrows
      },
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              position: "absolute",
              left: `${padContent}px`,
              top: `${padContentTop - 0.5}px`,
              fontSize: `${fontDV - 3}px`,
              color: getElementColor(CHI_HH$1[zone.ci]),
              lineHeight: 1
            },
            children: [
              CHI$1[zone.ci].charAt(0),
              ".",
              CHI$1[zone.ci].slice(1, 4)
            ]
          }
        ),
        zone.lmpt && zone.lmpt[0] && /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              position: "absolute",
              right: `${padContent}px`,
              top: `${padContentTop - 0.5}px`,
              fontSize: `${fontDV - 3}px`,
              color: "#000",
              lineHeight: 1
            },
            children: [
              CHI$1[zone.ci].charAt(0),
              " T",
              zone.lmpt[0]
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "font-bold",
            style: {
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: `${padContentTop}px`,
              fontSize: `${fontDV - 1}px`,
              color: "#000",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            },
            children: [
              isMenhZone && /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    position: "absolute",
                    left: "50%",
                    top: "-2px",
                    transform: "translateX(-50%)",
                    width: "calc(100% + 8px)",
                    height: "calc(100% + 4px)",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    borderRadius: "4px",
                    zIndex: -1
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    color: triangleColor,
                    opacity: triangleOpacity,
                    fontSize: "10px",
                    lineHeight: 1,
                    marginRight: "2px"
                  },
                  children: "▲"
                }
              ),
              /* @__PURE__ */ jsxs("span", { children: [
                zoneName,
                ls.at === idx && "(T)"
              ] }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "rounded px-1",
                  style: {
                    fontSize: `${fontDV - 2}px`,
                    color: napColor,
                    backgroundColor: isMenhZone ? "rgba(0,0,0,0.2)" : `${napColor}20`,
                    lineHeight: 1,
                    fontWeight: "normal"
                  },
                  children: zone.dv
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              position: "absolute",
              left: `${padContent}px`,
              top: `${padContentTop + 16}px`,
              fontSize: `${fontDV - 1}px`,
              color: napColor
            },
            children: [
              CAN$1[zone.cn].charAt(0),
              ".",
              CHI$1[zone.ci]
            ]
          }
        ),
        phiCungNames && phiCungNames.length === 4 && /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: `${padContentTop + 15}px`,
              display: "flex",
              gap: "2px",
              fontSize: `${fontPhuTinh - 5}px`,
              opacity: 0.8,
              lineHeight: 1,
              whiteSpace: "nowrap"
            },
            children: phiCungNames.map((phi, i) => {
              if (!phi) return null;
              const tColor = getTransformationColor(i);
              return /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    color: tColor.text,
                    fontWeight: phi.isNga ? "bold" : "normal",
                    fontSize: phi.isSelf ? "8px" : void 0
                  },
                  children: phi.isSelf ? "✱" : phi.name
                },
                i
              );
            })
          }
        ),
        luuNienCung && zone.lmpt && /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              position: "absolute",
              right: `${padContent}px`,
              top: `${padContentTop + 24}px`,
              fontSize: `${fontDV - 3}px`,
              opacity: 0.8,
              textAlign: "right",
              lineHeight: 1.3
            },
            children: [
              /* @__PURE__ */ jsxs("div", { style: { color: "#888", fontWeight: "bold", fontSize: "7px" }, children: [
                capitalizeFirstLetter(luuNienCung),
                "3"
              ] }),
              zone.lmpt[2] !== void 0 && /* @__PURE__ */ jsxs("div", { style: { color: getElementColor(LTHG_HH$1[zone.lmpt[4]]), marginTop: "1px", fontSize: "8px" }, children: [
                CAN$1[zone.lmpt[2]].charAt(0),
                " T",
                zone.lmpt[0]
              ] })
            ]
          }
        ),
        zone.sb && zone.sb.length > 0 && zone.sb.map((starId, starIdx) => {
          const star = SM$1[starId];
          if (!star) return null;
          const starColor = getElementColor(star.hh);
          const posRow2Start = 17;
          let levelBadge = "";
          if (star.lvl) {
            Object.entries(star.lvl).forEach(([key, value]) => {
              if (Number(key) === zone.ci + 1) {
                levelBadge = value;
              }
            });
          }
          const transformations = [];
          const birthYearCan = ls.dtb?.bs?.y?.[0];
          const canStars = birthYearCan !== void 0 ? canHoaData.canHoaArray[birthYearCan] : void 0;
          if (idx === 0 && starIdx === 0) {
            console.log("[ZoneHtml] Zone 0, Star 0:");
            console.log("  typeLs:", typeLs);
            console.log("  birthYearCan (ls.dtb.bs.y[0]):", birthYearCan);
            console.log("  zone.cn (zone Can):", zone.cn);
            console.log("  canStars for birthYearCan:", canStars);
            console.log("  current starId:", starId);
          }
          if (typeLs !== 3 && canStars) {
            for (let transformType = 0; transformType <= 3; transformType++) {
              if (canStars[transformType] === starId) {
                transformations.push({
                  type: transformType,
                  label: ["A", "B", "C", "D"][transformType]
                  // Lộc=A, Quyền=B, Khoa=C, Kị=D
                });
                if (idx === 0) {
                  console.log(`  ✓ Found transformation: ${["A", "B", "C", "D"][transformType]} for starId ${starId}`);
                }
              }
            }
          }
          return /* @__PURE__ */ jsxs(React.Fragment, { children: [
            transformations.length > 0 && /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  position: "absolute",
                  right: `calc(50% + ${star.name.length * 7 + 15}px)`,
                  // Dynamic offset based on star name length
                  top: `${chinhTinhStartY + starIdx * posRow2Start}px`,
                  display: "flex",
                  flexDirection: "row-reverse",
                  // Reverse order so they stack left
                  alignItems: "center",
                  gap: "2px",
                  pointerEvents: "none"
                  // Don't interfere with clicks
                },
                children: transformations.map((trans, i) => {
                  const tColor = getTransformationColor(trans.type);
                  return /* @__PURE__ */ jsx(
                    "span",
                    {
                      style: {
                        display: "inline-flex",
                        width: "12px",
                        height: "12px",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        // Circular shape!
                        fontSize: "7px",
                        fontWeight: "bold",
                        backgroundColor: tColor.bg,
                        border: `1px solid ${tColor.border}`,
                        color: tColor.text,
                        boxShadow: "0 0 2px rgba(0,0,0,0.2)"
                        // Slight shadow for visibility
                      },
                      title: ["Lộc", "Quyền", "Khoa", "Kị"][trans.type],
                      children: trans.label
                    },
                    i
                  );
                })
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: `${chinhTinhStartY + starIdx * posRow2Start}px`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px"
                },
                children: [
                  /* @__PURE__ */ jsxs(
                    "span",
                    {
                      className: "font-bold uppercase",
                      style: {
                        color: starColor,
                        fontSize: `${fontChinhTinh}px`,
                        textAlign: "center",
                        lineHeight: 1,
                        textShadow: levelBadge === "M" || levelBadge === "V" ? `0 0 3px ${starColor}40` : "none",
                        opacity: levelBadge === "H" ? 0.6 : 1,
                        whiteSpace: "nowrap"
                      },
                      children: [
                        star.name,
                        levelBadge && levelBadge !== "B" && /* @__PURE__ */ jsxs("sup", { style: { fontSize: "9px", marginLeft: "1px" }, children: [
                          "(",
                          levelBadge,
                          ")"
                        ] })
                      ]
                    }
                  ),
                  star.nn && star.nn[1] !== void 0 && /* @__PURE__ */ jsx("span", { style: { fontSize: "10px", color: starColor }, children: star.nn[1] > 0 ? "+" : "-" })
                ]
              }
            )
          ] }, starId);
        }),
        zone.ss && zone.ss.length > 0 && (() => {
          const leftStars = zone.ss.filter(
            (starId) => SM$1[starId] && SM$1[starId].typ === 1 && (!SM$1[starId].cir || SM$1[starId].cir !== "vts")
          );
          const rightStars = zone.ss.filter(
            (starId) => SM$1[starId] && SM$1[starId].typ === 2 && (!SM$1[starId].cir || SM$1[starId].cir !== "vts")
          );
          let leftY = phuTinhStartY;
          let rightY = phuTinhStartY;
          const starSpacing = fontPhuTinh - 1;
          return /* @__PURE__ */ jsxs(Fragment, { children: [
            leftStars.map((starId) => {
              const star = SM$1[starId];
              const currentY = leftY;
              leftY += starSpacing;
              let brightnessLevel = "";
              if (star.lvl) {
                Object.entries(star.lvl).forEach(([key, value]) => {
                  if (Number(key) === zone.ci + 1) {
                    brightnessLevel = value;
                  }
                });
              }
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: `${padContent}px`,
                    top: `${currentY}px`,
                    fontSize: `${fontPhuTinh}px`,
                    color: getElementColor(star.hh),
                    lineHeight: 1,
                    whiteSpace: "nowrap"
                  },
                  children: [
                    star.name,
                    brightnessLevel && brightnessLevel !== "B" && /* @__PURE__ */ jsxs(
                      "sup",
                      {
                        style: {
                          fontSize: "7px",
                          opacity: 0.6,
                          marginLeft: "1px"
                        },
                        children: [
                          "(",
                          brightnessLevel,
                          ")"
                        ]
                      }
                    )
                  ]
                },
                `left-${starId}`
              );
            }),
            rightStars.map((starId) => {
              const star = SM$1[starId];
              const currentY = rightY;
              rightY += starSpacing;
              let brightnessLevel = "";
              if (star.lvl) {
                Object.entries(star.lvl).forEach(([key, value]) => {
                  if (Number(key) === zone.ci + 1) {
                    brightnessLevel = value;
                  }
                });
              }
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  style: {
                    position: "absolute",
                    right: `${padContent}px`,
                    top: `${currentY}px`,
                    fontSize: `${fontPhuTinh}px`,
                    color: getElementColor(star.hh),
                    textAlign: "right",
                    lineHeight: 1,
                    whiteSpace: "nowrap"
                  },
                  children: [
                    star.name,
                    brightnessLevel && brightnessLevel !== "B" && /* @__PURE__ */ jsxs(
                      "sup",
                      {
                        style: {
                          fontSize: "7px",
                          opacity: 0.6,
                          marginLeft: "1px"
                        },
                        children: [
                          "(",
                          brightnessLevel,
                          ")"
                        ]
                      }
                    )
                  ]
                },
                `right-${starId}`
              );
            })
          ] });
        })(),
        zone.lynp !== void 0 && /* @__PURE__ */ jsx(
          "div",
          {
            className: "font-bold uppercase",
            style: {
              position: "absolute",
              left: `${padContent}px`,
              bottom: `${33}px`,
              color: getElementColor(CHI_HH$1[zone.lynp]),
              fontSize: "9px",
              opacity: 0.8,
              lineHeight: 1
            },
            children: CHI$1[zone.lynp]
          }
        ),
        zone.lmnp && zone.lmnp[0] && /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              position: "absolute",
              left: `${padContent + 25}px`,
              bottom: `${33}px`,
              color: "#444",
              fontSize: "8px",
              opacity: 0.8,
              lineHeight: 1
            },
            children: [
              "V",
              zone.lmnp[0]
            ]
          }
        ),
        zone.ss && zone.ss.length > 0 && (() => {
          const truongSinhStars = zone.ss.filter((starId) => SM$1[starId]?.cir === "vts");
          let truongSinhY = padContentBottom - 35;
          return truongSinhStars.map((starId) => {
            const star = SM$1[starId];
            const currentY = truongSinhY;
            truongSinhY += 12;
            return /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: `${hSquare - currentY}px`,
                  color: getElementColor(star.hh),
                  fontSize: "10px",
                  opacity: 0.8,
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                  textAlign: "center"
                },
                children: star.name
              },
              `ts-${starId}`
            );
          });
        })(),
        ls.cfg[6] === 1 && zone.zolk && (() => {
          const numberLoc = zone.zolk[0]?.[ZolkName$1.currentLoc] || 0;
          const numberKi = zone.zolk[3]?.[ZolkName$1.currentKi] || 0;
          const typeLs2 = ls.cfg[1] || 0;
          const iconLoc = typeLs2 === 4 || typeLs2 === 5 ? "A" : "";
          const iconKi = typeLs2 === 4 || typeLs2 === 5 ? "D" : "";
          const iconInfiniti = "∞";
          const hasLoc = numberLoc > 0 || containsNumber$1(ls.loopLP?.[0] || [], idx) && numberLoc === 0;
          const hasKi = numberKi > 0 || containsNumber$1(ls.loopLP?.[3] || [], idx) && numberKi === 0;
          if (!hasLoc && !hasKi) return null;
          const locColor = TRANSFORMATION_COLORS.loc.text;
          const kiColor = TRANSFORMATION_COLORS.ki.text;
          const locKiBottom = 48;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: `${locKiBottom}px`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: hasLoc && hasKi ? "15px" : "0",
                fontSize: typeLs2 === 4 ? `${fontPhuTinh + 2}px` : `${fontPhuTinh - 2}px`,
                fontWeight: "bold",
                opacity: typeLs2 === 4 ? 1 : 0.8,
                lineHeight: 1
              },
              children: [
                hasLoc && /* @__PURE__ */ jsx("div", { style: { color: locColor, textAlign: "center" }, children: numberLoc > 0 ? /* @__PURE__ */ jsx(Fragment, { children: !containsNumber$1(ls.loopLP?.[0] || [], idx) ? `${numberLoc}${iconLoc}` : zone.zolk[0]?.[ZolkName$1.locKeep] === 0 ? `${numberLoc}${iconLoc}${iconInfiniti}` : /* @__PURE__ */ jsx(Fragment, { children: numberLoc - zone.zolk[0]?.[ZolkName$1.locKeep] > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    zone.zolk[0]?.[ZolkName$1.locKeep],
                    iconLoc
                  ] }),
                  /* @__PURE__ */ jsxs("div", { style: { marginTop: "-15px" }, children: [
                    numberLoc - zone.zolk[0]?.[ZolkName$1.locKeep],
                    iconInfiniti
                  ] })
                ] }) : `${numberLoc}${iconLoc}` }) }) : /* @__PURE__ */ jsx("span", { style: { fontSize: `${fontPhuTinh}px` }, children: iconInfiniti }) }),
                hasKi && /* @__PURE__ */ jsx("div", { style: { color: kiColor, textAlign: "center" }, children: numberKi > 0 ? `${numberKi}${iconKi}${containsNumber$1(ls.loopLP?.[3] || [], idx) ? iconInfiniti : ""}` : /* @__PURE__ */ jsx("span", { style: { fontSize: `${fontPhuTinh}px` }, children: iconInfiniti }) })
              ]
            }
          );
        })(),
        cungCanThang && zone.lmpt && zone.lmpt[1] && /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              position: "absolute",
              right: `${padContent}px`,
              bottom: `${33}px`,
              fontSize: "8px",
              textAlign: "right",
              opacity: 0.8,
              color: getElementColor(LTHG_HH$1[cungCanThang.lmpt?.[4] || 0]),
              lineHeight: 1
            },
            children: [
              CAN$1[cungCanThang.lmpt?.[2] || 0].charAt(0),
              ".",
              CHI$1[cungCanThang.lmpt?.[3] || 0],
              " P",
              zone.lmpt[1][0]
            ]
          }
        ),
        zone.ys && zone.ys.length > 0 && (() => {
          let yearX = padContent;
          const yearStartBottom = 5;
          const yearSpacing = 34;
          return zone.ys.slice(0, 6).map((yearInfo, i) => {
            const yearColor = yearInfo[2] !== void 0 ? getElementColor(LTHG_HH$1[yearInfo[2]]) : "#888";
            const isCurrentYear = yearInfo[1] === ls.dtv?.ln?.y;
            const currentX = yearX;
            yearX += yearSpacing;
            return /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: `${currentX}px`,
                    bottom: `${yearStartBottom + 12}px`,
                    fontSize: "7px",
                    color: yearColor,
                    opacity: 0.7,
                    lineHeight: 1
                  },
                  children: [
                    CAN$1[yearInfo[4] || 0].charAt(0),
                    ".",
                    yearInfo[0]
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: `${currentX}px`,
                    bottom: `${yearStartBottom}px`,
                    fontSize: "8px",
                    color: yearColor,
                    backgroundColor: isCurrentYear ? "rgba(0,0,0,0.15)" : "transparent",
                    padding: isCurrentYear ? "1px 2px" : "0",
                    borderRadius: isCurrentYear ? "2px" : "0",
                    fontWeight: isCurrentYear ? "bold" : "normal",
                    opacity: 0.8,
                    lineHeight: 1
                  },
                  children: yearInfo[1]
                }
              )
            ] }, i);
          });
        })(),
        zone.ht && zone.ht.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute top-1 right-1 flex gap-0.5", children: zone.ht.slice(0, 3).map((flyInfo, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex h-3 w-3 items-center justify-center rounded-full bg-blue-500 text-[8px] font-bold text-white opacity-80",
            title: `Flying star ${i + 1}`,
            children: "★"
          },
          i
        )) }),
        (() => {
          if (typeLs === 3) return null;
          const tuHoaArrows = [];
          const canStars = canHoaData.canHoaArray[zone.cn];
          if (!canStars) return null;
          if (idx === 0) {
            console.log("[ZoneHtml Tự Hóa] Zone 0:");
            console.log("  typeLs:", typeLs);
            console.log("  zone.cn:", zone.cn);
            console.log("  canStars:", canStars);
            console.log("  zone.ss:", zone.ss);
          }
          let direction = "bottom";
          if (isCung4bottom) direction = "bottom";
          else if (isCung4top) direction = "top";
          else if (isCung2left) direction = "left";
          else if (isCung2right) direction = "right";
          zone.sb?.forEach((starId, starIdx) => {
            const transformType = canStars.indexOf(starId);
            if (transformType >= 0) {
              let starX = wSquare / 2;
              const starY = chinhTinhStartY + starIdx * 17;
              const countTH = 0;
              if (isCung4bottom || isCung4top) {
                starX = wSquare / 2 - countTH * 15;
              } else if (isCung2left) {
                starX = 45;
              } else if (isCung2right) {
                starX = wSquare / 2 + 35;
              }
              tuHoaArrows.push(
                /* @__PURE__ */ jsx("g", { children: renderTuHoaArrow(transformType, starX, starY, direction, wSquare, hSquare) }, `tu-hoa-major-${starId}-${transformType}`)
              );
            }
          });
          const arrStarHoa = [60, 61, 62, 63];
          const allLeftStars = zone.ss?.filter(
            (starId) => SM$1[starId] && SM$1[starId].typ === 1 && (!SM$1[starId].cir || SM$1[starId].cir !== "vts")
          ) || [];
          const allRightStars = zone.ss?.filter(
            (starId) => SM$1[starId] && SM$1[starId].typ === 2 && (!SM$1[starId].cir || SM$1[starId].cir !== "vts")
          ) || [];
          let leftY = phuTinhStartY;
          let rightY = phuTinhStartY;
          const starSpacing = fontPhuTinh - 1;
          const isKhamThienLuongPhai = typeLs === 4 || typeLs === 5;
          let leftStarX = padContent;
          if (isCung2left) {
            leftStarX = isKhamThienLuongPhai ? 45 : 10;
          } else if (isCung4bottom || isCung4top) {
            leftStarX = wSquare / 2 - 6;
          }
          let rightStarX = wSquare - padContent;
          if (isCung2right) {
            rightStarX = wSquare / 2 + (isKhamThienLuongPhai ? 45 : -15);
          } else if (isCung4bottom || isCung4top) {
            rightStarX = wSquare / 2 - 6;
          }
          allLeftStars.forEach((starId) => {
            if (arrStarHoa.includes(starId)) {
              const transformType = canStars.indexOf(starId);
              if (starId === 62 && idx === 0) {
                console.log("[Tự Hóa] Tả Phụ (62) found in left stars");
                console.log("  transformType:", transformType);
                console.log("  canStars:", canStars);
                console.log("  typeLs:", typeLs);
              }
              if (transformType >= 0) {
                tuHoaArrows.push(
                  /* @__PURE__ */ jsx("g", { children: renderTuHoaArrow(transformType, leftStarX, leftY, direction, wSquare, hSquare) }, `tu-hoa-left-${starId}-${transformType}`)
                );
                if (starId === 62 && idx === 0) {
                  console.log("  ✓ Arrow added for Tả Phụ at leftY:", leftY);
                }
              }
            }
            leftY += starSpacing;
          });
          allRightStars.forEach((starId) => {
            if (arrStarHoa.includes(starId)) {
              const transformType = canStars.indexOf(starId);
              if (starId === 62 && idx === 0) {
                console.log("[Tự Hóa] Tả Phụ (62) found in right stars");
                console.log("  transformType:", transformType);
              }
              if (transformType >= 0) {
                tuHoaArrows.push(
                  /* @__PURE__ */ jsx("g", { children: renderTuHoaArrow(transformType, rightStarX, rightY, direction, wSquare, hSquare) }, `tu-hoa-right-${starId}-${transformType}`)
                );
                if (starId === 62 && idx === 0) {
                  console.log("  ✓ Arrow added for Tả Phụ at rightY:", rightY);
                }
              }
            }
            rightY += starSpacing;
          });
          if (tuHoaArrows.length === 0) return null;
          return /* @__PURE__ */ jsxs(
            "svg",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: wSquare,
                height: hSquare,
                pointerEvents: "none",
                zIndex: 10,
                overflow: "visible"
              },
              children: [
                /* @__PURE__ */ jsx("defs", { children: [0, 1, 2, 3].map((type) => {
                  const colors = ["rgb(3 140 0)", "rgb(110 8 136)", "rgb(14 124 202)", "rgb(217 4 4)"];
                  return /* @__PURE__ */ jsx(
                    "marker",
                    {
                      id: `tu-hoa-arrow-${type}`,
                      markerWidth: "10",
                      markerHeight: "10",
                      refX: "9",
                      refY: "3",
                      orient: "auto",
                      markerUnits: "strokeWidth",
                      children: /* @__PURE__ */ jsx("path", { d: "M0,0 L0,6 L9,3 z", fill: colors[type] })
                    },
                    `tu-hoa-arrow-${type}`
                  );
                }) }),
                tuHoaArrows
              ]
            }
          );
        })()
      ]
    }
  );
}

const ZONE_POSITIONS = [
  { col: 3, row: 4 },
  // Zone 0 - Bottom Right Center
  { col: 2, row: 4 },
  // Zone 1 - Bottom Center Left
  { col: 1, row: 4 },
  // Zone 2 - Bottom Left
  { col: 1, row: 3 },
  // Zone 3 - Middle Left Bottom
  { col: 1, row: 2 },
  // Zone 4 - Middle Left Top
  { col: 1, row: 1 },
  // Zone 5 - Top Left
  { col: 2, row: 1 },
  // Zone 6 - Top Center Left
  { col: 3, row: 1 },
  // Zone 7 - Top Center Right
  { col: 4, row: 1 },
  // Zone 8 - Top Right
  { col: 4, row: 2 },
  // Zone 9 - Middle Right Top
  { col: 4, row: 3 },
  // Zone 10 - Middle Right Bottom
  { col: 4, row: 4 }
  // Zone 11 - Bottom Right
];
function HoroscopeHtmlClient(props) {
  const { ls, fontName, version, fnDownloadCall, fnCopyLs, fnExportNote, fnSocialShare } = props;
  const chartRef = useRef(null);
  const { copyImageToClipboard, downloadImage, exportImageNote } = useExportHtml(chartRef, ls);
  const numberAddMore = ls.css <= 11 ? 0 : (ls.css - 11) * 75;
  const lsWidth = 742;
  const lsHeight = 960 + numberAddMore;
  const wSquare = lsWidth / 4;
  const hSquare = lsHeight / 4;
  const padZone = 54;
  const fontCenter = 12;
  const borderColors = ["", "", "#123e65", "#04973c", "#919191", "#e39e25", "#e73827"];
  useEffect(() => {
    if (fnDownloadCall > 0) {
      const fileName = `tinhmenhdo-html-${ls.sx === 1 ? "nam" : "nu"}-${ls.dtb.sn.y}.${ls.dtb.sn.m}.${ls.dtb.sn.d}-${ls.dtb.sn.h}.${ls.dtb.sn.i || 0}.png`;
      downloadImage(fileName);
    }
  }, [fnDownloadCall, downloadImage, ls]);
  useEffect(() => {
    if (fnCopyLs > 0) {
      copyImageToClipboard();
    }
  }, [fnCopyLs, copyImageToClipboard]);
  useEffect(() => {
    if (fnExportNote > 0) {
      exportImageNote();
    }
  }, [fnExportNote, exportImageNote]);
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref: chartRef,
      className: "chart-container relative",
      style: {
        width: lsWidth + padZone,
        height: lsHeight + padZone,
        fontFamily: fontName
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(circle at center, #fff 0%, #ddd 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative z-10 grid grid-cols-4 grid-rows-4",
            style: {
              width: lsWidth,
              height: lsHeight,
              margin: `${padZone / 2}px`
            },
            children: [
              ZONE_POSITIONS.map((pos, idx) => /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    gridColumn: pos.col,
                    gridRow: pos.row
                  },
                  children: /* @__PURE__ */ jsx(
                    ZoneHtml,
                    {
                      idx,
                      zone: ls.ars[idx],
                      ls,
                      config: ls.cfg,
                      wSquare,
                      hSquare
                    }
                  )
                },
                idx
              )),
              /* @__PURE__ */ jsx(
                SkyHtml,
                {
                  ls,
                  className: "col-span-2 col-start-2 row-span-2 row-start-2",
                  wSquare,
                  fontCenter
                }
              ),
              /* @__PURE__ */ jsx(FlyingStarsHtml, { ls, wSquare, hSquare }),
              /* @__PURE__ */ jsx(PhiHoaArrowsHtml, { ls, wSquare, hSquare })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "pointer-events-none absolute inset-0 z-20",
            width: lsWidth + padZone,
            height: lsHeight + padZone,
            style: {
              left: 0,
              top: 0
            },
            children: [
              /* @__PURE__ */ jsx(
                "rect",
                {
                  x: padZone / 2,
                  y: padZone / 2,
                  width: lsWidth,
                  height: lsHeight,
                  fill: "none",
                  stroke: borderColors[ls.cid] || "#000",
                  strokeWidth: "2"
                }
              ),
              /* @__PURE__ */ jsx(
                "line",
                {
                  x1: padZone / 2,
                  y1: padZone / 2 + hSquare,
                  x2: padZone / 2 + lsWidth,
                  y2: padZone / 2 + hSquare,
                  stroke: "#000",
                  strokeWidth: "1"
                }
              ),
              /* @__PURE__ */ jsx(
                "line",
                {
                  x1: padZone / 2,
                  y1: padZone / 2 + hSquare * 3,
                  x2: padZone / 2 + lsWidth,
                  y2: padZone / 2 + hSquare * 3,
                  stroke: "#000",
                  strokeWidth: "1"
                }
              ),
              /* @__PURE__ */ jsx(
                "line",
                {
                  x1: padZone / 2 + wSquare,
                  y1: padZone / 2,
                  x2: padZone / 2 + wSquare,
                  y2: padZone / 2 + lsHeight,
                  stroke: "#000",
                  strokeWidth: "1"
                }
              ),
              /* @__PURE__ */ jsx(
                "line",
                {
                  x1: padZone / 2 + wSquare * 3,
                  y1: padZone / 2,
                  x2: padZone / 2 + wSquare * 3,
                  y2: padZone / 2 + lsHeight,
                  stroke: "#000",
                  strokeWidth: "1"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute right-2 bottom-2 z-30 text-[10px] text-gray-400", children: [
          "TinhMenhDo.com HTML v",
          version
        ] })
      ]
    }
  ) });
}

function normalizePath(path) {
  return path?.toLowerCase().trim().replace(/\s+/g, "-") || "";
}
const isClient = typeof window !== "undefined";
function getSearchParams() {
  if (!isClient) return new URLSearchParams();
  return new URLSearchParams(window.location.search);
}
function getPathName() {
  if (!isClient) return "";
  return window.location.pathname;
}

const safeGetLsData = {
  getBirthData: (ls) => {
    try {
      return ls?.dtb?.bs && Array.isArray(ls.dtb.bs.y) && Array.isArray(ls.dtb.bs.m) && Array.isArray(ls.dtb.bs.d) && Array.isArray(ls.dtb.bs.h) ? {
        y: ls.dtb.bs.y,
        m: ls.dtb.bs.m,
        d: ls.dtb.bs.d,
        h: ls.dtb.bs.h
      } : null;
    } catch {
      return null;
    }
  },
  getLunarData: (ls) => {
    try {
      return ls?.dtb?.ln && typeof ls.dtb.ln.y === "number" && typeof ls.dtb.ln.m === "number" && typeof ls.dtb.ln.d === "number" ? {
        y: ls.dtb.ln.y,
        m: ls.dtb.ln.m,
        d: ls.dtb.ln.d
      } : null;
    } catch {
      return null;
    }
  },
  getSolarData: (ls) => {
    try {
      return ls?.dtb?.sn && typeof ls.dtb.sn.y === "number" && typeof ls.dtb.sn.m === "number" && typeof ls.dtb.sn.d === "number" && typeof ls.dtb.sn.h === "number" ? {
        y: ls.dtb.sn.y,
        m: ls.dtb.sn.m,
        d: ls.dtb.sn.d,
        h: ls.dtb.sn.h,
        i: ls.dtb.sn.i || 0
      } : null;
    } catch {
      return null;
    }
  }
};
function hasLsData(ls) {
  try {
    if (!ls || !ls.dtb) {
      console.error("Invalid HoroMap: missing ls or dtb");
      return false;
    }
    const birthData = safeGetLsData.getBirthData(ls);
    const lunarData = safeGetLsData.getLunarData(ls);
    const solarData = safeGetLsData.getSolarData(ls);
    if (!birthData) console.error("Invalid HoroMap: missing or invalid birth data");
    if (!lunarData) console.error("Invalid HoroMap: missing or invalid lunar data");
    if (!solarData) console.error("Invalid HoroMap: missing or invalid solar data");
    return Boolean(birthData && lunarData && solarData);
  } catch (error) {
    console.error("Error in hasLsData:", error);
    return false;
  }
}

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function shouldUpdateVideo(prevProps, props) {
  var _a, _b;
  if (prevProps.videoId !== props.videoId) {
    return true;
  }
  const prevVars = ((_a = prevProps.opts) == null ? void 0 : _a.playerVars) || {};
  const vars = ((_b = props.opts) == null ? void 0 : _b.playerVars) || {};
  return prevVars.start !== vars.start || prevVars.end !== vars.end;
}
function filterResetOptions(opts = {}) {
  return __spreadProps(__spreadValues({}, opts), {
    height: 0,
    width: 0,
    playerVars: __spreadProps(__spreadValues({}, opts.playerVars), {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
function shouldResetPlayer(prevProps, props) {
  return prevProps.videoId !== props.videoId || !isEqual(filterResetOptions(prevProps.opts), filterResetOptions(props.opts));
}
function shouldUpdatePlayer(prevProps, props) {
  var _a, _b, _c, _d;
  return prevProps.id !== props.id || prevProps.className !== props.className || ((_a = prevProps.opts) == null ? void 0 : _a.width) !== ((_b = props.opts) == null ? void 0 : _b.width) || ((_c = prevProps.opts) == null ? void 0 : _c.height) !== ((_d = props.opts) == null ? void 0 : _d.height) || prevProps.iframeClassName !== props.iframeClassName || prevProps.title !== props.title;
}
var defaultProps = {
  videoId: "",
  id: "",
  className: "",
  iframeClassName: "",
  style: {},
  title: "",
  loading: void 0,
  opts: {},
  onReady: () => {
  },
  onError: () => {
  },
  onPlay: () => {
  },
  onPause: () => {
  },
  onEnd: () => {
  },
  onStateChange: () => {
  },
  onPlaybackRateChange: () => {
  },
  onPlaybackQualityChange: () => {
  }
};
var propTypes = {
  videoId: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  iframeClassName: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  loading: PropTypes.oneOf(["lazy", "eager"]),
  opts: PropTypes.objectOf(PropTypes.any),
  onReady: PropTypes.func,
  onError: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnd: PropTypes.func,
  onStateChange: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onPlaybackQualityChange: PropTypes.func
};
var _YouTube = class extends React.Component {
  constructor(props) {
    super(props);
    this.destroyPlayerPromise = void 0;
    this.onPlayerReady = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onReady) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerError = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onError) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerStateChange = (event) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      (_b = (_a = this.props).onStateChange) == null ? void 0 : _b.call(_a, event);
      switch (event.data) {
        case _YouTube.PlayerState.ENDED:
          (_d = (_c = this.props).onEnd) == null ? void 0 : _d.call(_c, event);
          break;
        case _YouTube.PlayerState.PLAYING:
          (_f = (_e = this.props).onPlay) == null ? void 0 : _f.call(_e, event);
          break;
        case _YouTube.PlayerState.PAUSED:
          (_h = (_g = this.props).onPause) == null ? void 0 : _h.call(_g, event);
          break;
      }
    };
    this.onPlayerPlaybackRateChange = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onPlaybackRateChange) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerPlaybackQualityChange = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onPlaybackQualityChange) == null ? void 0 : _b.call(_a, event);
    };
    this.destroyPlayer = () => {
      if (this.internalPlayer) {
        this.destroyPlayerPromise = this.internalPlayer.destroy().then(() => this.destroyPlayerPromise = void 0);
        return this.destroyPlayerPromise;
      }
      return Promise.resolve();
    };
    this.createPlayer = () => {
      if (typeof document === "undefined")
        return;
      if (this.destroyPlayerPromise) {
        this.destroyPlayerPromise.then(this.createPlayer);
        return;
      }
      const playerOpts = __spreadProps(__spreadValues({}, this.props.opts), {
        videoId: this.props.videoId
      });
      this.internalPlayer = youTubePlayer(this.container, playerOpts);
      this.internalPlayer.on("ready", this.onPlayerReady);
      this.internalPlayer.on("error", this.onPlayerError);
      this.internalPlayer.on("stateChange", this.onPlayerStateChange);
      this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange);
      this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange);
      if (this.props.title || this.props.loading) {
        this.internalPlayer.getIframe().then((iframe) => {
          if (this.props.title)
            iframe.setAttribute("title", this.props.title);
          if (this.props.loading)
            iframe.setAttribute("loading", this.props.loading);
        });
      }
    };
    this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer);
    this.updatePlayer = () => {
      var _a;
      (_a = this.internalPlayer) == null ? void 0 : _a.getIframe().then((iframe) => {
        if (this.props.id)
          iframe.setAttribute("id", this.props.id);
        else
          iframe.removeAttribute("id");
        if (this.props.iframeClassName)
          iframe.setAttribute("class", this.props.iframeClassName);
        else
          iframe.removeAttribute("class");
        if (this.props.opts && this.props.opts.width)
          iframe.setAttribute("width", this.props.opts.width.toString());
        else
          iframe.removeAttribute("width");
        if (this.props.opts && this.props.opts.height)
          iframe.setAttribute("height", this.props.opts.height.toString());
        else
          iframe.removeAttribute("height");
        if (this.props.title)
          iframe.setAttribute("title", this.props.title);
        else
          iframe.setAttribute("title", "YouTube video player");
        if (this.props.loading)
          iframe.setAttribute("loading", this.props.loading);
        else
          iframe.removeAttribute("loading");
      });
    };
    this.getInternalPlayer = () => {
      return this.internalPlayer;
    };
    this.updateVideo = () => {
      var _a, _b, _c, _d;
      if (typeof this.props.videoId === "undefined" || this.props.videoId === null) {
        (_a = this.internalPlayer) == null ? void 0 : _a.stopVideo();
        return;
      }
      let autoplay = false;
      const opts = {
        videoId: this.props.videoId
      };
      if ((_b = this.props.opts) == null ? void 0 : _b.playerVars) {
        autoplay = this.props.opts.playerVars.autoplay === 1;
        if ("start" in this.props.opts.playerVars) {
          opts.startSeconds = this.props.opts.playerVars.start;
        }
        if ("end" in this.props.opts.playerVars) {
          opts.endSeconds = this.props.opts.playerVars.end;
        }
      }
      if (autoplay) {
        (_c = this.internalPlayer) == null ? void 0 : _c.loadVideoById(opts);
        return;
      }
      (_d = this.internalPlayer) == null ? void 0 : _d.cueVideoById(opts);
    };
    this.refContainer = (container) => {
      this.container = container;
    };
    this.container = null;
    this.internalPlayer = null;
  }
  componentDidMount() {
    this.createPlayer();
  }
  componentDidUpdate(prevProps) {
    return __async(this, null, function* () {
      if (shouldUpdatePlayer(prevProps, this.props)) {
        this.updatePlayer();
      }
      if (shouldResetPlayer(prevProps, this.props)) {
        yield this.resetPlayer();
      }
      if (shouldUpdateVideo(prevProps, this.props)) {
        this.updateVideo();
      }
    });
  }
  componentWillUnmount() {
    this.destroyPlayer();
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: this.props.className,
      style: this.props.style
    }, /* @__PURE__ */ React.createElement("div", {
      id: this.props.id,
      className: this.props.iframeClassName,
      ref: this.refContainer
    }));
  }
};
var YouTube = _YouTube;
YouTube.propTypes = propTypes;
YouTube.defaultProps = defaultProps;
YouTube.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var YouTube_default = YouTube;

const ExplainLS = React.memo(() => {
  const [isTableExpanded, setIsTableExpanded] = useState(true);
  const [isExplanationExpanded, setIsExplanationExpanded] = useState(true);
  const toggleTable = useCallback(() => {
    setIsTableExpanded((prev) => !prev);
  }, []);
  const toggleExplanation = useCallback(() => {
    setIsExplanationExpanded((prev) => !prev);
  }, []);
  const youtubeOpts = {
    height: "400",
    width: "700",
    playerVars: {
      controls: 1
    }
  };
  const Section = ({ title, isExpanded, toggleFn, id, children }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "group mb-2", children: /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: toggleFn,
        className: "flex items-center text-[15px] font-bold transition-all duration-300 group-hover:text-orange-600 hover:text-orange-600 focus:outline-hidden",
        "aria-expanded": isExpanded,
        "aria-controls": id,
        children: [
          /* @__PURE__ */ jsx("span", { className: "mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border text-lg transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-100 group-hover:text-orange-600 group-hover:shadow-xs", children: isExpanded ? "-" : "+" }),
          /* @__PURE__ */ jsx("strong", { children: title })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        id,
        className: `overflow-hidden transition-all duration-300 ${isExpanded ? `max-h-[5000px] opacity-100${id === "tuhoatbl-container" ? "overflow-x-auto" : ""}` : "max-h-0 opacity-0"}`,
        children
      }
    )
  ] });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "mb-20 px-2 sm:px-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 border-b border-dashed border-gray-300 pb-1 text-2xl font-bold", children: "Video hướng dẫn" }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(YouTube_default, { videoId: "NihjY_1UjjA", opts: youtubeOpts, className: "w-full! max-w-[900px] [&_iframe]:w-full" }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-20 px-2 text-sm max-lg:w-full sm:px-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-4 border-b border-dashed border-gray-300 pb-1 text-2xl font-bold", children: "Giải thích các kí hiệu trên lá số" }),
      /* @__PURE__ */ jsx(
        Section,
        {
          title: "Giải thích các kí hiệu trên lá số (click để xem)",
          isExpanded: isExplanationExpanded,
          toggleFn: toggleExplanation,
          id: "explanation-container",
          children: /* @__PURE__ */ jsxs("ul", { className: "mb-10 list-disc pl-10 text-sm", children: [
            /* @__PURE__ */ jsx("li", { children: "Trên cùng ở giữa là tên cung nguyên bàn ví dụ Mệnh, Bào, Phối..." }),
            /* @__PURE__ */ jsx("li", { children: "Hình tam giác nhỏ cạnh tên cùng màu là cùng tam hợp ví dụ (Thân, Tý, Thìn) tam hợp thủy tam giác đen" }),
            /* @__PURE__ */ jsx("li", { children: "Góc trái trên cùng 1 cung có chữ B.Dần, Đ.Mão, M.Thìn thì đó là can cung và địa chi cung tương ứng Bính Dần, Đinh Mão, Mậu Thìn" }),
            /* @__PURE__ */ jsx("li", { children: "Chữ (T) ở cạnh tên là cung Thân Nam Phái" }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Hệ thống tứ hóa, phi hóa:" }),
              /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5", children: [
                /* @__PURE__ */ jsx("li", { children: "Dấu ☸ ở cạnh tên cung là Lai Nhân Cung Khâm Thiên Tứ Hóa" }),
                /* @__PURE__ */ jsx("li", { children: "Dấu + - ở chính tinh là nam nữ nhân tinh với Khâm Thiên Tứ Hóa" }),
                /* @__PURE__ */ jsx("li", { children: "A, B, C, D tròn là tiên thiên tứ hóa tương ứng Lộc,Quyền, Khoa, Kị" }),
                /* @__PURE__ */ jsx("li", { children: "2, 3, 4, 5 cạnh các chính tinh là phi hóa tương ứng từ Đại Vận, Lưu Niên, Lưu Nguyệt, Lưu Nhật" }),
                /* @__PURE__ */ jsx("li", { children: "Mũi tên thẳng hướng tâm hoặc cong là các phi hóa, nét đứt là chuyển kị" }),
                /* @__PURE__ */ jsx("li", { children: "Tự hóa hướng tâm là các mũi tên đâm xuyên tâm lá số" }),
                /* @__PURE__ */ jsx("li", { children: "Tự hóa ly tâm là các mũi tên đâm ra ngoài" }),
                /* @__PURE__ */ jsx("li", { children: "Phần số xanh lá và đỏ ở giữa cung phía dưới kết quả Phương Viên Lộc Kị toàn đồ " })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Hệ thống sao lưu:" }),
              /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5", children: [
                /* @__PURE__ */ jsx("li", { children: "Tiểu Vận Nam Phái góc trái phía dưới từng năm ví dụ THÌN" }),
                /* @__PURE__ */ jsx("li", { children: "Các sao lưu đại vận có chữ Đ. ví dụ Đ.Kình Dương" }),
                /* @__PURE__ */ jsx("li", { children: "Các sao lưu hằng năm có chữ L. ví dụ L.Kình Dương" }),
                /* @__PURE__ */ jsxs("li", { children: [
                  "Vận tháng:",
                  /* @__PURE__ */ jsxs("ol", { className: "list-disc pl-5", children: [
                    /* @__PURE__ */ jsx("li", { children: 'Nguyệt vận nam phái gần năm tiểu vận ví dụ "V5" nguyệt vận tháng 5' }),
                    /* @__PURE__ */ jsx("li", { children: 'Nguyệt lưu nguyệt Phi Tinh góc phải dưới là "Đ.Sửu P12" (tháng 12 can chi tháng theo lịch là Đinh Sửu)' }),
                    /* @__PURE__ */ jsx("li", { children: 'Vận tháng tử vân phái là chữ "ẤT5" ( tháng 5 can tháng theo lịch Ất)' })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("li", { children: "⊙ cung lưu Tuần, ⊠ cung lưu Triệt, sao có chữ L. là sao lưu niên" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Cung vị trùng điệp chọn trong menu:" }),
              "Tự xoay cung vị theo năm, tháng xem",
              /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5", children: [
                /* @__PURE__ */ jsx("li", { children: "Trên cùng ở bên trái tên cung đại vận ví dụ Đ.Mệnh, Đ.Bào, Đ.Phối..." }),
                /* @__PURE__ */ jsx("li", { children: "Trên cùng ở bên phải tên cung lưu niên ví dụ L.Mệnh, L.Bào, L.Phối..." }),
                /* @__PURE__ */ jsx("li", { children: "Các biểu tượng ⇄, ⇅ dưới các cung phi là tuần hoàn Lộc, Quyền hoặc Kị. ⇄ thì sẽ tuần hoàn với các cung có ⇄ tương ứng, tương tự với ⇅ sẽ ương ứng với ⇅" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Hệ thống Lục Thập Hoa Giáp và tuổi các năm:" }),
              /* @__PURE__ */ jsx("ul", { className: "list-disc pl-5", children: /* @__PURE__ */ jsx("li", { children: "Phần dưới cùng có nhiều năm 2009 2021 2003 là các năm màu năm là màu ngũ hành nạp âm. Ngay trên là Can năm đó và tuổi ví du ( Đ.13 K.25) thì là Đinh 13 tuổi, Kỷ 25 Tuổi" }) })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        Section,
        {
          title: "Bảng an tứ hóa các phái tử vi (click để xem)",
          isExpanded: isTableExpanded,
          toggleFn: toggleTable,
          id: "tuhoatbl-container",
          children: /* @__PURE__ */ jsx("table", { id: "tuhoatbl", className: "w-[1600px]", children: /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { children: "Thiên can" }),
              /* @__PURE__ */ jsxs("th", { children: [
                "Bảng 1 ",
                /* @__PURE__ */ jsx("br", {}),
                " Được dùng nhiều"
              ] }),
              /* @__PURE__ */ jsxs("th", { children: [
                "Bảng 2 ",
                /* @__PURE__ */ jsx("br", {}),
                "Mặc định của phần mềm"
              ] }),
              /* @__PURE__ */ jsxs("th", { children: [
                "Bảng 3 ",
                /* @__PURE__ */ jsx("br", {}),
                " Trung Châu Phái Vương Đình Chi"
              ] }),
              /* @__PURE__ */ jsxs("th", { children: [
                "Bảng 4 ",
                /* @__PURE__ */ jsx("br", {}),
                " Một số phái"
              ] }),
              /* @__PURE__ */ jsxs("th", { children: [
                "Bảng 5 ",
                /* @__PURE__ */ jsx("br", {}),
                " Trường phái nhỏ khác"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: "GIÁP" }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Liêm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Phá" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Liêm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Phá" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Liêm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Phá" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Liêm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Phá" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Liêm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Phá" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: "ẤT" }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tử" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tử" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tử" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tử" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tử" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: "BÍNH" }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Đồng" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Xương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Liêm" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Đồng" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Xương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Liêm" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Đồng" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Xương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Liêm" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Đồng" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Xương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Liêm" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Đồng" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Xương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Liêm" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: "ĐINH" }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Đồng" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Đồng" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Đồng" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Đồng" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Đồng" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: "MẬU" }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Bật" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Bật" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16 font-bold text-red-700", children: "Dương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Bật" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Bật" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cơ" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: "KỶ" }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Khúc" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Khúc" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Khúc" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Khúc" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Khúc" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: "CANH" }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16 font-bold text-red-700", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16 font-bold text-red-700", children: "Đồng" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16 font-bold text-red-700", children: "Đồng" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16 font-bold text-red-700", children: "Âm" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16 font-bold text-red-700", children: "Phủ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16 font-bold text-red-700", children: "Đồng" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16 font-bold text-red-700", children: "Đồng" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16 font-bold text-red-700", children: "Tướng" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16 font-bold text-red-700", children: "Tham" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16 font-bold text-red-700", children: "Đồng" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: "TÂN" }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Khúc" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Xương" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Khúc" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Xương" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Khúc" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Xương" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Khúc" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Xương" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Dương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Khúc" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Xương" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: "NHÂM" }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tử" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Phụ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tử" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Phụ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tử" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16 font-bold text-red-700", children: "Phủ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tử" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Phụ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Lương" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tử" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Phụ" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Vũ" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: "QUÝ" }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Phá" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Phá" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Phá" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Phá" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" })
              ] }),
              /* @__PURE__ */ jsxs("td", { children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Phá" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Cự" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Âm" }),
                /* @__PURE__ */ jsx("span", { className: "inline-block w-16", children: "Tham" })
              ] })
            ] })
          ] }) })
        }
      )
    ] })
  ] });
});
ExplainLS.displayName = "ExplainLS";

const LA_SO_WIDTH = 742;
const PAD_ZONE = 54;
const BORDER_WIDTH = 1;
function TrungChauWarning() {
  const warningWidth = LA_SO_WIDTH + PAD_ZONE + BORDER_WIDTH * 2;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "mx-auto mb-4 border-l-4 border-yellow-400 bg-yellow-50 p-4",
      style: { maxWidth: `${warningWidth}px` },
      children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "h-5 w-5 text-yellow-400",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-labelledby": "warningTitle",
            children: [
              /* @__PURE__ */ jsx("title", { id: "warningTitle", children: "Cảnh báo" }),
              /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                  clipRule: "evenodd"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "ml-3", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-yellow-700", children: [
          /* @__PURE__ */ jsx("strong", { children: "Lưu ý:" }),
          " đang là lá số Trung Châu Phái cẩn thận nhầm Thiên Bàn, Địa Bàn, Nhân Bàn"
        ] }) })
      ] })
    }
  );
}

function generateTitle(dLich, gioiTinh, lunaCC, urlInfo) {
  const minutes = dLich.i || 0;
  return `Lá số Tử Vi ${gioiTinh} tuổi ${lunaCC.y} ${arrH1[urlInfo.cfg[CfgValue$1.typeLs]]} sinh ${dLich.d}/${dLich.m}/${dLich.y} ${dLich.h}h${minutes} , tử vi số mệnh, bát tự ${lunaCC.y.toUpperCase()} | ${lunaCC.m.toUpperCase()} | ${lunaCC.d.toUpperCase()} | ${lunaCC.h.toUpperCase()}`;
}
function generateDest(dLich, gioiTinh, lunaCC, urlInfo, menh1, menh2, menh3, menhTv, chinhTinhMenhTH) {
  return `Tu vi ${dLich.d}/${dLich.m}/${dLich.y} tử vi trọn đời ${arrH1[urlInfo.cfg[CfgValue$1.typeLs] - 1]} ${gioiTinh} tuổi ${lunaCC.y} ${dLich.y} mệnh tại ${CHI$1[menh1.ci]} có ${chinhTinhMenhTH}. Đại vn ${CHI$1[menh2.ci]}, lưu niên ${CHI$1[menh3.ci]}, tiểu vận ${CHI$1[menhTv.ci]}`;
}

export { IconSchedule as $, AppUI as A, SM as B, CSVTable as C, containsNumber as D, ExplainLS as E, STARSTRONG as F, STAR_SIGN as G, HoroHelp as H, IconSettings as I, CR_TS as J, FAILURE6 as K, LTHG_HH as L, STARLOOP1 as M, HH as N, ADTN as O, SKB as P, TKN as Q, TKN_MONTH as R, Swal as S, TrungChauWarning as T, TKN_PN as U, idxTHAP as V, TSNAME as W, LTHG_NA as X, GETHOA as Y, ZolkName as Z, getLunaBornText as _, HoroscopeHtmlClient as a, IconAutoStories as a0, IconVisibility as a1, typeLsName as a2, typeBanTCP as a3, PHIHOA_COLOR as a4, levelPhiHoaMsg as a5, changeCanTypeMsg as a6, yearLoopStarMsg as a7, hideStarMsg as a8, PHIHOA_SYMBOL1 as a9, generateDest as b, getSearchParams as c, getPathName as d, HOROSCOPE_CONFIG as e, configDefault as f, generateTitle as g, hasLsData as h, HoroscopeBuildGps as i, numbStringToArr as j, CfgValue as k, AREA_NAME as l, CHI_3HH as m, normalizePath as n, CAN as o, CHI as p, CHI_HH as q, THAP as r, safeGetLsData as s, tmdAppThumb as t, updateConfig as u, validateAllConfig as v, withReactContent as w, HH_THAP as x, CAN_HH as y, CAN_AD as z };
