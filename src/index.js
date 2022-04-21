import React, { Suspense, useState } from 'react';
import './index.css';
import { render } from '@testing-library/react';


const Sorprise = React.lazy(() => import('./components/Sorprise'))
const App = () => {
    const [showSorprise, setShowSorprise] = useState(false)
    return <div>
         <Suspense fallback={<p>Cargando...</p>}>
        <button onClick={() => setShowSorprise(showSorprise == false)}>Show sorprise</button>
        {showSorprise &&
           <Sorprise></Sorprise>
        }
        </Suspense>
    </div>

}

render(<App></App>, document.getElementById("root"))
