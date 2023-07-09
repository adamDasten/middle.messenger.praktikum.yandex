import LinkRegistryTemplate from './LinkRegisry.hbs';
import './LinkRegistry.scss';

export default ({ linkName, pathTo }) =>
  LinkRegistryTemplate({ linkName, pathTo });
