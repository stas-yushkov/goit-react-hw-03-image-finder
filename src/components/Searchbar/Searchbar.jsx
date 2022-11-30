import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import {
  SearchbarWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './StyledComponents';

export const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const search = e => {
    e.preventDefault();
    if (query?.trim().length === 0) {
      toast.warn('There is no name');
      return;
    }
    onSearch(query.toLowerCase().trim());
    setQuery('');
  };

  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={search}>
        {/* <SearchFormButtonLabel></SearchFormButtonLabel> */}
        <SearchFormButton
          type="submit"
          // disabled={query?.trim().length === 0}
        >
          <FaSearch />
        </SearchFormButton>
        <SearchFormInput
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarWrapper>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
