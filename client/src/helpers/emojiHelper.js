const emoji = {
  checkPlatform(incomingEmoji) {
    if (window.navigator.platform === 'Win32') return null;
    return incomingEmoji;
  },
};

export default emoji;
