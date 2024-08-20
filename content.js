const root = document.querySelector('body');
if (root) {
  const consoleContainer = document.createElement('div');
  consoleContainer.classList.add('overlay');
  // consoleContainer.style.display = 'none';
  const header = document.createElement('div');
  // header.textContent = 'Logging Console';
  header.classList.add('console-header');
  header.innerHTML = `
    <div class="console-header-title">Logging Console</div>
    <div title="Clear" class="clear-console-btn action-btn" onclick="document.querySelector('.console-logs').innerHTML = ''">
      ${TrashIcon()}
    </div>
    <div title="Close" class="close-console-btn action-btn" onclick="document.querySelector('.overlay').style.display = 'none'">
      ${XIcon()}
    </div>
  `;

  const logs = document.createElement('div');
  logs.classList.add('console-logs');

  consoleContainer.appendChild(header);
  consoleContainer.appendChild(logs);
  root.appendChild(consoleContainer);
  root.appendChild(createBubbleButton(consoleContainer));
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

function TrashIcon() {
  return `
    <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <path d='M3 6h18' />
    <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
    <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
    </svg>
    `;
}

function XIcon() {
  return `
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
    `;
}

function TerminalIcon() {
  return `
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <polyline points='4 17 10 11 4 5' />
      <line x1='12' x2='20' y1='19' y2='19' />
    </svg>
    `;
}

function createBubbleButton(overlay) {
  const button = document.createElement('div');
  button.innerHTML = TerminalIcon();
  button.classList.add('bubble-button');
  button.classList.add('action-btn');
  button.onclick = function () {
    if (overlay) {
      overlay.style.display =
        overlay.style.display === 'none' ? 'block' : 'none';
    }
  };
  return button;
}
