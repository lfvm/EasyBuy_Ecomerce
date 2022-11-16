import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface PageLayoutInterface {
  setFilter: Function;
  filter: string;
}

function FilterBar(props: PageLayoutInterface) {
  const { setFilter, filter } = props;

  return (
    <div className="filter-bar w-full ml-auto mr-auto border bg-white rounded-lg mb-4 flex items-center justify-between p-4">
      <h2>Filter price: </h2>
      <FormControl>
        <RadioGroup
          row
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <FormControlLabel value="asc" control={<Radio />} label="ascending" />
          <FormControlLabel
            value="desc"
            control={<Radio />}
            label="descending"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default FilterBar;
