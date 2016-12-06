"use strict";

class Component extends App{
	constructor(){
		super();
	}

	layOut(){
		this.render(
			`	      
		<nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="app.html">The Parking App</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll">
                        <a href="#page-top" onclick="">Create a Parking List</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#page-top" onclick="">View Pricing Page</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#page-top" onclick="component.createdListInfo()">View Created List</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#contact">Help</a>
                    </li>
                </ul>
            </div>   
        </div>
       
   		 </nav>


		<div id="content">
			<br>
			<div class="jumbotron text-center">

			  <h1>Good Day User!</h1>
			  <p>This is an app that is specifically designed to monitor your parking business.</p>
			  <p><a class="btn btn-primary" href="{% url 'rad_info' %}" role="button">Get Started</a></p>
			</div></center>
		

			<div class="text-center">
		            <div class="container">
		                <div class="row">
		                    <div class="col-md-4">
		                        <h3>Create Parking list</h3>
		                        <p>Allows you to create a parking list.</p>
		                    </div>
		                    <div class="col-md-4">
		                        <h3>View the Pricing Page</h3>
		                        <ul class="list-inline">
		                            
		                        </ul>
		                    </div>
		                    <div class="col-md-4">
		                        <h3>View your Created List</h3>
		                        <p>Allows you to View, Update and <br>
		                        Delete the list you made.</p>
		                    </div>
		                </div>
		            </div>
			</div>
			</div>
			
		<div id="listInfo">
		</div>
		 <footer class="text-center">
	        <div class="footer-below">
	            <div class="container">
	                <div class="row">
	                    <div class="col-lg-12">
	                       	&copy; The Parking App 2016
	                    </div>
	                </div>
	            </div>
	        </div>
    	</footer>
			`
			,document.getElementById('app'));
		
			}

	createdListInfo(){
		let html = "";
		let x = this.content;
		for(let index=0;index<x.length;index++){
			html += `
				<div class="row">
				  <div class="col-sm-6 col-md-4">
				    <div class="thumbnail">
				      <img src="${this.content[index].image}" alt="...">
				      <div class="caption">
				        <h3>Plate Number: ${this.content[index].platenumber}</h3>
				        
				        <p><a href="#" class="btn btn-warning" role="button">More Details</a></p>
				      </div>
				    </div>
				  </div>
				</div>
			`;
				$('#content').hide();
		}
		this.reRender(html,document.getElementById('listInfo'));
	}
}