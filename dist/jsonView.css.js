import { createHotContext, updateStyle, removeStyle } from './node_modules/vite/dist/client/client.mjs.js';

import.meta.hot = createHotContext("/jsonView.css.js");const __vite__id = "/home/sam/projects/extension/jsonView.css";
const __vite__css = ".json-viewer {\n  color: #000;\n  padding-left: 20px;\n}\n\n.json-viewer ul {\n  list-style-type: none;\n  margin: 0;\n  margin: 0 0 0 1px;\n  border-left: 1px dotted #ccc;\n  padding-left: 2em;\n}\n\n.json-viewer .hide {\n  display: none;\n}\n\n.json-viewer .type-string {\n  color: #0b7500;\n}\n\n.json-viewer .type-date {\n  color: #cb7500;\n}\n\n.json-viewer .type-boolean {\n  color: #1a01cc;\n  font-weight: bold;\n}\n\n.json-viewer .type-number {\n  color: #1a01cc;\n}\n\n.json-viewer .type-null,\n.json-viewer .type-undefined {\n  color: #90a;\n}\n\n.json-viewer a.list-link {\n  color: #000;\n  text-decoration: none;\n  position: relative;\n}\n\n.json-viewer a.list-link:before {\n  color: #aaa;\n  content: '\\25BC';\n  position: absolute;\n  display: inline-block;\n  width: 1em;\n  left: -1em;\n}\n\n.json-viewer a.list-link.collapsed:before {\n  content: '\\25B6';\n}\n\n.json-viewer a.list-link.empty:before {\n  content: '';\n}\n\n.json-viewer .items-ph {\n  color: #aaa;\n  padding: 0 1em;\n}\n\n.json-viewer .items-ph:hover {\n  text-decoration: underline;\n}\n";
updateStyle(__vite__id, __vite__css);
import.meta.hot.accept();
import.meta.hot.prune(() => removeStyle(__vite__id));

export { __vite__css as default };
