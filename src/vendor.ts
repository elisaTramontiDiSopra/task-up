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
  faChevronLeft as fasChevronLeft,
  faTimes as fasTimes,
  faCheck as fasCheck
} from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle as fabGoogle
} from '@fortawesome/free-brands-svg-icons';
library.add(fabGoogle);
