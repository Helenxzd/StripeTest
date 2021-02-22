var count = 0;
var duration = 200;
var two_strap = [1, 2, 7, 8]
var four_strap = [3, 4, 9, 10]
var eight_strap = [5, 6, 11, 12]

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


function nextImage() {
	// load only when count = 0 or ischecked = true

	if (isChecked == true && count != 0) {
		count++;
		var result = document.getElementById("result");
		var img = document.getElementById("metamers");
		var srcIndex = img.src.lastIndexOf('/');
		var src = img.src.slice(srcIndex+1);


		result.innerText = result.innerText + src + ' ' + choiceId + ' ';
		var curnum = document.getElementById("curnum");
		curnum.innerText = count;
		if (count == 51) {
			var text = document.getElementById('result').innerText + ' stripe Number: ' + numberOfStraps+ ' duration: ' + duration;
			download("result.txt",text); 
		}

		clearTimeout(param);
		isChecked = false;

		numberOfStraps = document.getElementById("select").value;
		if (numberOfStraps == "2") {
			var imgArr = two_strap;
		}
		else if (numberOfStraps == "4") {
			var imgArr = four_strap;
		}
		else if (numberOfStraps == "8") {
			var imgArr = eight_strap;
		}


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
		img.style.display = "";
		var img_str = `${imgArr[rand]}`
		var img_str = img_str.padStart(3, '0')
		img.src = img_str+'.png'
		param = setTimeout("document.getElementById('metamers').style.display='none'",duration);
		console.log(param)

	}

	if (count == 0) {

		isChecked = false;
		count++;

		numberOfStraps = document.getElementById("select").value;
		if (numberOfStraps == "2") {
			var imgArr = two_strap;
		}
		else if (numberOfStraps == "4") {
			var imgArr = four_strap;
		}
		else if (numberOfStraps == "8") {
			var imgArr = eight_strap;
		}


		var rand = Math.floor(Math.random() * 4);
		var img = document.getElementById("metamers");
		duration = Number(document.getElementById("duration").value);
		console.log(duration)
		img.style.display = "";
		var img_str = `${imgArr[rand]}`
		var img_str = img_str.padStart(3, '0')
		img.src = img_str+'.png'
		param = setTimeout("document.getElementById('metamers').style.display='none'",duration);
		console.log(param)

	}

}


function checkCorrect(checkedId) {

	if (isChecked == true) {
		var classVal = document.getElementById("vertical").getAttribute("class");
		classVal = classVal.replace("button_onclick_right","");
		classVal = classVal.replace("button_onclick_wrong","");
		document.getElementById("vertical").setAttribute("class",classVal);

		var classVal = document.getElementById("horizontal").getAttribute("class");
		classVal = classVal.replace("button_onclick_right","");
		classVal = classVal.replace("button_onclick_wrong","");
		document.getElementById("horizontal").setAttribute("class",classVal);
		alert("You have already made choice")
	}

	else {
		isChecked = true;
		choiceId = checkedId;


		var button = document.getElementById(checkedId);

		var img = document.getElementById("metamers");
		var srcIndex = img.src.lastIndexOf('/');
		var src = img.src.slice(srcIndex+1);

		if (checkedId == "vertical") {
			if (src == "007.png" || src == "008.png" || src == "009.png" || src == "010.png" || src == "011.png" || src == "012.png") {
				button.classList.add("button_onclick_right");
			}
			else {
				button.classList.add("button_onclick_wrong");
			}
		}
		else if (checkedId == "horizontal") {
			if (src == "001.png" || src == "002.png" || src == "003.png" || src == "004.png" || src == "005.png" || src == "006.png") {
				button.classList.add("button_onclick_right");
			}
			else {
				button.classList.add("button_onclick_wrong");
			}
		}
	}

}