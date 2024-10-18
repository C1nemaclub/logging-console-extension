(function () {
  var log = console.log;
  console.log = function () {
    log.apply(this, arguments); // Call the original log method

    // Send the log to the content script via postMessage
    sendAMessage(Array.from(arguments));
  };
  var info = console.info;
  console.info = function () {
    info.apply(this, arguments);
    sendAMessage(Array.from(arguments));
  };
})();

function sendAMessage(message) {
  window.postMessage(
    {
      source: 'console',
      data: JSON.stringify(message),
    },
    '*'
  );
}
