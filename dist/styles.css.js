import { createHotContext, updateStyle, removeStyle } from './node_modules/vite/dist/client/client.mjs.js';

import.meta.hot = createHotContext("/styles.css.js");const __vite__id = "/home/sam/projects/extension/styles.css";
const __vite__css = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.overlay {\n  background-color: #fff;\n  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  height: 95%;\n  width: 30%;\n  max-width: 450px;\n  min-width: 350px;\n  z-index: 9999;\n  top: 10px;\n  right: 10px;\n  position: fixed;\n  border-radius: 6px;\n}\n\n.console-header {\n  font-family: 'Inter', sans-serif;\n  font-size: 1.125rem;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 1px solid #cecece;\n  color: #333;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n}\n\n.console-logs {\n  padding: 0.5rem 0.75rem;\n  overflow-y: auto;\n  max-height: 90%;\n  display: flex;\n  flex-direction: column;\n}\n\n.log {\n  font-family: monospace;\n  font-size: 13px;\n  padding: 0.2rem 0;\n  border-bottom: 1px solid #e0e0e0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n\ncode {\n  font-size: 13px;\n  color: #333;\n}\n\n.json-viewer {\n  border-bottom: 1px solid #e0e0e0;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n\n.action-btn {\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  &:hover {\n    background-color: #f0f0f0;\n  }\n}\n\n.clear-console-btn {\n  margin-left: auto;\n}\n\n.bubble-button {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  cursor: pointer;\n}\n\n.bubble-button-hidden {\n  display: none;\n}\n";
updateStyle(__vite__id, __vite__css);
import.meta.hot.accept();
import.meta.hot.prune(() => removeStyle(__vite__id));

export { __vite__css as default };
