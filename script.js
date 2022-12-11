const documentHeight = () => {
	const doc = document.documentElement
	doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
}

window.addEventListener('resize', documentHeight);
documentHeight();

let contacts = [
	{
		'fname': 'ben',
		'lname': 'sosinski',
		'name': 'Ben Sosinski',
		'title': 'VP',
		'email': 'ben.sosinski@embodee.com',
		'link': 'www.embodee.com'
	},
	{
		'fname': 'isabel',
		'lname': 'morales',
		'name': 'Isabel Morales',
		'title': 'Marketing',
		'email': 'marketing@embodee.com',
		'link': 'www.embodee.com'
	},
	{
		'fname': 'sina',
		'lname': 'wolper',
		'name': 'Sina Wolper',
		'title': 'Useless Genius',
		'email': 'sina.wolper@embodee.com',
		'link': 'www.embodee.com'
	},
];

let rolodex = document.getElementById('directory');

function init() {
	for(i = 0; i < contacts.length; i++) {
		let contact = document.createElement('li');
		contact.setAttribute('id', contacts[i].fname);
		contact.setAttribute('class', 'contact');
		contact.innerHTML = `<a href='cards/${contacts[i].fname}.html'><img src='images/profile-pictures/${contacts[i].fname}.png'>${contacts[i].name}</a>`;
		rolodex.appendChild(contact);
	}
}
init();
