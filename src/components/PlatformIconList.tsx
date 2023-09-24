import { Platform } from '../Hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import {
	FaWindows,
	FaXbox,
	FaApple,
	FaPlaystation,
	FaLinux,
	FaAndroid
} from 'react-icons/fa';

import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import {BsGlobe} from 'react-icons/bs';
import { IconType } from 'react-icons';

interface PlatformIconListProps {
	platforms: Platform[],
};



const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
	const iconMap:{[key:string]:IconType} = {
		pc: FaWindows,
		xbox: FaXbox,
		mac: FaApple ,
		playstation: FaPlaystation ,
		linux: FaLinux ,
		android: FaAndroid ,
		nintendo: SiNintendo ,
		ios: MdPhoneIphone ,
		web: BsGlobe
	}

	return (
		<HStack marginY={1} paddingX={1} justifyContent='flex-start'>
			{platforms.map((platform) => (
				<Icon as={iconMap[platform.slug]} key={platform.slug} color='blue.500'/>
			))}
		</HStack>
	)
}

export default PlatformIconList