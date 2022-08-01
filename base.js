/*	GOOGLE
	----------------------------------------------------- */

eng.google = {
	pageTitle: "Google",
	logo: "google.png",
	places: {
		'Web'    : ["https://www.google.com/search?q=%query%", false],
		'Images' : ["https://images.google.com/images?q=%query%", false],
		'Maps'   : ["https://maps.google.com/maps?q=%query%", false]
	}
};


/*	WIKIPEDIA
	----------------------------------------------------- */
	
eng.wikipedia = {
	pageTitle: "Wikipedia",
	logo: "wikipedia.png",
	places: {
		'Search'        : ["https://wikipedia.org/wiki/Special:Search?search=%query%&fulltext=Search", false],
		'Go to Article' : ["https://wikipedia.org/wiki/Special:Search?search=%query%&go=Go", false],
	}
};


/*	YOUTUBE
	----------------------------------------------------- */

eng.youtube = {
	pageTitle: "YouTube",
	logo: "youtube.png",
	places: {
		'Videos' : ["https://www.youtube.com/results?search_query=%query%", false]
	},
};


/*	TWITTER
	----------------------------------------------------- */

eng.twitter = {
	pageTitle: "Twitter",
	logo: "twitter.png",
	places: {
		'Search Twitter' : ["https://twitter.com/search?q=%query%", false]
	}
};
