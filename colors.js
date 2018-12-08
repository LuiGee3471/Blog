function setLinkColor(color){
  var i = 4;
  var alist = document.querySelectorAll('a');
  while(i < alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
  alist[0].style.color = color;
}

var Body = {
  setBackgroundColor : function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  },
  setColor : function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  }
}

var Sublist = {
  setBackgroundColor : function(color) {
    document.getElementsByClassName('sublist')[0].style.backgroundColor = color;
  }
}

function nightModeButton(self) {
  var target = document.querySelector('body');
  var sublist = document.getElementsByClassName('sublist')[0];
  if(self.value === 'night') {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.innerHTML = 'Day Mode';
    self.value='day';
    setLinkColor('white');
    Sublist.setBackgroundColor("black");
  }
  else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value='night';
    self.innerHTML = 'Night Mode';
    setLinkColor('black');
    Sublist.setBackgroundColor("#F4F4F4");
  }
}
