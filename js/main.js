var Messenger = function(el) {
  "use strict";
  var m = this;

  m.init = function() {
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      "<img height='150px' width='150px' src='./img/evido_logo_50px.svg' alt='logo'>",
      "Hello",
      "I am Eric Palmieri",
      "I currently create in Nashville, TN",
      "Welcome to my site",
      "<img height='150px' width='150px' src='./img/evido_logo_50px.svg' alt='eric logo'>"
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
    if (
      m.current_length < m.messages[m.message].length &&
      m.messages[m.message] != m.messages[0]
    ) {
      // if (m.current_length < m.messages[m.message].length) {
      // console.log("hello");
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
      //TODO: make sure to set last message here too
      if (
        message ===
        "<img height='150px' width='150px' src='./img/evido_logo_50px.svg' alt='eric logo'>"
      ) {
        setTimeout(m.cycleText, 7000);
      } else {
        setTimeout(m.cycleText, 2500);
      }
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

var messenger = new Messenger($("#main-title"));

// Fullpage.js
var fullpage = new fullpage("#fullpage", {
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  continuousVertical: true,
  controlArrows: false,
  slidesNavigation: true
});

//Technologies
const resolver = {
  resolve: function resolve(options, callback) {
    // The string to resolve
    const resolveString =
      options.resolveString ||
      options.element.getAttribute("data-target-resolver");
    const combinedOptions = Object.assign({}, options, {
      resolveString: resolveString
    });

    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    }

    function doRandomiserEffect(options, callback) {
      const characters = options.characters;
      const timeout = options.timeout;
      const element = options.element;
      const partialString = options.partialString;

      let iterations = options.iterations;

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = Object.assign({}, options, {
            iterations: iterations - 1
          });

          // Ensures partialString without the random character as the final state.
          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            // Replaces the last character of partialString with a random character
            element.textContent =
              partialString.substring(0, partialString.length - 1) +
              randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      }, options.timeout);
    }

    function doResolverEffect(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, {
        partialString: partialString
      });

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = Object.assign({}, options, { offset: offset + 1 });

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    }

    doResolverEffect(combinedOptions, callback);
  }
};

const strings1 = [
  ".Net Core, Laravel, Lumen, Ruby on Rails, Angular, Ionic, Angular.js, Handlebars, Material, Material Design, Bootstrap"
];
const strings2 = [
  "C#, PHP, Ruby, Python, JavaScript, TypeScript, jQuery, HTML5, CSS3, Sass, Scss"
];
const strings3 = [
  "Git, Azure, AzureDevOps, Docker, GitHub, Npm, Gulp, Grunt, Browserify"
];
const strings4 = ["MySql, PostreSQL, Sqlite, Azure SQL,Firebase"];
const strings5 = [
  "RESTful Api design, Microservice architecture pattern, Monolith, S.O.L.I.D. principles, Agile & Scrum Methodologies"
];

let counter = 0;
let charactersSet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "x",
  "#",
  "%",
  "&",
  "-",
  "+",
  "_",
  "?",
  "/",
  "\\",
  "="
];

const options1 = {
  // Initial position
  offset: 0,
  // Timeout between each random character
  timeout: 5,
  // Number of random characters to show
  iterations: 10,
  // Random characters to pick from
  characters: charactersSet,
  // String to resolve
  resolveString: strings1[counter],
  // The element
  element: document.querySelector("[data-target-resolver-1]")
};
const options2 = {
  offset: 0,
  timeout: 5,
  iterations: 10,
  characters: charactersSet,
  resolveString: strings2[counter],
  element: document.querySelector("[data-target-resolver-2]")
};
const options3 = {
  offset: 0,
  timeout: 5,
  iterations: 10,
  characters: charactersSet,
  resolveString: strings3[counter],
  element: document.querySelector("[data-target-resolver-3]")
};
const options4 = {
  offset: 0,
  timeout: 5,
  iterations: 10,
  characters: charactersSet,
  resolveString: strings4[counter],
  element: document.querySelector("[data-target-resolver-4]")
};
const options5 = {
  offset: 0,
  timeout: 5,
  iterations: 10,
  characters: charactersSet,
  resolveString: strings5[counter],
  element: document.querySelector("[data-target-resolver-5]")
};

// Callback function when resolve completes
function callback1() {
  setTimeout(() => {
    let nextOptions = Object.assign({}, options1, {
      resolveString: strings1[counter]
    });
    resolver.resolve(nextOptions, callback1);
  }, 7000);
}

function callback2() {
  setTimeout(() => {
    let nextOptions = Object.assign({}, options2, {
      resolveString: strings2[counter]
    });
    resolver.resolve(nextOptions, callback2);
  }, 7000);
}

function callback3() {
  setTimeout(() => {
    let nextOptions = Object.assign({}, options3, {
      resolveString: strings3[counter]
    });
    resolver.resolve(nextOptions, callback3);
  }, 7000);
}
function callback4() {
  setTimeout(() => {
    let nextOptions = Object.assign({}, options4, {
      resolveString: strings4[counter]
    });
    resolver.resolve(nextOptions, callback4);
  }, 7000);
}
function callback5() {
  setTimeout(() => {
    let nextOptions = Object.assign({}, options5, {
      resolveString: strings5[counter]
    });
    resolver.resolve(nextOptions, callback5);
  }, 7000);
}

// function callback() {
//   setTimeout(() => {
//     // counter++;
//     // if (counter >= strings.length) {
//     //   counter = 0;
//     // }
//     let nextOptions = Object.assign({}, options, {
//       resolveString: strings[counter]
//     });
//     resolver.resolve(nextOptions, callback);
//   }, 4000);
// }

// resolver.resolve(options, callback);

resolver.resolve(options1, callback1);
resolver.resolve(options2, callback2);
resolver.resolve(options3, callback3);
resolver.resolve(options4, callback4);
resolver.resolve(options5, callback5);
