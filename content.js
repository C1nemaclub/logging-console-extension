const root = document.querySelector('body');
if (root) {
  const consoleContainer = document.createElement('div');
  consoleContainer.classList.add('overlay');

  const header = document.createElement('h1');
  header.textContent = 'Logging Console';
  header.classList.add('console-header');

  const logs = document.createElement('div');
  logs.classList.add('console-logs');

  consoleContainer.appendChild(header);
  consoleContainer.appendChild(logs);
  root.appendChild(consoleContainer);
}

// jsonViewer.showJSON(jsonData);
window.addEventListener('message', (event) => {
  const message = event.data;
  const logsContainer = document.querySelector('.console-logs');
  if (message && message.source === 'console') {
    let data = JSON.parse(message.data);
    if (Array.isArray(data)) {
      data = data.map((item) =>
        typeof item === 'object' && item !== null
          ? JSON.stringify(item, null, 2)
          : item
      );
      data.forEach((item) => {
        if (IsJsonString(item)) {
          createJsonLog(JSON.parse(item), logsContainer);
        } else {
          if (logsContainer) {
            const log = document.createElement('pre');
            log.classList.add('log');
            log.innerHTML = `<code>${item}</code>`;
            logsContainer.appendChild(log);
            logsContainer.scrollTop = logsContainer.scrollHeight;
          }
        }
      });
    } else if (typeof data === 'object' && data !== null) {
      data = [JSON.stringify(data, null, 2)];
    } else {
      data = [data];
    }

    const log = document.createElement('pre');
    log.classList.add('log');
    log.innerHTML = `<code>${data.join(' ')}</code>`;
    if (logsContainer) {
      // logsContainer.appendChild(log);
      logsContainer.scrollTop = logsContainer.scrollHeight;
    }
  }
});

window.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 'q') {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
      overlay.style.display =
        overlay.style.display === 'none' ? 'block' : 'none';
    }
  }
});

function injectScript(filePath) {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(filePath);
  script.onload = function () {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(script);
}

injectScript('injected-script.js');

const logsContainer = document.querySelector('.console-logs');

function createTree(objData, container) {
  var wrapper = document.createElement('wrapper');
  // var data = JSON.parse(objData);
  container.appendChild(wrapper);
  var tree = jsonTree.create(objData, wrapper);
  tree.expand(function (node) {
    return node.childNodes.length < 10 || node.label === 'phoneNumbers';
  });
}

function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function createJsonLog(jsonData, container) {
  var jsonViewer = new JSONViewer();
  jsonViewer.showJSON(jsonData, 10, 1);
  container.appendChild(jsonViewer.getContainer());
}
