import { React, useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import "./SearchBar.scss"


function SearchBar({ active, setActive, setFiltered, data, setSearchTerm }) {

  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");


  const handleSearch = () => {
    const newData = data
      // .filter((x) => x.title === (title === "" ? x.title : title))
      .filter((y) => y.location === (location === "" ? y.location : location))
      .filter((z) => z.price === (price === "" ? z.price : price));

    setFiltered(newData);
  };



  return (
    <>
      <div className="search-box">

        <div className="bar">

          <AiOutlineSearch className="icon " onClick={() => handleSearch()} />
          <input
            type="text"
            placeholder="Hillcrest villa"
            onChange={(e) => setSearchTerm(e.target.value)}

          />
        </div>
        <div className="input-wrapper">

          <div className="city-input ">

            <FormControl variant="standard"  >

              <InputLabel id="demo-simple-select-label">  City </InputLabel>
              <Select id="city" onChange={(e) => setLocation(e.target.value)}>


                <MenuItem value="">none</MenuItem>
                <MenuItem value="hyderabad">hyderabad</MenuItem>
                <MenuItem value="mumbai">mumbai</MenuItem>
                <MenuItem value="banglore">banglore</MenuItem>
                <MenuItem value="delhi">delhi</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="price-input">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }} size="large">
              <InputLabel id="demo-simple-select-label">Price</InputLabel>
              <Select name="" id="range" onChange={(e) => setPrice(e.target.value)}>

                <MenuItem value="">none</MenuItem>
                <MenuItem value="under20k">10k to20k</MenuItem>
                <MenuItem value="under30k">20k t0 30pk</MenuItem>
                <MenuItem value="under40k">30k to 40k</MenuItem>
                <MenuItem value="under50k">40k to 50k</MenuItem>
              </Select>
            </FormControl>
          </div>


        </div>
      </div>
    </>
  )
}

export default SearchBar
