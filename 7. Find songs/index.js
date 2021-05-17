const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div"); //creating html in js
  chatContainer.classList.add("chat-container");

  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");

  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);

  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");

  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");

  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);

  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "Sorry Boss, I am not programmed for this input! ";

  if (message.includes("hi")) {
    speech.text =
      " Hey Boss, Jeevan Chat-Bot activated. What are we going to do Sir?";
  }
  if (message.includes("get your detail")) {
    speech.text =
      "I'm a Robot, programmed  by Floyd on April 16 2021. Coded from Jane Chat-bot. I was created to assist user with my programmed tasks. As of now I can only respond, what is programmed in me. Soon I will be performing tasks. Thank you  ";
  }

  if (message.includes(`my name is `)) {
    let myArr = message;
    let userName = myArr.split(" ");
    speech.text = `Hey ${userName[3]}`;
  }

  // working on play song  & and on different tab

  // this only works if you ask with preset play .......

  if (message.includes(`play `)) {
    let myArr = message;
    let songName = myArr.split(" ");
    // display/fixing undefined problem
    if (songName[2] === undefined) {
      songName[2] = " ";
      songName[3] = " ";
      songName[4] = " ";
      songName[5] = " ";
    }
    if (songName[3] === undefined) {
      songName[3] = " ";
      songName[4] = " ";
      songName[5] = " ";
    }
    if (songName[4] === undefined) {
      songName[4] = " ";
      songName[5] = " ";
    }
    if (songName[5] === undefined) {
      songName[5] = " ";
    }

    // the input if is as follows

    if (message.includes(`Sofia`)) {
      speech.text = `Playing sofia on YouTube`;
      window.open("https://www.youtube.com/watch?v=O32bP9BFJOk");
    }
    if (message.includes(`river flows in you`)) {
      speech.text = `Playing River flows in you on gaana`;
      window.open("https://gaana.com/song/river-flows-in-you-22");
    } else {
      speech.text = `URL for ${songName[1]}  ${songName[2]} ${songName[3]} ${songName[4]} ${songName[5]}is not defined`;
    }
  }

  // Google Search -- work below
  // https://www.google.com/search?q=hey      -- demo
  if (message.includes(`search `)) {
    let myArr = message;
    let searchInput = myArr.split(" ");
    if (searchInput[2] === undefined) {
      searchInput[2] = " ";
      searchInput[3] = " ";
      searchInput[4] = " ";
      searchInput[5] = " ";
    }
    if (searchInput[3] === undefined) {
      searchInput[3] = " ";
      searchInput[4] = " ";
      searchInput[5] = " ";
    }
    if (searchInput[4] === undefined) {
      searchInput[4] = " ";
      searchInput[5] = " ";
    }
    if (searchInput[5] === undefined) {
      searchInput[5] = " ";
    }

    window.open(
      `https://www.google.com/search?q=  ${searchInput[1]} ${searchInput[2]} ${searchInput[3]} ${searchInput[4]} ${searchInput[5]}`
    );
    speech.text = ` Google Search is Ready `;
  }

  if (message.includes(`Wiki `)) {
    let myArr = message;
    let searchInput = myArr.split(" ");
    if (searchInput[2] === undefined) {
      searchInput[2] = " ";
      searchInput[3] = " ";
      searchInput[4] = " ";
      searchInput[5] = " ";
    }
    if (searchInput[3] === undefined) {
      searchInput[3] = " ";
      searchInput[4] = " ";
      searchInput[5] = " ";
    }
    if (searchInput[4] === undefined) {
      searchInput[4] = " ";
      searchInput[5] = " ";
    }
    if (searchInput[5] === undefined) {
      searchInput[5] = " ";
    }

    window.open(
      `https://en.wikipedia.org/wiki/ ${searchInput[1]} ${searchInput[2]} ${searchInput[3]} ${searchInput[4]} ${searchInput[5]}`
    );
    speech.text = ` wiki Search is Ready `;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  // window.speechSynthesis.speak(speech);

  var element = document.getElementById("container");
  element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log("Voice activated");
};

recorder.onresult = (event) => {
  // console.log(event);
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  // voice2text.textContent = transcript;
  var element = document.getElementById("container"); //try let
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener("click", () => {
  recorder.start();
});
