var Messenger = function(el, lineNumber) {
  "use strict";
  var m = this;

  m.init = function() {
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    // if (lineNumber == 1) {
    //   // m.messages = ["test me"];
    //   m.messages = [
    //     "Hello.",
    //     "My name is",
    //     "Welcome to my",
    //     "I'm currently creating",
    //     "Eric Palmieri"
    //   ];
    // } else if (lineNumber == 2) {
    //   // m.messages = ["test me 2"];
    //   m.messages = [
    //     "",
    //     "Eric Palmieri.",
    //     "portfolio site",
    //     "in Nashville, TN",
    //     ""
    //   ];
    // }

    m.messages = [
      "Hello.",
      "My name is Eric Palmieri.",
      "Welcome to my portfolio site",
      "I'm currently creating in Nashville, TN",
      "Eric Palmieri"
    ];

    setTimeout(m.animateIn, 100);
  };

  m.generateRandomString = function(length) {
    var random_text = "";
    while (random_text.length < length) {
      random_text += m.codeletters.charAt(
        Math.floor(Math.random() * m.codeletters.length)
      );
    }

    return random_text;
  };

  m.animateIn = function() {
    if (m.current_length < m.messages[m.message].length) {
      m.current_length = m.current_length + 2;
      if (m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      $(el).html(message);

      setTimeout(m.animateIn, 20);
    } else {
      setTimeout(m.animateFadeBuffer, 20);
    }
  };

  m.animateFadeBuffer = function() {
    if (m.fadeBuffer === false) {
      m.fadeBuffer = [];
      for (var i = 0; i < m.messages[m.message].length; i++) {
        m.fadeBuffer.push({
          c: Math.floor(0.75 * 12) + 1,
          l: m.messages[m.message].charAt(i)
        });
      }
    }

    var do_cycles = false;
    var message = "";

    for (var i = 0; i < m.fadeBuffer.length; i++) {
      var fader = m.fadeBuffer[i];
      if (fader.c > 0) {
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(
          Math.floor(Math.random() * m.codeletters.length)
        );
      } else {
        message += fader.l;
      }
    }

    $(el).html(message);

    if (do_cycles === true) {
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2500);
    }
  };

  m.cycleText = function() {
    m.message = m.message + 1;
    if (m.message >= m.messages.length) {
      m.message = 0;
    }

    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html("");

    setTimeout(m.animateIn, 200);
  };

  m.init();
};

var messenger = new Messenger($("#main-title"), 1);
// var messenger2 = new Messenger($("#main-title-2"), 2);
