import Talking from "../../../../components/Talking";
import Message from "../../../../components/Message";
import read from "#/static/read.svg";
import optionsSvg from "#/static/options.svg";
import FormDialog from "../../../../components/FormDialog";
import addFile from "#/static/add_svg.svg";
import arrowGo from "#/static/arrow_next.svg";
import DialogInput from "../../../../components/DialogInput";
import EmptyTalk from "../../../../components/EmptyTalk";
import { usersList } from "../../../../services/userConnectInfo";

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

export const ContentMessage = new Talking({
	messages,
	optionsSvg,
	username: "Вадим",
	form,
	users: usersList,
});

export const ContentEmpty = new EmptyTalk({
	text: "Выберите чат чтобы отправить сообщение",
});
