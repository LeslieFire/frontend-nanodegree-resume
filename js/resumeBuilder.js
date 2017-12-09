/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name : '杨飞',
	role : '数据工程师',
	contacts : {
			mobile: '18588800350',
			email: '249893977@qq.com',
			github: 'https://github.com/LeslieFire',
			// twitter: '',
			location: '广州',
		},
	welcomeMessage: 'slow is fast',
	skills: ['数据采集', '数据清洗', '数据分析', '分析技能培训', '项目管理', '团队管理'],
	biopic: 'http://img2.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=214&gp=0.jpg',
	display: function() {
		 var headerName = HTMLheaderName.replace('%data%', bio.name)
		 var headerRole = HTMLheaderRole.replace('%data%', bio.role)
		 
		 $('#header').prepend(headerRole)
		 $('#header').prepend(headerName)

		 // var headerMobile = HTMLmobile.replace('%data%', bio.contacts.mobile)
		 // var headerEmail = HTMLemail.replace('%data%', bio.contacts.email)
		 // var headerGithub = HTMLgithub.replace('%data%', bio.contacts.github)
		 // var headerLocation = HTMLlocation.replace('%data%', bio.contacts.location)
		 // $('#topContacts').append(headerMobile)
		 // $('#topContacts').append(headerEmail)
		 // $('#topContacts').append(headerGithub)
		 // $('#topContacts').append(headerLocation)

		 for (var contact in bio.contacts) {
		 	var headerContact = HTMLcontactGeneric.replace('%data%', bio.contacts[contact]).replace('%contact%', contact);
		 	$('#topContacts').append(headerContact)
		 }

		 var headerwm = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage)
		 var headerpic = HTMLbioPic.replace('%data%', bio.biopic)
		 $('#header').append(headerwm)
		 $('#header').append(headerpic)

		 $('#header').append(HTMLskillsStart)

		 for (var i = 0; i < bio.skills.length; i++) {
		 	var sk = HTMLskills.replace('%data%', bio.skills[i])
		 	$('#header').append(sk)
		 }
	}
 }



 bio.display()



var education = {
	schools: [
	 	{
	 		name: '暨南大学',
	 		location: '广州',
	 		degree: '本科',
	 		majors: '计算机科学与技术',
	 		dates: '2013年6月',
	 		url: 'https://www.jnu.edu.cn/'
	 	}
	],

	onlineCourses: [
		{
			title: '深度学习',
			school: 'udacity',
			date: '2017年6月',
			url: 'udacity.com'
		}
	],

	display: function() {
		$('#education').append(HTMLschoolStart);

		for (var i = 0; i < education.schools.length; i++) {
			var school = education.schools[i];
			var eduNam = HTMLschoolName.replace('%data%', school.name);
			var eduLoc = HTMLschoolLocation.replace('%data%', school.location);
			var eduDeg = HTMLschoolDegree.replace('%data%', school.degree);
			var eduMaj = HTMLschoolMajor.replace('%data%', school.majors);
			var eduDat = HTMLschoolDates.replace('%data%', school.dates);

			$('.education-entry').append(eduNam + eduDeg);
			$('.education-entry').append(eduDat);
			$('.education-entry').append(eduMaj);
			$('.education-entry').append(eduLoc);

		}
		
		$('#education').append(HTMLonlineClasses);
		$('#education').append(HTMLschoolStart);

		for (var i = 0; i < education.onlineCourses.length; i++) {
			var onCour = education.onlineCourses[i];

			var onTit = HTMLonlineTitle.replace('%data%', onCour.title);
			var onSch = HTMLonlineSchool.replace('%data%', onCour.school);
			var onDat = HTMLonlineDates.replace('%data%', onCour.date);
			var onUrl = HTMLonlineURL.replace('%data%', onCour.url);

			$('.education-entry').last().append(onTit  +  onSch);
			$('.education-entry').last().append(onDat);
			$('.education-entry').last().append(onUrl);
		}
	}
}

education.display()


var work = {
	jobs : [
		{
			employer: '广州数说故事信息科技有限公司',
			title: '数据挖掘工程师',
			location: '广州黄埔大道西100号富力盈泰大厦A座703',
			dates: '08/2015 - 至今',
			description: '数据民工' 
		}
	],

	display: function() {
		$('#workExperience').append(HTMLworkStart);

		for (var i = 0; i < this.jobs.length; i++) {
			var job = this.jobs[i];

			var jobEmp = HTMLworkEmployer.replace('%data%', job.employer);
			var jobTit = HTMLworkTitle.replace('%data%', job.title);
			var jobLoc = HTMLworkLocation.replace('%data%', job.location);
			var jobDat = HTMLworkDates.replace('%data%', job.dates);
			var jobDes = HTMLworkDescription.replace('%data%', job.description);

			$('.work-entry').append(jobEmp + jobTit);
			$('.work-entry').append(jobDat);
			$('.work-entry').append(jobLoc);
			$('.work-entry').append(jobDes);
		}
	}
}

work.display()


var projects = {
	projects: [
		{
			title: '数说立方',
			dates: '08/2015 - 12/2015',
			description: '大数据分析可视化平台',
			images: 'http://datastory.com.cn/dist/cube.png?max_age=999999&46575d2fa7314cc320ebd664d7d94180'
		}
	],

	display: function() {
		$('#projects').append(HTMLprojectStart)

		for (var i = 0; i < this.projects.length; i++) {
			var poj = this.projects[i];

			var pojTit = HTMLprojectTitle.replace('%data%', poj.title);
			var pojDat = HTMLprojectDates.replace('%data%', poj.dates);
			var pojDes = HTMLprojectDescription.replace('%data%', poj.description);
			var pojImg = HTMLprojectImage.replace('%data%', poj.images);

			$('.project-entry').append(pojTit)
			$('.project-entry').append(pojDat)
			$('.project-entry').append(pojDes)
			$('.project-entry').append(pojImg)
		}
	}
}

projects.display()












