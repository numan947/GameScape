import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface NavBarProps {
	onSearch: (searchText: string) => void;
};


const NavBar = ({onSearch}:NavBarProps) => {
  return (
	<HStack padding='10px'>
		<Image src={logo} boxSize={10}/>
		<SearchInput onSearch={onSearch}/>
		<ColorModeSwitch></ColorModeSwitch>
	</HStack>
  )
}

export default NavBar;