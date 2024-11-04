import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Pagination,
  TextField,
  Typography,
} from '@mui/material';
import React, {useState} from 'react';

const ChargerList = () => {
  // Expanded sample charger data
  const chargers = [
    {
      name: 'CHARGER A1',
      location: 'NPX Greater Noida',
      type: 'DC Fast',
      parts: 'Port 1',
      pricing: '20/kWh',
      usage: '50 kW/h',
      utilization: '30 kWh',
      review: 4,
      status: 'Available',
    },
    {
      name: 'CHARGER B2',
      location: 'NPX Gurgaon',
      type: 'AC Slow',
      parts: 'Port 2',
      pricing: '10/kWh',
      usage: '30 kW/h',
      utilization: '15 kWh',
      review: 5,
      status: 'Unavailable',
    },
    {
      name: 'CHARGER C3',
      location: 'NPX Noida',
      type: 'DC Fast',
      parts: 'Port 1',
      pricing: '25/kWh',
      usage: '60 kW/h',
      utilization: '40 kWh',
      review: 3,
      status: 'Available',
    },
    {
      name: 'CHARGER D4',
      location: 'NPX Mumbai',
      type: 'DC Ultra Fast',
      parts: 'Port 3',
      pricing: '30/kWh',
      usage: '100 kW/h',
      utilization: '60 kWh',
      review: 4,
      status: 'Available',
    },
    {
      name: 'CHARGER E5',
      location: 'NPX Bangalore',
      type: 'AC Slow',
      parts: 'Port 1',
      pricing: '15/kWh',
      usage: '20 kW/h',
      utilization: '10 kWh',
      review: 2,
      status: 'Unavailable',
    },
    {
      name: 'CHARGER F6',
      location: 'NPX Chennai',
      type: 'DC Fast',
      parts: 'Port 2',
      pricing: '22/kWh',
      usage: '55 kW/h',
      utilization: '35 kWh',
      review: 3,
      status: 'Available',
    },
    {
      name: 'CHARGER G7',
      location: 'NPX Kolkata',
      type: 'DC Fast',
      parts: 'Port 1',
      pricing: '20/kWh',
      usage: '50 kW/h',
      utilization: '28 kWh',
      review: 4,
      status: 'Available',
    },
    {
      name: 'CHARGER H8',
      location: 'NPX Hyderabad',
      type: 'AC Fast',
      parts: 'Port 3',
      pricing: '18/kWh',
      usage: '45 kW/h',
      utilization: '25 kWh',
      review: 5,
      status: 'Available',
    },
    {
      name: 'CHARGER I9',
      location: 'NPX Pune',
      type: 'DC Fast',
      parts: 'Port 1',
      pricing: '20/kWh',
      usage: '55 kW/h',
      utilization: '30 kWh',
      review: 3,
      status: 'Unavailable',
    },
    {
      name: 'CHARGER J10',
      location: 'NPX Delhi',
      type: 'DC Ultra Fast',
      parts: 'Port 2',
      pricing: '25/kWh',
      usage: '80 kW/h',
      utilization: '45 kWh',
      review: 4,
      status: 'Available',
    },
    {
      name: 'CHARGER K11',
      location: 'NPX Jaipur',
      type: 'AC Slow',
      parts: 'Port 1',
      pricing: '12/kWh',
      usage: '20 kW/h',
      utilization: '12 kWh',
      review: 2,
      status: 'Available',
    },
    {
      name: 'CHARGER L12',
      location: 'NPX Chandigarh',
      type: 'DC Fast',
      parts: 'Port 2',
      pricing: '22/kWh',
      usage: '50 kW/h',
      utilization: '27 kWh',
      review: 5,
      status: 'Available',
    },
    {
      name: 'CHARGER M13',
      location: 'NPX Lucknow',
      type: 'AC Slow',
      parts: 'Port 1',
      pricing: '14/kWh',
      usage: '30 kW/h',
      utilization: '20 kWh',
      review: 3,
      status: 'Unavailable',
    },
    {
      name: 'CHARGER N14',
      location: 'NPX Ahmedabad',
      type: 'DC Fast',
      parts: 'Port 2',
      pricing: '23/kWh',
      usage: '55 kW/h',
      utilization: '32 kWh',
      review: 4,
      status: 'Available',
    },
    {
      name: 'CHARGER O15',
      location: 'NPX Surat',
      type: 'DC Ultra Fast',
      parts: 'Port 3',
      pricing: '28/kWh',
      usage: '90 kW/h',
      utilization: '58 kWh',
      review: 5,
      status: 'Available',
    },
    {
      name: 'CHARGER P16',
      location: 'NPX Bhopal',
      type: 'AC Fast',
      parts: 'Port 1',
      pricing: '16/kWh',
      usage: '40 kW/h',
      utilization: '25 kWh',
      review: 3,
      status: 'Unavailable',
    },
    {
      name: 'CHARGER Q17',
      location: 'NPX Indore',
      type: 'DC Fast',
      parts: 'Port 2',
      pricing: '21/kWh',
      usage: '50 kW/h',
      utilization: '33 kWh',
      review: 4,
      status: 'Available',
    },
    {
      name: 'CHARGER R18',
      location: 'NPX Patna',
      type: 'DC Ultra Fast',
      parts: 'Port 1',
      pricing: '26/kWh',
      usage: '75 kW/h',
      utilization: '42 kWh',
      review: 5,
      status: 'Available',
    },
    {
      name: 'CHARGER S19',
      location: 'NPX Ranchi',
      type: 'AC Slow',
      parts: 'Port 1',
      pricing: '10/kWh',
      usage: '15 kW/h',
      utilization: '8 kWh',
      review: 2,
      status: 'Unavailable',
    },
    {
      name: 'CHARGER T20',
      location: 'NPX Dehradun',
      type: 'DC Fast',
      parts: 'Port 3',
      pricing: '24/kWh',
      usage: '60 kW/h',
      utilization: '37 kWh',
      review: 4,
      status: 'Available',
    },
  ];

  // State for search, pagination, and filtered data
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Handle search input change
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  // Filter chargers based on the search term
  const filteredChargers = chargers.filter(charger =>
    charger.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Pagination calculation based on filtered data
  const totalPages = Math.ceil(filteredChargers.length / itemsPerPage);
  const currentItems = filteredChargers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{width: '100%', maxWidth: 360, mx: 'auto', p: 2}}>
      {/* Search Box */}
      <TextField
        variant="outlined"
        placeholder="Search"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{mb: 2}}
      />
      <Typography variant="h6">Charger List</Typography>
      <List>
        {currentItems.map((charger, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{flexDirection: 'row-reverse'}}>
              <Box sx={{display: 'flex', alignItems: 'center', width: '100%'}}>
                <Typography sx={{flexGrow: 1}}>{charger.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {charger.location}
                </Typography>
                <CheckCircleIcon color="success" />
                <Typography variant="body2" color="textSecondary" sx={{ml: 1}}>
                  {charger.status}
                </Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              {/* <Typography variant="body2" color="textSecondary">
                {charger.location}
              </Typography> */}
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Charger Type"
                    secondary={charger.type}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Parts" secondary={charger.parts} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Pricing" secondary={charger.pricing} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary="Usage" secondary={charger.usage} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText
                    primary="Utilization"
                    secondary={charger.utilization}
                  />
                </ListItem>
              </List>

              {/* Review */}
              <Box sx={{display: 'flex', alignItems: 'center', mt: 1}}>
                <Typography>Review:</Typography>
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < charger.review ? 'primary' : 'disabled'}
                  />
                ))}
              </Box>

              {/* Action Icons */}
              <Box sx={{mt: 2, display: 'flex', gap: 1}}>
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton color="primary">
                  <ShareIcon />
                </IconButton>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </List>
      {/* Pagination */}
      {filteredChargers.length > itemsPerPage && (
        <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default ChargerList;
