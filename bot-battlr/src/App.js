import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

const App = () => {
const [army, setArmy] = useState([]);

const handleBotEnlisted = (bot) => {
if (!army.find(b => b.id === bot.id)) {
setArmy([...army, bot]);
}
};

const handleBotRelease = (id) => {
setArmy(army.filter(b => b.id !== id));
};

const handleBotDischarge = (id) => {
fetch(`https://my-json-server.typicode.com/KariukiDavid254/bots/bots/${id}`, {
method: 'DELETE',
})
.then(response => {
if (response.ok) {
setArmy(army.filter(b => b.id !== id)); 
}
})
.catch(error => console.error(error));
};

return (
  <div>
<YourBotArmy army={army} releaseBot={handleBotRelease} dischargeBot={handleBotDischarge} setArmy={setArmy} />

<BotCollection onBotEnlisted={handleBotEnlisted} onBotRelease={handleBotRelease} />
</div>
);
};

export default App;