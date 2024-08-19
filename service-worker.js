(function () {
  var log = console.log;
  console.log = function () {
    log.call(this, 'My Console!!!');
    log.apply(this, Array.prototype.slice.call(arguments));
  };
})();

console.log('Background Script');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message from content:', message);
  // sendResponse('Got your message!');
});
