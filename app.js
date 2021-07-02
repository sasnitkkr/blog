/* REQUIREMENTS IN PROJECTS */
const express = require("express");
const ejs = require("ejs");
const PORT = 3000;

const app = express();

//Using ejs
app.set('view engine', 'ejs');
//Using body parser
app.use(express.urlencoded({extended: true}));
//Using static files
app.use(express.static("public"));

/* --- GLOBAL DECLARATIONS --- */

/* variables */
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.const homeStartingContent Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";;
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

/* arrays */

const posts = [];

/* --- ROUTES --- */

/* HOME ROUTE */
app.get("/", (req, res)=>{

  res.render("home",{
    home_start_content : homeStartingContent,
    posts : posts
  });
});

/* ABOUT ROUTE */

app.get("/about", (req, res)=>{
  res.render("about",{
    about_content : aboutContent
  });
});

/* CONTACT ROUTE */

app.get("/contact", (req, res) => {
  res.render("contact",{
    contact_content : contactContent
  });
});

/* COMPOSE ROUTE */
app.get("/compose", (req, res) =>{
  res.render("compose");
});

app.post("/compose",(req, res)=>{
  const post = {
    title : req.body.postTitle,
    content : req.body.postBody
  };
  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:title",(req, res)=>{
  const requestTitle = req.params.title;
  let i;
  for(i=0; i<posts.length; i++){
    if(posts[i].title.toLowerCase === requestTitle.toLowerCase){
      break;
    }
  }
  if(i==posts.length)
    console.log("NOT MATCHED");
  else
    console.log("MATCHED");

});











app.listen(PORT, function() {
  console.log("Server started on port 3000");
});
