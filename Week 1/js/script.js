//eventlistener
function addListener(element, type, expression, bubbling) {
	if(window.addEventListener) { // Voor alle !IE browsers
	element.addEventListener(type, expression, bubbling);
	return true;
	} else if(window.attachEvent) { // Voor oude IE versies
	element.attachEvent('on' + type, expression);
	return true;
	} else {
	return false; }
}
// maak functie aan op het moment dat de pagina geladen is wordt deze uitgevoerd
function init()
{	
// Hier wordt de json file opgehaald. 
	$.ajax({
		url:"wifi_data2.json",
		dataType: "json",
		//if succes ->
        // als de json file geladen is voer het volgende uit
		success: function(data)
		{
// herhaal de onderste code voor 37x
			for(i=0;i<37;i++)
			{
             // maar een nieuwe variable aan die een nieue div container aanmaakt
                var newDiv = document.createElement('div');
                // geef een classe aan de nieuwe divcontainer
                newDiv.className = "persoon";
                
                // maak een variable aan
                var naam = document.createElement('div');
                // geeft hem de classe naam mee
                naam.className = "naam";
                // maak de variable text aan en maak een textnode aan met de voornaam en achternaam data uit het json                       // bestand
                var text = document.createTextNode(String(data[i][0] + " " + data[i][1]));
                // voeg de text toe aan variable naam.
                naam.appendChild(text);
                
                var mb = document.createElement('div');
                mb.className = "MB";
                var text2 = document.createTextNode(String(data[i][2] + " " + "Mb's"));
                mb.appendChild(text2);
                
                var loc = document.createElement('div');
                loc.className = "locatie";
                var text3 = document.createTextNode(String(data[i][3]));
                loc.appendChild(text3);
                
                var gesl = document.createElement('div');
               var color = 0;
                if(data[i][4] == "man")
					{
						gesl.className = "geslachtm";
                        color = "#4183d7";
					}
					else
					{
						gesl.className = "geslachtv";
                        color = "#f62459";
					}
                
                var staaf = document.createElement('div');
                staaf.className="staaf";              
                
                
                var fill = document.createElement('div');
                fill.divName = "fill" +[i];
                var filltext = document.createTextNode(String(data[i][5]));
                fill.style.cssText = "bottom: 0px;position: absolute;width: 100%;;height:"+data[i][5]+';background-color:'+color;;
                
                
                var per = document.createElement('div');
                per.className = "percentage" ;
                var text5 = document.createTextNode(String(data[i][5]));
                
                per.appendChild(text5);
                
                
                test.appendChild(newDiv);
                newDiv.appendChild(staaf);
                staaf.appendChild(fill);
                newDiv.appendChild(naam);
                newDiv.appendChild(mb);
                newDiv.appendChild(loc);
                newDiv.appendChild(gesl);
                newDiv.appendChild(per);
                        
                
			}
		}
	});

}

window.onload = init;
//wanneer alle html elementengeladen...