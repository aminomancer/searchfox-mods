// ==UserScript==
// @name           Searchfox Mods
// @version        1.2.2
// @author         aminomancer
// @homepageURL    https://github.com/aminomancer/searchfox-mods
// @supportURL     https://github.com/aminomancer/searchfox-mods
// @downloadURL    https://cdn.jsdelivr.net/gh/aminomancer/searchfox-mods@latest/searchfoxMods.user.js
// @namespace      https://github.com/aminomancer
// @match          *://searchfox.org/*
// @description    Make Searchfox's context menu open on Right click, and make Alt + Left click and Ctrl + Left click instantly go to definitions or search for tokens. Modifier + Right click will open the normal Firefox/OS context menu.
// @grant          none
// @run-at         document-idle
// @license        This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, you can obtain one at http://mozilla.org/MPL/2.0/.
// @icon           data:image/png;base64,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
// ==/UserScript==

function waiveXray(obj) {
  if (typeof obj === "object") {
    return "wrappedJSObject" in obj ? obj.wrappedJSObject : obj;
  }
  return obj;
}

function isMac() {
  return navigator.platform.startsWith("Mac");
}

function accelKeyPressed(event) {
  return isMac() ? event.metaKey : event.ctrlKey;
}

function getContextMenu() {
  return waiveXray(window).ContextMenu;
}

function openLink(href, event) {
  let newTarget = Object.assign(document.createElement("a"), { href });
  let newEvent = new MouseEvent("click", {
    button: 0,
    which: event.which,
    altKey: false,
    shiftKey: event.shiftKey,
    ctrlKey: event.ctrlKey || (!isMac() && event.button === 1),
    metaKey: event.metaKey || (isMac() && event.button === 1),
  });
  newTarget.dispatchEvent(newEvent);
  event.preventDefault();
}

function makeLinkOpener(href) {
  return event => {
    openLink(href, event);
  };
}

function getOptions(node) {
  let options = {};
  if (!node.closest("code") && !node.closest("svg")) {
    return options;
  }
  let tree = document.getElementById("data").getAttribute("data-tree");
  let sourceLineClicked = null;
  {
    let sourceLineNode = node.closest("code");
    let lineNumberNode = sourceLineNode?.previousElementSibling;
    let sourcePath = Router.sourcePath;
    if (lineNumberNode && sourcePath) {
      sourceLineClicked = `${sourcePath}#${lineNumberNode.dataset.lineNumber}`;
    }
  }
  let jumps = [];
  let searches = [];
  let extras = [];
  let symbolToken = node.closest("[data-symbols]");
  if (symbolToken) {
    let symbols = symbolToken.getAttribute("data-symbols").split(",");
    const seenSyms = new Set();
    const exposeSymbolsForDebugging = [];
    waiveXray(window).CLICKED_SYMBOLS = cloneInto(
      exposeSymbolsForDebugging,
      window,
      { cloneFunctions: true }
    );
    for (const sym of symbols) {
      if (seenSyms.has(sym)) continue;
      const symInfo = waiveXray(window).SYM_INFO[sym];
      if (!symInfo) continue;
      let symSearches = [];
      let diagrammableSyms = [symInfo];
      exposeSymbolsForDebugging.push(symInfo);
      const jumpify = jumpref => {
        if (!jumpref.jumps) {
          return;
        }
        if (jumpref.jumps.idl && jumpref.jumps.idl !== sourceLineClicked) {
          jumps.push(`/${tree}/source/${jumpref.jumps.idl}`);
        }
        if (jumpref.jumps.def && jumpref.jumps.def !== sourceLineClicked) {
          jumps.push(`/${tree}/source/${jumpref.jumps.def}`);
        }
        if (jumpref.jumps.decl && jumpref.jumps.decl !== sourceLineClicked) {
          jumps.push(`/${tree}/source/${jumpref.jumps.decl}`);
        }
      };
      const searchify = query => {
        symSearches.push(
          `/${tree}/search?q=symbol:${encodeURIComponent(query)}&redirect=false`
        );
      };
      jumpify(symInfo);
      if (symInfo.meta?.slotOwner) {
        let slotOwner = symInfo.meta.slotOwner;
        let ownerJumpref = waiveXray(window).SYM_INFO[slotOwner.sym];
        if (ownerJumpref) {
          jumpify(ownerJumpref);
        }
      }
      searchify(sym);
      if (symInfo.meta?.bindingSlots) {
        let implKind = symInfo.meta.implKind || "impl";
        if (implKind === "idl") {
          implKind = "IDL";
          diagrammableSyms = [];
        }
        let allSearchSyms = [];
        for (const slot of symInfo.meta.bindingSlots) {
          let slotJumpref = waiveXray(window).SYM_INFO[slot.sym];
          if (slot.slotLang) {
            let lang = slot.slotLang.toUpperCase();
            if (lang === "CPP") {
              diagrammableSyms.push(slotJumpref);
            }
          }
          searchify(slot.sym);
          allSearchSyms.push(slot.sym);
          if (slotJumpref) {
            jumpify(slotJumpref);
          }
        }
        if (allSearchSyms.length > 1) {
          if (implKind === "IDL") {
            symSearches.shift();
            allSearchSyms.unshift(sym);
          }
          searchify(allSearchSyms.join(","));
        }
      }
      searches = searches.concat(symSearches);
      if (Settings.diagramming.enabled) {
        for (const jumpref of diagrammableSyms) {
          extras.push(
            `/${tree}/query/default?q=${encodeURIComponent(
              `calls-to:'${jumpref.pretty}' depth:4`
            )}`
          );
        }
      }
    }
  }
  for (let jump of jumps) {
    if (jump) {
      options.goToDefinition = makeLinkOpener(jump);
      break;
    }
  }
  for (let search of searches) {
    if (search) {
      options.symbolSearch = makeLinkOpener(search);
      break;
    }
  }
  let word = waiveXray(window).getTargetWord();
  if (word) {
    options.wordSearch = makeLinkOpener(
      `/${tree}/search?q=${encodeURIComponent(word)}&redirect=false`
    );
  }
  for (let extra of extras) {
    if (extra) {
      options.extraLink = makeLinkOpener(extra);
    }
    break;
  }
  if (symbolToken) {
    let symbols = symbolToken.getAttribute("data-symbols");
    let visibleToken = symbolToken.textContent;
    options.stickyHighlight = () => {
      waiveXray(window).Hover.stickyHighlight(symbols, visibleToken);
    };
  }
  return options;
}

