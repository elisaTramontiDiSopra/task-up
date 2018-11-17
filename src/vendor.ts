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
  faArrowRight as fasArrowRight,
  faChevronLeft as fasChevronLeft,
  faTimes as fasTimes,
  faCheck as fasCheck,
  faEye as fasEye,
  faUserCog as fasUserCog,
} from '@fortawesome/free-solid-svg-icons';
library.add(fasArrowDown, fasArrowRight, fasChevronLeft, fasTimes, fasCheck, fasEye, fasUserCog);
import {
  faGoogle as fabGoogle
} from '@fortawesome/free-brands-svg-icons';
library.add(fabGoogle);
