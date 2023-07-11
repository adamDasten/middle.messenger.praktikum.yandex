import ChatTemplate from '../../templates/ChatTemplate';
import Talking from '../../organisms/Talking';

const content = Talking();

export default () => ChatTemplate({ content });