function setCaret(event) {
  const selection = window.getSelection();
  const start = document.caretPositionFromPoint(event.pageX, event.pageY);
  const range = document.createRange();
  range.setStart(start.offsetNode, start.offset);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
  event.target.focus();
}

getContextMenu().tryShowOnClick = exportFunction(function (event) {
  let options = getOptions(event.target);
  if (event.altKey || accelKeyPressed(event)) {
    if (options.goToDefinition) {
      options.goToDefinition(event);
    } else if (options.symbolSearch) {
      options.symbolSearch(event);
    } else if (options.wordSearch && event.target.closest(".hovered")) {
      options.wordSearch(event);
    } else if (options.extraLink) {
      options.extraLink(event);
    } else if (options.stickyHighlight) {
      options.stickyHighlight();
    } else {
      Object.getPrototypeOf(getContextMenu())?.tryShowOnClick.call(this, event);
    }
    return;
  }
  options.stickyHighlight?.();
}, window);

window.addEventListener("mousedown", event => {
  if (!event.altKey && !accelKeyPressed(event) && event.button !== 1) {
    return;
  }
  // Send a mousedown event without highlighting any text on shift click
  if (event.shiftKey) {
    let newEvent = new MouseEvent("mousedown", {
      button: event.button,
      which: event.which,
      altKey: event.altKey,
      shiftKey: false,
      ctrlKey: event.ctrlKey,
      metaKey: event.metaKey,
    });
    event.target.dispatchEvent(newEvent);
    event.preventDefault();
    event.stopPropagation();
    setCaret(event);
  }
});

window.addEventListener("auxclick", event => {
  switch (event.button) {
    case 1:
      let options = getOptions(event.target);
      if (options.goToDefinition) {
        options.goToDefinition(event);
      } else if (options.symbolSearch) {
        options.symbolSearch(event);
      } else if (options.wordSearch && event.target.closest(".hovered")) {
        options.wordSearch(event);
      } else if (options.extraLink) {
        options.extraLink(event);
      } else {
        return;
      }
      break;
    case 2:
      if (event.shiftKey || event.altKey) return;
      let contextMenu = getContextMenu();
      setCaret(event);
      Object.getPrototypeOf(contextMenu)?.tryShowOnClick.call(
        contextMenu,
        event
      );
      break;
    default:
      return;
  }
  event.preventDefault();
  event.stopPropagation();
});

window.addEventListener("contextmenu", event => {
  if (getContextMenu().menu.style.display === "none") {
    return;
  }
  event.preventDefault();
  event.stopPropagation();
});
