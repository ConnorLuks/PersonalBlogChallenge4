function renderBlogPosts(){
  let blogPosts = [];
  blogPosts = JSON.parse(localStorage.getItem('blogPosts')); /* retrieves blog post */
    
  const blogContainer = document.getElementById('blogcontainer');
    
  for(let i=0;i<blogPosts.length;i++){ /* loops the blog post array, do not alter */
    const userName = blogPosts[i].username;
    const title = blogPosts[i].title;
    const comment = blogPosts[i].comment;
       
    const section = document.createElement('section'); /* blog post containers, do not alter */
    section.setAttribute("id","blogpost");
    section.setAttribute("data-index",i); 
    section.innerHTML = `<h9 id="blogtitle"></h9> 
                        <p id="blogcomment"></p>
                        <span id="bloguser"></span></section>` /* do not alter, required to keep each post box uniform with the page */
                        
    blogContainer.appendChild(section); /* allows dynamic HTML within the section, do not alter */
    const parent=document.querySelector(`[data-index = "${i}"]`);
                        
    const blogTitle=parent.querySelector('#blogtitle'); /* the following lines title/comment/user display the in box blog post information labels */
    blogTitle.textContent=title; 

    const blogComment=parent.querySelector('#blogcomment');
    blogComment.textContent=comment;
                      
    const blogUser=parent.querySelector('#bloguser');
    blogUser.textContent=`Blog post by: ${userName}`;
  }
}

  renderBlogPosts(); /* required to display all blog posts. */