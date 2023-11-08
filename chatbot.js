const readline = require('readline');

const predefinedResponses = {
    'hello': 'hello there human',
    'What is your name?': 'My name is ChatBot.',
    'How are you?': 'I am good thanks for asking',
    'What is the weather like today?': 'go outside and see!.',
    'exit': 'Goodbye! see you soon!'
  };
  function getResponse(input) {
    const question = input.trim();
    if (predefinedResponses.hasOwnProperty(question)) {
      return predefinedResponses[question];
    } else {
      return 'I am sorry, I do not understand. Can you please repet your question?';
    }
}
function startChatBot() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.setPrompt('You: ');
    rl.prompt();
  
    rl.on('line', (input) => {
      const response = getResponse(input);
      console.log(`ChatBot: ${response}`);
      
      if (response === predefinedResponses['exit']) {
        rl.close();
      } else {
        rl.prompt();
      }
    });
  
    rl.on('close', () => {
      console.log('ChatBot has been terminated.');
      process.exit(0);
    });
  }

  startChatBot();
