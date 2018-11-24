// import 'jquery';
import * as WebFont from 'webfontloader';
// import 'bootstrap/js/dist/collapse';
WebFont.load({
  google: {
    families: [
      'Source Sans Pro:300,400,600,700'
    ]
  }
});

//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowDown as fasArrowDown,
  faArrowUp as fasArrowUp,
  faArrowRight as fasArrowRight,
  faChevronUp as fasChevronUp,
  faChevronDown as fasChevronDown,
  faChevronLeft as fasChevronLeft,
  faChevronRight as fasChevronRight,
  faTimes as fasTimes,
  faCheck as fasCheck,
  faEye as fasEye,
  faUserCog as fasUserCog,
  faPlus as fasPlus,
  faMinus as fasMinus,
  faTrash as fasTrash,
  faSignOutAlt as fasSignOutAlt,
  faListUl as fasListUl,
} from '@fortawesome/free-solid-svg-icons';
library.add(fasArrowDown, fasArrowUp, fasArrowRight, fasChevronUp, fasChevronDown, fasChevronLeft, fasChevronRight, fasTimes, fasCheck, fasEye, fasUserCog, fasPlus, fasMinus, fasTrash, fasSignOutAlt, fasListUl);
import {
  faGoogle as fabGoogle
} from '@fortawesome/free-brands-svg-icons';
library.add(fabGoogle);
