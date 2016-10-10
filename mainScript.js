
$(document).ready(function(){
    var currentSlide = 1
    $("#footerBack").click(function(){
        switch (currentSlide){
            case 1:
                //Hide 1 show 3
                transition("#card3", "#card1")
                currentSlide = 3
                updapteNumber()
                break
            case 2:
                //Hide 2 show 1
                transition("#card1", "#card2")
                currentSlide = 1
                updapteNumber()
                break
            case 3:
                //Hide 3 show 2
                transition("#card2", "#card3")
                currentSlide = 2
                updapteNumber()
                break
                
        }
    })
    $("#footerNext").click(function(){
         switch (currentSlide){
            case 1:
                //Hide 1 show 2
                transition("#card2", "#card1")
                currentSlide = 2
                updapteNumber()
                break
            case 2:
                //Hide 2 show 3
                transition("#card3", "#card2")
                currentSlide = 3
                updapteNumber()
                break
            case 3:
                //Hide 3 show 1
                transition("#card1", "#card3")
                currentSlide = 1
                updapteNumber()
                break       
         }
    })
        $(".cardsBack").click(function(){
        switch (currentSlide){
            case 1:
                //Hide 1 show 3
                transition("#card3", "#card1")
                currentSlide = 3
                updapteNumber()
                break
            case 2:
                //Hide 2 show 1
                transition("#card1", "#card2")
                currentSlide = 1
                updapteNumber()
                break
            case 3:
                //Hide 3 show 2
                transition("#card2", "#card3")
                currentSlide = 2
                updapteNumber()
                break
                
        }
    })
    $(".cardsNext").click(function(){
         switch (currentSlide){
            case 1:
                //Hide 1 show 2
                transition("#card2", "#card1")
                currentSlide = 2
                updapteNumber()
                break
            case 2:
                //Hide 2 show 3
                transition("#card3", "#card2")
                currentSlide = 3
                updapteNumber()
                break
            case 3:
                //Hide 3 show 1
                transition("#card1", "#card3")
                currentSlide = 1
                updapteNumber()
                break       
         }
    })
    function transition(to, from){
        $(from).hide()
        $(to).show()
    }
    function updapteNumber(){
        $("#footerCardNumber").text(currentSlide + " / 3")
    }
})
