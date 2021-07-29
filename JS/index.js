var akanName = function(){
    var daysOfTheWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      var maleNames = [
        "Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",
        "Yaw",
        "Kofi",
        "Kwame"
      ];
      var femaleNames = [
        "Akosua",
        "Adwoa",
        "Abenaa",
        "Akua",
        "Yaa",
        "Afua",
        "Ama"
      ];

      var name= (document .getElementById("NAME").value);
      var day= parseInt(document .getElementById("DD").value);
      var month= parseInt(document .getElementById("MM").value);
      var year= parseInt(document .getElementById("YY").value);
      var maleNames=(document .getElementById("maleGender"));
      var femaleNames=(document .getElementById("femaleGender"));
      var output=(document .getElementById("output"));

      var date = new Date(year + "-" + month + "-" + day);
      var dayBorn = date.getDay();

      if (day<1 || day>31) {
        output.style.background="aqua"
        output.style.color="black"
        output.innerHTML="Hey,please insert a valid date"
      }

      if (month<1 || month>12) {
        output.style.background="aqua"
        output.style.color="black"
        output.innerHTML="Hey,please insert a valid month"
      }

      if (year.toString().length !== 4){
      output.style.background="aqua"
      output.style.color="black"
      output.innerHTML="Hey,please insert a valid year"
    }

    else if(maleGender.checked()){
        output.style.background="aqua"
        output.style.color="black"
        output.innerHTML="Hello" + name + "you were born on a" + daysOfTheWeek[results] + "and your Akan name is" +  maleNames[results] ;


    }



        

















}