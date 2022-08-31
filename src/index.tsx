
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/cell-list';
import ReactDOM from 'react-dom';


const App = () => {

    return (
        <Provider store={store}>
            <div>
                <CellList />
            </div>
        </Provider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
