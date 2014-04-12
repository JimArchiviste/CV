$(document).ready(function(){
		/**document.getElementById('form').style.display = 'none';
		$('#formulaire').click(function() {document.getElementById('form').style.display = 'block';
			document.getElementById('accueil').style.display = 'none';
		});**/
		$('#form').hide();
		$('#formulaire').click(function() {$('#accueil').hide();
						$('#form').slideDown("slow");
		});



		
 function deactivateInfos() {
    
        var spans = document.getElementsByTagName('span'),
        spansLength = spans.length;
        
        for (var i = 0 ; i < spansLength ; i++) {
            if (spans[i].className == 'infos') {
                spans[i].style.display = 'none';
            }
        }
    
    }
    
    
 /**   function getInfos(element) {
    
        while (element = element.nextSibling) {
            if (element.className === 'infos') {
                return element;
            }
        }
        
        return false;
    
    }**/


    
	function checkPseudo() {
    
        var pseudo = document.getElementById('pseudo'),
					  tooltipStyle = document.getElementById('infospseudo').style;
        
        if (pseudo.value.length >= 4) {
            pseudo.className = 'correct';
            tooltipStyle.display = 'none';
            return true;
        } else {
            pseudo.className = 'incorrect';
            tooltipStyle.display = 'inline-block';
            return false;
        }
    
    };

   function isEmail(myVar){
     // La 1ère étape consiste à définir l'expression régulière d'une adresse email
     var regEmail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');

     return regEmail.test(myVar);
   }

	function checkMail() {
    
        var mail = document.getElementById('mail'),
					  tooltipStyle = document.getElementById('infosmail').style;

        essai = isEmail(mail);
		alert(essai);
        if (essai){
            mail.className = 'correct';
            tooltipStyle.display = 'none';
            return true;
        } else {
            mail.className = 'incorrect';
            tooltipStyle.display = 'inline-block';
            return false;
        }
    
    };

    
    (function() {

			var myForm = document.getElementById('myForm'),
            inputs = document.getElementsByTagName('input'),
            inputsLength = inputs.length;
    
    
        myForm.onsubmit = function() {


    
            var result1 = checkPseudo();
			var result2 = checkMail();
    
    
            if (result1 && result2) {
                alert('Le formulaire est bien rempli.');
            }
    
            return false;
    
        };
    
        myForm.onreset = function() {
    
            for (var i = 0 ; i < inputsLength ; i++) {
                if (inputs[i].type == 'text') {
                    inputs[i].className = '';
                }
            }
    
            deactivateInfos();
    
        };
    
    })();
	deactivateInfos();
})();


/**(function() {
    
    
})();**/
    
    



/*	$.getJSON("data.json")
	 .done(function(obj){
		var calc = $("<table />");
		for ( var i = 0 ; i < obj.length ; ++i) {
			calc.append (
				$("<tr />").append(
					$("<td />").html(obj[i].nom),
					$("<td />").html(obj[i].note),
					$("<td />").html(obj[i].description).hide()
				).click(function(){
					var e = $(this).children()[2];
					alert($(e).html());
				})
			);
		}
		$('body').append(calc);
	}).error(function(obj){
		console.log("error.");
		console.log(obj);
	});
});*/

