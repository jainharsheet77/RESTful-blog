var express    =require("express"),
    bodyParser =require("body-parser"),
    mongoose   =require("mongoose");
    methodOverride=require("method-override");
    expressSanitizer=require("express-sanitizer");


//APP CONFIG
app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(expressSanitizer());		// this has to go after body parser

// connecting database
mongoose.connect("mongodb://localhost:27017/blog",{useNewUrlParser:true,useUnifiedTopology: true});

// MONGOOSE/MODEL CONFIG
var blogSchema=new mongoose.Schema({
	title:     String,
	image:     String,
	created:   {type:Date ,default:Date.now},
	body: 	   String
});

var Blog=mongoose.model("blog",blogSchema);


// Our intitial data in the database

// Blog.create({
// 	title:"Test Blog",
// 	image:"https://miro.medium.com/max/4096/1*NOPndaXJ9r4O1Lk5JvV3KA.jpeg",
// 	body:"The lives of four socially awkward friends, Leonard, Sheldon, Howard and Raj, take a wild turn when they meet the beautiful and free-spirited Penny."
// 	});



//RESTFULL ROUTES



app.get("/",function(req,res){
	res.redirect("/blogs");
});


//INDEX route
app.get("/blogs",function(req,res){
	Blog.find({},function(err,blogs){
		if(err)
		{
			console.log("something went wrong");
			console.log(err);
		}
		else
		{
			res.render("index",{blogs:blogs});
		}
	});
	
});


//NEW route
app.get("/blogs/new",function(req,res){
	res.render("new");
});



// CREATE route

app.post("/blogs",function(req,res){
	// create the blog

	//sanitizing the input from the user
	req.body.blog.body=req.sanitize(req.body.blog.body);
	Blog.create(req.body.blog,function(err,newBlog){
		if(err)
		{
			alert("something went wrong");
			res.render("new");
		}
		else
		{
			//redirect
			res.redirect("/blogs");
		}

	});
	
});


//SHOW route

app.get("/blogs/:id",function(req,res){
	Blog.findById(req.params.id,function(err,foundblog){
		if(err)
		{
			alert("Blog not found");
			res.redirect("/blogs");
		}
		else
		{
			res.render("show",{blog:foundblog});
		}
	});
	
});


//EDIT route
app.get("/blogs/:id/edit",function(req,res){
	Blog.findById(req.params.id,function(err,foundblog){
		if(err)
		{
			alert("Blog not found");
			res.redirect("/blogs");
		}
		else
		{
			res.render("edit",{blog:foundblog});
		}
	});
});


// UPDATE route we are using put but we can also use post route with different url like /updateblog/:id
app.put("/blogs/:id",function(req,res){
	req.body.blog.body=req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id,req.body.blog,function(err,updatedblog){
		if(err)
		{
			alert("Blog not found");
			res.redirect("/blogs");
		}
		else
		{
			res.redirect("/blogs/"+req.params.id);
		}
	});
});


//DELETE route
app.delete("/blogs/:id",function(req,res){
	//destroy blg and then redirect somewhere
	Blog.findByIdAndRemove(req.params.id,function(err){
		if(err)
		{
			alert("Blog not found or not deleted");
			res.redirect("/blogs");
		}
		else
		{
			res.redirect("/blogs");
		}
	});
});




app.listen(3000,function(){
	console.log("BLOGS server has started");
});

