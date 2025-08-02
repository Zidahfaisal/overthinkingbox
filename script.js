function overthink() {
  const input = document.getElementById("thoughtInput").value.trim();
  const output = document.getElementById("output");

  if (!input) {
    output.innerHTML = "<p>Please enter a thought 😅</p>";
    return;
  }

  // Multiple overthinking response sets
  const responseSets = [
    [
      "It's probably fine.",
      "Unless they noticed that one weird word you used…",
      "Wait… do they think you're passive-aggressive now?",
      "They’re definitely talking about it in a group chat.",
      "New identity. New country. Problem solved."
    ],
    [
      "Maybe you're just overanalyzing.",
      "But what if you're not?",
      "Do they secretly dislike you?",
      "Was it the emoji you used?",
      "It's time to disappear from the internet forever."
    ],
    [
      "You didn’t mess up.",
      "Unless you did.",
      "Actually… what if this ruins everything?",
      "They probably screenshot it.",
      "Flee to the mountains. Live with goats."
    ],
    [
      "Hmm… that was a strange tone you used.",
      "Do they think you’re mad?",
      "Was that passive aggression?",
      "Time to retype your entire life choices.",
      "You are now the main character in a cringe compilation."
    ],
    [
      "Did you reply too quickly?",
      "Did you reply too slowly?",
      "Should you have used a different punctuation mark?",
      "What if they misinterpreted your joke?",
      "Did you sound too eager?",
      "Did you sound too distant?"
    ],
    [
      "Maybe you should have just stayed silent.",
      "Are they ignoring you on purpose?",
      "Did you overshare?",
      "Did you undershare?",
      "What if they’re annoyed by your message frequency?"
    ],
    [
      "Should you apologize for something?",
      "Did you forget their birthday?",
      "Did you use too many exclamation marks?",
      "Did you use too few exclamation marks?",
      "Are you being too dramatic?"
    ],
    [
      "Are you not dramatic enough?",
      "Did you accidentally offend them?",
      "Should you double-text?",
      "Should you delete your account?",
      "What if they’re talking about you right now?"
    ],
    [
      "Did you remember to say thank you?",
      "Did you say thank you too many times?",
      "Are you overthinking this message about overthinking?",
      "Maybe you should just go off the grid.",
      "What if you’re the only one who cares?"
    ],
    [
      "Did you use the wrong GIF?",
      "Should you have used a meme instead?",
      "Is your typing style weird?",
      "Did autocorrect betray you?",
      "Should you move to a remote island?"
    ],
    [
      "What if you’re not invited next time?",
      "Did you make things awkward?",
      "Did you make things too casual?",
      "Should you clarify your last message?",
      "Did you forget to reply to something important?"
    ],
    [
      "Are you being too self-conscious?",
      "Did you just make it worse by thinking about it?",
      "Maybe you should just sleep and pretend it never happened."
    ]
  ];

  // Choose a random set
  const randomSet = responseSets[Math.floor(Math.random() * responseSets.length)];

  // Clear previous output
  output.innerHTML = "";

  // Display one line at a time with delay
  randomSet.forEach((line, index) => {
    setTimeout(() => {
      output.innerHTML += `<p>${index + 1}. ${line}</p>`;
    }, index * 1000);
  });
}


