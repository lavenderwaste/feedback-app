import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import AboutIcon from './components/AboutIcon';
import Card from './components/shared/Card';
import BlogPost from './components/BlogPost';

function App() {
    return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
            <Routes>
                <Route exact path='/' element={
                    <>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                        <AboutIcon />
                    </>
                }>
                </Route>
                <Route path='/about' element={<About />} />
                <Route path='/post/*' element={<BlogPost />} />
            </Routes>

            <Card>
                <div className='nav-links'>
                <NavLink to='/' activeClassName='active'>
                    Home
                </NavLink>
                <NavLink to='/about' activeClassName='active'>
                    About
                </NavLink>
                </div>
            </Card>
            
            </div> 
        </Router>
        </FeedbackProvider>   
    )
}

export default App;