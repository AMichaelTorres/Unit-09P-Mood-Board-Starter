var happyImages = [
    "https://images.lifealth.com/uploads/2018/03/commitments-to-make-if-you-want-to-be-happy.jpg"];
var sadImages = ["https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_large.png?v=1542436016","https://i.pinimg.com/originals/b2/79/66/b27966140db68d0621628f2309f8a443.gif","https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fi.huffpost.com%2Fgen%2F4082068%2Fimages%2Fn-VIOLENCE-WOMEN-628x314.jpg"];
var lazyImages = ["https://gkng5olag22mpz1r551iq1dd-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/feeling-tired-2560x1280.jpg","https://media3.giphy.com/media/NWg7M1VlT101W/giphy.gif"];
var sleepyImages = ["","https://media1.tenor.com/images/7b450db04f95674f3af1f8d378f13650/tenor.gif?itemid=7995639" ];


$('button').click(function(){
  var mood = $("input").val();
  
  if(mood === "happy"){
      happyMood();
  } else if(mood === "sad"){
      sadMood();
  }else if(mood === "sleepy"){
      sleepyMood();
  } else if(mood === "lazy"){
      lazyMood();
  }
});


function happyMood(){
   changeBackgroundColor("#fbff19");
   changeTextColor("#ef9621");
   displayImages(happyImages);
}
function sadMood(){
      changeBackgroundColor("darkgray");
   changeTextColor("black");
   displayImages(sadImages);
}
function sleepyMood(){
   changeBackgroundColor("beige");
   changeTextColor("black");
   displayImages(sleepyImages);
}
function lazyMood(){
      changeBackgroundColor("salmon");
   changeTextColor("black");
   displayImages(lazyImages);
}

function changeBackgroundColor(color){
    $("body").css("background-color",color);
}

function changeTextColor(color){
    $("body").css("color", color);
}

function displayImages(images){
    $("body").append("<img src='" + images[0] + "'>");
 
}


