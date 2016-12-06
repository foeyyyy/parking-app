"use strict";

class App{
	constructor(){
		this.content = [
			{
				"platenumber":"XUO-866",
				"image":"img/Honda Civic.jpg"
			},
				{
				"platenumber":"30W-884",
				"image":"img/Honda Accord.jpg"
			},
				{
				"platenumber":"RKE5-HKE",
				"image":"img/Honda Jazz.jpg"
			},
				{
				"platenumber":"GBY-150",
				"image":"img/Mazda 7.jpg"
			},
				{
				"platenumber":"BT-50",
				"image":"img/Mazda Eclipse.jpg"
			},
				{
				"platenumber":"ZJC-501",
				"image":"img/Skyline.jpg"
			},
				{
				"platenumber":"WTC-105",
				"image":"img/Mazda RX8.jpg"
			},
				{
				"platenumber":"EYBM-77H",
				"image":"img/Toyota Corolla.jpg"
			},
				{
				"platenumber":"YSK-213",
				"image":"img/Toyota Fortuner.jpg"
			},
				{
				"platenumber":"QT-69",
				"image":"img/Mustang GT.jpg"
			}
			];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	

}