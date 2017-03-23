  var root = 'https://api.github.com/'
	var repoName = 'javascript-fetch-lab/'
  var learnCo = 'learn-co-curriculum/'
  // const token = '892c7b63a297535662694a2a890b50449ee1637a'

function getIssues(json) {
	fetch(`${root}repos/CorinneKelly/${repoName}issues`)
 .then(response => response.json())
 .then(json => showIssues(json))
}

function showIssues(json) {
	var results = $("#issues-template").html()
	var template = Handlebars.compile(results)
	var html = template(json)
	$("#issues").html(html)
}

function createIssue() {
  //use fetch to fork it!
  var title = $("#title").html()
  var body = $("#body").html()
  var data = {title: `${title}`, body: `${body}`}
 fetch(`${root}repos/CorinneKelly/${repoName}issues`, {
	 headers: {
		    Authorization: 'token 892c7b63a297535662694a2a890b50449ee1637a'

		  },
		  body: `${data}`,
 			method: 'post'

		})
 .then(response => response.json())
 .then(json => getIssues(json))
}

function showResults(json) {
	debugger
	var results = $("#repo-template").html()
	var template = Handlebars.compile(results)
	var html = template(json)
	$("#results").html(html)
}

function forkRepo() {
  //use fetch to fork it!
  var url = `${root}repos/${learnCo}${repoName}`
  var token = ''
  debugger
 fetch(`${root}repos/${learnCo}${repoName}`, {
	 headers: {
		    Authorization: `token ${token}`
		  },
	 			method: 'post'
		})
 .then(response => response.json())
 .then(json => showResults(json));
}

function getToken() {

  return ''
}

// fetch("/drinks.json")
// .then((response) =>{
// 	return response.json()
// })
// .then((data) => { data = Array(16)
// 	debugger
// })

// $.getJSON = ("/drinks.json") => {
// 	.then((data) => {

// 	})


