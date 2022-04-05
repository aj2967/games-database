import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterPanel = ({filterName, options, selectedOption }) => {

    return (
        <div>
            <div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth >
                        <InputLabel id="simple-select-label">{filterName}</InputLabel>
                        <Select
                            labelId="simple-select-label"
                            id="simple-select"
                            label={`${filterName}.`}
                            onChange={e => selectedOption(e.target.value)}
                        >
                            <MenuItem value=''>Please Select</MenuItem>
                            {options.map(option => (
                                <MenuItem 
                                    key={option.value} 
                                    value={option.value}
                                    option={option.value}
                                >{option.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
    )
}

export default FilterPanel