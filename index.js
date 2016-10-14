(function () {

    /* var oUl = document.getElementById('sec_attr');
     var aLi = oUl.getElementsByClassName('list');
     var aUl = oUl.getElementsByTagName('ul');

     for (var i = 0; i < aLi.length; i++) {
     aLi[i].index = i;
     for (var j = 0; j < aLi.length; j++) {

     aUl[j].style.display = '';
     }
     aLi[i].onmouseover = function () {

     aUl[this.index].style.display = 'block';
     };
     }*/

    var $sec = $('#sec_attr');
    var $ali = $sec.children('li');

    $ali.mouseover(function () {

        $(this).find('ul').show().stop().parent().siblings('li').find('.nav-list').hide();
    });
    $ali.mouseout(function () {

        $(this).find('ul').show().hide().parent().siblings('li').find('.nav-list').hide();
    });

    var oTab = document.getElementById('tab');
    var oTabInner = oTab.getElementsByTagName('div')[0];
    var aDiv = oTabInner.getElementsByTagName('div');
    var aImg = oTabInner.getElementsByTagName('img');
    var oUl = oTab.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var oBtnLeft = oTab.getElementsByTagName('a')[0];
    var oBtnRight = oTab.getElementsByTagName('a')[1];

    var step = 0;
    oTabInner.innerHTML += '<div><img src="tab/1.jpg" alt=""/></div>';
    utils.css(oTabInner, 'width', aDiv.length * aDiv[0].offsetWidth);
    var timer = null;
    clearInterval(timer);
    timer = setInterval(autoMove, 2200);
    function autoMove() {

        if (step >= aDiv.length - 1) {
            step = 0;
            utils.css(oTabInner, 'left', 0);
        }
        step++;
        animate(oTabInner, {left: -step * 900});
        bannerTip();
    }

    function bannerTip() {
        var tmpStep = step >= aLi.length ? 0 : step;
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].className = i == tmpStep ? 'cur' : null;
        }
    }

    oTab.onmouseover = function () {
        clearInterval(timer);
        utils.css(oBtnLeft, 'display', 'block');
        utils.css(oBtnRight, 'display', 'block');
    };
    oTab.onmouseout = function () {
        timer = setInterval(autoMove, 2200);
    };
    handleChange();
    function handleChange() {
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].index = i;
            aLi[i].onclick = function () {
                step = this.index;
                animate(oTabInner, {left: -step * 900});
                bannerTip();
            }
        }
    }

    oBtnRight.onclick = autoMove;
    oBtnLeft.onclick = function () {
        if (step <= 0) {
            step = aDiv.length - 1;
            utils.css(oTabInner, 'left', -step * 900);
        }
        step--;
        animate(oTabInner, {left: -step * 900});
        bannerTip();
    }


})();

