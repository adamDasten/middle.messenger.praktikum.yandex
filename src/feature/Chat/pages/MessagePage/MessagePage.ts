import Aside from "../../../../components/Aside";
import toProfileArrow from "#/static/to-profile.svg";
import ChatItem from "../../../../components/ChatItem";
import searchSvg from "#/static/searchSvg.svg";
import ChatTemplate from "../../templates/ChatTemplate";
import Talking from "../../../../components/Talking";
import Message from "../../../../components/Message";
import read from "#/static/read.svg";
import optionsSvg from "#/static/options.svg";
import FormDialog from "../../../../components/FormDialog";
import addFile from "#/static/add_svg.svg";
import arrowGo from "#/static/arrow_next.svg";
import DialogInput from "../../../../components/DialogInput";

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

const messages = [
	new Message({
		your: false,
		message: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА 
    в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. 
    Сейчас мы все знаем 
    что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер
    все еще находятся на поверхности Луны, так как астронавты с собой забрали 
    только кассеты с пленкой.
    Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так 
    никогда и не попали. 
    Всего их было произведено 
    25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
		time: "11:50",
	}),
	new Message({
		your: "message--your",
		read,
		message: "Очень круто выглядит!",
		time: "15:48",
	}),
];

const form = new FormDialog({
	addFile,
	arrowGo,
	input: new DialogInput({
		attr: {
			type: "text",
			name: "message",
			placeholder: "Сообщение",
		},
	}),
});

const content = new Talking({
	messages,
	optionsSvg,
	username: "Вадим",
	form,
});

export default new ChatTemplate({
	aside,
	content,
});
