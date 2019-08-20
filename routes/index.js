/********************************************************************
GLOBAL VARIABLES. 
********************************************************************/
var express = require('express');
var router = express.Router();
const request = require('request');

const apiKey = '1fb720b97cc13e580c2c35e1138f90f8';
const apiBaseUrl = 'http://api.themoviedb.org/3';
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

/********************************************************************
GET - home page. 
********************************************************************/
router.get('/', function(req, res, next) {
  const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
  request.get(nowPlayingUrl, (error, response,movieData)=>{
    const parseData = JSON.parse(movieData)
    console.log(parseData)
    res.render('index',{
      parseData: parseData.results,
      imageBaseUrl
    });
  })
  console.log(nowPlayingUrl)
});

/********************************************************************
GET - single movie page.
********************************************************************/
router.get('/movie/:id', (req,res,next)=>{
  const movieId = req.params.id;
  const thisMovieURL = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey}`
  console.log(movieId)
  request.get(thisMovieURL, (error, response, movieData)=>{
    const parseData = JSON.parse(movieData);
    console.log("parseData: ",parseData)
    console.log(imageBaseUrl)
    res.render("single-movie", {
      parseData,
      imageBaseUrl
    })
  })
})










/********************************************************************
GET - log-in page 
********************************************************************/

/********************************************************************
POST - log-in page 
********************************************************************/


module.exports = router;
