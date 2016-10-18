app.factory("PostsSrv", function() {
	console.log('me');
	var posts = [];
	  return {
		    getPosts: function () {
		    	return posts;
		    },
		    getAPost: function (idParam){
		    	for (var i = 0; i< posts.length; i++){
		    		if(posts[i].id == idParam) {
		    	//		console.log(posts[i]);
		    			return posts[i];
		    		}
		    	}
		    },
		    addPost: function (postObject) {
		    	posts.push(postObject);
		    	return posts;
		    },
		    emptyArray: function () {
		    	posts.length = 0;
		    	return posts;
		    }
	  
		  }
});