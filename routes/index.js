var express = require('express');
var router = express.Router();
const { registerPage, loginPage, profilePage, feedPage, storyPage, nextStoryPage, userPosts, savedPosts, searchUser, editPage, registerUser, loginUser, logOutUser, uploadPostPage, uploadProfilePicture, updateUserDetails, showSuggestions, showUserProfile, showSearchUser, followUser, showFollowers, showFollowings, removeFollowers, uploadPostAndStory, likePost, doubleClickLike, savePost, createComments, showComments, deletePost } = require('../controllers/indexController');
const isloggedIn = require("../utils/auth");

// /GET Register Page
router.get('/', registerPage);

// /POST Register User
router.post('/register', registerUser);

// /GET Login Page
router.get('/login', loginPage);

// /POST Login User
router.post('/login', loginUser);

// /GET Log-Out User
router.get('/logout', logOutUser);

// /GET Profile Page                
router.get('/profile', isloggedIn, profilePage);

// /GET Edit 
router.get('/edit', isloggedIn, editPage);

// /POST Upload Profile Picture 
router.post('/uploadProfilePicture', isloggedIn, uploadProfilePicture);

// /GET Update User Details
router.post('/update', isloggedIn, updateUserDetails);

// /GET Upload Post Page 
router.get('/upload', isloggedIn, uploadPostPage);

// /GET Feed Page 
router.get('/feed', isloggedIn, feedPage);

// /GET Search User Page
router.get('/search', isloggedIn, searchUser);

// /GET All Search User
router.get('/username/:username', isloggedIn, showSearchUser);

// /GET Story Page
router.get('/story/:number', isloggedIn, storyPage);

// /GET Next Story Page
router.get('/story/:id/:number', isloggedIn, nextStoryPage);

// /GET User Posts
router.get('/userpost/:userId/:postId', isloggedIn, userPosts);

// /GET Saved Posts 
router.get('/savedpost/:userId/:postId', isloggedIn, savedPosts);

// /GET Show Suggetions
router.get('/suggestions', isloggedIn, showSuggestions);

// /GET Show User Porfile
router.get('/userprofile/:username', isloggedIn, showUserProfile);

// /GET Follow User
router.get('/follow/:userId', isloggedIn, followUser);

// /GET Show Followers
router.get('/Followers/:userId', isloggedIn, showFollowers);

// /GET Show Followings
router.get('/Followings/:userId', isloggedIn, showFollowings);

// /GET Remove Followers
router.get('/RemoveFollowers/:userId', isloggedIn, removeFollowers);

// /POST Upload Post and Story
router.post('/uploadPost', isloggedIn, uploadPostAndStory);

// /GET Like Post
router.get('/like/:postId', isloggedIn, likePost);

// /GET Double Click Like
router.get('/Clicklike/:postId', isloggedIn, doubleClickLike);

// /GET Save Post
router.get('/save/:postId', isloggedIn, savePost);

// /GET Create Comments
router.get('/createComment/:comment/:postId', isloggedIn, createComments);

// /GET Show Comments
router.get('/comments/:postId', isloggedIn, showComments);

// /GET Delete Post
router.get('/delete/:postId', isloggedIn, deletePost);






module.exports = router;
