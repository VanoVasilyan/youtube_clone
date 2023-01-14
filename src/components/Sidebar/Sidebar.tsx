import { Stack } from '@mui/system';
import { ICategory } from '../../utils/type';
import { categories } from '../../utils/constants';

const selectedCategory = 'New';

const Sidebar = () => (
    <Stack
        direction='row'
        sx={{
            overflow: 'auto',
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column' }
        }}
    >
        {categories.map(({ name, icon }: ICategory) => {
            return <button
                key={name}
                className='category-btn'
                style={{
                    background: name === selectedCategory ? '#FC1503' : '',
                    color: 'white'
                }}
            >
                <span style={{ color: name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{icon}</span>
                <span style={{ opacity: name === selectedCategory ? '1' : '0.8' }}>{name}</span>
            </button>
        })}
    </Stack >
)

export default Sidebar