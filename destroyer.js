function destroyer(array, ...altriParametri) {
  for (let parametro of altriParametri){
    array = array.filter((elemento)=> elemento !== parametro);
  }
  return array
}
