function renderBlogPosts(){
    let blogPosts = [];
    
    //retrieve blogPosts from localStorage and Parse array containing objects
    blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    
    //find blog Container by Id
    const blogContainer = document.getElementById('blogcontainer');
    
    //loop through the blogPosts array
    for(let i=0;i<blogPosts.length;i++){
       const userName = blogPosts[i].username;
       const title = blogPosts[i].title;
       const content = blogPosts[i].content;
       
       // create section element that holds blog Post information
       const section = document.createElement('section');
       // set id attribute
       section.setAttribute("id","blogpost");

       //Set data attribute, to uniquely identify each section
       section.setAttribute("data-index",i);
       //set innerHTML to dynamically append HTML for each blog post
       section.innerHTML = `<h8 id="blogtitle"></h8>
                        <p id="blogcontent"></p>
                        <span id="blogauthor"></span>      
                        </section>`
                        //append the created section element to blog container
                        blogContainer.appendChild(section);
                        
                        //find parent section element through data attribute
                        const parent = document.querySelector(`[data-index = "${i}"]`);
                        
                        //find element with id as blogTitle within parent scope
                        const blogTitle = parent.querySelector('#blogtitle');
                        //set title information to be displayed
                        blogTitle.textContent = title;

                        //find element with id as blogcontent within parent scope
                        const blogContent = parent.querySelector('#blogcontent');
                        //set blog content information to be displayed
                        blogContent.textContent = content;
                        
                        //find element with id as blogauthor within parent scope
                        const blogAuthor =  parent.querySelector('#blogauthor');
                         //set author information to be displayed
                         blogAuthor.textContent =`Posted by user: ${userName}`;
                       }
                   }
//On load execute function, so blog post information is available
renderBlogPosts();
