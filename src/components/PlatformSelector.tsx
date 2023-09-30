import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../Hooks/usePlatforms'
import { Platform } from '../Hooks/usePlatforms';

interface PlatformSelectorProps {
	onSelectPlatform:(platform:Platform|null)=>void;
	selectedPlatformId?:number;
};



const PlatformSelector = ({onSelectPlatform, selectedPlatformId}:PlatformSelectorProps) => {
	const {data, error, isLoading} = usePlatforms();
	if(error)
		return null;

	if(isLoading)
		return <Spinner/>;
	
	const selectedPlatform = data?.results.find((platform)=>platform.id === selectedPlatformId);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
			<MenuList>
				{selectedPlatformId && <MenuItem key={'all-platform'} onClick={()=>onSelectPlatform(null)} >Reset</MenuItem>}
				{data?.results.map((platform) => {
					return <MenuItem key={platform.id} onClick={()=>onSelectPlatform(platform)} >{platform.name}</MenuItem>
				})}
			</MenuList>
		</Menu>
	)
}

export default PlatformSelector