import { useDictionary } from '~hooks';
import Error from './error';

export const NotFound = () => {
  const {
    ERROR: { NOT_FOUNT_MESSAGE, NOT_FOUNT_TITLE, BACK_HOME },
  } = useDictionary();

  const notFoundMessage = { title: NOT_FOUNT_TITLE, message: NOT_FOUNT_MESSAGE, button: BACK_HOME };

  return <Error error={notFoundMessage} />;
};

export default NotFound;
