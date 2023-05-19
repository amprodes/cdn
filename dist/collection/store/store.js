import { createStore } from '@stencil/store';
const initialState = {
  messages: [],
};
const { state, onChange } = createStore(initialState);
//const response = await fetch('https://api.example.com/users');
//const messages = await response.json();
onChange('messages', (messages) => {
  console.log('holi', messages);
  //[{ text: "¡Hola! Soy Vivi, la asistente virtual de Davivienda.", sender: Sender.VIVI }, { text: "Si tiene clave virtual, ingrese con ella para recibir atención personalizada.", sender: Sender.VIVI }, { text: "¿En qué le puedo ayudar?", sender: Sender.VIVI }]
});
export default state;
//# sourceMappingURL=store.js.map
