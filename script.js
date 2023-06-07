fetch('data.json')
	.then(response => response.json())
	.then(data => {
		const postsContainer = document.getElementById('posts-container');
		data.forEach(post => {
			const postElement = document.createElement('div');
			postElement.classList.add('post');
			postElement.innerHTML = `
				<h2>${post.title}</h2>
				<h4>${post.objectives}</h4>
				<img src=${post.image}>
				<p>${post.description}</p>
			`;
			postsContainer.appendChild(postElement);
		});
	})
	.catch(error => console.error(error));
