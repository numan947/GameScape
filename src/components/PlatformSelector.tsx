import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../Hooks/usePlatforms'
import { Platform } from '../Hooks/useGames';

interface PlatformSelectorProps {
	onSelectPlatform:(platform:Platform|null)=>void;
	selectedPlatform:Platform|null;
};



const PlatformSelector = ({onSelectPlatform, selectedPlatform}:PlatformSelectorProps) => {
	const {data, error, isLoading} = usePlatforms();
	if(error)
		return null;

	if(isLoading)
		return <Spinner/>;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
			<MenuList>
				{selectedPlatform && <MenuItem key={'all-platform'} onClick={()=>onSelectPlatform(null)} >Reset</MenuItem>}
				{data?.map((platform) => {
					return <MenuItem key={platform.id} onClick={()=>onSelectPlatform(platform)} >{platform.name}</MenuItem>
				})}
			</MenuList>
		</Menu>
	)
}

export default PlatformSelector