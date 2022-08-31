import { Box, Grid, Tab, Tabs, useTheme } from '@mui/material';
import * as React from 'react';
import Card from '../../components/Card/Card';
import TabPanel from '../TabPanel/TabPanel';
import "./Home.css"

interface IProps {
  name?: string;
}

const Home: React.FC<IProps> = (props: IProps) => {
    
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [searchValue, setsearchValue] = React.useState('')
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  


    const data = [{name: "Card1"},{name: "Card2"},{name: "Card3"},{name: "Card4"},{name: "Card5"}, ]

    const listItems = data.filter(card =>{
        if(searchValue === '')
            return card
        else if(card.name.toLowerCase().includes(searchValue.toLowerCase())){
            return card
        }
    }).map((d,index) => {
        return (
        <Grid item xs={3}>
            <Card name={d.name} />
        </Grid>
        )  
    });

    return (
    <div>
    <form>
    <input type="search" placeholder="Search..." onChange={event => setsearchValue(event.target.value)}/>
    </form>
            <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="All"  />
          <Tab label="Bag" />
        </Tabs>
      </Box>

                  <TabPanel value={value} index={0}>
                  <div className='scroll'>
            
                    
            <Grid container rowSpacing={1} spacing={0}>
                {listItems?.length ? listItems : `No Cards to show`}
            </Grid>
            </div>

                 </TabPanel>
            <TabPanel value={value} index={1}>
            Item Two
            </TabPanel>
            </Box>    
    </div>
)};

Home.defaultProps = {
  name: 'world',
};

export default Home;