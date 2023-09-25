import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface SortSelectorProps {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string | null;
};



const SortSelector = ({onSelectSortOrder, sortOrder}:SortSelectorProps) => {
	const sortOrders = [
		{ label: 'Relevance', value: '' },
		{ label: 'Date added', value: '-added' },
		{ label: 'Name', value: 'name' },
		{ label: 'Release date', value: '-released' },
		{ label: 'Popularity', value: '-metacritic' },
		{ label: 'Average rating', value: '-rating' }
	];

	const renderOrder = sortOrders.find((s)=>s.value === sortOrder)?.label??'Relevance';

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: {renderOrder}
			</MenuButton>
			<MenuList>
				{sortOrders.map((sortOrder) => {
					return <MenuItem onClick={()=>onSelectSortOrder(sortOrder.value)} key={sortOrder.value} value={sortOrder.value}>{sortOrder.label}</MenuItem>
				})}
			</MenuList>
		</Menu>
	)
}

export default SortSelector