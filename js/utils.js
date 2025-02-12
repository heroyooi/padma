var getGradientCode = function(index){
  return `<linearGradient id="svg-gradient${index+1}-r" x1="0%" y1="0%" x2="100%" y2="0%">   
    <stop offset="0%" stop-color="#FF0000">
        <animate attributeName="stop-color" values="#FF0000; #275460; #FF0000;" dur="2s" repeatCount="indefinite"></animate>
    </stop>
    <stop offset="100%" stop-color="#275460">
        <animate attributeName="stop-color" values="#275460; #FF0000; #275460;" dur="2s" repeatCount="indefinite"></animate>
    </stop>
  </linearGradient> 
  <linearGradient id="svg-gradient${index+1}-g" x1="0%" y1="0%" x2="100%" y2="0%">   
    <stop offset="20%" stop-color="#23D527">
        <animate attributeName="stop-color" values="#23D527; #275460; #23D527;" dur="2s" repeatCount="indefinite"></animate>
    </stop>
    <stop offset="100%" stop-color="#275460">
        <animate attributeName="stop-color" values="#275460; #23D527; #275460;" dur="2s" repeatCount="indefinite"></animate>
    </stop>
  </linearGradient> 
  <linearGradient id="svg-gradient${index+1}-o" x1="0%" y1="0%" x2="100%" y2="0%">   
    <stop offset="0%" stop-color="#FFAF36">
        <animate attributeName="stop-color" values="#FFAF36; #275460; #FFAF36;" dur="2s" repeatCount="indefinite"></animate>
    </stop>

    <stop offset="100%" stop-color="#275460">
        <animate attributeName="stop-color" values="#275460; #FFAF36; #275460;" dur="2s" repeatCount="indefinite"></animate>
    </stop>
  </linearGradient>
  <linearGradient id="svg-gradient${index+1}-n" x1="0%" y1="0%" x2="100%" y2="0%">   
    <stop offset="0%" stop-color="#003746">
        <animate attributeName="stop-color" values="#003746; #003746; #003746;" dur="2s" repeatCount="indefinite"></animate>
    </stop>

    <stop offset="100%" stop-color="#003746">
        <animate attributeName="stop-color" values="#003746; #003746; #003746;" dur="2s" repeatCount="indefinite"></animate>
    </stop>
  </linearGradient>`;
};

var arr_color = ['r', 'o', 'g'];

var totalSvg = $('.svg-gradient-wrap').length;
$('.svg-gradient-wrap').each(function(index){
  if ($(this).attr('class').indexOf('-1') != -1 || $(this).attr('class').indexOf('-2') != -1) {
    $(this).css('z-index', totalSvg - index);
  }
  $(this).find('defs').html(getGradientCode(index));
  var svgR = $(this).find('svg:eq(0)');
  svgR.find('path').attr('fill', 'url("#svg-gradient' + (index + 1) + '-r")');
  var cloneSvgO = svgR.clone();
  var cloneSvgG = svgR.clone();
  var cloneSvgN = svgR.clone();
  cloneSvgO.find('path').attr('fill', 'url("#svg-gradient' + (index + 1) + '-o")');
  cloneSvgG.find('path').attr('fill', 'url("#svg-gradient' + (index + 1) + '-g")');
  cloneSvgN.find('path').attr('fill', 'url("#svg-gradient' + (index + 1) + '-n")');

  $(this).append(cloneSvgO).append(cloneSvgG).append(cloneSvgN);
});

var runMockSvg = function(selector, array, initIndex){
  $(selector + ' svg').eq(initIndex).siblings().css('opacity', 0);

  var speedArr = array;
  var activeIndex = initIndex;
  function infiniteAnimation() {
    if (activeIndex < array.length - 1) {
      activeIndex++;
    } else {
      activeIndex = 0;
    }
    $(selector + ' svg').eq(activeIndex).siblings().css('opacity', 0);
    $(selector + ' svg').eq(activeIndex).css('opacity', 1);
    setTimeout(function(){
      infiniteAnimation();
    }, speedArr[activeIndex]);
  }
  setTimeout(function(){
    infiniteAnimation();
  }, speedArr[activeIndex]);
}

$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results == null){
    return null;
  }
  else {
    return decodeURI(results[1]) || 0;
  }
}