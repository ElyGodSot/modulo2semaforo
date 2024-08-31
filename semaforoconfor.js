let Color = ['rojo', 'amarillo', 'verde']

function semaforo() {
  const color = Color.pop()
  console.log(color)
  for(let index=1;index>Color.length;i++){

    Color = ['rojo', 'amarillo', 'verde']
  return color
}
}
const intervalID = setInterval(semaforo, 500)