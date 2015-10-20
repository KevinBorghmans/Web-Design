	<script type="text/javascript">
			// Visualisatie API laden
			google.load('visualization', '1.0', {
				'packages' : ['corechart']
			});

			$(function() {
				// Als het bestand geladen is, laad het JSON bestand in, daarna callback uitvoeren
				$.getJSON('dataverkeer.json', function(data) {

					// De DataTable vullen met JSON data
					var dataTable = new google.visualization.DataTable();
					dataTable.addColumn('string', 'Land');
					dataTable.addColumn('number', 'Jaar');
					// Aantal rijen toevoegen op basis van de JSON inhoud
					dataTable.addRows(data.length);
					
					// DataTable vullen, itereren over elke rij
					$.each(data, function(i, object) {
						// De waardes toewijzen aan de respectievelijke kolommen per rij
						dataTable.setValue(i, 0, object.Jaar_1999);
						dataTable.setValue(i, 1, object.Jaar_2000);
					});
					// Opties voor de visualisatie definieren
					var options = {
						backgroundColor : '#f3f5d4',
						colors : ['#8bbe24'],
						fontSize : 10,
						width : 750,
						height : 1400
					};
					// Uitvoeren van de visualisatie
					var chart = new google.visualization.BarChart(document.getElementById('visualization'));
					chart.draw(dataTable, options);

				});
			});