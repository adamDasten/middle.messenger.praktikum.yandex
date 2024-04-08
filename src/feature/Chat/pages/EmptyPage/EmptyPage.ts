import Aside from "../../../../components/Aside";
import toProfileArrow from "#/static/to-profile.svg";
import ChatItem from "../../../../components/ChatItem";
import searchSvg from "#/static/searchSvg.svg";
import EmptyTalk from "../../../../components/EmptyTalk";
import cactusImg from "#/static/sun_kaktus.svg";
import ChatTemplate from "../../templates/ChatTemplate";

const chatItems = [
	new ChatItem({
		user: "Андрей",
		message: "Изображение",
		notification: "2",
		dateTime: "10:49",
		your: false,
	}),
	new ChatItem({
		user: "Киноклуб",
		message: "Изображение",
		notification: null,
		dateTime: "10:49",
		your: true,
	}),
	new ChatItem({
		user: "Андрей",
		message:
			"Друзья, у меня для вас особенный выпуск новостей! Сегодня будет круто!",
		notification: "4",
		dateTime: "15:12",
		your: false,
	}),
	new ChatItem({
		user: "Вадим",
		message: "Круто!",
		notification: null,
		dateTime: "Пт",
		your: true,
	}),
	new ChatItem({
		user: "Андрей",
		message:
			"Друзья, у меня для вас особенный выпуск новостей! Сегодня будет круто!",
		notification: "4",
		dateTime: "15:12",
		your: true,
	}),
	new ChatItem({
		user: "тет-а-теты",
		message:
			"И Human Interface Guidelines и Material Design рекомендуют почаще заниматься спортом",
		notification: null,
		dateTime: "Ср",
		your: true,
	}),
	new ChatItem({
		user: "Design Destroyer",
		message: "В 2008 году художник Jon Rafman  начал собирать свой батискаф",
		notification: null,
		dateTime: "Пн",
		your: false,
	}),
	new ChatItem({
		user: "Day.",
		message:
			"Так увлёкся работой по курсу, что совсем забыл его анонсировал турнир по теннису",
		notification: null,
		dateTime: "1 Мая 2020",
		your: false,
	}),
	new ChatItem({
		user: "Стас Рогозин",
		message: "Можно или сегодня или завтра вечером.",
		notification: null,
		dateTime: "12 Апр 2020",
		your: false,
	}),
	new ChatItem({
		user: "Вадим",
		message: "Круто!",
		notification: null,
		dateTime: "Пт",
		your: true,
	}),
	new ChatItem({
		user: "Вадим",
		message: "Круто!",
		notification: null,
		dateTime: "Пт",
		your: true,
	}),
	new ChatItem({
		user: "Вадим",
		message: "Круто!",
		notification: null,
		dateTime: "Пт",
		your: true,
	}),
	new ChatItem({
		user: "Вадим",
		message: "Круто!",
		notification: null,
		dateTime: "Пт",
		your: true,
	}),
	new ChatItem({
		user: "Вадим",
		message: "Круто!",
		notification: null,
		dateTime: "Пт",
		your: true,
	}),
];

const aside = new Aside({
	arrowImg: toProfileArrow,
	items: chatItems,
	searchSvg,
});

const content = new EmptyTalk({
	text: "Выберите чат чтобы отправить сообщение",
});

export default new ChatTemplate({
	aside,
	content,
	img: cactusImg,
});
