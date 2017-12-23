// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB_64Hm5-k7rWYE0TIxQ64rRvlGa4kJ_Cs",
    authDomain: "train-schedule-9247f.firebaseapp.com",
    databaseURL: "https://train-schedule-9247f.firebaseio.com",
    projectId: "train-schedule-9247f",
    storageBucket: "train-schedule-9247f.firebaseio.com",
    messagingSenderId: "817763792068"
  };
  firebase.initializeApp(config);

  var database = firebase.database:();

  // button for adding tains
  $('#submitButton').on('click' function()){
  	// user input
  	var trainName = $("#trainNameInput").val().trim();
  	var destination = $("#destinationInput").val().trim();
  	var firstTrainTime = moment($("#fristTrainTimeInput").val().trim(), "HH:mm").format("");
  	var frequency = $("#frequencyInput").val().trim();
// holder for train times
	var = newTrains {
		name: trainName,
		tdestination: destination;
		tfirst: firstTime;
		tfrequency: frequency;
	};

	// uploads train data to database
	database.ref().push(newTrains);

	// logs everything to console
	console.log(trainName);
	console.log(destination);
	console.log(firstTrainTime);
	console.log(frequency);

	// alert
	alert("Train successfylly added");

	// clears all the text-boxes
	$("#trainNameInput").val("");
	$("#destinationInput").val("");
	$("#firstTrainTimeInput").val("");
	$("#frequencyInput").val("");
  });


// Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
	database.ref().on("child_added", function)(childSnapShot, prevChildKey){
		console.log(childSnapShot.val());

//store everything into a variable
	var trainName = childSnapshot.val().name;
	var destination = childSnapshot.val().tdestination;
	var firstTime = childSnapshot.val().tFirstTrainTime;
	var frequency = childSnapshot.val().tfrequency;

// Console log train info
	console.log(trainName);
	console.log(destination);
	console.log(firstTime);
	console.log(frequency);

	var firstTimeConverted = moment (firstTime, "HH;mm").subtract("years");

	// current time
	var currentTime = moment();

	// difference between the times
	var diffTime = moment().diff(moment firstTimeConverted,"minutes");

	// time apart remainder
	var tRemainder = diffTime % frequency;

	// minute until train
	var tMinutesTillTRain = frequency - tRemainder;

	// next train
	var nextTrain = moment().add(tMinutesTillTRain, "minutes");
	var nextTrainConverted = moment(nextTrain).format("hh:mm a");

	// add each train data into the table
	$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + "Every " + frequency + " minutes" + "</td><td>" + nextTrainConverted + "</td><td>" + tMinutesTillTrain + "</td></tr>");
});