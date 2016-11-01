
$(document).ready(function(){
    $("#card01").show()
    var currentSlide = 1
    var maxCards = 10
    var windowHeight = $(window).height()
    var headerHeight = $("#header").height()
    var footerHeight = $("#footer").height()
    var minHeight = windowHeight - headerHeight - footerHeight - 40
    for (i = 1; i < maxCards + 1; i++){
        if(i < 10){
            if ($("#card0" + i).height() < minHeight){
                $("#card0" + i).css({height: minHeight})
            }
        }else{
           if ($("#card" + i).height() < minHeight){
                $("#card" + i).css({height: minHeight})
            } 
        }
    }
    $(".cardsBack").click(function(){
        var nextSlide = currentSlide - 1
        switch(nextSlide){
            case 0:
                var nextCard = maxCards
                transition("#card" + nextCard, "#card0" + currentSlide, "back")
                currentSlide = nextCard
                updapteNumber()
                break
            case 9:
                var nextCard = currentSlide - 1
                transition("#card0" + nextCard, "#card" + currentSlide, "back")
                currentSlide = nextCard
                updapteNumber()
                break
            default:
                if(currentSlide < 10){
                    var nextCard = currentSlide - 1
                    transition("#card0" + nextCard, "#card0" + currentSlide, "back")
                    currentSlide = nextCard
                    updapteNumber() 
                    println("hello")
                }else{
                    var nextCard = currentSlide - 1
                    transition("#card" + nextCard, "#card" + currentSlide, "back")
                    currentSlide = nextCard
                    updapteNumber()
                    println("goodbye")
                }
        }
    })
    $(".cardsNext").click(function(){
           var nextSlide = currentSlide + 1
        switch(nextSlide){
            case maxCards + 1:
                var nextCard = 1
                transition("#card0" + nextCard, "#card" + currentSlide, "next")
                currentSlide = nextCard
                updapteNumber()
                break
            case 10:
                var nextCard = currentSlide + 1
                transition("#card" + nextCard, "#card0" + currentSlide, "next")
                currentSlide = nextCard
                updapteNumber()
                break
            default:
                if(currentSlide < 10){
                    var nextCard = currentSlide + 1
                    transition("#card0" + nextCard, "#card0" + currentSlide, "next")
                    currentSlide = nextCard
                    updapteNumber()
                    println("this SuCkS")
                }else{
                    var nextCard = currentSlide + 1
                    transition("#card" + nextCard, "#card" + currentSlide, "next")
                    currentSlide = nextCard
                    updapteNumber()
                }
        }
    })
     /*$(".cardsBack").click(function(){
        switch (currentSlide){
            case 1:
                //Hide 1 show 3
                transition("#card03", "#card01", "back")
                currentSlide = 3
                updapteNumber()
                break
            case 2:
                //Hide 2 show 1
                transition("#card01", "#card02", "back")
                currentSlide = 1
                updapteNumber()
                break
            case 3:
                //Hide 3 show 2
                transition("#card02", "#card03", "back")
                currentSlide = 2
                updapteNumber()
                break
                
        }
    })
    $(".cardsNext").click(function(){
         switch (currentSlide){
            case 1:
                //Hide 1 show 2
                transition("#card02", "#card01", "next")
                currentSlide = 2
                updapteNumber()
                break
            case 2:
                //Hide 2 show 3
                transition("#card03", "#card02", "next")
                currentSlide = 3
                updapteNumber()
                break
            case 3:
                //Hide 3 show 1
                transition("#card01", "#card03", "next")
                currentSlide = 1
                updapteNumber()
                break       
         }
    })*/
    function transition(to, from, direction){
        if(direction == "next"){
            $(from).animate({left: '-200%'}, function(){
                $(from).hide()
                $(to).css({left: '200%'})
                $(to).show()
                $(to).animate({left: '0%'})
                  
            })
            
        }else if(direction == "back"){
            $(from).animate({left: '200%'}, function(){
                $(from).hide()
                $(to).css({left: '-200%'})
                $(to).show()
                $(to).animate({left: '0%'})
            })
        }
    }
    function updapteNumber(){
        $("#footerCardNumber").text(currentSlide + " / 10")
    }
})
