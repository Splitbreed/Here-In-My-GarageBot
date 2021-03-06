var config = require('../config.json');
var gcheck = '';
var glog = require('./glogic.js');
var ylog = require('./ytlogic.js');
var plog = require('./palogic.js');
var rlog = require('./rlogic.js');
// var gplog = require('./gpmlogic.js');

//the keys to match the parsed message against
var keys = {
  knowledge: `${config.info.prefix}KNOWLEDGE`,
  knawledge: `${config.info.prefix}KNAWLEDGE`,
  fullthing: `${config.info.prefix}FULLTHING`,
  drears: `${config.prefix}DREARS`,
  giphy: `${config.info.prefix}GIPHY`,
  yt: `${config.info.prefix}YT`,
  queue: `${config.info.prefix}QUEUE`,
  yskip: `${config.info.prefix}YSKIP`,
  plogin: `${config.info.prefix}PLOGIN`,
  rng: `${config.info.prefix}RNG`,
  play: `${config.info.prefix}PLAY`,
  shuffle: `${config.info.prefix}SHUFFLE`,
  gskip: `${config.info.prefix}GSKIP`,
  gnew: `${config.info.prefix}GNEW`,
  sad: `${config.info.prefix}SAD`,
  how: `${config.info.prefix}HOW`,
  excited: `${config.info.prefix}EXCITED`,
  yes: `${config.info.prefix}YES`,
  fake: `${config.info.prefix}FAKE`
};

var key = Object.keys(keys);

//Calls the specific method for the bot based on
//output of returnMethod
function toCall(method, msg, useless, dms){
  //if the key is knowledge, call knowledge
  if (method == `${config.info.prefix}KNOWLEDGE`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    knowledge(msg);
    //else if the key is knawledge call knawledge
  } else if (method == `${config.info.prefix}KNAWLEDGE`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    knawledge(msg);
    //else if the key is hi call hi
  } else if (method == `${config.info.prefix}FULLTHING`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    full(msg);
    //else if the key is drears call drears (currently damaged mp3
    //file)
  // } else if (method == '$DREARS'){
  //   drears(msg);
    //else if the key is go call go
  } else if (method == `${config.info.prefix}GIPHY`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    giphy(gcheck, msg);
  } else if (method == `${config.info.prefix}YT`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    ylog.base(gcheck, msg);
  } else if (method == `${config.info.prefix}QUEUE`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    ylog.queue(msg)
  } else if (method == `${config.info.prefix}YSKIP`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    ylog.yskip(msg);
  } else if (method == `${config.info.prefix}PLOGIN`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    plog.plogin(msg);
  } else if (method == `${config.info.prefix}RNG`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    rlog.rng(msg);
  } else if (method == `${config.info.prefix}PLAY`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    gplog.playCurr(msg);
  } else if (method == `${config.info.prefix}SHUFFLE`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    gplog.shuffle(msg);
  } else if (method == `${config.info.prefix}GSKIP`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    gplog.gskip(msg);
  } else if (method == `${config.info.prefix}GNEW`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    gplog.newList(msg);
  } else if (method == `${config.info.prefix}SAD`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    sadness(msg);
  } else if (method == `${config.info.prefix}HOW`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    howcould(msg);
  } else if (method == `${config.info.prefix}EXCITED`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    excited(msg);
  } else if (method == `${config.info.prefix}YES`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    yes(msg);
  } else if (method == `${config.info.prefix}FAKE`){
    if(dms){
      msg.channel.sendMessage("Command Ignored, DMS Tripped");
      return;
    }
    fake(msg);
  } else {
    console.log("bad msg tried ", method)
    console.log('Bad message');
  }
}

//$knowledge
//On call, the bot plays himg.mp3, deletes the
//called command message and then leaves upon
//completion
function knowledge(msg){
  //Joins the message author's voice channel
  msg.member.voiceChannel.join()
  .then(function(connection){
    //plays the specific file
    connection.playFile('./sounds/himg.mp3')
    //removes the called message (requires bot to be
    //admin) 2s delay
    msg.delete([2000]);
    //leaves after 5 seconds
  setTimeout(function(){
    msg.member.voiceChannel.leave();}, 5000);
  });
}

function yes(msg){
  msg.member.voiceChannel.join()
  .then(function(connection){
    //play the specific file
    connection.playFile('./sounds/yesyes.mp3')
    //delete the called command message (requires
    //bot to be admin) 2s delay
    msg.delete([2000]);
    //leaves after 200 seconds
  setTimeout(function(){
    msg.member.voiceChannel.leave();}, 7000);
  });
}

