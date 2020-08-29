import Home from './pages/Home';
import Stats from './pages/Stats';
import FeaturesAndTraits from './pages/FeaturesAndTraits';
import CoinsOrBonding from './pages/CoinsOrBonding';
import Bag from './pages/Bag';
import Weapons from './pages/Weapons';
import BondingLibrary from './pages/BondingLibrary';
import Armor from './pages/Armor';
import Spells from './pages/Spells';
import SpellLibrary from './pages/SpellLibrary';
import MonsterEncounters from './pages/MonsterEncounters';
import Notes from './pages/Notes';
import Libraries from './pages/Libraries';
import AlchemyLibrary from './pages/AlchemyLibrary';
import BlacksmithingLibrary from './pages/BlacksmithingLibrary';
import EnchantingLibrary from './pages/EnchantingLibrary';
import LockpickingLibrary from './pages/LockpickingLibrary';
import PickpocketingLibrary from './pages/PickpocketingLibrary';
import VampiricLibrary from './pages/VampiricLibrary';
import WerecreatureLibrary from './pages/WerecreatureLibrary';
import CharacterSettings from './pages/CharacterSettings';
import NotFoundPage from './pages/not-found.vue';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/stats/',
    component: Stats
  },
  {
    path: '/featuresAndTraits/',
    component: FeaturesAndTraits
  },
  {
    path: '/coinsOrBonding/',
    component: CoinsOrBonding
  },
  {
    path: '/bondingLibrary/',
    component: BondingLibrary
  },
  {
    path: '/bag/',
    component: Bag
  },
  {
    path: '/weapons/',
    component: Weapons
  },
  {
    path: '/armor/',
    component: Armor
  },
  {
    path: '/spells/',
    component: Spells,
  },
  {
    path: '/spellLibrary/',
    component: SpellLibrary
  },
  {
    path: '/monsterEncounters/',
    component: MonsterEncounters
  },
  {
    path: '/notes/',
    component: Notes
  },
  {
    path: '/libraries/',
    component: Libraries
  },
  {
    path: '/alchemyLibrary/',
    component: AlchemyLibrary
  },
  {
    path: '/blacksmithingLibrary/',
    component: BlacksmithingLibrary
  },
  {
    path: '/enchantingLibrary/',
    component: EnchantingLibrary
  },
  {
    path: '/lockpickingLibrary/',
    component: LockpickingLibrary
  },
  {
    path: '/pickpocketingLibrary/',
    component: PickpocketingLibrary
  },
  {
    path: '/vampiricLibrary/',
    component: VampiricLibrary
  },
  {
    path: '/werecreatureLibrary/',
    component: WerecreatureLibrary
  },
  {
    path: '/characterSettings/',
    component: CharacterSettings
  },
  {
    path: '(.*)',
    component: NotFoundPage
  }
];
