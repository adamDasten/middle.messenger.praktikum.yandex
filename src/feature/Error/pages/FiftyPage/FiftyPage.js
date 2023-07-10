import Fifty from '../../organisms/Fifty';
import ErrorTemplate from '../../templates/ErrorTemplate';
import cactusImg from '#/static/sun_kaktus.svg';

export default () => ErrorTemplate({ content: Fifty(), cactusImg });
