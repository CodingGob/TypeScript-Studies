import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home'
import { About } from './pages/about'
import { Products } from './pages/products'
import { NotFound } from './pages/notFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/products/:id', // The name after the ":" is what defines the name of the variable for useParams
    element: <Products />
  },
  { // Has to be the last aways
    path: '*',
    element: <NotFound />
  }
])

export { router }