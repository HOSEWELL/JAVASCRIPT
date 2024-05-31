{
async function fetchAndDisplayPosts() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let posts = await response.json();
  
      const postsContainer = document.getElementById('posts-container');
      
      posts.forEach(post => {
        let postElement = document.createElement('div');
        postElement.classList.add('post');
        
        let titleElement = document.createElement('h2');
        titleElement.textContent = post.title;
        
        let bodyElement = document.createElement('p');
        bodyElement.textContent = post.body;
        
        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);
        postsContainer.appendChild(postElement);
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  
  fetchAndDisplayPosts();
}