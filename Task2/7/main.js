function truncate(str, maxlength){
  let newstr = str
  if(str.length > maxlength){
    newstr = str.slice(0, maxlength-1);
    newstr += "...";
  }
  return newstr;
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

alert(truncate("Всем привет!", 20));