// ============================================================
// УРОК 3 - DOM: отримання елементів, класи, стилі, атрибути
// ============================================================

// Задача №1
// Отримати елемент <body> в константу

function task1() {
	// поверніть константу з body
	// ваш код тут
	const bodyElement = document.querySelector(`body`)
	console.log(bodyElement)
	return bodyElement;
}


// Задача №2
// Функція додає в елемент з ID 'task2-output' список UL з N елементами LI.
// де count - кількість LI, за замовченням 3

function task2(count = 3) {
	// ваш код тут
	const idElement = document.querySelector('#task2-output');
	if (idElement) {
		const listElement = document.createElement('ul');
		for (let i = 1; i <= count; i++) {
			const liElements = document.createElement('li');
			liElements.textContent = `N`;
			listElement.appendChild(liElements);
		}
		idElement.insertAdjacentElement("afterbegin", listElement);
		console.log('правильно')
	} else {
		console.log('Не правильно')
	}
}
task2();



// Задача №3
// Додати клас 'loaded' до body.
// Якщо клас є - зробити колір тексту зеленим.

function task3() {
	// ваш код тут
	const bodyElement = document.querySelector(`body`);
	if (bodyElement) {
		bodyElement.className += `loaded`
		bodyElement.style.color = `green`
		if (`.loaded`) {
			console.log('правильно')
		} else {
			console.log('Не правильно')
		}
	}
}

task3()





// Задача №4
// Дано три елементи з класом 'item'.
// Кожному додати клас 'active' та змінити контент на "Елемент №N" (з 1).

function task4(root = document) {
	// ваш код тут
	const itemElements = root.querySelectorAll(`.item`);
	if (itemElements) {
		itemElements.forEach((item, i) => {
			item.classList.add(`active`);
			item.textContent = `Елемент №${i + 1}`;
		})
		console.log('правильно')
	} else {
		console.log('Не правильно')
	}
}

task4()


// Задача №5
// Прокрутити скрол до елементу з класом 'button'.
// Функція має викликати scrollIntoView на цьому елементі.

function task5() {
	// ваш код тут
	const someElement = document.querySelector(`.button`);
	if (someElement) {
		function scrollToButton(element) {
			const block = element.dataset.scroll || "start"
			element.scrollIntoView({
				block: block,
				inline: "nearest",
				behavior: "smooth"
			})
		}
		scrollToButton(someElement)
		console.log('правильно')
	} else {
		console.log('Не правильно')
	}
}

task5()



// Задача №6
// Посилання з класом 'link'.
// Додати data-атрибут data-value="100".
// Якщо значення < 200 - колір тексту червоний.

function task6() {
	// ваш код тут
	const someLink = document.querySelector(`.link`);
	if (someLink) {
		const value = parseFloat(someLink.dataset.value) || 100
		someLink.dataset.value = value;
		console.log(value);
		if (value < 200) {
			someLink.style.color = `red`
		}
	}
}

task6()


// Не чіпати - потрібно і для тестів, і для браузера
if (typeof module !== 'undefined') module.exports = { task1, task2, task3, task4, task5, task6 };
export { task1, task2, task3, task4, task5, task6 };
