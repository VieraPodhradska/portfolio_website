//  icons
import {
  FiMail,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi';

import { HiOutlineTrendingUp } from "react-icons/hi";

import { BsHouses } from "react-icons/bs";

import { IoNewspaperOutline } from "react-icons/io5";

import { GrMoney } from "react-icons/gr";

// companies icons
import WuestenrotBrandIcon from './assets/img/brands/wuestenrot_main_logo.png';

// certs
import Cert1 from './assets/img/certificates/cert1.jpg';
import Cert2 from './assets/img/certificates/cert2.jpg';
import Cert3 from './assets/img/certificates/cert3.jpg';

// navigation
export const navigation = [
  {
    name: 'Domov',
    href: 'home',
  },
  {
    name: 'O mne',
    href: 'about',
  },
  {
    name: 'Služby',
    href: 'services',
  },
  {
    name: 'Ocenenia',
    href: 'certificates',
  },
  {
    name: 'Kontakt',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiMail />,
    href: 'mailto:viera.podhradska@wuestenrot.sk',
  },
  {
    icon: <FiPhone />,
    href: 'tel:+421905368496',
  },
];

// companies
export const brands = [
  {
    img: WuestenrotBrandIcon,
    href: '',
  },
];

// certs
export const certs = [
  {
    img: Cert1,
    name: 'TOP Wüstenrot InHouse Obchodník KAPITÁLOVÝ TRH',
    description: 'Získanie 2. Miesta v ocenení TOP Wüstenrot InHouse Obchodník v roku 2023.',
  },
  {
    img: Cert2,
    name: 'ELITA 2022 Certifikát',
    description: 'Členstvo v skupine ELITA v roku 2022.',
  },
  {
    img: Cert3,
    name: 'ELITA 2023 Certifikát',
    description: 'Členstvo v skupine ELITA v roku 2023.',
  }
]

// services
export const services = [
  {
    icon: <IoNewspaperOutline />,
    name: 'Poistenie',
    description:
      'Cestovné poistenie, poistenie majetku, životné poistenie, poistenie motorových vozidiel, poistenie osôb, poistenie podnikateľov...',
  },
  {
    icon: <BsHouses />,
    name: 'Úvery ',
    description:
      'Krátkodobý spotrebný úver, kontokorentný úver, spotrebný úver, hypotekárny úver...',
  },
  {
    icon: <HiOutlineTrendingUp />,
    name: 'Investovanie',
    description:
      'Akciové fondy, dlhopisové fondy, fondy peňažného trhu, investovanie do zlata...',
  },
  {
    icon: <GrMoney />,
    name: 'Vklady a sporenie',
    description:
      'Termínovaný vklad, starobné dôchodkové sporenie, sporiaci účet...',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Emailová adresa:',
    subtitle: '',
    description: 'viera.podhradska@wuestenrot.sk',
  },
  {
    icon: <FiPhone />,
    title: 'Telefónne číslo:',
    subtitle: '',
    description: '+421 905 368 496',
  },
  {
    icon: <FiMapPin />,
    title: 'Adresa:',
    subtitle: 'Nové Mesto nad Váhom, Slovensko',
    description: '',
  },
];
