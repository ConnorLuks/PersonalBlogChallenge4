const username=document.getElementById('username');
const title=document.getElementById('title');
const comment=document.getElementById('comment');
const submit=document.getElementById('submit');

function alertUser(){window.alert('Please fill out all required 3 fields') /* output to user if a box is not filled out */
}

submit.addEventListener('click', function (event) {
    event.preventDefault();
    if(username.value === ''|| title.value === '' || comment.value ===''){
        alertUser();
        
    }else{
        const blogPost = {
            username:username.value,
            title:title.value,
            comment:comment.value}
            const blogPostsArray = JSON.parse(localStorage.getItem('blogPosts'));
            if(blogPostsArray !== null){
                blogPosts = blogPostsArray;
                blogPosts.push(blogPost);
                localStorage.setItem('blogPosts',JSON.stringify(blogPosts)); /* strings the blog post to local storage */
                location.href="blog.html"; /* page direct to collective blog, after all 3 boxes are filled out */
            }

            else{
                let blogPosts = [];
                blogPosts.push(blogPost);
                localStorage.setItem('blogPosts',JSON.stringify(blogPosts)); /* strings the blog post to local storage */
                location.href="blog.html"; /* page redirect to collective blog, after all 3 boxes are filled out */
            }

        }})