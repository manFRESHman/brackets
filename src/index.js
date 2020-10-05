module.exports = function check(str, bracketsConfig) {
  let ans = true;
  let open = bracketsConfig.slice(0).map(e => e[0]);
  let close = bracketsConfig.slice(0).map(e => e[1]);
  bracketsConfig.forEach(e => {
    let opened = [];
    str.split('').forEach(c => {
      if(close.some(elem => elem === c)){
        if(open.indexOf(c) === close.indexOf(c) && (!opened.length || opened[opened.length - 1] !== c)){
          opened.push(c);
        }
        else if(!opened.length) ans = false;
        else if(open.indexOf(opened[opened.length - 1]) === close.indexOf(c)) opened.pop();
        else ans = false;
      }
      else if(open.some(elem => elem === c)) opened.push(c);
    });
    if(opened.length) ans = false;
  });
  return ans;
}
