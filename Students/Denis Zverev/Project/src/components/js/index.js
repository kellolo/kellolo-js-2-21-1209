import { basket} from './basket';
import { basket2} from './basket2';
import { catatalog } from './product';

export default () => {
    basket._init();
    basket2._init();
    catatalog._init();

    basket.hello();
    basket2.hello();
    catatalog.hello();
}