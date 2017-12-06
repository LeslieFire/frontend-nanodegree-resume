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


