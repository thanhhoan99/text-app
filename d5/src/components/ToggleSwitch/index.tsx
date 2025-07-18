import React from 'react'

const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"]

const SearchFilterList = () => {
  const [search, setSearch] = React.useState('')

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => <li key={item}>{item}</li>)
        ) : (
          <li>No results found.</li>
        )}
      </ul>
    </div>
  )
}
export default SearchFilterList