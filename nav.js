
function showContent(content) {
            // Your code to show the content goes here
            console.log("Showing content:", content);
            // For demonstration purposes, let's log the content to the console
        }

        window.onload = function() {
            showContent('home');
        };
  
   
        function showContent(page) {
            const loginDiv = document.getElementById('login');
            const signupDiv = document.getElementById('signup');

            if (page === 'login') {
                fetch('login.html')
                    .then(response => response.text())
                    .then(data => {
                        loginDiv.innerHTML = data;
                        loginDiv.style.display = 'block';
                        signupDiv.style.display = 'none';
                    })
                    .catch(error => {
                        console.error('Error fetching content:', error);
                        loginDiv.innerHTML = '<h2>Error</h2><p>Failed to load content for this page.</p>';
                    });
            } else if (page === 'signup') {
                fetch('signup.html')
                    .then(response => response.text())
                    .then(data => {
                        signupDiv.innerHTML = data;
                        signupDiv.style.display = 'block';
                        loginDiv.style.display = 'none';
                    })
                    .catch(error => {
                        console.error('Error fetching content:', error);
                        signupDiv.innerHTML = '<h2>Error</h2><p>Failed to load content for this page.</p>';
                    });
            }
        }
    



        function showContent(page) {
            const contentDiv = document.getElementById('main');

            if (page === 'login') {
                fetch('login.html')
                    .then(response => response.text())
                    .then(data => {
                        contentDiv.innerHTML = data;
                    })
                    .catch(error => {
                        console.error('Error fetching content:', error);
                        contentDiv.innerHTML = '<h2>Error</h2><p>Failed to load content for this page.</p>';
                    });
              
              
            }
             else if  (page === 'signup') {
                fetch('signup.html')
                    .then(response => response.text())
                    .then(data => {
                        contentDiv.innerHTML = data;
                    })
                    .catch(error => {
                        console.error('Error fetching content:', error);
                        contentDiv.innerHTML = '<h2>Error</h2><p>Failed to load content for this page.</p>';
                    });
              
              
            }
          
          
          else if (page === 'home') {
                fetch('home.html')
                    .then(response => response.text())
                    .then(data => {
                        contentDiv.innerHTML = data;
                    })
                    .catch(error => {
                        console.error('Error fetching content:', error);
                        contentDiv.innerHTML = '<h2>Error</h2><p>Failed to load content for this page.</p>';
                    });
              
              
            }
          
          
          else   if (page === 'contact') {
                fetch('contuct.html')
                    .then(response => response.text())
                    .then(data => {
                        contentDiv.innerHTML = data;
                    })
                    .catch(error => {
                        console.error('Error fetching content:', error);
                        contentDiv.innerHTML = '<h2>Error</h2><p>Failed to load content for this page.</p>';
                    });
              
              
            }
            else if (page === 'blog') {
              fetch('blog.html')
                .then(response => response.text())
                .then(data => {
                  contentDiv.innerHTML = data;
                })
                .catch(error => {
                  console.error('Error fetching content:', error);
                  contentDiv.innerHTML = '<h2>Error</h2><p>Failed to load content for this page.</p>';
                });
            }
       
         else  if (page === 'about') {
                fetch('about.html')
                    .then(response => response.text())
                    .then(data => {
                        contentDiv.innerHTML = data;
                    })
                    .catch(error => {
                        console.error('Error fetching content:', error);
                        contentDiv.innerHTML = '<h2>Error</h2><p>Failed to load content for this page.</p>';
                    });
            }
            else if (page === 'education') {
              fetch('education.html')
                .then(response => response.text())
                .then(data => {
                  contentDiv.innerHTML = data;
                })
                .catch(error => {
                  console.error('Error fetching content:', error);
                  contentDiv.innerHTML = '<h2>Error</h2><p>Failed to load content for this page.</p>';
                });
            }
                else  if (page === 'feedback') {
                fetch('sugest.html')
                    .then(response => response.text())
                    .then(data => {
                        contentDiv.innerHTML = data;
                    })
                    .catch(error => {
                        console.error('Error fetching content:', error);
                        contentDiv.innerHTML = '<h2>Error</h2><p>Failed to load content for this page.</p>';
                    });
              
            }
               else  if (page === 'product') {
                fetch('product.html')
                    .then(response => response.text())
                    .then(data => {
                        contentDiv.innerHTML = data;
                    })
                    .catch(error => {
                        console.error('Error fetching content:', error);
                        contentDiv.innerHTML = '<h2>Error</h2><p>Failed to load content for this page.</p>';
                    });
              
            }
            else {
                contentDiv.innerHTML = `<h2>${page}</h2><p>This is the ${page} page content.</p>`;
            }
        }