function fake(msg){
  //join message authors voice channel
  msg.member.voiceChannel.join()
  .then(function(connection){
    //play the specific file
    connection.playFile('./sounds/fakenews.mp3')
    //delete the called command message (requires
    //bot to be admin) 2s delay
    msg.delete([2000]);
    //leaves after 200 seconds
  setTimeout(function(){
    msg.member.voiceChannel.leave();}, 3000);
  });
}

//$fullthing
//On call, bot players fullthing.mp3, deletes the
//called command message and then leaves upon
//completion
function full(msg){
  //join message authors voice channel
  msg.member.voiceChannel.join()
  .then(function(connection){
    //play the specific file
    connection.playFile('./sounds/fullthing.mp3')
    //delete the called command message (requires
    //bot to be admin) 2s delay
    msg.delete([2000]);
    //leaves after 200 seconds
  setTimeout(function(){
    msg.member.voiceChannel.leave();}, 200000);
  });
}

function sadness(msg){
  //join message authors voice channel
  msg.member.voiceChannel.join()
  .then(function(connection){
    //play the specific file
    connection.playFile('./sounds/sadness.mp3')
    //delete the called command message (requires
    //bot to be admin) 2s delay
    msg.delete([2000]);
    //leaves after 200 seconds
  setTimeout(function(){
    msg.member.voiceChannel.leave();}, 20000);
  });
}

function excited(msg){
  //join message authors voice channel
  msg.member.voiceChannel.join()
  .then(function(connection){
    //play the specific file
    connection.playFile('./sounds/excited.mp3')
    //delete the called command message (requires
    //bot to be admin) 2s delay
    msg.delete([2000]);
    //leaves after 200 seconds
  setTimeout(function(){
    msg.member.voiceChannel.leave();}, 4000);
  });
}

function howcould(msg){
  //join message authors voice channel
  msg.member.voiceChannel.join()
  .then(function(connection){
    //play the specific file
    connection.playFile('./sounds/hcthtm.mp3')
    //delete the called command message (requires
    //bot to be admin) 2s delay
    msg.delete([2000]);
    //leaves after 200 seconds
  setTimeout(function(){
    msg.member.voiceChannel.leave();}, 30000);
  });
}

//$knawledge
//On call, bot plays garaaaage.mp3, deletes the called
//command message and then leaves upon completion
function knawledge(msg){
  //joins the message author's voice channel
  msg.member.voiceChannel.join()
  .then(function(connection){
    //plays the requested file
    connection.playFile('./sounds/garaaaage.mp3')
    //deletes the called command (requires bot to be
    //admin) 2s delay
    msg.delete([2000]);
    //leaves after 3 seconds
  setTimeout(function(){
    msg.member.voiceChannel.leave();}, 3000);
  });
}

//On call, bot plays drears.mp3, deletes the called
//command message and then leaves upon completion
function drears(msg){
  //Joins the message author's voice channel
  msg.member.voiceChannel.join()
  .then(function(connection){
    //plays the specific file
    connection.playFile('./sounds/drears.mp3')
    //deletes the command message (requires bot to
    //be admin) 2s delay
    msg.delete([2000]);
    //leaves after 3 seconds
  setTimeout(function(){
    msg.member.voiceChannel.leave();}, 3000);
  });
}

//On call, bot lets user know they must be in a voice
//channel to call commands
function noGo(msg){
  msg.channel.sendMessage("I can't tell you about my self-help if you don't join a voice channel, "+ msg.author.username + "!");
}

function giphy(passed, msg){
  Promise.resolve(glog.msgFix(passed))
  .then(function(res){
    return new Promise(function(resolve, reject){
      var asyn = glog.img(res, msg);
      resolve(asyn);
    })
  })
}


//Returns the method key in a string that matches
//the command passed in by toCall
function returnMethod(n){
  n = n.split(/ +(?=(?:(?:[^"]*"){2})*[^"]*$)/g);
  console.log(n);
  var x = n[0];
  gcheck = n[1];
  //setup var to check prefix
  var y = x.split('')[0]
  //make all messages uniform
  x = x.toLowerCase()
  //cut them into an array and shift first away
  x = x.split('');
  x.shift();
  //Rejoin the array into a string
  x = x.join('');
  //checks in keys if a message matches a key value
  for (var i = 0; i <= 25; i++) {
    if (x == key[i]){
      //Checks if the prefix fits that put into config.json
      if (y != config.info.prefix){
        return "Bad Prefix"
      } else {
        console.log(keys[x], 'line 176 msgcheck');
        return keys[x];
      }
    }
  } return "No Command Found";
}


module.exports = {
  returnMethod: returnMethod,
  noGo: noGo,
  toCall: toCall,
}
