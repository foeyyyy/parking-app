"use strict";

class Component extends App{
	constructor(){
		super();
	}

	movieList(){
		this.render(
			`	      
		<div class="header clearfix">
            <nav>
              <ul class="nav nav-pills float-xs-right">
                <li class="nav-item">
                  <a class="nav-link active" href="#" onclick="component.showLandingPage()">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onclick="component.showMovieList()">Movie List</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onclick="component.showMovieCreate()">Movie Create</a>
                </li>
              </ul>
            </nav>
            <h3 class="text-muted">Movie App</h3>
          </div>


		<div id="landingpage">
          <div class="jumbotron">
            <h1 class="display-3">decode Movie App</h1>
            <p class="lead">A simple decode demo app about movie.</p>
            
          </div>

          <div class="row marketing">
            <div class="col-lg-6">
              <h4>Create Movie</h4>
              <p>Add new movie to the list.</p>

              <h4>Read Movie</h4>
              <p>Provides a list view that supports movie search and show details features.</p>

            </div>

            <div class="col-lg-6">
              <h4>Update Movie</h4>
              <p>Allows the user to modify the content of a particular movie.</p>

              <h4>Delete Movie</h4>
              <p>Allows the user to remove a particular movie object from the list.</p>

            </div>
          </div>          

		</div>
				
				<div id="createpage" class="row marketing">
					<div class="col col-sm-12">
						<div id="movieCreate"></div>						
					</div>
				</div>

				<div id="readpage" class="row marketing">
					<div class="col col-sm-12">
						<h1>Movie List</h1>
						<table id="movieList" class="table">
							<thead>
								<tr>
									<th>Title</th>
									<th>Year</th>
									<th>Action</th>
								</tr>
							</thead>
							<div class="form-group">
							    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
							    <div class="input-group">
							      <div class="input-group-addon">
									<i class="material-icons">&#xE87C;</i>
							      </div>
							      <input type="text" class="form-control" placeholder="Search">
							    </div>
							  </div>
							<tbody id="movieListInfo"></tbody>
						</table>
					</div>
				</div>

				<div id="updatedeletepage" class="row marketing">
					<div id="movieDetails"></div>
				</div>
				
          <footer class="footer">
            <p>&copy; decode 2016</p>
          </footer>

			`
			,document.getElementById('app'));
		this.movieListInfo();
		$('#landingpage').show();
		$('#createpage').hide();		
		$('#readpage').hide();
	}

	showLandingPage(){
		$('#landingpage').show();
		$('#createpage').hide();
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}	

	showMovieList(){
		$('#landingpage').hide();
		$('#createpage').hide();
		$('#readpage').show();
		$('#updatedeletepage').hide();
	}

	showMovieCreate(){
		$('#landingpage').hide();
		$('#createpage').show();		
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}

	showUpdateDelete(){
		$('#landingpage').hide();
		$('#createpage').hide();		
		$('#readpage').hide();
		$('#updatedeletepage').show();
	}			

	movieListInfo(){
		let html = "";
		let m = this.movies;
		for(let i=0;i<m.length;i++){
			html += `
				<tr>
					<td>${m[i].Title}</td>
					<td>${m[i].Year}</td>
					<td><button class="btn btn-primary"  onclick="component.movieDetails(${i})">Show Details</button></td>
				</tr>
			`;
		}
		this.reRender(html,document.getElementById('movieListInfo'));
	}

	movieDetails(key){
		this.reRender(
			`
				<h1>Movie Details</h1>
				<div class="media">
				    <div class="media-left">
				        <a href="#">
				            <img class="media-object img-thumbnail" src="${this.movies[key].Poster}" width="220" />
				        </a>
				    </div>
				    <div class="media-body" id="movieDetailsInfo">
				        <h4 class="media-heading">${this.movies[key].Title}</h4>
				        Year: ${this.movies[key].Year}<br/>
						Director: ${this.movies[key].Director}<br/>
						Actors: ${this.movies[key].Actors}<br/>
						<button class="btn btn-success" onclick="component.movieUpdate(${key})">Update</button>
						<button class="btn btn-danger" onclick="component.deleteMovie(${key})">Delete</button>
						<button class="btn btn-info" onclick="component.showMovieList()">Back</button>
					</div>	
				</div>			
			`,document.getElementById('movieDetails'));
			this.showUpdateDelete();
	}

	movieCreate(){
		this.render(
			`
				<h1>Movie Create</h1>
				Title: <input class="form-control" id="newTitle" type="" placeholder="Enter Title" /><br/>
				Year: <input class="form-control" id="newYear" type="" placeholder="Enter Title" /><br/>
				Director: <input class="form-control" id="newDirector" type="" placeholder="Enter Director" /><br/>
				Poster: <input class="form-control" id="newPoster" type="" placeholder="Enter Poster" /><br/>
				Actors: <input class="form-control" id="newActors" type="" placeholder="Separate using comma" /><br/>
				<button class="btn btn-primary" onclick="component.createMovie()">Create</button>
			`,document.getElementById('movieCreate'));
	}

	movieUpdate(key){
		this.reRender(
			`
				<h4 class="media-heading">${this.movies[key].Title}</h4>
		        Year: <input id="updateYear" type="text" value="${this.movies[key].Year}" /><br/>
				Director: <input id="updateDirector" type="text" value="${this.movies[key].Director}" /><br/>
				Actors: <input id="updateActors" type="text" value="${this.movies[key].Actors}" /><br/>
				<button class="btn btn-success" onclick="component.updateMovie(${key})">Save</button>
			`,document.getElementById('movieDetailsInfo'));
	}
}