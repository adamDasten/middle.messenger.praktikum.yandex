import TalkingTemplate from './Talking.hbs';
import DialogChat from '../../molecules/DialogChat';
import TopDialog from '../../molecules/TopDialog';
import BottomDialog from '../../molecules/BottomDialog';
import './Talking.scss';

export default () =>
  TalkingTemplate({
    dialogTop: TopDialog(),
    dialogBottom: BottomDialog(),
    dialogChat: DialogChat(),
  });
