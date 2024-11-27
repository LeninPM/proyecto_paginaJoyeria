const formulario = document.getElementById('formulario');
const tipoJoya = document.getElementById('tipoJoya');
const material = document.getElementById('material');
const tamano = document.getElementById('tamano');
const grabadoSi = document.getElementById('grabadoSi');
const grabadoNo = document.getElementById('grabadoNo');
const piedras = document.getElementById('piedras');
const nombre = document.getElementById('nombre');
const fechaEntrega = document.getElementById('fechaEntrega');


formulario.addEventListener('submit', (event) => {
  event.preventDefault(); 

  
  const tipo = tipoJoya.value;
  const mat = material.value;
  const tam = tamano.value;
  const grabado = grabadoSi.checked ? 'Sí' : grabadoNo.checked ? 'No' : '';
  const piedrasValor = piedras.value;
  const nombreValor = nombre.value;
  const fecha = fechaEntrega.value;

  
  if (!tipo || !mat || !tam || !piedrasValor || !nombreValor || !fecha) {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
  }

  
  alert('Formulario enviado con éxito.');

  
  console.log('Datos enviados:');
  console.log(`Tipo de Joya: ${tipo}`);
  console.log(`Material: ${mat}`);
  console.log(`Tamaño o Medidas: ${tam}`);
  console.log(`Grabado: ${grabado}`);
  console.log(`Piedras Preciosas: ${piedrasValor}`);
  console.log(`Nombre: ${nombreValor}`);
  console.log(`Fecha de Entrega: ${fecha}`);

  
  formulario.reset();
});


formulario.addEventListener('reset', () => {
  console.log('Formulario reiniciado.');
});
