import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs';
import { IoMdCloseCircleOutline } from 'react-icons/io';

interface SearchInputProps {
	onSearch: (searchText: string) => void;
};


const SearchInput = ({ onSearch }: SearchInputProps) => {
	const ref = useRef<HTMLInputElement>(null);
	return (
		<>

			<form style={{ width: '100%' }} onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) {
					onSearch(ref.current.value);
				}
			}}>
				<InputGroup>
					<InputLeftElement children={<BsSearch />} />
					<Input ref={ref} borderRadius={20} placeholder='Search Games...' variant='filled'></Input>
				</InputGroup>
			</form>
			{ref.current?.value && <Button variant='outline' onClick={() => {
				if (ref.current)
					ref.current.value = '';
				onSearch('');
			}}>Clear</Button>}
		</>
	)
}

export default SearchInput