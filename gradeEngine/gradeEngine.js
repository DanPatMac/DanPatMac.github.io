function chooseStudent() {
  students.forEach(function(student) {
    option = document.createElement("option");
    option.value = student.idNumber;
    option.innerHTML = student.lastName + ", " + student.firstName;
    document.getElementById("dropdown").appendChild(option);
  });
}

function idCheck() {
  choice = document.getElementById("dropdown");
  action = choice[choice.selectedIndex];
  makeCourseRows(students[action.index-1]);
}

function makeCourseRows(student) {
  document.getElementById("courseRows").innerHTML = ""; 
  document.getElementById("studentName").innerHTML = "Student Name";
  document.getElementById("streetName").innerHTML = "Street Name";
  document.getElementById("cityStateZip").innerHTML = "City, State, Zip Code"; 
  document.getElementById("studentId").innerHTML = "Student ID";
  document.getElementById("studentImage").src="https://i.imgur.com/IGY0n6f.png";
  student.courses.forEach(function(course) {
    row = document.createElement("tr");
    accum = 0;
    document.getElementById("studentImage").src=student.avatar;
    row.appendChild(createTD(course.courseName));
		document.getElementById("studentName").innerHTML = student.lastName + " " + student.firstName;
    document.getElementById("streetName").innerHTML = student.streetAddress;
		document.getElementById("cityStateZip").innerHTML = student.city + "," + student.state + "," + student.zipCode;
		document.getElementById("studentId").innerHTML = student.idNumber;
    row.appendChild(createTD(course.instructor));
    row.appendChild(createTD(course.termGrades[0]));
    row.appendChild(createTD(course.termGrades[1]));
    row.appendChild(createTD(course.termGrades[2]));
    row.appendChild(createTD(course.termGrades[3]));
    for (i = 0; i < course.termGrades.length; i++) {
      accum += course.termGrades[i];
    }
    row.appendChild(createTD(Math.ceil(accum / course.termGrades.length)));
    document.getElementById("courseRows").appendChild(row);
  });
}

/*function makePersonalInfo(student) {
  document.getElementById("personalInfo").innerHTML = "";
  student.courses.forEach(function(course) {
    area = document.createElement("span");
    row.appendChild(createPersonal(course.courseName));
    document.getElementById("personalInfo").appendChild(area);
  });
}*/

function createTD(content) {
  cell = document.createElement("td");
  cell.innerHTML = content;
  return cell;
}

students = [{
  'idNumber': '123455678',
  'avatar': 'https://lorempixel.com/200/200/people/1/',
  'lastName': 'Marian',
  'firstName': 'Smith',
  'streetAddress': '1234 Main Street',
  'city': 'San Antonio',
  'state': 'TX',
  'zipCode': '78211',
  'courses': [{
    'courseName': 'Calculus',
    'instructor': 'Jones',
    'termGrades': [64, 83, 92, 96]
  }, {
    'courseName': 'English',
    'instructor': 'Baxter',
    'termGrades': [66, 90, 95, 100]
  }, {
    'courseName': 'History',
    'instructor': 'Arteaga',
    'termGrades': [84, 63, 97, 65]
  }]
}, {
  'idNumber': '421840493',
  'avatar': 'https://lorempixel.com/200/200/people/3/',
  'lastName': 'Waylon',
  'firstName': 'Dalton',
  'streetAddress': '71 Pligrim Ave.',
  'city': 'San Antonio',
  'state': 'TX',
  'zipCode': '78213',
  'courses': [{
    'courseName': 'Drama',
    'instructor': 'Lane',
    'termGrades': [85, 72, 84, 78]
  }, {
    'courseName': 'Spanish',
    'instructor': 'Contreras',
    'termGrades': [78, 93, 68, 87]
  }, {
    'courseName': 'Reading',
    'instructor': 'Ayala',
    'termGrades': [93, 100, 71, 85]
  }]
}, {
  'idNumber': '56883380',
  'avatar': 'https://lorempixel.com/200/200/people/6/',
  'lastName': 'Justine',
  'firstName': 'Henderson',
  'streetAddress': '4 Goldfield Rd.',
  'city': 'San Antonio',
  'state': 'TX',
  'zipCode': '78214',
  'courses': [{
    'courseName': 'Sociology',
    'instructor': 'McMahon',
    'termGrades': [77, 95, 94, 70]
  }, {
    'courseName': 'Phys. Ed.',
    'instructor': 'Perry',
    'termGrades': [97, 69, 74, 90]
  }, {
    'courseName': 'Basket Making',
    'instructor': 'Mitchell',
    'termGrades': [70, 99, 76, 96]
  }]
}, {
  'idNumber': '308532970',
  'avatar': 'https://lorempixel.com/200/200/people/8/',
  'lastName': 'Mathias',
  'firstName': 'Cobb',
  'streetAddress': '514 S. Magnolia Ave.',
  'city': 'San Antonio',
  'state': 'TX',
  'zipCode': '78216',
  'courses': [{
    'courseName': 'Algebra',
    'instructor': 'Ramirez',
    'termGrades': [95, 79, 85, 99]
  }, {
    'courseName': 'Fashion Design',
    'instructor': 'Huynh',
    'termGrades': [74, 74, 78, 82]
  }, {
    'courseName': 'US History',
    'instructor': 'Shaffer',
    'termGrades': [81, 71, 72, 76]
  }]
}, {
  'idNumber': '74129419',
  'avatar': 'https://lorempixel.com/200/200/people/9/',
  'lastName': 'Angela',
  'firstName': 'Walker',
  'streetAddress': '70 Bowman St.',
  'city': 'San Antonio',
  'state': 'TX',
  'zipCode': '78220',
  'courses': [{
    'courseName': 'Geometry',
    'instructor': 'Davies',
    'termGrades': [73, 93, 73, 82]
  }, {
    'courseName': 'Literature',
    'instructor': 'Hoffman',
    'termGrades': [68, 93, 87, 87]
  }, {
    'courseName': 'Astronomy',
    'instructor': 'Hanna',
    'termGrades': [83, 77, 82, 99]
  }]
}];
