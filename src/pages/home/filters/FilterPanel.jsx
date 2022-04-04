import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterPanel = ({filterName, options, selectedOption }) => {

    // const [selected, setSelected] = useState()

    // const handleResetSelect = () => {

    // }
    // useEffect(() => {
    //     handleResetSelect();
    // }, [selectedOption])
    
    // const handleSelectReset = (e) => {
    //     setSelected(null)
        
    // }

    return (
        <div>
            {/* <div className='input-group'>
                <label htmlFor="select-filter"><p>{filterName}</p></label>
                <select 
                    id="select-filter"
                    // value={selected} 
                    onChange={e => selectedOption(e.currentTarget.value)}
                >
                    <option value=''>Please Select</option>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.name}</option>
                    ))}
                </select>
            </div> */}

            <div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth variant='filled'>
                        <InputLabel id="simple-select-label">{filterName}</InputLabel>
                        <Select
                            labelId="simple-select-label"
                            id="simple-select"
                            label={filterName}
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