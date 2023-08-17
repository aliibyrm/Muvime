import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LegacyFooter from '../components/LegacyFooter';
import SearchMovie from '../components/SearchMovie';
import Search from '../components/Search';
const SearchResults = () => {
  return (
    <>
      <Navbar />
      <Search/> 
       <SearchMovie/>     
      <Footer />
      <LegacyFooter />
    </>
  ) 
}
  
export default SearchResults

