var count = 0;
var totalNumber = 50;
var correctNumber = 0;
// var two_strap = [1, 2, 7, 8]
// var four_strap = [3, 4, 9, 10]
// var eight_strap = [5, 6, 11, 12]

var testPatterns1 = [11, 12, 13, 14];
var testPatterns2 = [21, 22, 23, 24];
var testPatterns3 = [31, 32, 33, 34];
var testPatterns4 = [41, 42, 43, 44];


document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowDown') {
  	event.preventDefault();
    var element = document.getElementById("next")
    element.click()
  }
  else if (event.code == 'ArrowLeft') {
  	event.preventDefault();
    var element = document.getElementById("vertical")
    element.click()
  }

  else if (event.code == 'ArrowRight') {
  	event.preventDefault();
    var element = document.getElementById("horizontal")
    element.click()
  }
});

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
 
  element.style.display = 'none';
  document.body.appendChild(element);
 
  element.click();
 
  document.body.removeChild(element);
}
 
 


var param; //timer index
var isChecked = false;
var choiceId;
var numberOfStraps;
var duration;
var secondFlag = false;


function nextImage() {
	// load only when count = 0 or ischecked = true
	// when count is full, move to next round of test with a new duration

	if (isChecked == true || count == 0) {
		clearTimeout(param);
		isChecked = false;

		// numberOfStraps = document.getElementById("select").value;
		// if (numberOfStraps == "2") {
		// 	var imgArr = two_strap;
		// }
		// else if (numberOfStraps == "4") {
		// 	var imgArr = four_strap;
		// }
		// else if (numberOfStraps == "8") {
		// 	var imgArr = eight_strap;
		// }


		var classVal = document.getElementById("vertical").getAttribute("class");
		classVal = classVal.replace("button_onclick_right","");
		classVal = classVal.replace("button_onclick_wrong","");
		document.getElementById("vertical").setAttribute("class",classVal);

		var classVal = document.getElementById("horizontal").getAttribute("class");
		classVal = classVal.replace("button_onclick_right","");
		classVal = classVal.replace("button_onclick_wrong","");
		document.getElementById("horizontal").setAttribute("class",classVal);


		var rand = Math.floor(Math.random() * 4);
		var img = document.getElementById("metamers");
		duration = Number(document.getElementById("duration").value);
		console.log(duration)

        // find previous src if count != 0
        if (count != 0) {
        	var srcIndex = img.src.lastIndexOf('/');
			var srcPng = img.src.slice(srcIndex+1);
			var srcNum = srcPng.split('.')[0];
			console.log(srcNum)
			// find testPatterns based on previous srcNum
			if (srcNum[0] == '1') {
				testPatterns = testPatterns2;
			}
			else if (srcNum[0] == '2') {
				testPatterns = testPatterns3;
			}
			else if (srcNum[0] == '3') {
				testPatterns = testPatterns4;
			}
			else if (srcNum[0] == '4') {
				testPatterns = testPatterns1;
			}

        }
        else {
        	// set testPatterns to be the first one
        	testPatterns = testPatterns1;

        }


		img.style.display = "";
		var img_str = `${testPatterns[rand]}`
		img.src = 'testPatterns/'+img_str+'.png'
		param = setTimeout("document.getElementById('metamers').style.display='none'",duration);
		console.log(param)

	}

}


function checkCorrect(checkedId) {

	if (isChecked == true) {
		alert("You have already made choice")
	}

	else {
		isChecked = true;
		choiceId = checkedId;
		count++;
		var curnum = document.getElementById("curnum");
		curnum.innerText = count;

		var button = document.getElementById(checkedId);

		var img = document.getElementById("metamers");
		var srcIndex = img.src.lastIndexOf('/');
		var src = img.src.slice(srcIndex+1);

		if (checkedId == "vertical") {
			if (src == "11.png" || src == "21.png" || src == "31.png" || src == "41.png" || src == "12.png" || src == "22.png" || src == "32.png" || src == "42.png") {
				button.classList.add("button_onclick_right");
				correctNumber++;
			}
			else {
				button.classList.add("button_onclick_wrong");
			}
		}
		else if (checkedId == "horizontal") {
			if (src == "13.png" || src == "23.png" || src == "33.png" || src == "43.png" || src == "14.png" || src == "24.png" || src == "34.png" || src == "44.png") {
				button.classList.add("button_onclick_right");
				correctNumber++;
			}
			else {
				button.classList.add("button_onclick_wrong");
			}
		}

		//write to result
		var result = document.getElementById("result");
		var img = document.getElementById("metamers");
		var srcIndex = img.src.lastIndexOf('/');
		var src = img.src.slice(srcIndex+1);

		result.innerText = result.innerText + src + ' ' + checkedId + ' ';

		if (count == 50) {
			if (duration == "200") {
				var accuracy = (100 * correctNumber/totalNumber).toFixed(2);
				var text = document.getElementById('result').innerText + ' stripe Number: ' + numberOfStraps+ ' duration: ' + duration + ' accuracy: ' + accuracy + '%' + '  ';
				result.innerText = text;
				alert(`finished the 200ms test, accuracy: ${accuracy}%`)
				download("result200.txt",text)
				var nextstage = document.getElementById('nextstage')
			    nextstage.style.display = "block"

			}
			else if (duration == "400") {
				var accuracy = (100 * correctNumber/totalNumber).toFixed(2);
				var text = document.getElementById('result').innerText + ' stripe Number: ' + numberOfStraps+ ' duration: ' + duration + ' accuracy: ' + accuracy + '%' + '  ';
				result.innerText = text;
				alert(`finished the 500ms test, accuracy: ${accuracy}%`)
				download("result400.txt",text)
				var nextstage = document.getElementById('nextstage')
			    nextstage.style.display = "block"
			}
			else if (duration == "800") {
				var accuracy = (100 * correctNumber/totalNumber).toFixed(2);
				var text = document.getElementById('result').innerText + ' stripe Number: ' + numberOfStraps+ ' duration: ' + duration + ' accuracy: ' + accuracy + '%' + '  ';
				result.innerText = text;
				alert(`finished the 800ms test, accuracy: ${accuracy}%`)
				download("result800.txt",text)
				var nextstage = document.getElementById('nextstage')
			    nextstage.style.display = "block"
			}
		}

	}

}